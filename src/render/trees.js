// Platanes et haies : troncs et branches avec une écorce photographiée, feuillage en « rameaux » (cartes
// transparentes tirées de vraies feuilles), léger balancement au vent. Chaque modèle d'arbre est dessiné
// en une seule fois pour tous les arbres identiques (instanciation), ce qui reste très léger.
import * as THREE from 'three';
import { mergeGeometries } from './geometry.js';
import { pbr, images } from './assets.js';

const wind = { value: 0 };
export const updateWind = t => { wind.value = t; };

function rng(seed) {
  return () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
}

// Branche : cylindre effilé de a vers b.
function limb(a, b, r0, r1, sides = 7) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const g = new THREE.CylinderGeometry(r1, r0, len, sides, 1, true);
  g.translate(0, len / 2, 0);
  // Écorce : la texture fait le tour du tronc et se répète tous les 1,5 m.
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * Math.max(1, Math.round(r0 * 6)), uv.getY(i) * len / 1.5);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  g.applyMatrix4(new THREE.Matrix4().compose(a, q, new THREE.Vector3(1, 1, 1)));
  return g;
}

// Un arbre : tronc, charpentières, rameaux ; renvoie les géométries du bois et du feuillage.
function growTree(seed, { height = 11, crown = 4.2 } = {}) {
  const rnd = rng(seed);
  const wood = [], tips = [];
  const trunkTop = new THREE.Vector3((rnd() - 0.5) * 0.4, height * 0.38, (rnd() - 0.5) * 0.4);
  wood.push(limb(new THREE.Vector3(0, -0.2, 0), trunkTop, 0.34, 0.26, 10));
  const grow = (from, dir, len, r, depth) => {
    const to = from.clone().addScaledVector(dir, len);
    wood.push(limb(from, to, r, r * 0.68, depth > 1 ? 7 : 5));
    if (depth === 0) { tips.push(to); return; }
    const n = depth > 1 ? 3 : 2 + Math.floor(rnd() * 2);
    for (let i = 0; i < n; i++) {
      const d = dir.clone().add(new THREE.Vector3((rnd() - 0.5) * 1.3, rnd() * 0.5 + 0.1, (rnd() - 0.5) * 1.3)).normalize();
      grow(to, d, len * (0.62 + rnd() * 0.15), r * 0.62, depth - 1);
    }
    tips.push(to);
  };
  const arms = 3 + Math.floor(rnd() * 2);
  for (let i = 0; i < arms; i++) {
    const a = (i / arms) * Math.PI * 2 + rnd() * 0.6;
    const d = new THREE.Vector3(Math.cos(a) * 0.65, 0.85, Math.sin(a) * 0.65).normalize();
    grow(trunkTop, d, height * 0.24, 0.2, 3);
  }
  // Feuillage : rameaux répartis dans une couronne ovoïde, plus denses autour des extrémités des branches.
  const center = new THREE.Vector3(0, height * 0.68, 0);
  const cards = [];
  const addCard = (p, size) => {
    const g = new THREE.PlaneGeometry(size, size);
    const cell = Math.floor(rnd() * 4), cu = (cell % 2) * 0.5, cv = Math.floor(cell / 2) * 0.5;
    const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, cu + uv.getX(i) * 0.5, cv + uv.getY(i) * 0.5);
    const out = p.clone().sub(center).normalize();
    // Carte orientée vers l'extérieur de la couronne, avec un angle aléatoire.
    const look = new THREE.Matrix4().lookAt(new THREE.Vector3(), out.clone().add(new THREE.Vector3((rnd() - 0.5) * 1.6, rnd() * 0.8, (rnd() - 0.5) * 1.6)), new THREE.Vector3(0, 1, 0));
    const q = new THREE.Quaternion().setFromRotationMatrix(look).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), rnd() * Math.PI * 2));
    g.applyMatrix4(new THREE.Matrix4().compose(p, q, new THREE.Vector3(1, 1, 1)));
    // Normales « en dôme » : la lumière glisse sur la couronne comme sur un volume.
    const n = g.attributes.normal;
    const soft = out.clone().multiplyScalar(0.85).add(new THREE.Vector3(0, 0.35, 0)).normalize();
    for (let i = 0; i < n.count; i++) n.setXYZ(i, soft.x, soft.y, soft.z);
    cards.push(g);
  };
  for (const t of tips) for (let k = 0; k < 3; k++) addCard(t.clone().add(new THREE.Vector3((rnd() - 0.5) * 1.6, (rnd() - 0.3) * 1.2, (rnd() - 0.5) * 1.6)), 1.5 + rnd() * 0.9);
  for (let k = 0; k < 140; k++) {
    const u = rnd() * Math.PI * 2, v = Math.acos(rnd() * 1.6 - 0.6), r = 0.75 + rnd() * 0.3;
    const p = new THREE.Vector3(Math.sin(v) * Math.cos(u) * crown * r, Math.cos(v) * crown * 0.72 * r, Math.sin(v) * Math.sin(u) * crown * r).add(center);
    addCard(p, 1.6 + rnd() * 1.0);
  }
  return { wood: mergeGeometries(wood), leaves: mergeGeometries(cards) };
}

function leafMaterial(tint) {
  const img = images.leafcluster;
  const map = new THREE.Texture(img);
  map.flipY = false; map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 4; map.needsUpdate = true;
  const m = new THREE.MeshStandardMaterial({ map, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.8, metalness: 0, color: tint });
  // Balancement au vent (plus fort en haut de l'arbre), calculé sur la carte graphique.
  m.onBeforeCompile = sh => {
    sh.uniforms.uWind = wind;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uWind;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        float sway = max(position.y - 3.0, 0.0) * 0.012;
        transformed.x += sin(uWind * 1.3 + position.y * 0.7 + position.z * 0.4) * sway;
        transformed.z += cos(uWind * 1.1 + position.x * 0.6) * sway * 0.8;`);
  };
  m.customProgramCacheKey = () => 'leaves-wind';
  return m;
}

// Crée les arbres aux positions données : [x, z, échelle, rotation].
export function createTrees(scene, spots) {
  if (!images.leafcluster) return null;
  const bark = pbr('Bark001', { repeat: [1, 1], tint: 0xc9c2b0 });
  const variants = [growTree(11, { height: 11, crown: 4.4 }), growTree(23, { height: 12.5, crown: 4.8 }), growTree(37, { height: 9.5, crown: 3.9 })];
  const leaves = leafMaterial(0xc8d6a8);
  const leaves2 = leafMaterial(0xa9c08a);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const groups = variants.map(() => []);
  spots.forEach((sp, i) => groups[i % variants.length].push(sp));
  variants.forEach((v, k) => {
    const list = groups[k];
    if (!list.length) return;
    const wood = new THREE.InstancedMesh(v.wood, bark, list.length);
    const leaf = new THREE.InstancedMesh(v.leaves, k === 1 ? leaves2 : leaves, list.length);
    list.forEach(([x, z, sc, rot], i) => {
      m4.compose(p.set(x, 0, z), q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rot), s.setScalar(sc));
      wood.setMatrixAt(i, m4); leaf.setMatrixAt(i, m4);
    });
    wood.castShadow = leaf.castShadow = true;
    wood.receiveShadow = leaf.receiveShadow = true;
    scene.add(wood, leaf);
  });
  return true;
}

// Haie taillée : volume vert foncé recouvert de rameaux.
export function hedgeMesh(len, h, d, seed = 1) {
  if (!images.leafcluster) return null;
  const rnd = rng(seed);
  const g = new THREE.Group();
  const core = new THREE.Mesh(new THREE.BoxGeometry(len - 0.15, h - 0.12, d - 0.15), new THREE.MeshStandardMaterial({ color: 0x23361c, roughness: 1 }));
  core.position.y = (h - 0.12) / 2;
  core.castShadow = core.receiveShadow = true;
  g.add(core);
  const cards = [];
  const n = Math.round(len * (h + d) * 9);
  for (let i = 0; i < n; i++) {
    // Point sur la surface (dessus ou côtés).
    const face = rnd();
    let p, out;
    if (face < 0.3) { p = new THREE.Vector3((rnd() - 0.5) * len, h - 0.05, (rnd() - 0.5) * d); out = new THREE.Vector3(0, 1, 0); }
    else { const sd = face < 0.65 ? 1 : -1; p = new THREE.Vector3((rnd() - 0.5) * len, rnd() * h, sd * d / 2); out = new THREE.Vector3(0, 0.3, sd).normalize(); }
    const size = 0.45 + rnd() * 0.3;
    const pg = new THREE.PlaneGeometry(size, size);
    const cell = Math.floor(rnd() * 4), cu = (cell % 2) * 0.5, cv = Math.floor(cell / 2) * 0.5;
    const uv = pg.attributes.uv;
    for (let k = 0; k < uv.count; k++) uv.setXY(k, cu + uv.getX(k) * 0.5, cv + uv.getY(k) * 0.5);
    const look = new THREE.Matrix4().lookAt(new THREE.Vector3(), out.clone().add(new THREE.Vector3((rnd() - 0.5), (rnd() - 0.5), (rnd() - 0.5))), new THREE.Vector3(0, 1, 0));
    const q = new THREE.Quaternion().setFromRotationMatrix(look).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), rnd() * 6.28));
    pg.applyMatrix4(new THREE.Matrix4().compose(p, q, new THREE.Vector3(1, 1, 1)));
    const nn = pg.attributes.normal;
    for (let k = 0; k < nn.count; k++) nn.setXYZ(k, out.x, out.y, out.z);
    cards.push(pg);
  }
  const leaves = new THREE.Mesh(mergeGeometries(cards), hedgeMat ??= leafMaterialStatic(0x7f9a5a));
  leaves.castShadow = true; leaves.receiveShadow = true;
  g.add(leaves);
  return g;
}
let hedgeMat = null;
function leafMaterialStatic(tint) {
  const map = new THREE.Texture(images.leafcluster);
  map.flipY = false; map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 4; map.needsUpdate = true;
  return new THREE.MeshStandardMaterial({ map, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.85, color: tint });
}
