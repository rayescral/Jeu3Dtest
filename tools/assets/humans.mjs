// Allège les personnages générés par humans.py (assets-src/humans/*.glb) : textures WebP redimensionnées,
// géométrie quantifiée et compressée (meshopt). Résultat dans assets/humans/.
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, quantize, meshopt, textureCompress, weld } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
import sharp from 'sharp';
import { mkdirSync, readdirSync, statSync } from 'node:fs';

const SRC = process.argv[2] || 'assets-src/humans', OUT = 'assets/humans';
mkdirSync(OUT, { recursive: true });
await MeshoptEncoder.ready; await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder });
for (const f of readdirSync(SRC).filter(f => f.endsWith('.glb'))) {
  const doc = await io.read(`${SRC}/${f}`);
  await doc.transform(
    dedup(), weld({ tolerance: 0.00001 }), prune(),
    // Peau et vêtements en 1024, petits éléments (yeux, sourcils, cils) en 256.
    textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [1024, 1024], quality: 80, pattern: /^(?!.*(eye|lash|brow)).*$/i }),
    textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [256, 256], quality: 85 }),
    quantize(), meshopt({ encoder: MeshoptEncoder, level: 'medium' }),
  );
  await io.write(`${OUT}/${f}`, doc);
  console.log('personnage', f, Math.round(statSync(`${OUT}/${f}`).size / 1024), 'Ko');
}
