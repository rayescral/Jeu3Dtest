// Terrains : surface, usure visible, filet, grillage ou parois vitrées, mobilier, éclairage,
// emplacements à construire, et échanges de balle animés pendant les parties.
import * as THREE from 'three';
import { COURT_SLOTS, TENNIS_AREA, PADEL_AREA } from '../game/layout.js';
import { COURTS, COURT_TYPES } from '../game/data.js';
import { clayTexture, hardTexture, padelTexture, wearTexture, meshTexture, gravelTexture, canvasTexture } from './textures.js';
import { clamp, rand, fmtMoney0 } from '../core/util.js';
import { pbr, images, assets, modelAtHeight } from './assets.js';
import { L } from '../core/i18n.js';
import { mergeStatic } from './batch.js';

// Détail photographique ajouté à une surface dessinée (relief et rugosité répétés finement).
function detail(mat, name, repeat, normalScale = 1) {
  const src = pbr(name, { repeat });
  if (!src) return mat;
  mat.normalMap = src.normalMap; mat.normalScale.set(normalScale, normalScale);
  mat.roughnessMap = src.roughnessMap;
  return mat;
}
const fenceCache = {};
// Grillage à maille losange (photo, transparent), teinté vert foncé comme sur les vrais courts.
function chainLink(len, h) {
  const key = `${len.toFixed(2)}x${h.toFixed(2)}`;
  if (!fenceCache[key]) {
    const m = pbr('Fence003', { repeat: [len / 0.5, h / 0.5], tint: 0x3d5c44, side: THREE.DoubleSide, alphaTest: 0.35 });
    // Maille fine : couverture alpha (anticrénelage) pour qu'elle reste légère et transparente de loin.
    if (m) { m.alphaToCoverage = true; m.metalness = 0.6; }
    fenceCache[key] = m ?? new THREE.MeshStandardMaterial({ map: (() => { const t = meshTexture('fence', 'rgba(40,60,50,0.9)', 16, 2).clone(); t.needsUpdate = true; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(len * 6, h * 6); return t; })(), alphaTest: 0.3, side: THREE.DoubleSide });
  }
  return fenceCache[key];
}
let windMat = null;
// Bâche brise-vent (toile tissée vert sapin).
function windscreen() {
  return windMat ??= (pbr('Fabric030', { repeat: [6, 1], tint: 0x1d4a35, side: THREE.DoubleSide }) ?? new THREE.MeshStandardMaterial({ color: 0x1d4a35, roughness: 0.9, side: THREE.DoubleSide }));
}

const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, ...o });
const steel = std(0x1f3a2c, { metalness: 0.6, roughness: 0.4 });
const black = std(0x15181b, { metalness: 0.5, roughness: 0.4 });
const white = std(0xf4f4f0, { roughness: 0.5 });

function mesh(geo, mat, x = 0, y = 0, z = 0, cast = true) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = cast; m.receiveShadow = true;
  return m;
}

// Panneau de grillage : bâche verte en bas, maille au-dessus.
function fencePanel(len, h, bottom = 2) {
  const g = new THREE.Group();
  if (bottom > 0) {
    const wind = new THREE.Mesh(new THREE.PlaneGeometry(len, bottom), windscreen());
    wind.position.y = bottom / 2 + 0.05;
    wind.castShadow = true; wind.receiveShadow = true;
    g.add(wind);
  }
  // Le grillage monte jusqu'en haut, derrière la bâche.
  const net = new THREE.Mesh(new THREE.PlaneGeometry(len, h), chainLink(len, h));
  net.position.y = h / 2;
  net.position.z = -0.02;
  net.castShadow = true;
  g.add(net);
  // Lisses horizontales en haut et à mi-hauteur.
  for (const y of [h - 0.02, bottom]) {
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, len, 8).rotateZ(Math.PI / 2), steel);
    rail.position.y = y;
    g.add(rail);
  }
  return g;
}

const galva = std(0x8f969b, { metalness: 0.8, roughness: 0.35 });
function floodlight(x, z, rot) {
  const g = new THREE.Group();
  // Mât galvanisé conique, crosse et projecteur LED à ailettes.
  g.add(mesh(new THREE.CylinderGeometry(0.07, 0.13, 8.2, 12), galva, 0, 4.1, 0));
  g.add(mesh(new THREE.BoxGeometry(0.08, 0.08, 0.6), galva, 0, 8.15, 0.25));
  const head = new THREE.Group();
  head.position.set(0, 8.05, 0.55);
  head.rotation.x = 0.55;
  head.add(mesh(new THREE.BoxGeometry(0.85, 0.08, 0.5), black, 0, 0.04, 0));
  for (let i = -3; i <= 3; i++) head.add(mesh(new THREE.BoxGeometry(0.02, 0.07, 0.48), black, i * 0.12, 0.11, 0));
  g.add(head);
  const lens = new THREE.Mesh(new THREE.PlaneGeometry(0.78, 0.44), new THREE.MeshBasicMaterial({ color: 0x3a3d40, side: THREE.DoubleSide }));
  lens.position.set(0, 7.98, 0.6);
  lens.rotation.x = -1.02;
  // Halo visible la nuit.
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xfff1d0, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  glow.scale.set(3.2, 3.2, 1);
  glow.position.set(0, 7.95, 0.5);
  glow.visible = false;
  lens.userData.glow = glow;
  g.add(head, lens, glow);
  g.position.set(x, 0, z);
  g.rotation.y = rot;
  return { g, lens };
}

let weldTex = null;
function weldedMesh() {
  return weldTex ??= canvasTexture(128, 128, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.fillStyle = '#ffffff';
    for (let i = 0; i < 4; i++) { g.fillRect(i * 32, 0, 3, h); g.fillRect(0, i * 32, w, 3); }
  });
}

let glowTex = null;
function glowTexture() {
  return glowTex ??= canvasTexture(64, 64, (g, w, h) => {
    const grd = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.25, 'rgba(255,240,200,0.6)'); grd.addColorStop(1, 'rgba(255,240,200,0)');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
  });
}

function signTexture(lines, color) {
  return canvasTexture(512, 300, (g, w, h) => {
    g.fillStyle = '#fbfaf6'; g.fillRect(0, 0, w, h);
    g.fillStyle = color; g.fillRect(0, 0, w, 70);
    g.fillStyle = '#ffffff'; g.font = '800 44px Outfit, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(lines[0], w / 2, 37);
    g.fillStyle = '#1b2420'; g.font = '600 38px Outfit, Arial';
    lines.slice(1).forEach((l, i) => g.fillText(l, w / 2, 130 + i * 62));
  });
}

// Chaise d'arbitre : piétement en acier laqué blanc, échelle, assise avec dossier et accoudoirs.
function umpireChair(x, z) {
  const c = new THREE.Group();
  const tube = (ax, ay, az, bx, by, bz, r = 0.025) => {
    const a = new THREE.Vector3(ax, ay, az), b = new THREE.Vector3(bx, by, bz);
    const len = a.distanceTo(b);
    const m = mesh(new THREE.CylinderGeometry(r, r, len, 10), white);
    m.position.copy(a).add(b).multiplyScalar(0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
    c.add(m);
  };
  for (const sz of [-1, 1]) {
    tube(-0.45, 0, sz * 0.42, -0.25, 1.75, sz * 0.3);
    tube(0.45, 0, sz * 0.42, 0.25, 1.75, sz * 0.3);
    for (const y of [0.45, 0.9, 1.35]) tube(-0.42 + y * 0.1, y, sz * (0.4 - y * 0.06), 0.42 - y * 0.1, y, sz * (0.4 - y * 0.06), 0.018);
  }
  // Échelle côté court.
  for (const y of [0.35, 0.75, 1.15, 1.55]) tube(0.42 - y * 0.1, y, -0.3, 0.42 - y * 0.1, y, 0.3, 0.02);
  const seatMat = std(0x1f6b4a, { roughness: 0.55 });
  c.add(mesh(new THREE.BoxGeometry(0.62, 0.06, 0.66), seatMat, 0, 1.8, 0));
  c.add(mesh(new THREE.BoxGeometry(0.06, 0.55, 0.66), seatMat, -0.3, 2.1, 0));
  for (const sz of [-1, 1]) c.add(mesh(new THREE.BoxGeometry(0.5, 0.04, 0.05), white, 0, 2.05, sz * 0.31));
  c.add(mesh(new THREE.BoxGeometry(0.35, 0.03, 0.66), white, 0.35, 1.05, 0));
  c.position.set(x, 0, z);
  return c;
}

function buildTennis(def) {
  const g = new THREE.Group();
  const A = TENNIS_AREA;
  const surfTex = def.surface === 'clay' ? clayTexture() : hardTexture();
  surfTex.anisotropy = 8;
  const surfMat = new THREE.MeshStandardMaterial({ map: surfTex, roughness: def.surface === 'clay' ? 1 : 0.75 });
  if (def.surface === 'clay') detail(surfMat, 'Ground088', [24, 48], 0.55);
  else detail(surfMat, 'Concrete034', [30, 60], 0.25);
  const surface = mesh(new THREE.PlaneGeometry(A.w, A.l), surfMat, 0, 0.03, 0, false);
  surface.rotation.x = -Math.PI / 2;
  surface.userData.interact = { kind: 'court', court: def.id };
  g.add(surface);
  const wear = new THREE.Mesh(new THREE.PlaneGeometry(A.w, A.l), new THREE.MeshStandardMaterial({ map: wearTexture(def.surface), transparent: true, opacity: 0, depthWrite: false, roughness: 1 }));
  wear.rotation.x = -Math.PI / 2; wear.position.y = 0.036;
  wear.receiveShadow = true;
  g.add(wear);

  // Filet : poteaux, maille, bande blanche, sangle centrale.
  for (const s of [-1, 1]) g.add(mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.07, 12), steel, s * 6.4, 0.535, 0));
  const netTex = meshTexture('net2', 'rgba(15,15,15,1)', 16, 1.5).clone();
  netTex.needsUpdate = true; netTex.wrapS = netTex.wrapT = THREE.RepeatWrapping; netTex.repeat.set(12.8 * 4, 0.95 * 4);
  const net = new THREE.Mesh(new THREE.PlaneGeometry(12.8, 0.95), new THREE.MeshStandardMaterial({ map: netTex, transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide }));
  net.position.y = 0.52;
  net.castShadow = true;
  g.add(net);
  g.add(mesh(new THREE.BoxGeometry(12.8, 0.06, 0.03), white, 0, 0.99, 0));
  g.add(mesh(new THREE.BoxGeometry(0.05, 0.92, 0.02), white, 0, 0.5, 0));

  // Grillage avec portillon au centre du côté club-house.
  const H = 3.5, x0 = -A.w / 2, x1 = A.w / 2, z0 = -A.l / 2, z1 = A.l / 2;
  const addFence = (ax, az, bx, bz) => {
    const len = Math.hypot(bx - ax, bz - az);
    const p = fencePanel(len, H, az === bz ? 2 : 0);
    p.position.set((ax + bx) / 2, 0, (az + bz) / 2);
    p.rotation.y = Math.atan2(bx - ax, bz - az) - Math.PI / 2;
    g.add(p);
    const n = Math.ceil(len / 3);
    for (let i = 0; i <= n; i++) g.add(mesh(new THREE.CylinderGeometry(0.04, 0.04, H, 8), steel, ax + (bx - ax) * i / n, H / 2, az + (bz - az) * i / n));
  };
  addFence(x0, z1, -0.9, z1); addFence(0.9, z1, x1, z1);
  addFence(x0, z0, x1, z0); addFence(x0, z0, x0, z1); addFence(x1, z0, x1, z1);
  g.add(mesh(new THREE.BoxGeometry(1.8, 0.06, 0.06), steel, 0, 2.3, z1));

  // Chaise d'arbitre, bancs, numéro du court.
  g.add(umpireChair(-7.4, 0));
  // Chaises des joueurs de part et d'autre de la chaise d'arbitre.
  const wood = std(0xa07a52, { roughness: 0.6 });
  for (const z of [-2.2, 2.2]) {
    const chairs = [-0.45, 0.45].map(dz => {
      const c = modelAtHeight('plastic_monobloc_chair_01', 0.82);
      if (c) { c.position.set(-7.9, 0, z + dz); c.rotation.y = Math.PI / 2; g.add(c); }
      return c;
    });
    if (!chairs[0]) {
      g.add(mesh(new THREE.BoxGeometry(0.42, 0.05, 1.6), wood, -7.9, 0.46, z));
      g.add(mesh(new THREE.BoxGeometry(0.06, 0.44, 0.06), black, -7.9, 0.22, z - 0.7));
      g.add(mesh(new THREE.BoxGeometry(0.06, 0.44, 0.06), black, -7.9, 0.22, z + 0.7));
    }
  }
  const num = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.7), new THREE.MeshStandardMaterial({ map: signTexture([def.label.toUpperCase()], def.surface === 'clay' ? '#d9673a' : '#2f5d9e') }));
  num.position.set(2.2, 2.6, z1 + 0.05);
  g.add(num);

  const lights = [[x0 - 0.6, -9, Math.PI / 2], [x0 - 0.6, 9, Math.PI / 2], [x1 + 0.6, -9, -Math.PI / 2], [x1 + 0.6, 9, -Math.PI / 2]].map(([x, z, r]) => {
    const f = floodlight(x, z, r); g.add(f.g); return f.lens;
  });
  return { g, wear, lights, surface };
}

function buildPadel(def) {
  const g = new THREE.Group();
  const base = mesh(new THREE.PlaneGeometry(PADEL_AREA.w, PADEL_AREA.l), std(0x9a9a94, { roughness: 0.9 }), 0, 0.025, 0, false);
  base.rotation.x = -Math.PI / 2;
  g.add(base);
  const padelMat = new THREE.MeshStandardMaterial({ map: padelTexture(), roughness: 0.9 });
  detail(padelMat, 'Grass001', [20, 40], 0.7);
  const surface = mesh(new THREE.PlaneGeometry(10, 20), padelMat, 0, 0.032, 0, false);
  surface.rotation.x = -Math.PI / 2;
  surface.userData.interact = { kind: 'court', court: def.id };
  g.add(surface);
  const wear = new THREE.Mesh(new THREE.PlaneGeometry(10, 20), new THREE.MeshStandardMaterial({ map: wearTexture('padel'), transparent: true, opacity: 0, depthWrite: false }));
  wear.rotation.x = -Math.PI / 2; wear.position.y = 0.038;
  g.add(wear);

  const glass = new THREE.MeshStandardMaterial({ color: 0xd6ecf2, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false, envMapIntensity: 1.6 });
  glass.userData.reflective = true;
  const pane = (w, h, x, y, z, ry) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), glass); m.position.set(x, y, z); m.rotation.y = ry; g.add(m); };
  const meshPanel = (w, h, x, y, z, ry) => {
    // Treillis soudé : mailles carrées de 5 cm, fils noirs.
    const tex = weldedMesh().clone();
    tex.needsUpdate = true; tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(w / 0.2, h / 0.2);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, alphaTest: 0.35, alphaToCoverage: true, side: THREE.DoubleSide, color: 0x222426, metalness: 0.5, roughness: 0.5 }));
    m.position.set(x, y, z); m.rotation.y = ry; g.add(m);
  };
  // Fonds : 3 m de verre + 1 m de grillage.
  for (const s of [-1, 1]) {
    for (let k = 0; k < 5; k++) pane(1.96, 3, -4 + k * 2, 1.5, s * 10, 0);
    meshPanel(10, 1, 0, 3.5, s * 10, 0);
  }
  // Côtés : 2 m de verre aux extrémités, puis grillage de 3 m, avec les ouvertures au filet.
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      pane(1.96, 3, sx * 5, 1.5, sz * 9, Math.PI / 2);
      pane(1.96, 2, sx * 5, 1, sz * 7, Math.PI / 2);
      meshPanel(5.25, 3, sx * 5, 1.5, sz * (0.75 + 5.25 / 2 + 0), Math.PI / 2);
    }
  }
  // Montants noirs.
  for (const sx of [-1, 1]) for (let z = -10; z <= 10; z += 2) g.add(mesh(new THREE.BoxGeometry(0.08, z === -10 || z === 10 ? 4 : 3, 0.08), black, sx * 5, (z === -10 || z === 10 ? 4 : 3) / 2, z));
  for (const sz of [-1, 1]) for (let x = -4; x <= 4; x += 2) g.add(mesh(new THREE.BoxGeometry(0.08, 4, 0.08), black, x, 2, sz * 10));
  // Filet.
  const netTex = meshTexture('net2', 'rgba(15,15,15,1)', 16, 1.5).clone();
  netTex.needsUpdate = true; netTex.wrapS = netTex.wrapT = THREE.RepeatWrapping; netTex.repeat.set(9.2 * 4, 0.86 * 4);
  const net = new THREE.Mesh(new THREE.PlaneGeometry(9.2, 0.86), new THREE.MeshStandardMaterial({ map: netTex, transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide }));
  net.position.y = 0.48;
  g.add(net);
  g.add(mesh(new THREE.BoxGeometry(9.2, 0.05, 0.03), white, 0, 0.9, 0));
  for (const s of [-1, 1]) g.add(mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.95), black, s * 4.6, 0.47, 0));

  const num = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.7), new THREE.MeshStandardMaterial({ map: signTexture([def.label.toUpperCase()], '#1f6b4a') }));
  num.position.set(0, 3.5, 10.06);
  g.add(num);
  const lights = [[-5.8, -6, Math.PI / 2], [-5.8, 6, Math.PI / 2], [5.8, -6, -Math.PI / 2], [5.8, 6, -Math.PI / 2]].map(([x, z, r]) => {
    const f = floodlight(x, z, r); g.add(f.g); return f.lens;
  });
  return { g, wear, lights, surface };
}

function buildPlot(def, sport) {
  const g = new THREE.Group();
  const A = sport === 'tennis' ? TENNIS_AREA : PADEL_AREA;
  const tex = gravelTexture().clone(); tex.needsUpdate = true;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(A.w / 3, A.l / 3);
  const plot = mesh(new THREE.PlaneGeometry(A.w, A.l), new THREE.MeshStandardMaterial({ map: tex, roughness: 1 }), 0, 0.02, 0, false);
  plot.rotation.x = -Math.PI / 2;
  g.add(plot);
  // Piquets et rubalise.
  const tape = std(0xff6a1a, { roughness: 0.7 });
  const corners = [[-A.w / 2, -A.l / 2], [A.w / 2, -A.l / 2], [A.w / 2, A.l / 2], [-A.w / 2, A.l / 2]];
  corners.forEach(([x, z], i) => {
    g.add(mesh(new THREE.CylinderGeometry(0.04, 0.04, 1), white, x, 0.5, z));
    const [nx, nz] = corners[(i + 1) % 4];
    const len = Math.hypot(nx - x, nz - z);
    const t = mesh(new THREE.BoxGeometry(len, 0.06, 0.01), tape, (x + nx) / 2, 0.85, (z + nz) / 2, false);
    t.rotation.y = -Math.atan2(nz - z, nx - x);
    g.add(t);
  });
  // Panneau "À construire".
  const board = new THREE.Group();
  const signMat = new THREE.MeshStandardMaterial({ map: signTexture([def.label.toUpperCase(), COURT_TYPES[def.surface].name, '', ''], '#d9673a'), roughness: 0.6 });
  const face = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.05, 0.05), [white, white, white, white, signMat, white]);
  face.position.y = 1.5; face.castShadow = true;
  board.add(face);
  for (const s of [-1, 1]) board.add(mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.5), black, s * 0.75, 0.75, -0.03));
  board.position.set(0, 0, A.l / 2 - 1.2);
  g.add(board);
  return { g, signMat, def };
}

export function createCourts(scene, state, interactables, onBallHit) {
  const views = {};
  let nightOn = null;
  for (const def of COURTS) {
    const slot = COURT_SLOTS[def.id];
    const sport = COURT_TYPES[def.surface].sport;
    const root = new THREE.Group();
    root.position.set(slot.cx, 0, slot.cz);
    scene.add(root);
    views[def.id] = { def, slot, sport, root, built: null, plot: null };
  }

  function updatePlotSign(v) {
    const lines = [v.def.label.toUpperCase(), COURT_TYPES[v.def.surface].name, fmtMoney0(v.def.price),
      state.level >= v.def.level ? L('À construire', 'For sale') : L(`Niveau ${v.def.level} requis`, `Level ${v.def.level} required`)];
    v.plot.signMat.map?.dispose();
    v.plot.signMat.map = signTexture(lines, state.level >= v.def.level ? '#1f6b4a' : '#8a918d');
    v.plot.signMat.needsUpdate = true;
  }

  function refresh(id) {
    const v = views[id], st = state.courts[id];
    if (st.built && !v.built) {
      if (v.plot) { v.root.remove(v.plot.g); v.plot = null; }
      v.built = v.sport === 'tennis' ? buildTennis(v.def) : buildPadel(v.def);
      // Pièces fixes fusionnées (grillages, poteaux, chaises…) ; projecteurs, surface et usure restent à part.
      mergeStatic(v.built.g, o => v.built.lights.includes(o) || o === v.built.wear || o === v.built.surface);
      v.root.add(v.built.g);
      interactables.push(v.built.surface);
    }
    if (!st.built && !v.plot) { v.plot = buildPlot(v.def, v.sport); mergeStatic(v.plot.g); v.root.add(v.plot.g); }
    if (v.plot) updatePlotSign(v);
    if (v.built) { v.built.wear.material.opacity = clamp(st.wear * 1.1, 0, 1); applyNight(v); }
  }
  for (const id of Object.keys(views)) refresh(id);

  // --- Échanges de balle -------------------------------------------------------------------------------
  const ballGeo = new THREE.SphereGeometry(0.033, 12, 10);
  const ballMat = new THREE.MeshStandardMaterial({ color: 0xe4f05a, roughness: 0.6, emissive: 0x202800 });
  const sessions = new Map();

  function startSession(id, persons, sport, viewOf) {
    const ball = new THREE.Mesh(ballGeo, ballMat);
    ball.castShadow = true;
    scene.add(ball);
    const s = { id, persons, sport, viewOf, ball, hitter: 0, receiver: 1, t: 0, dur: 1, from: new THREE.Vector3(), bounce: new THREE.Vector3(), to: new THREE.Vector3(), pause: 1.2 };
    sessions.set(id, s);
    serve(s, true);
  }
  function endSession(id) {
    const s = sessions.get(id);
    if (!s) return;
    scene.remove(s.ball);
    for (const p of s.persons) { const v = s.viewOf(p); if (v) { v.offsetX = 0; v.offsetZ = 0; } }
    sessions.delete(id);
  }
  function serve(s, first = false) {
    const slot = COURT_SLOTS[s.id];
    const sides = s.persons.map(p => (p.z >= slot.cz ? 1 : -1));
    if (first) s.hitter = 0;
    const hitterSide = sides[s.hitter];
    const opponents = s.persons.map((_, i) => i).filter(i => sides[i] !== hitterSide);
    s.receiver = opponents[Math.floor(Math.random() * opponents.length)];
    const H = s.persons[s.hitter], R = s.persons[s.receiver];
    const hv = s.viewOf(H), rv = s.viewOf(R);
    s.from.set(H.x + (hv?.offsetX ?? 0), 1.0, H.z);
    const half = s.sport === 'tennis' ? 4.2 : 3.6;
    const depth = s.sport === 'tennis' ? rand(4, 10.5) : rand(2.5, 8);
    s.bounce.set(slot.cx + rand(-half, half), 0.03, slot.cz - hitterSide * depth);
    // Le receveur se déplace vers la balle.
    const reach = s.sport === 'tennis' ? 3.6 : 2.2;
    s.targetOffset = clamp(s.bounce.x - R.x, -reach, reach);
    s.to.set(R.x + s.targetOffset, 1.0, R.z);
    const dist = s.from.distanceTo(s.to);
    s.dur = (s.sport === 'tennis' ? 0.9 : 0.75) + dist * 0.028;
    s.t = 0;
    s.swung = false;
    if (hv) hv.swing();
    onBallHit?.(s.from);
  }

  function update(dt) {
    for (const s of sessions.values()) {
      if (s.pause > 0) { s.pause -= dt; s.ball.visible = false; continue; }
      s.ball.visible = true;
      s.t += dt;
      const u = clamp(s.t / s.dur, 0, 1), split = 0.62;
      if (u < split) {
        const k = u / split;
        s.ball.position.lerpVectors(s.from, s.bounce, k);
        s.ball.position.y = THREE.MathUtils.lerp(s.from.y, 0.03, k) + Math.sin(k * Math.PI) * (s.sport === 'tennis' ? 1.5 : 1.1);
      } else {
        const k = (u - split) / (1 - split);
        s.ball.position.lerpVectors(s.bounce, s.to, k);
        s.ball.position.y = THREE.MathUtils.lerp(0.03, s.to.y, k) + Math.sin(k * Math.PI) * 0.7;
      }
      const R = s.persons[s.receiver], rv = s.viewOf(R);
      if (rv) rv.offsetX += (s.targetOffset - rv.offsetX) * (1 - Math.exp(-4 * dt));
      // Les autres joueurs reviennent vers le centre de leur place.
      for (const p of s.persons) { if (p === R) continue; const v = s.viewOf(p); if (v) v.offsetX *= Math.exp(-2 * dt); }
      if (!s.swung && s.t > s.dur - 0.3) { s.swung = true; rv?.swing(); }
      if (u >= 1) {
        // Fin du point de temps en temps (faute, balle dehors) : petite pause avant le service suivant.
        s.hitter = s.receiver;
        if (Math.random() < 0.12) s.pause = rand(1.5, 3);
        serve(s);
      }
    }
  }

  // Projecteurs allumés : lampes et halos visibles, et surface de jeu éclairée.
  function setNight(on) {
    if (on === nightOn) return;
    nightOn = on;
    for (const v of Object.values(views)) applyNight(v);
  }
  function applyNight(v) {
    if (!v.built) return;
    const on = !!nightOn;
    for (const l of v.built.lights) { l.material.color.set(on ? 0xfff2d6 : 0x3a3d40); l.userData.glow.visible = on; }
    const m = v.built.surface.material;
    m.emissive.set(on ? 0xffffff : 0x000000);
    m.emissiveMap = on ? m.map : null;
    m.emissiveIntensity = on ? 0.45 : 0;
    m.needsUpdate = true;
  }

  return { refresh, refreshAll: () => Object.keys(views).forEach(refresh), startSession, endSession, update, setNight, views };
}
