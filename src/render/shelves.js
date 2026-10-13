// Étagères de la boutique : structure, étiquettes de prix, articles rangés, volumes de visée par niveau.
import * as THREE from 'three';
import { SHELF_SLOTS } from '../game/layout.js';
import { PRODUCTS } from '../game/data.js';
import { productMesh } from './products.js';
import { fmtMoney } from '../core/util.js';

export const LEVEL_Y = [0.16, 0.72, 1.28];     // hauteur du dessus de chaque tablette
const W = 2.1, D = 0.6;

// Disposition des articles sur une tablette : colonnes x rangées, espacements.
const LAYOUT = {
  balls: [5, 2, 0.15, 0.2], padelballs: [5, 2, 0.15, 0.2], water: [6, 2, 0.13, 0.2], iso: [6, 2, 0.13, 0.2],
  grip: [6, 2, 0.14, 0.2], racket: [2, 2, 0.8, 0.24], padelracket: [2, 2, 0.8, 0.26], cap: [4, 2, 0.32, 0.24],
};

const metal = new THREE.MeshStandardMaterial({ color: 0x2c3136, metalness: 0.7, roughness: 0.35 });
const boardMat = new THREE.MeshStandardMaterial({ color: 0xf2efe9, roughness: 0.5 });
const backMat = new THREE.MeshStandardMaterial({ color: 0x1f6b4a, roughness: 0.7 });

function tagTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 96;
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return { c, t };
}
function drawTag(tag, product, price, qty) {
  const g = tag.c.getContext('2d'), w = tag.c.width, h = tag.c.height;
  g.fillStyle = product ? '#fbfaf6' : '#e9e6df'; g.fillRect(0, 0, w, h);
  if (product) {
    g.fillStyle = PRODUCTS[product].color; g.fillRect(0, 0, 14, h);
    g.fillStyle = '#1b2420'; g.font = '600 34px Outfit, Arial'; g.textAlign = 'left'; g.textBaseline = 'middle';
    g.fillText(PRODUCTS[product].short, 30, h / 2);
    g.textAlign = 'right'; g.font = '800 44px Outfit, Arial'; g.fillStyle = '#c0392b';
    g.fillText(fmtMoney(price), w - 18, h / 2 + 2);
    if (qty === 0) { g.fillStyle = 'rgba(192,57,43,0.12)'; g.fillRect(0, 0, w, h); }
  } else {
    g.fillStyle = '#8a918d'; g.font = '500 30px Outfit, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('Emplacement libre', w / 2, h / 2);
  }
  tag.t.needsUpdate = true;
}

export function createShelves(scene, interactables, state) {
  const units = SHELF_SLOTS.map((slot, i) => {
    const g = new THREE.Group();
    g.position.set(slot.x, 0, slot.z);
    g.rotation.y = slot.facing;
    scene.add(g);
    // Marquage au sol tant que l'étagère n'est pas achetée.
    const mark = new THREE.Mesh(new THREE.PlaneGeometry(W, D), new THREE.MeshBasicMaterial({ color: 0x1f6b4a, transparent: true, opacity: 0.18 }));
    mark.rotation.x = -Math.PI / 2; mark.position.y = 0.03;
    g.add(mark);
    return { slot, g, mark, built: null, levels: [] };
  });

  function buildUnit(u, i) {
    const s = new THREE.Group();
    u.g.add(s);
    const add = (geo, m, x, y, z) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; s.add(o); return o; };
    for (const x of [-W / 2 + 0.03, W / 2 - 0.03]) for (const z of [-D / 2 + 0.03, D / 2 - 0.03]) add(new THREE.BoxGeometry(0.04, 1.9, 0.04), metal, x, 0.95, z);
    add(new THREE.BoxGeometry(W, 1.75, 0.02), backMat, 0, 0.98, -D / 2 + 0.01);
    add(new THREE.BoxGeometry(W, 0.06, D), metal, 0, 1.9, 0);
    u.levels = LEVEL_Y.map((y, li) => {
      add(new THREE.BoxGeometry(W - 0.02, 0.03, D - 0.04), boardMat, 0, y - 0.015, 0.01);
      const tag = tagTexture();
      const tagMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.094), new THREE.MeshStandardMaterial({ map: tag.t, roughness: 0.5 }));
      tagMesh.position.set(0, y - 0.05, D / 2 - 0.005);
      s.add(tagMesh);
      const strip = new THREE.Mesh(new THREE.BoxGeometry(W - 0.02, 0.05, 0.01), metal);
      strip.position.set(0, y - 0.05, D / 2 - 0.02);
      s.add(strip);
      // Volume invisible pour viser le niveau.
      const hit = new THREE.Mesh(new THREE.BoxGeometry(W - 0.1, 0.5, D), new THREE.MeshBasicMaterial({ visible: false }));
      hit.position.set(0, y + 0.25, 0.02);
      hit.userData.interact = { kind: 'shelf', shelf: i, level: li };
      s.add(hit);
      interactables.push(hit);
      const items = new THREE.Group();
      items.position.set(0, y, 0);
      s.add(items);
      return { tag, items, y, key: '' };
    });
    u.built = s;
    u.mark.visible = false;
  }

  function refresh(i) {
    const u = units[i], st = state.shelves[i];
    if (st.built && !u.built) buildUnit(u, i);
    if (!st.built) return;
    st.levels.forEach((lvl, li) => {
      const L = u.levels[li];
      const price = lvl.product ? state.prices[lvl.product] : 0;
      const key = `${lvl.product}|${lvl.qty}|${price}`;
      if (key === L.key) return;
      L.key = key;
      drawTag(L.tag, lvl.product, price, lvl.qty);
      // Reconstruit les articles visibles.
      L.items.clear();
      if (!lvl.product) return;
      const [cols, rows, sx, sz] = LAYOUT[lvl.product];
      for (let k = 0; k < lvl.qty; k++) {
        const r = Math.floor(k / cols), c = k % cols;
        const m = productMesh(lvl.product);
        const x = (c - (cols - 1) / 2) * sx, z = 0.12 - r * sz;
        if (lvl.product === 'racket' || lvl.product === 'padelracket') {
          m.rotation.set(-Math.PI / 2, 0, Math.PI / 2);
          m.position.set(x + 0.3, 0.025, z - 0.02);
        } else m.position.set(x, 0, z);
        L.items.add(m);
      }
    });
  }

  units.forEach((_, i) => refresh(i));
  return {
    refresh,
    refreshAll: () => units.forEach((_, i) => refresh(i)),
    // Rendu plus fidèle quand on change un prix : on force le redessin des étiquettes.
    invalidate: () => { for (const u of units) for (const L of u.levels) L.key = ''; units.forEach((_, i) => refresh(i)); },
  };
}
