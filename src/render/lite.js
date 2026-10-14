// Mode économie : les matériaux réalistes (reflets du ciel, relief, rugosité) sont remplacés par des matériaux
// simples (éclairage diffus), bien plus légers pour les puces graphiques intégrées. Les couleurs et les textures
// restent les mêmes. Les objets créés en cours de partie sont convertis au passage suivant.
import * as THREE from 'three';

const lites = new Map();   // matériau d'origine → matériau simplifié

function snapshot(m) {
  return `${m.color?.getHex()}|${m.emissive?.getHex()}|${m.emissiveIntensity}|${m.opacity}|${m.map?.uuid}|${m.visible}`;
}

function lite(m) {
  if (!m || !m.isMeshStandardMaterial || m.userData.lite) return m;
  let l = lites.get(m);
  if (!l) {
    l = new THREE.MeshLambertMaterial({
      name: m.name, map: m.map, color: m.color.clone(), emissive: m.emissive.clone(), emissiveMap: m.emissiveMap,
      emissiveIntensity: m.emissiveIntensity, aoMap: m.aoMap, alphaMap: m.alphaMap, alphaTest: m.alphaTest,
      transparent: m.transparent, opacity: m.opacity, side: m.side, depthWrite: m.depthWrite, vertexColors: m.vertexColors,
    });
    l.userData.lite = true;
    l.userData.src = m;
    l.userData.snap = snapshot(m);
    lites.set(m, l);
  }
  return l;
}

// Convertit les objets de la scène (à appeler de temps en temps) et reporte sur les matériaux simplifiés
// les changements faits par le jeu sur les matériaux d'origine (éclairage de nuit, usure des terrains…).
export function liteScene(scene) {
  scene.traverse(o => {
    if (!o.isMesh || !o.material) return;
    if (Array.isArray(o.material)) { if (o.material.some(m => m?.isMeshStandardMaterial)) o.material = o.material.map(lite); }
    else if (o.material.isMeshStandardMaterial) o.material = lite(o.material);
  });
  for (const [src, l] of lites) {
    const snap = snapshot(src);
    if (snap === l.userData.snap) continue;
    l.userData.snap = snap;
    l.color.copy(src.color); l.emissive.copy(src.emissive); l.emissiveIntensity = src.emissiveIntensity;
    l.opacity = src.opacity; l.visible = src.visible;
    if (l.map !== src.map) { l.map = src.map; l.needsUpdate = true; }
  }
}
