// Ressources graphiques (textures photographiques, ciels, modèles 3D) : chargées au démarrage depuis le
// dossier assets/ du jeu (copie locale) ou, à défaut, depuis GitHub. Sans réseau ni copie locale, le jeu
// garde ses textures dessinées (repli).
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

const REMOTE = 'https://raw.githubusercontent.com/rayescral/jeu3dtest/claude/gallant-pasteur-0xlwe2/';
// Où chercher le dossier assets/ : à côté de la page, un cran au-dessus (dossier web/ de développement),
// dans game/ (application et itch.io), puis sur GitHub.
const BASES = ['', '../', 'game/', REMOTE];

const TEXTURES = [
  'Grass001', 'PavingStones128', 'PavingStones136', 'Asphalt025C', 'Concrete034', 'WoodFloor051', 'PaintedPlaster017',
  'WoodSiding008', 'Bark001', 'LeafSet029', 'Fence003', 'Ground088', 'OfficeCeiling001', 'Tiles107', 'Fabric030',
  'Metal032', 'Cardboard002', 'Carpet014', 'Plaster001',
];
const ALPHA = new Set(['LeafSet029', 'Fence003']);
const MODELS = [
  'potted_plant_01', 'potted_plant_02', 'potted_plant_04', 'planter_box_01', 'wine_barrel_01', 'outdoor_table_chair_set_01',
  'street_lamp_01', 'modern_arm_chair_01', 'sofa_02', 'modern_coffee_table_01', 'WetFloorSign_01', 'industrial_wall_lamp',
  'modern_ceiling_lamp_01', 'steel_frame_shelves_03', 'plastic_monobloc_chair_01', 'security_camera_01',
  'exterior_aircon_unit', 'utility_box_01', 'cardboard_box_01', 'shrub_04',
];
const SKIES = ['day', 'sunset', 'night'];
// Personnages réalistes (MakeHuman, CC0) avec squelette : voir src/render/humans.js.
export const HUMANS = [
  'm_player_a', 'm_player_b', 'm_player_c', 'm_player_d', 'm_player_e', 'f_player_a', 'f_player_b', 'f_player_c', 'f_player_d',
  'f_player_e', 'm_casual_a', 'm_casual_b', 'm_suit', 'm_work', 'm_staff', 'f_casual_a', 'f_suit', 'f_staff',
];

let base = null;
export const images = {};      // nom → ImageBitmap / HTMLImageElement
const models = {};      // nom → gltf.scene
const humans = {};      // nom → gltf.scene (maillages avec squelette)
export const assets = { ready: false, sky: null, images, models, humans };

async function fetchFrom(b, path) {
  const r = await fetch(b + 'assets/' + path, { cache: b === REMOTE ? 'default' : 'no-cache' });
  if (!r.ok) throw new Error(path + ' ' + r.status);
  return r;
}
// Trouve la première source qui répond, puis s'y tient (en revenant sur GitHub si un fichier manque).
async function get(path) {
  if (base != null) {
    try { return await fetchFrom(base, path); } catch { if (base === REMOTE) throw new Error('introuvable : ' + path); }
    return fetchFrom(REMOTE, path);
  }
  for (const b of BASES) {
    try { const r = await fetchFrom(b, path); base = b; return r; } catch { /* source suivante */ }
  }
  throw new Error('ressources graphiques introuvables');
}
async function loadImage(path) {
  const blob = await (await get(path)).blob();
  if (self.createImageBitmap) return createImageBitmap(blob, { imageOrientation: 'flipY' });
  const img = new Image();
  img.src = URL.createObjectURL(blob);
  await img.decode();
  return img;
}

// Charge tout, en signalant la progression (0 → 1). Renvoie false si rien n'a pu être chargé.
export async function loadAssets(onProgress = () => {}) {
  const jobs = [];
  for (const t of TEXTURES) for (const k of ['c', 'n', 'orm']) jobs.push([`tex/${t}_${k}.webp`, async p => { images[`${t}_${k}`] = await loadImage(p); }]);
  jobs.push(['tex/leafcluster.webp', async p => { images.leafcluster = await loadImage(p); }]);
  for (const s of SKIES) jobs.push([`sky/${s}.webp`, async p => { images['sky_' + s] = await loadImage(p); }]);
  jobs.push(['sky/sky.json', async p => { assets.sky = await (await get(p)).json(); }]);
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  for (const m of MODELS) jobs.push([`models/${m}.glb`, async p => {
    const buf = await (await get(p)).arrayBuffer();
    const gltf = await loader.parseAsync(buf, '');
    gltf.scene.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    models[m] = gltf.scene;
  }]);
  for (const h of HUMANS) jobs.push([`humans/${h}.glb`, async p => {
    const buf = await (await get(p)).arrayBuffer();
    humans[h] = (await loader.parseAsync(buf, '')).scene;
  }]);
  // Premier fichier seul (choix de la source), puis le reste en parallèle par paquets.
  let done = 0;
  try { await jobs[0][1](jobs[0][0]); done++; } catch (e) { console.warn('Ressources graphiques indisponibles :', e.message); return false; }
  const queue = jobs.slice(1);
  const worker = async () => {
    while (queue.length) {
      const [p, fn] = queue.shift();
      try { await fn(p); } catch (e) { console.warn('Ressource manquante :', p, e.message); }
      done++;
      onProgress(done / jobs.length);
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  assets.ready = true;
  return true;
}

// --- Matériaux photographiques ------------------------------------------------------------------------------
const texCache = new Map();
function texture(key, { srgb = false, repeat = [1, 1], anisotropy = 8 } = {}) {
  const img = images[key];
  if (!img) return null;
  const ck = `${key}|${repeat}`;
  if (texCache.has(ck)) return texCache.get(ck);
  const t = new THREE.Texture(img);
  t.flipY = false;   // déjà retournée au décodage
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = anisotropy;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  texCache.set(ck, t);
  return t;
}
export const hasTexture = name => !!images[name + '_c'];

// Matériau PBR à partir d'une texture ambientCG : couleur, relief, occlusion / rugosité / métal.
// repeat : nombre de répétitions ; tint : teinte multipliée ; normalScale : force du relief.
export function pbr(name, { repeat = [1, 1], tint = null, normalScale = 1, roughness = 1, metalness = 1, envMapIntensity = 1, side, alphaTest, transparent, color } = {}) {
  if (!hasTexture(name)) return null;
  const orm = texture(name + '_orm', { repeat });
  const m = new THREE.MeshStandardMaterial({
    map: texture(name + '_c', { srgb: true, repeat }),
    normalMap: texture(name + '_n', { repeat }),
    roughnessMap: orm, metalnessMap: orm, aoMap: orm,
    roughness, metalness, envMapIntensity,
  });
  m.normalScale.set(normalScale, normalScale);
  if (tint != null) m.color.set(tint);
  if (color != null) m.color.set(color);
  if (side != null) m.side = side;
  if (alphaTest != null) m.alphaTest = alphaTest;
  if (transparent) m.transparent = true;
  if (ALPHA.has(name) && alphaTest == null) m.alphaTest = 0.5;
  return m;
}

// Copie d'un modèle 3D (géométries et matériaux partagés), à l'échelle souhaitée.
export function model(name, scale = 1) {
  const src = models[name];
  if (!src) return null;
  const m = src.clone(true);
  m.scale.multiplyScalar(scale);
  return m;
}
// Dimensions d'un modèle (pour l'ajuster à une taille voulue).
export function modelSize(name) {
  const src = models[name];
  if (!src) return null;
  return new THREE.Box3().setFromObject(src).getSize(new THREE.Vector3());
}
// Modèle mis à la hauteur voulue (en mètres), posé au sol.
export function modelAtHeight(name, height) {
  const size = modelSize(name);
  if (!size) return null;
  const m = model(name, height / size.y);
  const box = new THREE.Box3().setFromObject(m);
  const wrap = new THREE.Group();
  m.position.y -= box.min.y;
  m.position.x -= (box.min.x + box.max.x) / 2;
  m.position.z -= (box.min.z + box.max.z) / 2;
  wrap.add(m);
  return wrap;
}
export const skyImage = key => images['sky_' + key] ?? null;

// Casse la répétition visible d'une texture de sol sur de grandes surfaces : on mélange deux échelles de la
// même photo et on ajoute de lentes variations de teinte (zones plus claires / plus sèches).
export function breakTiling(mat, { scale = 0.37, variation = 0.18, warm = [1.08, 1.0, 0.82] } = {}) {
  if (!mat?.map) return mat;
  mat.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWorldXZ;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWorldXZ = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      varying vec3 vWorldXZ;
      float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash12(i), hash12(i + vec2(1, 0)), f.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), f.x), f.y); }`)
      .replace('#include <map_fragment>', `
        vec2 wp = vWorldXZ.xz;
        float n1 = vnoise(wp * 0.045), n2 = vnoise(wp * 0.21 + 7.0);
        vec4 tA = texture2D(map, vMapUv);
        vec4 tB = texture2D(map, vMapUv * ${scale.toFixed(3)} + vec2(0.37, 0.61));
        vec4 texelColor = mix(tA, tB, smoothstep(0.35, 0.65, n1));
        texelColor.rgb *= mix(vec3(1.0), vec3(${warm.map(v => v.toFixed(3)).join(',')}), smoothstep(0.55, 0.9, n2) * ${variation.toFixed(3)} * 4.0);
        texelColor.rgb *= 1.0 - (n1 - 0.5) * ${variation.toFixed(3)};
        diffuseColor *= texelColor;`);
  };
  mat.customProgramCacheKey = () => 'tiling-' + scale + variation;
  return mat;
}
