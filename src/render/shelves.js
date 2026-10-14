// Étagères de la boutique : structure, étiquettes de prix, articles rangés, volumes de visée par niveau.
import * as THREE from 'three';
import { SHELF_SLOTS } from '../game/layout.js';
import { PRODUCTS } from '../game/data.js';
import { productMesh } from './products.js';
import { fmtMoney } from '../core/util.js';
import { canvasTexture } from './textures.js';
import { ZONE_LABEL } from '../game/data.js';
import { L } from '../core/i18n.js';
import { mergeStatic } from './batch.js';

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
  if (P.racket) return L('RAQUETTES', 'RACKETS');
  if (['balls', 'grip', 'strings', 'wristband'].includes(id)) return L('BALLES & ACCESSOIRES', 'BALLS & ACCESSORIES');
  if (['water', 'iso', 'energy'].includes(id)) return L('BOISSONS & ÉNERGIE', 'DRINKS & ENERGY');
  if (['cap', 'towel', 'tshirt'].includes(id)) return L('TEXTILE DU CLUB', 'CLUB APPAREL');
  return L('ÉQUIPEMENT', 'EQUIPMENT');
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
    g.fillText(L('Emplacement libre', 'Empty slot'), w / 2, h / 2);
  }
  tag.t.needsUpdate = true;
}

// Grillage des bacs à vrac (fils d'acier, découpe par transparence).
const wireMat = new THREE.MeshStandardMaterial({ map: canvasTexture(128, 128, (g, w, h) => {
  g.clearRect(0, 0, w, h); g.strokeStyle = '#9aa0a6'; g.lineWidth = 5;
  for (let k = 0; k <= 4; k++) { g.beginPath(); g.moveTo(k * 32, 0); g.lineTo(k * 32, h); g.moveTo(0, k * 32); g.lineTo(w, k * 32); g.stroke(); }
}), alphaTest: 0.5, metalness: 0.6, roughness: 0.4, side: THREE.DoubleSide });
wireMat.map.wrapS = wireMat.map.wrapT = THREE.RepeatWrapping; wireMat.map.repeat.set(6, 4);
const hookGeo = new THREE.CylinderGeometry(0.006, 0.006, 0.14, 6).rotateX(Math.PI / 2);
const RACKET_ROWS = [2.12, 1.36];                // hauteur des crochets du mur à raquettes
let woodMat = null;
const tableWood = () => woodMat ??= new THREE.MeshStandardMaterial({ color: 0xb98a5a, roughness: 0.6 });

// Géométrie des emplacements selon le meuble : position des articles (x, y, z), surface (w × d),
// étiquette, volume de visée. Tous les meubles ont la même emprise (2,1 × 0,6 m).
function levelGeom(type) {
  if (type === 'bin') return [-0.52, 0.52].map(x => ({ x, y: 0.26, z: 0, w: 0.9, d: 0.46, tagY: 0.93, tagZ: D / 2 - 0.02, hitY: 0.55, hitH: 0.7, pile: true }));
  // (étiquette de la rangée du haut au-dessus des crochets, celle du bas sous les raquettes)
  if (type === 'racketWall') return RACKET_ROWS.map((y, k) => ({ x: 0, y, z: 0, w: W - 0.1, d: D, tagY: k === 0 ? y + 0.07 : y - 0.76, tagZ: -D / 2 + 0.1, hitY: y - 0.36, hitH: 0.72, rackets: true }));
  if (type === 'table') return [{ x: 0, y: 0.79, z: 0.13, w: W - 0.2, d: 0.3, tagY: 0.7, tagZ: D / 2 - 0.005, hitY: 0.95, hitH: 0.35 }, { x: 0, y: 1.18, z: -0.15, w: W - 0.4, d: 0.22, tagY: 1.1, tagZ: -0.02, hitY: 1.35, hitH: 0.35 }];
  return LEVEL_Y.map(y => ({ x: 0, y, z: 0, w: W - 0.06, d: D - 0.06, tagY: y - 0.05, tagZ: D / 2 - 0.005, hitY: y + 0.25, hitH: 0.5, board: true }));
}

// Encombrement d'un article (mesuré une fois) pour empiler en vrac.
const sizes = {};
function itemSize(id) {
  if (!sizes[id]) { const b = new THREE.Box3().setFromObject(productMesh(id)); sizes[id] = b.getSize(new THREE.Vector3()); }
  return sizes[id];
}

// Place les articles d'un emplacement.
function placeItems(L, product, qty, type) {
  const P = PRODUCTS[product], G = L.G;
  const isRacket = !!P.racket;
  for (let k = 0; k < qty; k++) {
    const m = productMesh(product);
    if (isRacket && G.rackets) {
      // Mur : raquettes suspendues manche en bas, sur deux plans en quinconce.
      const back = k % 2, n = Math.floor(k / 2);
      const len = P.racket === 'padel' ? 0.46 : 0.68;
      m.position.set(-0.84 + n * 0.48 + back * 0.24, -len - 0.02, -D / 2 + 0.1 + (back ? 0.02 : 0.08));
    } else if (isRacket) {
      // Gondole : raquettes debout, manche en bas, appuyées contre le fond (les raquettes de tennis inclinées
      // pour passer sous la tablette du dessus).
      const tilt = P.racket === 'padel' ? 0 : 0.7;
      m.rotation.set(-0.12, 0, tilt);
      m.position.set(-0.78 + k * 0.4 + (tilt ? 0.22 : 0), 0.01, -D / 2 + 0.16);
    } else if (G.pile || type === 'table' || !LAYOUT[product]) {
      // Vrac ou table : grille qui remplit la surface, couche par couche.
      const sz = itemSize(product);
      const cols = Math.max(1, Math.floor(G.w / (sz.x + 0.015))), rows = Math.max(1, Math.floor(G.d / (sz.z + 0.015)));
      const per = cols * rows, layer = Math.floor(k / per), idx = k % per;
      const c = idx % cols, r = Math.floor(idx / cols);
      const j = ((k * 7919) % 13) / 13 - 0.5;   // léger désordre
      m.position.set((c - (cols - 1) / 2) * (G.w / cols) + j * 0.03, layer * sz.y * (G.pile ? 0.85 : 1), (r - (rows - 1) / 2) * (G.d / rows));
      if (G.pile) m.rotation.set(j * 0.5, k * 1.3, j * 0.4);
    } else {
      const [cols, , sx, sz] = LAYOUT[product];
      const r = Math.floor(k / cols), c = k % cols;
      m.position.set((c - (cols - 1) / 2) * sx, 0, 0.12 - r * sz);
    }
    L.items.add(m);
  }
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
    const type = zone === 'shop' ? (state.shelves[i].type ?? 'gondola') : 'gondola';
    u.type = type;
    if (zone === 'bar') {
      // Vitrine réfrigérée : caisson blanc, intérieur éclairé, portes vitrées, bandeau lumineux.
      const body = new THREE.MeshStandardMaterial({ color: 0xf2f4f5, metalness: 0.2, roughness: 0.35 });
      add(new THREE.BoxGeometry(W + 0.08, 2.05, 0.06), body, 0, 1.025, -D / 2 + 0.03);
      for (const x of [-W / 2 - 0.02, W / 2 + 0.02]) add(new THREE.BoxGeometry(0.06, 2.05, D + 0.04), body, x, 1.025, 0);
      add(new THREE.BoxGeometry(W + 0.1, 0.12, D + 0.06), body, 0, 0.06, 0);
      add(new THREE.BoxGeometry(W + 0.1, 0.22, D + 0.06), headerMat('bar', L('BOISSONS FRAÎCHES', 'COLD DRINKS')), 0, 2.1, 0);
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
    } else if (type === 'bin') {
      // Bacs à vrac : deux grands paniers en fil d'acier sur pieds, remplis en vrac.
      for (const x of [-0.52, 0.52]) {
        for (const [lx, lz] of [[-0.45, -0.24], [0.45, -0.24], [-0.45, 0.24], [0.45, 0.24]]) add(new THREE.BoxGeometry(0.03, 0.85, 0.03), darkMetal, x + lx, 0.425, lz);
        add(new THREE.BoxGeometry(0.96, 0.02, 0.52), boardMat, x, 0.24, 0);                       // fond
        for (const z of [-0.26, 0.26]) add(new THREE.BoxGeometry(0.96, 0.6, 0.012), wireMat, x, 0.55, z);
        for (const dx of [-0.48, 0.48]) add(new THREE.BoxGeometry(0.012, 0.6, 0.52), wireMat, x + dx, 0.55, 0);
        for (const z of [-0.26, 0.26]) add(new THREE.BoxGeometry(0.98, 0.025, 0.025), metal, x, 0.85, z);
        for (const dx of [-0.48, 0.48]) add(new THREE.BoxGeometry(0.025, 0.025, 0.54), metal, x + dx, 0.85, 0);
      }
      const sign = add(new THREE.BoxGeometry(W, 0.22, 0.03), [metal, metal, metal, metal, headerMat('shop', L('VRAC', 'BARGAIN BINS')), metal], 0, 1.35, -D / 2 + 0.04);
      for (const x of [-W / 2 + 0.05, W / 2 - 0.05]) add(new THREE.BoxGeometry(0.03, 0.5, 0.03), darkMetal, x, 1.1, -D / 2 + 0.04);
      sign.castShadow = false;
    } else if (type === 'racketWall') {
      // Mur à raquettes : grand panneau perforé, crochets, raquettes suspendues manche en bas.
      add(new THREE.BoxGeometry(W, 0.1, 0.3), darkMetal, 0, 0.05, -D / 2 + 0.15);
      add(new THREE.BoxGeometry(W - 0.04, 2.15, 0.03), pegMat, 0, 1.12, -D / 2 + 0.05);
      for (const x of [-W / 2 + 0.02, W / 2 - 0.02]) add(new THREE.BoxGeometry(0.05, 2.25, 0.06), metal, x, 1.12, -D / 2 + 0.05);
      const header = add(new THREE.BoxGeometry(W, 0.26, 0.04), [metal, metal, metal, metal, headerMat('shop', L('RAQUETTES', 'RACKETS')), metal], 0, 2.36, -D / 2 + 0.06);
      header.castShadow = false;
      for (const hy of RACKET_ROWS) for (let k = 0; k < 8; k++) add(hookGeo, metal, -0.84 + k * 0.24, hy, -D / 2 + 0.12);
    } else if (type === 'table') {
      // Table de présentation en bois avec un gradin : textile plié, chaussures, sacs.
      const wood = tableWood();
      add(new THREE.BoxGeometry(W - 0.1, 0.05, D - 0.04), wood, 0, 0.76, 0);
      for (const [lx, lz] of [[-0.95, -0.24], [0.95, -0.24], [-0.95, 0.24], [0.95, 0.24]]) add(new THREE.BoxGeometry(0.06, 0.74, 0.06), darkMetal, lx, 0.37, lz);
      add(new THREE.BoxGeometry(W - 0.3, 0.04, 0.26), wood, 0, 1.16, -0.15);
      for (const x of [-0.85, 0.85]) add(new THREE.BoxGeometry(0.05, 0.38, 0.22), wood, x, 0.97, -0.15);
      const sign = add(new THREE.BoxGeometry(1.2, 0.2, 0.03), [metal, metal, metal, metal, headerMat('shop', L('TEXTILE DU CLUB', 'CLUB APPAREL')), metal], 0, 1.45, -0.27);
      sign.castShadow = false;
    } else {
      // Gondole : plinthe, montants, fond perforé, tablettes, fronton.
      add(new THREE.BoxGeometry(W, 0.1, D - 0.02), darkMetal, 0, 0.05, 0.0);
      for (const x of [-W / 2 + 0.025, W / 2 - 0.025]) add(new THREE.BoxGeometry(0.05, 2.0, 0.05), metal, x, 1.0, -D / 2 + 0.05);
      for (const x of [-W / 2 + 0.025, W / 2 - 0.025]) add(new THREE.BoxGeometry(0.04, 0.08, D), metal, x, 0.06, 0);
      add(new THREE.BoxGeometry(W - 0.06, 1.85, 0.02), zone === 'snack' ? (backMats.snack) : pegMat, 0, 1.02, -D / 2 + 0.04);
      const label = zone === 'snack' ? L('SNACK', 'SNACK BAR') : L('BOUTIQUE DU CLUB', 'CLUB SHOP');
      const header = add(new THREE.BoxGeometry(W, 0.26, 0.04), [metal, metal, metal, metal, headerMat(zone, label), metal], 0, 2.12, -D / 2 + 0.06);
      header.castShadow = false;
      u.header = header; u.headerLabel = label;
    }
    // Emplacements : position des articles, étiquette de prix et volume de visée de chacun.
    u.levels = levelGeom(type).map((G, li) => {
      if (G.board) add(new THREE.BoxGeometry(G.w, 0.025, G.d), u.slot.zone === 'bar' ? new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.55, roughness: 0.1 }) : boardMat, G.x, G.y - 0.013, G.z);
      const tag = tagTexture();
      const tagMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.094), new THREE.MeshStandardMaterial({ map: tag.t, roughness: 0.5 }));
      tagMesh.position.set(G.x, G.tagY, G.tagZ);
      s.add(tagMesh);
      if (G.board) {
        const strip = new THREE.Mesh(new THREE.BoxGeometry(G.w, 0.05, 0.012), new THREE.MeshStandardMaterial({ color: 0xf6f6f2, roughness: 0.3 }));
        strip.position.set(G.x, G.y - 0.05, D / 2 - 0.02);
        s.add(strip);
      }
      // Volume invisible pour viser l'emplacement.
      const hit = new THREE.Mesh(new THREE.BoxGeometry(G.w, G.hitH, D), new THREE.MeshBasicMaterial({ visible: false }));
      hit.position.set(G.x, G.hitY, 0.02);
      hit.userData.interact = { kind: 'shelf', shelf: i, level: li };
      s.add(hit);
      interactables.push(hit);
      const items = new THREE.Group();
      items.position.set(G.x, G.y, G.z);
      s.add(items);
      return { tag, items, y: G.y, key: '', G, hit };
    });
    u.built = s;
    u.mark.visible = false;
  }

  // Démonte le meuble affiché (vendu, ou remplacé par un autre type).
  function unbuild(u) {
    if (!u.built) return;
    u.g.remove(u.built);
    for (const L of u.levels) { const k = interactables.indexOf(L.hit); if (k >= 0) interactables.splice(k, 1); }
    u.built.traverse(o => { if (o.userData.merged) o.geometry.dispose(); });
    u.built = null; u.levels = []; u.header = null; u.headerLabel = null;
    u.mark.visible = u.slot.zone === 'shop';
  }

  function refresh(i) {
    const u = units[i], st = state.shelves[i];
    if (u.built && (!st.built || (u.slot.zone === 'shop' && u.type !== (st.type ?? 'gondola')))) unbuild(u);
    if (st.built && !u.built) buildUnit(u, i);
    if (!st.built) return;
    // Le fronton annonce le rayon selon ce qui y est rangé.
    if (u.header) {
      const counts = {};
      for (const l of st.levels) if (l.product) { const c = category(l.product); counts[c] = (counts[c] || 0) + 1; }
      const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
      const label = best ? best[0] : L('BOUTIQUE DU CLUB', 'CLUB SHOP');
      if (label !== u.headerLabel) { u.headerLabel = label; u.header.material[4] = headerMat(u.slot.zone, label); }
    }
    st.levels.forEach((lvl, li) => {
      const L = u.levels[li];
      if (!L) return;   // meuble à 2 emplacements
      const price = lvl.product ? state.prices[lvl.product] : 0;
      const key = `${lvl.product}|${lvl.qty}|${price}`;
      if (key === L.key) return;
      L.key = key;
      drawTag(L.tag, lvl.product, price, lvl.qty);
      // Reconstruit les articles visibles.
      for (const c of L.items.children) if (c.userData.merged) c.geometry.dispose();
      L.items.clear();
      if (!lvl.product) return;
      placeItems(L, lvl.product, lvl.qty, u.type);
      // Les articles d'une tablette ne bougent pas : fusionnés en quelques maillages (une raquette compte ~10 pièces).
      mergeStatic(L.items);
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
