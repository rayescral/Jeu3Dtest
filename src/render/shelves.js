// Étagères de la boutique : structure, étiquettes de prix, articles rangés, volumes de visée par niveau.
import * as THREE from 'three';
import { SHELF_SLOTS } from '../game/layout.js';
import { PRODUCTS } from '../game/data.js';
import { productMesh } from './products.js';
import { fmtMoney } from '../core/util.js';
import { canvasTexture } from './textures.js';
import { ZONE_LABEL } from '../game/data.js';

export const LEVEL_Y = [0.16, 0.72, 1.28];     // hauteur du dessus de chaque tablette
const W = 2.1, D = 0.6;

// Disposition des articles sur une tablette : colonnes x rangées, espacements.
const LAYOUT = {
  balls: [5, 2, 0.15, 0.2], padelballs: [5, 2, 0.15, 0.2], water: [6, 2, 0.13, 0.2], iso: [6, 2, 0.13, 0.2],
  grip: [6, 2, 0.14, 0.2], cap: [4, 2, 0.32, 0.24], energy: [6, 2, 0.15, 0.2], wristband: [6, 2, 0.15, 0.2],
  strings: [5, 2, 0.16, 0.2], towel: [4, 2, 0.26, 0.24], tshirt: [4, 2, 0.26, 0.24], shoes: [2, 2, 0.6, 0.24], bag: [2, 2, 0.95, 0.26],
  beer: [6, 2, 0.13, 0.2], soda: [6, 2, 0.13, 0.2], coffee: [6, 2, 0.13, 0.2], juice: [6, 2, 0.13, 0.2],
  sandwich: [4, 2, 0.22, 0.2], panini: [4, 2, 0.22, 0.2], pizza: [4, 2, 0.22, 0.24], cookie: [6, 2, 0.13, 0.2],
};
const RACKET_LAYOUT = [2, 2, 0.8, 0.25];

// Gondole de magasin : acier laqué gris clair, fond perforé, plinthe, porte-étiquettes, fronton.
const metal = new THREE.MeshStandardMaterial({ color: 0xc9ccd0, metalness: 0.55, roughness: 0.38 });
const darkMetal = new THREE.MeshStandardMaterial({ color: 0x2c3136, metalness: 0.6, roughness: 0.4 });
const boardMat = new THREE.MeshStandardMaterial({ color: 0xe9ebed, metalness: 0.45, roughness: 0.35 });
const pegboard = () => {
  const t = canvasTexture(256, 256, (g, w, h) => {
    g.fillStyle = '#d8dbde'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#7c8186';
    for (let y = 8; y < h; y += 16) for (let x = 8; x < w; x += 16) { g.beginPath(); g.arc(x, y, 2.6, 0, Math.PI * 2); g.fill(); }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(8, 7);
  return t;
};
const pegMat = new THREE.MeshStandardMaterial({ map: pegboard(), metalness: 0.4, roughness: 0.45 });
// Fronton coloré par zone, avec le nom du rayon.
const headerMats = {};
function headerMat(zone, label) {
  const key = zone + label;
  return headerMats[key] ??= new THREE.MeshStandardMaterial({ map: canvasTexture(512, 64, (g, w, h) => {
    g.fillStyle = zone === 'bar' ? '#1b4f86' : zone === 'snack' ? '#b5651d' : '#1f6b4a'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#e4f05a'; g.fillRect(0, h - 6, w, 6);
    g.fillStyle = '#ffffff'; g.font = '800 34px Outfit, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(label, w / 2, h / 2 - 2);
  }), roughness: 0.5 });
}
function category(id) {
  const P = PRODUCTS[id];
  if (P.racket === 'padel' || id === 'padelballs') return 'PADEL';
  if (P.racket) return 'RAQUETTES';
  if (['balls', 'grip', 'strings', 'wristband'].includes(id)) return 'BALLES & ACCESSOIRES';
  if (['water', 'iso', 'energy'].includes(id)) return 'BOISSONS & ÉNERGIE';
  if (['cap', 'towel', 'tshirt'].includes(id)) return 'TEXTILE DU CLUB';
  return 'ÉQUIPEMENT';
}
const backMats = {
  shop: new THREE.MeshStandardMaterial({ color: 0x1f6b4a, roughness: 0.7 }),
  // Frigo de la buvette (fond blanc éclairé) et vitrine du snack (bois clair).
  bar: new THREE.MeshStandardMaterial({ color: 0xf4f7f8, roughness: 0.3, emissive: 0xdff4ff, emissiveIntensity: 0.25 }),
  snack: new THREE.MeshStandardMaterial({ color: 0xc89a62, roughness: 0.6 }),
};

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
    mark.visible = slot.zone === 'shop';
    g.add(mark);
    return { slot, g, mark, built: null, levels: [] };
  });

  function buildUnit(u, i) {
    const s = new THREE.Group();
    u.g.add(s);
    const add = (geo, m, x, y, z) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; s.add(o); return o; };
    const zone = u.slot.zone;
    if (zone === 'bar') {
      // Vitrine réfrigérée : caisson blanc, intérieur éclairé, portes vitrées, bandeau lumineux.
      const body = new THREE.MeshStandardMaterial({ color: 0xf2f4f5, metalness: 0.2, roughness: 0.35 });
      add(new THREE.BoxGeometry(W + 0.08, 2.05, 0.06), body, 0, 1.025, -D / 2 + 0.03);
      for (const x of [-W / 2 - 0.02, W / 2 + 0.02]) add(new THREE.BoxGeometry(0.06, 2.05, D + 0.04), body, x, 1.025, 0);
      add(new THREE.BoxGeometry(W + 0.1, 0.12, D + 0.06), body, 0, 0.06, 0);
      add(new THREE.BoxGeometry(W + 0.1, 0.22, D + 0.06), headerMat('bar', 'BOISSONS FRAÎCHES'), 0, 2.1, 0);
      const inner = new THREE.MeshStandardMaterial({ color: 0xe8f4ff, emissive: 0xcfe8ff, emissiveIntensity: 0.6, roughness: 0.4 });
      add(new THREE.PlaneGeometry(W, 1.85), inner, 0, 1.05, -D / 2 + 0.065);
      const glass = new THREE.MeshStandardMaterial({ color: 0xdff1f7, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.16, depthWrite: false });
      for (const x of [-W / 4, W / 4]) {
        const door = new THREE.Mesh(new THREE.PlaneGeometry(W / 2 - 0.04, 1.86), glass);
        door.position.set(x, 1.04, D / 2 + 0.02);
        s.add(door);
        add(new THREE.BoxGeometry(0.03, 1.4, 0.03), darkMetal, x + (x < 0 ? W / 4 - 0.1 : -W / 4 + 0.1), 1.05, D / 2 + 0.05);
        for (const y of [0.12, 1.98]) add(new THREE.BoxGeometry(W / 2 - 0.02, 0.04, 0.04), body, x, y, D / 2 + 0.02);
      }
    } else {
      // Gondole : plinthe, montants, fond perforé, tablettes, fronton.
      add(new THREE.BoxGeometry(W, 0.1, D - 0.02), darkMetal, 0, 0.05, 0.0);
      for (const x of [-W / 2 + 0.025, W / 2 - 0.025]) add(new THREE.BoxGeometry(0.05, 2.0, 0.05), metal, x, 1.0, -D / 2 + 0.05);
      for (const x of [-W / 2 + 0.025, W / 2 - 0.025]) add(new THREE.BoxGeometry(0.04, 0.08, D), metal, x, 0.06, 0);
      add(new THREE.BoxGeometry(W - 0.06, 1.85, 0.02), zone === 'snack' ? (backMats.snack) : pegMat, 0, 1.02, -D / 2 + 0.04);
      const label = zone === 'snack' ? 'SNACK' : 'BOUTIQUE DU CLUB';
      const header = add(new THREE.BoxGeometry(W, 0.26, 0.04), [metal, metal, metal, metal, headerMat(zone, label), metal], 0, 2.12, -D / 2 + 0.06);
      header.castShadow = false;
      u.header = header; u.headerLabel = label;
    }
    u.levels = LEVEL_Y.map((y, li) => {
      add(new THREE.BoxGeometry(W - 0.06, 0.025, D - 0.06), u.slot.zone === 'bar' ? new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.55, roughness: 0.1 }) : boardMat, 0, y - 0.013, 0.0);
      const tag = tagTexture();
      const tagMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.094), new THREE.MeshStandardMaterial({ map: tag.t, roughness: 0.5 }));
      tagMesh.position.set(0, y - 0.05, D / 2 - 0.005);
      s.add(tagMesh);
      const strip = new THREE.Mesh(new THREE.BoxGeometry(W - 0.06, 0.05, 0.012), new THREE.MeshStandardMaterial({ color: 0xf6f6f2, roughness: 0.3 }));
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
    // Le fronton annonce le rayon selon ce qui y est rangé.
    if (u.header) {
      const counts = {};
      for (const l of st.levels) if (l.product) { const c = category(l.product); counts[c] = (counts[c] || 0) + 1; }
      const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
      const label = best ? best[0] : 'BOUTIQUE DU CLUB';
      if (label !== u.headerLabel) { u.headerLabel = label; u.header.material[4] = headerMat(u.slot.zone, label); }
    }
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
      const isRacket = !!PRODUCTS[lvl.product].racket;
      const [cols, rows, sx, sz] = isRacket ? RACKET_LAYOUT : LAYOUT[lvl.product] ?? [5, 2, 0.16, 0.2];
      for (let k = 0; k < lvl.qty; k++) {
        const r = Math.floor(k / cols), c = k % cols;
        const m = productMesh(lvl.product);
        const x = (c - (cols - 1) / 2) * sx, z = 0.12 - r * sz;
        if (isRacket) {
          // Raquettes accrochées au fond perforé, en quinconce, comme dans un magasin de sport.
          const xs = [-0.72, -0.24, 0.24, 0.72];
          m.rotation.set(0, 0, -Math.PI / 2);
          m.position.set(xs[k % 4] - 0.34, 0.16 + (k % 2) * 0.09, -D / 2 + 0.1 + (k % 2) * 0.05);
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
