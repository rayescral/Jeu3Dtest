// Prépare les ressources du jeu (assets-src/ → assets/) : textures compressées en WebP et réduites,
// cartes de rugosité / occlusion regroupées, ciels convertis, modèles 3D allégés et compressés (meshopt).
// Lancer : node tools/assets/build.mjs   (après python3 tools/assets/fetch.py)
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, weld, simplify, quantize, meshopt, textureCompress, flatten, join, resample } from '@gltf-transform/functions';
import { MeshoptSimplifier, MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
import sharp from 'sharp';
import { mkdirSync, existsSync, readdirSync, writeFileSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const SRC = 'assets-src', OUT = 'assets';
mkdirSync(`${OUT}/tex`, { recursive: true });
mkdirSync(`${OUT}/models`, { recursive: true });
mkdirSync(`${OUT}/sky`, { recursive: true });
const only = process.argv.slice(2);
const want = k => !only.length || only.includes(k);

// --- Textures ambientCG ------------------------------------------------------------------------------
// size : côté en pixels ; alpha : garder la transparence (feuilles, grillage).
const TEX = {
  Grass001: { size: 1024 }, PavingStones128: { size: 1024 }, PavingStones136: { size: 1024 }, Asphalt025C: { size: 1024 },
  Concrete034: { size: 512 }, WoodFloor051: { size: 1024 }, PaintedPlaster017: { size: 512 }, WoodSiding008: { size: 1024 },
  Bark001: { size: 512 }, LeafSet029: { size: 1024, alpha: true }, Fence003: { size: 512, alpha: true }, Ground088: { size: 1024 },
  OfficeCeiling001: { size: 512 }, Tiles107: { size: 512 }, Fabric030: { size: 512 }, Metal032: { size: 512 },
  Cardboard002: { size: 512 }, Carpet014: { size: 512 }, Plaster001: { size: 512 },
};
async function buildTexture(name, { size, alpha }) {
  const dir = `${SRC}/textures/${name}`;
  const file = suffix => { const f = readdirSync(dir).find(n => n.endsWith(`_${suffix}.jpg`)); return f ? `${dir}/${f}` : null; };
  const color = sharp(file('Color')).resize(size, size);
  if (alpha && file('Opacity')) {
    const a = await sharp(file('Opacity')).resize(size, size).greyscale().raw().toBuffer();
    await color.removeAlpha().joinChannel(a, { raw: { width: size, height: size, channels: 1 } }).webp({ quality: 88, alphaQuality: 90 }).toFile(`${OUT}/tex/${name}_c.webp`);
  } else await color.webp({ quality: 85 }).toFile(`${OUT}/tex/${name}_c.webp`);
  if (file('NormalGL')) await sharp(file('NormalGL')).resize(size, size).webp({ quality: 90 }).toFile(`${OUT}/tex/${name}_n.webp`);
  // ORM : R = occlusion, G = rugosité, B = métal (convention glTF / three.js).
  const ch = async (suffix, fill) => file(suffix) ? sharp(file(suffix)).resize(size, size).greyscale().raw().toBuffer() : Buffer.alloc(size * size, fill);
  const [ao, ro, me] = await Promise.all([ch('AmbientOcclusion', 255), ch('Roughness', 200), ch('Metalness', 0)]);
  const orm = Buffer.alloc(size * size * 3);
  for (let i = 0; i < size * size; i++) { orm[i * 3] = ao[i]; orm[i * 3 + 1] = ro[i]; orm[i * 3 + 2] = me[i]; }
  await sharp(orm, { raw: { width: size, height: size, channels: 3 } }).webp({ quality: 88 }).toFile(`${OUT}/tex/${name}_orm.webp`);
}
for (const [name, opt] of Object.entries(TEX)) if (want(name)) { await buildTexture(name, opt); console.log('texture', name); }

// --- Ciels : conversion HDR → image (python, voir sky.py) ---------------------------------------------------
if (want('sky')) execFileSync('python3', ['tools/assets/sky.py'], { stdio: 'inherit' });

// --- Modèles Poly Haven --------------------------------------------------------------------------------
// ratio : part des triangles conservée ; tex : taille max des textures.
const MODELS = {
  potted_plant_01: { ratio: 0.18, tex: 512 }, potted_plant_02: { ratio: 0.3, tex: 512 }, potted_plant_04: { ratio: 0.5, tex: 512 },
  planter_box_01: { ratio: 0.5, tex: 512 }, wine_barrel_01: { ratio: 0.4, tex: 512 }, outdoor_table_chair_set_01: { ratio: 0.6, tex: 512 },
  street_lamp_01: { ratio: 0.25, tex: 512 }, modern_arm_chair_01: { ratio: 0.6, tex: 512 }, sofa_02: { ratio: 1, tex: 512 },
  modern_coffee_table_01: { ratio: 0.8, tex: 512 }, WetFloorSign_01: { ratio: 1, tex: 512 }, industrial_wall_lamp: { ratio: 0.5, tex: 256 },
  modern_ceiling_lamp_01: { ratio: 0.5, tex: 256 }, steel_frame_shelves_03: { ratio: 0.6, tex: 512 }, plastic_monobloc_chair_01: { ratio: 0.7, tex: 512 },
  security_camera_01: { ratio: 0.3, tex: 256 }, exterior_aircon_unit: { ratio: 0.3, tex: 512 }, utility_box_01: { ratio: 0.7, tex: 512 },
  cardboard_box_01: { ratio: 0.08, tex: 1024 }, shrub_04: { ratio: 0.5, tex: 512 },
};
await MeshoptSimplifier.ready; await MeshoptEncoder.ready; await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder });
for (const [name, { ratio, tex }] of Object.entries(MODELS)) {
  if (!want(name)) continue;
  const doc = await io.read(`${SRC}/models/${name}/${name}.gltf`);
  await doc.transform(
    dedup(), flatten(), join(), weld({ tolerance: 0.0001 }),
    ...(ratio < 1 ? [simplify({ simplifier: MeshoptSimplifier, ratio, error: 0.004, lockBorder: false })] : []),
    resample(), prune(),
    textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [tex, tex], quality: 82 }),
    quantize(), meshopt({ encoder: MeshoptEncoder, level: 'medium' }),
  );
  const out = `${OUT}/models/${name}.glb`;
  await io.write(out, doc);
  console.log('modèle', name, Math.round(statSync(out).size / 1024), 'Ko');
}
