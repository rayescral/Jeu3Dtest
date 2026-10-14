// Voitures : carrosserie lissée construite par sections (comme un vrai modéliseur), passages de roues,
// vitrages avec montants, peinture vernie (reflets du ciel), jantes alliage, pneus, optiques et plaques.
// Repère : avant vers +x, largeur sur z, hauteur sur y (comme l'ancien modèle).
import * as THREE from 'three';

// Silhouettes : longueur, largeur, garde au sol, profil du haut de caisse (x, y), vitrage, toit, roues.
const TYPES = {
  hatch: { L: 4.05, W: 1.76, clear: 0.3, top: [[2.02, 0.7], [1.6, 0.86], [0.95, 0.96], [-1.6, 1.0], [-2.02, 0.96]],
    wf: 0.95, a: 0.25, c: -1.25, r: -1.75, roof: 1.46, front: 1.38, rear: 1.28, R: 0.31 },
  sedan: { L: 4.65, W: 1.82, clear: 0.28, top: [[2.32, 0.66], [1.7, 0.84], [1.05, 0.93], [-1.3, 0.98], [-2.0, 1.0], [-2.32, 0.94]],
    wf: 1.05, a: 0.3, c: -0.85, r: -1.6, roof: 1.44, front: 1.42, rear: 1.4, R: 0.32 },
  suv: { L: 4.55, W: 1.88, clear: 0.38, top: [[2.27, 0.84], [1.7, 1.0], [1.05, 1.08], [-1.7, 1.12], [-2.27, 1.08]],
    wf: 1.05, a: 0.35, c: -1.75, r: -2.08, roof: 1.7, front: 1.42, rear: 1.36, R: 0.36 },
  wagon: { L: 4.7, W: 1.82, clear: 0.29, top: [[2.35, 0.66], [1.75, 0.84], [1.1, 0.93], [-1.9, 0.98], [-2.35, 0.95]],
    wf: 1.1, a: 0.35, c: -1.85, r: -2.18, roof: 1.48, front: 1.45, rear: 1.4, R: 0.32 },
};
export const CAR_TYPES = Object.keys(TYPES);

const lerp = (a, b, t) => a + (b - a) * t;
const smooth = t => t * t * (3 - 2 * t);
function profile(pts, x) {
  // Interpolation douce entre points de contrôle triés de l'avant (+x) vers l'arrière.
  if (x >= pts[0][0]) return pts[0][1];
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
    if (x >= x1) return lerp(y0, y1, smooth((x0 - x) / (x0 - x1)));
  }
  return pts[pts.length - 1][1];
}

// Section arrondie (super-ellipse) : renvoie [nx, ny] pour un angle, normalisés dans [-1, 1].
const SECTION = 28;
function ringPoint(i, n = 4) {
  const t = (i / SECTION) * Math.PI * 2;
  const c = Math.cos(t), s = Math.sin(t);
  return [Math.sign(c) * Math.abs(c) ** (2 / n), Math.sign(s) * Math.abs(s) ** (2 / n)];
}

// Maillage « loft » : stations le long de x, chaque station donne (bas, haut, demi-largeur bas, demi-largeur haut).
// group(iStation, nx, ny) → indice de matériau de la face.
function loft(stations, group, capFront = true, capRear = true) {
  const pos = [], idx = [], faceGroup = [];
  for (const st of stations) {
    for (let i = 0; i < SECTION; i++) {
      const [nx, ny] = ringPoint(i, st.n ?? 4);
      const v = (ny + 1) / 2;
      const hw = lerp(st.wb, st.wt, v);
      pos.push(st.x, lerp(st.yb, st.yt, v), nx * hw);
    }
  }
  const quads = [];
  for (let s = 0; s < stations.length - 1; s++) {
    for (let i = 0; i < SECTION; i++) {
      const a = s * SECTION + i, b = s * SECTION + (i + 1) % SECTION, c = a + SECTION, d = b + SECTION;
      const [nx, ny] = ringPoint(i + 0.5);
      quads.push([group(s, nx, ny), a, c, b, b, c, d]);
    }
  }
  // Bouchons : éventail vers le centre de la première / dernière section.
  const cap = (s, flip, g) => {
    const st = stations[s], center = pos.length / 3;
    pos.push(st.x, (st.yb + st.yt) / 2, 0);
    for (let i = 0; i < SECTION; i++) {
      const a = s * SECTION + i, b = s * SECTION + (i + 1) % SECTION;
      quads.push(flip ? [g, center, b, a] : [g, center, a, b]);
    }
  };
  if (capRear) cap(0, false, group(-1, 0, 0));
  if (capFront) cap(stations.length - 1, true, group(-2, 0, 0));
  // Tri par matériau pour former des groupes.
  quads.sort((p, q) => p[0] - q[0]);
  const geo = new THREE.BufferGeometry();
  let start = 0, cur = quads.length ? quads[0][0] : 0;
  for (const q of quads) {
    if (q[0] !== cur) { geo.addGroup(start, idx.length - start, cur); start = idx.length; cur = q[0]; }
    for (let k = 1; k < q.length; k++) idx.push(q[k]);
  }
  geo.addGroup(start, idx.length - start, cur);
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  void faceGroup;
  return geo;
}

// Indices de matériaux de la carrosserie.
const PAINT = 0, GLASS = 1, TRIM = 2, DARK = 3, GRILLE = 6;

function bodyGeometry(T) {
  const L2 = T.L / 2, hw0 = T.W / 2;
  const fx = L2 - T.front + 0.0, rx = -L2 + T.rear;   // essieux
  const axles = [fx, rx];
  // Bas de caisse relevé au-dessus des roues (passages de roues).
  const archR = T.R + 0.045, cy = T.R + 0.01;
  const yb = x => {
    let y = T.clear;
    for (const ax of axles) { const d = x - ax; if (Math.abs(d) < archR) y = Math.max(y, cy + Math.sqrt(archR * archR - d * d)); }
    return y;
  };
  const xs = [];
  // Stations : tous les 5 cm, plus serrées vers les extrémités (nez et poupe arrondis).
  for (let x = -L2; x <= L2 + 1e-6; x += 0.05) xs.push(x);
  for (const e of [0.003, 0.012, 0.025, 0.04]) { xs.push(L2 - e); xs.push(-L2 + e); }
  xs.sort((a, b) => a - b);
  const stationAt = x => {
    const e = Math.max(0, Math.abs(x) - (L2 - 0.5)) / 0.5;          // 0 → 1 sur les 50 derniers cm
    const plan = Math.sqrt(Math.max(0.0, 1 - e ** 3 * 0.45));           // coins arrondis, vus de dessus
    const tip = Math.max(0, Math.abs(x) - (L2 - 0.06)) / 0.06;          // bord tombé au tout bout
    const k = 1 - Math.sqrt(Math.max(0, 1 - tip * tip));                  // arrondi du bord (quart de cercle)
    const yt = profile(T.top, x) - k * 0.1;
    const ybot = Math.min(yb(x) + k * 0.1, yt - 0.06);
    return { x, yb: ybot, yt, wb: hw0 * plan * (0.97 - k * 0.12), wt: hw0 * plan * (0.86 - k * 0.12), n: 9 };
  };
  const stations = xs.map(stationAt);
  const lower = loft(stations, (s, nx, ny) => {
    if (s < 0) return PAINT;
    const x = (stations[s].x + stations[s + 1].x) / 2;
    if (ny < -0.72) return DARK;                                                            // bas de caisse
    return PAINT;
  });

  // Blocs optiques : surfaces collées à la carrosserie (u le long de la voiture, v en hauteur), un peu en saillie.
  const patch = (x0, x1, v0, v1) => {
    const pos = [], uv = [], idx = [], NU = 14, NV = 6;
    for (const side of [1, -1]) {
      const base = pos.length / 3;
      for (let i = 0; i <= NU; i++) for (let j = 0; j <= NV; j++) {
        const x = lerp(x0, x1, i / NU), v = lerp(v0, v1, j / NV), st = stationAt(x);
        const ny = v * 2 - 1, nx = Math.pow(Math.max(0, 1 - Math.abs(ny) ** st.n), 1 / st.n);
        const hw = lerp(st.wb, st.wt, v), y = lerp(st.yb, st.yt, v);
        const out = new THREE.Vector3(0, ny * 0.6, nx).normalize().multiplyScalar(0.005);
        pos.push(x, y + out.y, side * (nx * hw + out.z));
        uv.push(i / NU, j / NV);
      }
      for (let i = 0; i < NU; i++) for (let j = 0; j < NV; j++) {
        const a = base + i * (NV + 1) + j, b = a + NV + 1;
        if (side > 0) idx.push(a, b, a + 1, a + 1, b, b + 1); else idx.push(a, a + 1, b, a + 1, b + 1, b);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals();
    return g;
  };
  const heads = patch(L2 - 0.36, L2 - 0.004, 0.6, 0.9);
  const tails = patch(-L2 + 0.004, -L2 + 0.26, 0.58, 0.88);

  // Habitacle : du pied de pare-brise au bas de lunette arrière.
  const roofY = x => {
    if (x > T.a) return lerp(profile(T.top, T.wf), T.roof, smooth((T.wf - x) / (T.wf - T.a)));
    if (x > T.c) return T.roof + 0.02 * Math.sin(Math.PI * (x - T.c) / (T.a - T.c));
    return lerp(T.roof, profile(T.top, T.r), smooth((T.c - x) / (T.c - T.r)));
  };
  const cab = [];
  for (let x = T.r; x <= T.wf + 1e-6; x += 0.04) {
    const base = profile(T.top, x) - 0.03;
    const top = Math.max(base + 0.02, roofY(x));
    cab.push({ x, yb: base, yt: top, wb: hw0 * 0.84, wt: hw0 * 0.7, n: 5 });
  }
  const bx = (T.a + T.c) / 2 + 0.05;
  const xOf = s => (cab[s].x + cab[Math.min(s + 1, cab.length - 1)].x) / 2;
  const upper = loft(cab, (s, nx, ny) => {
    if (s < 0) return PAINT;
    const x = xOf(s), side = Math.abs(nx) > 0.82, roofZone = ny > 0.55 && !side;
    if (roofZone && x < T.a - 0.02 && x > T.c + 0.02) return PAINT;    // pavillon
    if (ny < -0.5) return PAINT;                                          // bas des vitres (dans la caisse)
    if (side && Math.abs(x - bx) < 0.05) return TRIM;                     // montant central
    if (Math.abs(nx) > 0.7 && ny > 0.1 && (x > T.a - 0.04 || x < T.c + 0.04)) return PAINT; // montants avant / arrière
    if (Math.abs(nx) > 0.93 && (x > T.a + 0.02)) return PAINT;
    return GLASS;
  });
  return { lower, upper, axles, heads, tails };
}

// Roue : pneu (profil tourné), jante alliage à 5 branches, disque de frein.
let wheelCache = new Map();
function wheelParts(R) {
  if (wheelCache.has(R)) return wheelCache.get(R);
  const w = 0.22, rr = R * 0.66;
  const prof = [];
  const steps = 10;
  for (let i = 0; i <= steps; i++) {
    const a = -Math.PI / 2 + (i / steps) * Math.PI;
    prof.push(new THREE.Vector2(R - 0.035 + Math.cos(a) * 0.035, Math.sin(a) * (w / 2)));
  }
  prof.unshift(new THREE.Vector2(rr + 0.01, -w / 2 + 0.01));
  prof.push(new THREE.Vector2(rr + 0.01, w / 2 - 0.01));
  const tire = new THREE.LatheGeometry(prof, 36).rotateX(Math.PI / 2);
  // Jante : disque extrudé percé de 5 ouvertures.
  const shape = new THREE.Shape();
  shape.absarc(0, 0, rr, 0, Math.PI * 2, false);
  for (let k = 0; k < 5; k++) {
    const a0 = (k / 5) * Math.PI * 2 + 0.2, a1 = a0 + Math.PI * 2 / 5 - 0.4;
    const hole = new THREE.Path();
    hole.absarc(0, 0, rr * 0.86, a0, a1, false);
    hole.absarc(0, 0, rr * 0.36, a1 - 0.05, a0 + 0.05, true);
    shape.holes.push(hole);
  }
  const rim = new THREE.ExtrudeGeometry(shape, { depth: 0.035, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.01, bevelSegments: 2, curveSegments: 24 });
  const hub = new THREE.CylinderGeometry(rr * 0.2, rr * 0.24, 0.06, 16).rotateX(Math.PI / 2);
  const disc = new THREE.CylinderGeometry(rr * 0.8, rr * 0.8, 0.03, 24).rotateX(Math.PI / 2);
  const barrel = new THREE.CylinderGeometry(rr + 0.012, rr + 0.012, w - 0.03, 28, 1, true).rotateX(Math.PI / 2);
  const parts = { tire, rim, hub, disc, barrel, w };
  wheelCache.set(R, parts);
  return parts;
}

const mats = {};
function shared() {
  if (mats.tire) return mats;
  mats.tire = new THREE.MeshStandardMaterial({ color: 0x1b1b1c, roughness: 0.92 });
  mats.rim = new THREE.MeshStandardMaterial({ color: 0xc4c8cc, metalness: 0.9, roughness: 0.28 });
  mats.rimDark = new THREE.MeshStandardMaterial({ color: 0x2b2e33, metalness: 0.8, roughness: 0.35 });
  mats.disc = new THREE.MeshStandardMaterial({ color: 0x77736e, metalness: 0.7, roughness: 0.5 });
  mats.glass = new THREE.MeshStandardMaterial({ color: 0x0b1015, metalness: 0.95, roughness: 0.04, envMapIntensity: 1.4 });
  mats.trim = new THREE.MeshStandardMaterial({ color: 0x0d0e10, roughness: 0.35, metalness: 0.2 });
  mats.dark = new THREE.MeshStandardMaterial({ color: 0x17181a, roughness: 0.75 });
  mats.chrome = new THREE.MeshStandardMaterial({ color: 0xdfe3e8, metalness: 1, roughness: 0.12 });
  mats.seam = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 1 });
  const [hc, he] = lampTextures('head'), [tc, te] = lampTextures('tail');
  mats.headTex = new THREE.MeshStandardMaterial({ map: hc, emissiveMap: he, emissive: 0xffffff, emissiveIntensity: 1.4, metalness: 0.7, roughness: 0.12 });
  mats.tailTex = new THREE.MeshStandardMaterial({ map: tc, emissiveMap: te, emissive: 0xff2020, emissiveIntensity: 1.2, metalness: 0.3, roughness: 0.12 });
  mats.under = new THREE.MeshStandardMaterial({ color: 0x0c0c0c, roughness: 1 });
  mats.grille = new THREE.MeshStandardMaterial({ color: 0x111214, roughness: 0.55, metalness: 0.3 });
  return mats;
}

// Textures des optiques : couleur (réflecteurs, lentilles, LED) et parties lumineuses (feux de jour, feux arrière).
function lampTextures(kind) {
  const W = 256, H = 96;
  const mk = () => { const c = document.createElement('canvas'); c.width = W; c.height = H; return c; };
  const col = mk(), emi = mk(), g = col.getContext('2d'), e = emi.getContext('2d');
  e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
  // u = 0 côté habitacle, u = 1 vers le bout de la voiture ; v = 0 bas, v = 1 haut (canvas inversé en y).
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); };
  if (kind === 'head') {
    const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, '#3a4048'); gr.addColorStop(1, '#14171b');
    g.fillStyle = gr; rr(g, 0, 0, W, H, 18); g.fill();
    for (const cx of [150, 205]) {               // projecteurs
      const rg = g.createRadialGradient(cx - 6, 48, 2, cx, 52, 26); rg.addColorStop(0, '#ffffff'); rg.addColorStop(0.35, '#b8c4d0'); rg.addColorStop(1, '#2a3036');
      g.fillStyle = rg; g.beginPath(); g.arc(cx, 52, 22, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#8b939c'; g.lineWidth = 3; g.stroke();
    }
    g.fillStyle = '#d8902a'; rr(g, 26, 60, 70, 12, 5); g.fill();          // clignotant
    g.fillStyle = '#f4f8ff'; rr(g, 16, 14, 226, 9, 4); g.fill();          // feu de jour (LED)
    e.fillStyle = '#fff'; rr(e, 16, 14, 226, 9, 4); e.fill();
    e.fillStyle = '#9aa'; for (const cx of [150, 205]) { e.beginPath(); e.arc(cx, 52, 10, 0, Math.PI * 2); e.fill(); }
  } else {
    const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, '#7a0a0e'); gr.addColorStop(1, '#3c0507');
    g.fillStyle = gr; rr(g, 0, 0, W, H, 14); g.fill();
    g.fillStyle = '#e8e8e8'; rr(g, 150, 54, 60, 16, 4); g.fill();         // feu de recul
    g.strokeStyle = '#ff3b30'; g.lineWidth = 8; g.beginPath(); g.moveTo(240, 16); g.lineTo(60, 16); g.lineTo(40, 40); g.stroke();
    e.strokeStyle = '#fff'; e.lineWidth = 9; e.beginPath(); e.moveTo(240, 16); e.lineTo(60, 16); e.lineTo(40, 40); e.stroke();
    e.fillStyle = '#300'; e.fillRect(0, 0, W, H); e.stroke();
  }
  const t = new THREE.CanvasTexture(col); t.colorSpace = THREE.SRGBColorSpace; t.flipY = true;
  const te = new THREE.CanvasTexture(emi); te.colorSpace = THREE.SRGBColorSpace;
  return [t, te];
}

const paints = new Map();
function paint(color) {
  if (!paints.has(color)) {
    const c = new THREE.Color(color);
    const hsl = c.getHSL({});
    // Vernis brillant ; les teintes moyennes sont métallisées.
    paints.set(color, new THREE.MeshPhysicalMaterial({
      color, metalness: hsl.l > 0.15 && hsl.l < 0.75 ? 0.55 : 0.2, roughness: 0.38,
      clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 1.1,
    }));
  }
  return paints.get(color);
}

// Plaque d'immatriculation française (texture dessinée).
const plates = [];
function plateTexture() {
  if (plates.length >= 6) return plates[Math.floor(Math.random() * plates.length)];
  const c = document.createElement('canvas'); c.width = 256; c.height = 56;
  const g = c.getContext('2d');
  g.fillStyle = '#f4f4f0'; g.fillRect(0, 0, 256, 56);
  g.fillStyle = '#1f3fa0'; g.fillRect(0, 0, 22, 56); g.fillRect(234, 0, 22, 56);
  g.fillStyle = '#f2d21b'; g.font = 'bold 9px sans-serif'; g.fillText('★', 6, 18);
  g.fillStyle = '#fff'; g.font = 'bold 15px sans-serif'; g.fillText('F', 6, 47);
  const L = () => 'ABCDEFGHJKLMNPRSTVWXYZ'[Math.floor(Math.random() * 22)];
  const D = () => Math.floor(Math.random() * 10);
  g.fillStyle = '#111'; g.font = 'bold 36px Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(`${L()}${L()}-${D()}${D()}${D()}-${L()}${L()}`, 128, 30);
  g.strokeStyle = '#222'; g.lineWidth = 3; g.strokeRect(1.5, 1.5, 253, 53);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  plates.push(t);
  return t;
}

const bodyCache = new Map();
const boxCache = new Map();
function roundedBox(d, h, w, r) {
  const k = [d, h, w, r].join();
  if (!boxCache.has(k)) {
    const sh = new THREE.Shape();
    sh.moveTo(-w / 2 + r, -h / 2); sh.lineTo(w / 2 - r, -h / 2); sh.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
    sh.lineTo(w / 2, h / 2 - r); sh.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2); sh.lineTo(-w / 2 + r, h / 2);
    sh.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r); sh.lineTo(-w / 2, -h / 2 + r); sh.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
    boxCache.set(k, new THREE.ExtrudeGeometry(sh, { depth: d, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2 }).translate(0, 0, -d / 2).rotateY(Math.PI / 2));
  }
  return boxCache.get(k);
}
let mirrorGeo = null;
// Crée une voiture. type : 'hatch' | 'sedan' | 'suv' | 'wagon' (ou au hasard selon seed).
export function carModel(color, type = 'sedan') {
  const T = TYPES[type] ?? TYPES.sedan;
  const m = shared();
  if (!bodyCache.has(type)) bodyCache.set(type, bodyGeometry(T));
  const { lower, upper, axles, heads, tails } = bodyCache.get(type);
  const g = new THREE.Group();
  const pm = paint(color);
  const bodyMats = [pm, m.glass, m.trim, m.dark, m.dark, m.dark, m.grille];
  const low = new THREE.Mesh(lower, bodyMats), up = new THREE.Mesh(upper, bodyMats);
  low.castShadow = up.castShadow = true;
  low.receiveShadow = up.receiveShadow = true;
  g.add(low, up, new THREE.Mesh(heads, m.headTex), new THREE.Mesh(tails, m.tailTex));

  const L2 = T.L / 2, hw = T.W / 2;
  // Dessous et passages de roues sombres.
  const under = new THREE.Mesh(new THREE.BoxGeometry(T.L - 0.5, 0.42, T.W - 0.36), m.under);
  under.position.y = T.clear + 0.24;
  g.add(under);

  // Roues.
  const wp = wheelParts(T.R);
  const darkRims = color === 0x15171a || color === 0xf2f2f2;
  for (const ax of axles) for (const side of [-1, 1]) {
    const wg = new THREE.Group();
    wg.position.set(ax, T.R, side * (hw - 0.14));
    const tire = new THREE.Mesh(wp.tire, m.tire); tire.castShadow = true;
    const barrel = new THREE.Mesh(wp.barrel, m.rimDark);
    const rim = new THREE.Mesh(wp.rim, darkRims ? m.rimDark : m.rim);
    rim.position.z = side * (wp.w / 2 - 0.045); if (side < 0) rim.rotation.y = Math.PI;
    const hub = new THREE.Mesh(wp.hub, m.chrome); hub.position.z = side * (wp.w / 2 - 0.02);
    const disc = new THREE.Mesh(wp.disc, m.disc); disc.position.z = side * 0.0;
    wg.add(tire, barrel, rim, hub, disc);
    g.add(wg);
  }

  // Optiques avant : blocs vitrés + feux de jour, calandre, plaques.
  const fy = profile(T.top, L2 - 0.1);
  for (const side of [-1, 1]) {
    // Rétroviseur.
    const mir = new THREE.Mesh(mirrorGeo ??= new THREE.SphereGeometry(0.1, 14, 10).scale(0.7, 0.55, 1.05), pm);
    mir.position.set(T.wf - 0.2, profile(T.top, T.wf) + 0.07, side * (hw * 0.9 + 0.09));
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.12), m.trim);
    arm.position.set(T.wf - 0.17, profile(T.top, T.wf) + 0.04, side * (hw * 0.9 + 0.0));
    g.add(mir, arm);
    // Poignées et jointures de portes.
    for (const dx of [T.a - 0.35, (T.a + T.c) / 2 - 0.35]) {
      const h = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.03, 0.02), m.chrome);
      h.position.set(dx, profile(T.top, dx) - 0.1, side * (hw * 0.97 + 0.004));
      g.add(h);
    }
    for (const dx of [T.wf - 0.12, (T.a + T.c) / 2 + 0.05, T.c + (type === 'suv' || type === 'wagon' ? 0.75 : 0.2)]) {
      const yTop = profile(T.top, dx) - 0.03, yBot = T.clear + 0.1;
      const seam = new THREE.Mesh(new THREE.BoxGeometry(0.006, yTop - yBot, 0.006), m.seam);
      seam.position.set(dx, (yTop + yBot) / 2, side * (hw * 0.97 - 0.001));
      g.add(seam);
    }
  }
  // Calandre et entrée d'air (cadres arrondis), diffuseur arrière.
  const grille = new THREE.Mesh(roundedBox(0.06, 0.15, T.W * 0.46, 0.04), m.grille);
  grille.position.set(L2 - 0.012, profile(T.top, L2) - 0.17, 0);
  const intake = new THREE.Mesh(roundedBox(0.06, 0.1, T.W * 0.6, 0.04), m.grille);
  intake.position.set(L2 - 0.02, T.clear + 0.07, 0);
  const diff = new THREE.Mesh(roundedBox(0.06, 0.09, T.W * 0.7, 0.03), m.dark);
  diff.position.set(-L2 + 0.02, T.clear + 0.06, 0);
  g.add(grille, intake, diff);
  for (const [px, ry] of [[L2 + 0.012, Math.PI / 2], [-L2 - 0.012, -Math.PI / 2]]) {
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.11), new THREE.MeshStandardMaterial({ map: plateTexture(), roughness: 0.4 }));
    plate.position.set(px, px > 0 ? T.clear + 0.2 : profile(T.top, -L2) - 0.3, 0);
    plate.rotation.y = ry;
    g.add(plate);
  }
  g.userData.type = type;
  return g;
}
