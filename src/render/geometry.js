// Fusion de géométries (équivalent minimal de BufferGeometryUtils.mergeGeometries, pour éviter
// de charger les modules complémentaires de Three.js). Les géométries doivent avoir les mêmes attributs.
import * as THREE from 'three';

export function mergeGeometries(list) {
  const geos = list.map(g => (g.index ? g.toNonIndexed() : g));
  const names = Object.keys(geos[0].attributes);
  const out = new THREE.BufferGeometry();
  for (const name of names) {
    const itemSize = geos[0].attributes[name].itemSize;
    const total = geos.reduce((a, g) => a + g.attributes[name].array.length, 0);
    const arr = new Float32Array(total);
    let o = 0;
    for (const g of geos) { arr.set(g.attributes[name].array, o); o += g.attributes[name].array.length; }
    out.setAttribute(name, new THREE.BufferAttribute(arr, itemSize));
  }
  return out;
}
