// Fusion des pièces fixes d'un objet : toutes les petites pièces qui partagent un matériau deviennent un seul
// maillage. Le rendu est identique, mais la carte graphique reçoit beaucoup moins d'ordres de dessin
// (c'est ce qui limite le plus la fluidité). À n'utiliser que sur des pièces qui ne bougent plus ensuite.
import * as THREE from 'three';

// keep(o) : vrai pour un objet à laisser tel quel (et tout ce qu'il contient) : pièces animées, cliquables…
export function mergeStatic(root, keep = () => false) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map();
  const remove = [];
  const kept = o => {
    for (let x = o; x && x !== root; x = x.parent) if (!x.visible || x.userData.interact || x.userData.noMerge || keep(x)) return true;
    return false;
  };
  root.traverse(o => {
    if (!o.isMesh || o.isSkinnedMesh || o.isInstancedMesh || o.morphTargetInfluences || kept(o)) return;
    const geo = o.geometry;
    if (!geo.attributes.position || geo.attributes.position.itemSize !== 3) return;
    const m = new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld);
    const flip = m.determinant() < 0;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    // Objets transparents (triés à part par la carte graphique) : laissés tels quels.
    if (mats.some(mt => mt && mt.transparent && !mt.alphaTest)) return;
    const groups = Array.isArray(o.material) && geo.groups.length ? geo.groups : [{ start: 0, count: Infinity, materialIndex: 0 }];
    for (const gr of groups) {
      const mat = mats[gr.materialIndex];
      if (!mat) continue;
      const part = slice(geo, gr.start, gr.count);
      part.applyMatrix4(m);
      if (flip) reverseWinding(part);
      const key = `${mat.uuid}|${o.castShadow}|${o.receiveShadow}`;
      if (!buckets.has(key)) buckets.set(key, { mat, cast: o.castShadow, receive: o.receiveShadow, parts: [] });
      buckets.get(key).parts.push(part);
    }
    remove.push(o);
  });
  if (remove.length < 2) return 0;
  for (const o of remove) o.parent.remove(o);
  for (const { mat, cast, receive, parts } of buckets.values()) {
    const mesh = new THREE.Mesh(concat(parts), mat);
    mesh.castShadow = cast; mesh.receiveShadow = receive;
    mesh.matrixAutoUpdate = false;
    root.add(mesh);
  }
  return remove.length;
}

// Triangles [start, start + count) d'une géométrie, sans index, avec position / normale / uv.
const flat = new WeakMap();
function slice(geo, start, count) {
  let src = geo;
  if (geo.index) { if (!flat.has(geo)) flat.set(geo, geo.toNonIndexed()); src = flat.get(geo); }
  const n = src.attributes.position.count;
  const a = Math.max(0, start), b = Math.min(n, start + count);
  const out = new THREE.BufferGeometry();
  const take = (name, size, fill) => {
    const attr = src.attributes[name];
    const arr = new Float32Array((b - a) * size);
    if (attr) for (let i = a; i < b; i++) for (let k = 0; k < size; k++) arr[(i - a) * size + k] = attr.getComponent(i, k);
    else if (fill) arr.fill(fill);
    out.setAttribute(name, new THREE.BufferAttribute(arr, size));
  };
  take('position', 3); take('uv', 2);
  if (src.attributes.normal) take('normal', 3); else { out.computeVertexNormals(); }
  return out;
}

function reverseWinding(g) {
  for (const attr of Object.values(g.attributes)) {
    const s = attr.itemSize, arr = attr.array;
    for (let i = 0; i < attr.count; i += 3) for (let k = 0; k < s; k++) {
      const t = arr[(i + 1) * s + k]; arr[(i + 1) * s + k] = arr[(i + 2) * s + k]; arr[(i + 2) * s + k] = t;
    }
  }
}

function concat(parts) {
  const out = new THREE.BufferGeometry();
  for (const [name, size] of [['position', 3], ['normal', 3], ['uv', 2]]) {
    const total = parts.reduce((t, p) => t + p.attributes[name].array.length, 0);
    const arr = new Float32Array(total);
    let o = 0;
    for (const p of parts) { arr.set(p.attributes[name].array, o); o += p.attributes[name].array.length; }
    out.setAttribute(name, new THREE.BufferAttribute(arr, size));
  }
  out.computeBoundingSphere();
  return out;
}
