// Prépare les modèles 3D du jeu (assets/src → assets/) : ne garde que les animations utiles,
// simplifie les maillages et les compresse (meshopt). Lancer : npm run assets
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune, dedup, weld, simplify, quantize, meshopt, resample } from '@gltf-transform/functions';
import { MeshoptSimplifier, MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
import { copyFileSync, statSync } from 'node:fs';

await MeshoptSimplifier.ready; await MeshoptEncoder.ready; await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({
  'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder,
});

async function optimize(src, out, { keepAnims = [], ratio = 0.5 }) {
  const doc = await io.read(src);
  for (const a of doc.getRoot().listAnimations()) if (!keepAnims.includes(a.getName())) a.dispose();
  await doc.transform(
    dedup(), weld(),
    simplify({ simplifier: MeshoptSimplifier, ratio, error: 0.0008, lockBorder: true }),
    resample(), prune(), quantize(),
    meshopt({ encoder: MeshoptEncoder, level: 'medium' }),
  );
  await io.write(out, doc);
  console.log(`${out} : ${(statSync(out).size / 1024).toFixed(0)} Ko`);
}

await optimize('assets/src/Xbot.glb', 'assets/xbot.glb', { keepAnims: ['idle', 'walk', 'run'], ratio: 0.45 });
for (const f of ['hardwood2_diffuse.jpg', 'hardwood2_bump.jpg', 'hardwood2_roughness.jpg']) copyFileSync(`assets/src/${f}`, `assets/${f}`);
