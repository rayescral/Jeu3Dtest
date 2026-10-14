// Le club-house : façade vitrée, bardage bois, parquet, plafond lumineux, comptoir d'accueil avec caisse,
// ordinateur, terminal de paiement, pancarte OUVERT/FERMÉ, décor (trophées, affiches, plantes, horloge).
import * as THREE from 'three';
import { CLUB, DOOR_W, COUNTER, LAPTOP, REGISTER, TERMINAL, COUNTER_MAT, SIGN, PLANTS, LOBBY_BENCH } from '../game/layout.js';
import { woodFloorTexture, wallTexture, cladTexture, canvasTexture } from './textures.js';
import { productMesh } from './products.js';
import { pbr, modelAtHeight, breakTiling } from './assets.js';
import { fmtMoney, fmtClock } from '../core/util.js';
import { L } from '../core/i18n.js';
import { mergeStatic } from './batch.js';

const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, ...o });

function box(w, h, d, material, x, y, z, { cast = true, receive = true } = {}) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  m.castShadow = cast; m.receiveShadow = receive;
  return m;
}

// Écran dessiné sur un canvas, mis à jour à la demande.
function screen(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d');
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const api = { tex, redraw: (...a) => { draw(g, w, h, ...a); tex.needsUpdate = true; } };
  api.redraw();
  return api;
}

export function createBuilding(scene, interactables) {
  const group = new THREE.Group();
  scene.add(group);
  const H = CLUB.height, W = CLUB.maxX - CLUB.minX, D = CLUB.maxZ - CLUB.minZ;
  const cx = (CLUB.minX + CLUB.maxX) / 2, cz = (CLUB.minZ + CLUB.maxZ) / 2;

  // --- Sol, murs, toit ----------------------------------------------------------------------------
  // Parquet photographique (lames de chêne), légèrement verni.
  const floorMat = breakTiling(pbr('WoodFloor051', { repeat: [W / 2.4, D / 2.4], roughness: 0.75 }), { variation: 0.08, scale: 0.5, warm: [1.03, 1.0, 0.97] })
    ?? new THREE.MeshStandardMaterial({ map: woodFloorTexture(), roughness: 0.45 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), floorMat);
  floor.rotation.x = -Math.PI / 2; floor.position.set(cx, 0.025, cz);
  floor.receiveShadow = true;
  group.add(floor);

  // Murs intérieurs en enduit peint, façades extérieures en bardage bois.
  const paint = pbr('Plaster001', { repeat: [5, 1.6], tint: 0xf1ede4, normalScale: 0.5 }) ?? new THREE.MeshStandardMaterial({ map: wallTexture(), roughness: 0.9 });
  const clad = pbr('WoodSiding008', { repeat: [5, 1.6] }) ?? new THREE.MeshStandardMaterial({ map: cladTexture(), roughness: 0.75 });
  const t = 0.25, half = DOOR_W / 2;
  // Matériaux par face : +x, -x, +y, -y, +z, -z.
  const wallMats = (outside) => ['+x', '-x', '+y', '-y', '+z', '-z'].map(f => (f === outside ? clad : paint));
  const wall = (w, h, d, x, y, z, outside) => group.add(box(w, h, d, wallMats(outside), x, y, z));
  // Mur du fond (vers les courts), percé d'une porte.
  const sideW = (W / 2 - half);
  wall(sideW, H, t, CLUB.minX + sideW / 2, H / 2, CLUB.minZ, '-z');
  wall(sideW, H, t, CLUB.maxX - sideW / 2, H / 2, CLUB.minZ, '-z');
  wall(DOOR_W, H - 2.5, t, 0, 2.5 + (H - 2.5) / 2, CLUB.minZ, '-z');
  wall(t, H, D, CLUB.minX, H / 2, cz, '-x');
  wall(t, H, D, CLUB.maxX, H / 2, cz, '+x');

  // Façade vitrée côté rue : montants, traverses, vitrage.
  const frameMat = std(0x2a2f33, { metalness: 0.7, roughness: 0.35 });
  frameMat.userData.reflective = true;
  const glass = new THREE.MeshStandardMaterial({ color: 0xbfd8e6, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.18, envMapIntensity: 1.5, depthWrite: false });
  glass.userData.reflective = true;
  const fz = CLUB.maxZ;
  for (let x = CLUB.minX; x <= CLUB.maxX + 0.01; x += 2.5) {
    if (Math.abs(x) < half + 0.05) continue;
    group.add(box(0.1, H, 0.14, frameMat, x, H / 2, fz));
  }
  for (const x of [-half, half]) group.add(box(0.12, H, 0.16, frameMat, x, H / 2, fz));
  group.add(box(W, 0.14, 0.16, frameMat, cx, H - 0.07, fz));
  group.add(box(W, 0.12, 0.16, frameMat, cx, 2.55, fz));
  group.add(box(sideW, 0.3, 0.16, frameMat, CLUB.minX + sideW / 2, 0.15, fz));
  group.add(box(sideW, 0.3, 0.16, frameMat, CLUB.maxX - sideW / 2, 0.15, fz));
  for (const s of [-1, 1]) {
    const pane = new THREE.Mesh(new THREE.PlaneGeometry(sideW, H - 0.3), glass);
    pane.position.set(s * (half + sideW / 2), 0.3 + (H - 0.3) / 2, fz);
    group.add(pane);
  }
  const transom = new THREE.Mesh(new THREE.PlaneGeometry(DOOR_W, H - 2.55), glass);
  transom.position.set(0, 2.55 + (H - 2.55) / 2, fz);
  group.add(transom);
  // Portes coulissantes ouvertes : cadre métallique et vitrage, rangées de part et d'autre de l'entrée.
  for (const s of [-1, 1]) {
    const door = new THREE.Group();
    const dg = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 2.35), glass);
    dg.position.set(0, 1.25, 0);
    door.add(dg);
    for (const [w, h, x, y] of [[1.2, 0.07, 0, 0.035], [1.2, 0.07, 0, 2.465], [0.07, 2.5, -0.565, 1.25], [0.07, 2.5, 0.565, 1.25]]) {
      door.add(box(w, h, 0.05, frameMat, x, y, 0, { cast: false }));
    }
    door.position.set(s * (half + 0.6), 0, fz + 0.12);
    group.add(door);
  }

  // Toit plat débordant, avec bandeau.
  const roofMat = std(0x3b4045, { roughness: 0.8 });
  group.add(box(W + 1.4, 0.35, D + 2.2, roofMat, cx, H + 0.17, cz + 0.6));
  const fascia = new THREE.MeshStandardMaterial({ color: 0x1f6b4a, roughness: 0.5 });
  group.add(box(W + 1.45, 0.5, 0.12, fascia, cx, H + 0.15, CLUB.maxZ + 1.75));
  // Enseigne lumineuse au-dessus de l'entrée.
  const sign = screen(1024, 160, (g, w, h) => {
    g.fillStyle = '#1f6b4a'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#ffffff'; g.font = '800 92px Outfit, Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('TENNIS · PADEL', w / 2, h / 2 + 4);
  });
  const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 0.72), new THREE.MeshStandardMaterial({ map: sign.tex, emissive: 0xffffff, emissiveMap: sign.tex, emissiveIntensity: 0.25 }));
  signMesh.position.set(0, H + 0.95, CLUB.maxZ + 1.6);
  group.add(signMesh);
  group.add(box(4.8, 0.85, 0.1, roofMat, 0, H + 0.95, CLUB.maxZ + 1.54));

  // Plafond avec dalles lumineuses.
  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(W, D), pbr('OfficeCeiling001', { repeat: [W / 1.2, D / 1.2], side: THREE.DoubleSide }) ?? std(0xf4f2ee, { roughness: 0.95 }));
  ceiling.rotation.x = Math.PI / 2; ceiling.position.set(cx, H - 0.01, cz);
  group.add(ceiling);
  const panelMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff6e8, emissiveIntensity: 1.2 });
  for (let x = -7; x <= 7; x += 3.5) for (let z = 2.5; z <= 12; z += 3.2) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.2), panelMat);
    p.rotation.x = Math.PI / 2; p.position.set(x, H - 0.03, z);
    group.add(p);
  }
  // Pas de lampes ponctuelles (coûteuses sur chaque pixel) : les dalles sont émissives et
  // l'éclairage d'ambiance du soir est géré par l'environnement.

  // --- Comptoir d'accueil ---------------------------------------------------------------------------
  const cw = COUNTER.maxX - COUNTER.minX, cd = COUNTER.maxZ - COUNTER.minZ, ccx = (COUNTER.minX + COUNTER.maxX) / 2, ccz = (COUNTER.minZ + COUNTER.maxZ) / 2;
  group.add(box(cw, COUNTER.top - 0.04, cd - 0.1, [clad, clad, paint, paint, clad, paint], ccx, (COUNTER.top - 0.04) / 2, ccz + 0.05));
  const top = new THREE.MeshStandardMaterial({ color: 0xf5f3ef, roughness: 0.25 });
  top.userData.reflective = true;
  group.add(box(cw + 0.1, 0.05, cd + 0.12, top, ccx, COUNTER.top - 0.02, ccz));
  // Tapis de caisse.
  const mat = box(1.5, 0.008, 0.5, std(0x22272b, { roughness: 0.9 }), COUNTER_MAT.x, COUNTER.top + 0.004, COUNTER_MAT.z, { cast: false });
  group.add(mat);

  // Ordinateur portable (ouvre l'application de gestion).
  const laptop = new THREE.Group();
  laptop.position.set(LAPTOP.x, COUNTER.top, LAPTOP.z);
  laptop.rotation.y = Math.PI;   // l'écran fait face au personnel (vers -z)
  const alu = std(0xb9bec4, { metalness: 0.8, roughness: 0.3 });
  alu.userData.reflective = true;
  laptop.add(box(0.42, 0.02, 0.3, alu, 0, 0.01, 0));
  const lscreen = screen(512, 320, (g, w, h) => {
    const grd = g.createLinearGradient(0, 0, w, h); grd.addColorStop(0, '#1f6b4a'); grd.addColorStop(1, '#0f3d2a');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
    g.fillStyle = '#e4f05a'; g.beginPath(); g.arc(w / 2, h / 2 - 30, 38, 0, Math.PI * 2); g.fill();
    g.strokeStyle = '#ffffff'; g.lineWidth = 5; g.beginPath(); g.arc(w / 2 - 52, h / 2 - 30, 38, -0.6, 0.6); g.stroke();
    g.beginPath(); g.arc(w / 2 + 52, h / 2 - 30, 38, Math.PI - 0.6, Math.PI + 0.6); g.stroke();
    g.fillStyle = '#ffffff'; g.font = '700 40px Outfit, Arial'; g.textAlign = 'center'; g.fillText('ClubOS', w / 2, h / 2 + 50);
    g.font = '500 22px Outfit, Arial'; g.fillStyle = 'rgba(255,255,255,0.7)'; g.fillText(L('Appuie sur E', 'Press E'), w / 2, h / 2 + 88);
  });
  const lid = new THREE.Group();
  lid.position.set(0, 0.02, -0.15);
  lid.rotation.x = 0.28;
  lid.add(box(0.42, 0.28, 0.012, alu, 0, 0.14, 0));
  const lsMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.39, 0.25), new THREE.MeshStandardMaterial({ map: lscreen.tex, emissive: 0xffffff, emissiveMap: lscreen.tex, emissiveIntensity: 0.9 }));
  lsMesh.position.set(0, 0.14, 0.007);
  lid.add(lsMesh);
  laptop.add(lid);
  group.add(laptop);
  laptop.traverse(o => { if (o.isMesh) o.userData.interact = { kind: 'laptop' }; });
  interactables.push(laptop);

  // Caisse enregistreuse : écran côté personnel, tiroir-caisse, scanner.
  const reg = new THREE.Group();
  reg.position.set(REGISTER.x, COUNTER.top, REGISTER.z);
  const dark = std(0x1e2226, { roughness: 0.45 });
  reg.add(box(0.06, 0.25, 0.06, dark, 0, 0.13, 0.05));
  const regScreen = screen(512, 384, drawRegister);
  const monitor = new THREE.Group();
  monitor.position.set(0, 0.36, 0.02);
  monitor.rotation.y = Math.PI;
  monitor.rotation.x = -0.15;
  monitor.add(box(0.44, 0.33, 0.04, dark, 0, 0, 0));
  const rs = new THREE.Mesh(new THREE.PlaneGeometry(0.41, 0.3), new THREE.MeshStandardMaterial({ map: regScreen.tex, emissive: 0xffffff, emissiveMap: regScreen.tex, emissiveIntensity: 0.85 }));
  rs.position.z = 0.021;
  monitor.add(rs);
  reg.add(monitor);
  group.add(reg);
  // Tiroir-caisse sous le plateau, côté personnel.
  const drawer = box(0.46, 0.12, 0.42, dark, REGISTER.x, COUNTER.top - 0.12, COUNTER.minZ - 0.05);
  drawer.userData.interact = { kind: 'cash' };
  interactables.push(drawer);
  group.add(drawer);
  const scanner = box(0.08, 0.14, 0.08, dark, -5.7, COUNTER.top + 0.07, 6.85);
  group.add(scanner);
  const scanGlow = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 0.05), new THREE.MeshBasicMaterial({ color: 0xff2a2a }));
  scanGlow.position.set(-5.7, COUNTER.top + 0.1, 6.895);
  group.add(scanGlow);

  // Terminal de paiement par carte.
  const term = new THREE.Group();
  term.position.set(TERMINAL.x, COUNTER.top, TERMINAL.z);
  term.add(box(0.09, 0.03, 0.17, dark, 0, 0.015, 0));
  const termScreen = screen(128, 96, (g, w, h, amount = '') => {
    g.fillStyle = '#c8e6c9'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#123'; g.font = '700 22px monospace'; g.textAlign = 'center';
    g.fillText(amount || 'CB', w / 2, h / 2 + 8);
  });
  const ts = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.05), new THREE.MeshBasicMaterial({ map: termScreen.tex }));
  ts.rotation.x = -Math.PI / 2 + 0.3; ts.position.set(0, 0.033, 0.04);
  term.add(ts);
  term.traverse(o => { if (o.isMesh) o.userData.interact = { kind: 'card' }; });
  interactables.push(term);
  group.add(term);

  // Pancarte OUVERT / FERMÉ suspendue derrière la vitre, à côté de la porte.
  const openSign = screen(512, 256, (g, w, h, open = false) => {
    g.fillStyle = '#fbfaf6'; g.fillRect(0, 0, w, h);
    g.strokeStyle = open ? '#2e9c5d' : '#c0392b'; g.lineWidth = 18; g.strokeRect(9, 9, w - 18, h - 18);
    g.fillStyle = open ? '#2e9c5d' : '#c0392b'; g.font = '800 120px Outfit, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(open ? L('OUVERT', 'OPEN') : L('FERMÉ', 'CLOSED'), w / 2, h / 2 + 6);
  });
  const signGroup = new THREE.Group();
  signGroup.position.set(SIGN.x, 1.7, SIGN.z - 0.08);
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.4, 0.02), [dark, dark, dark, dark,
    new THREE.MeshStandardMaterial({ map: openSign.tex, roughness: 0.5 }), new THREE.MeshStandardMaterial({ map: openSign.tex, roughness: 0.5 })]);
  signGroup.add(plate);
  for (const s of [-1, 1]) {
    const string = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.6), dark);
    string.position.set(s * 0.3, 0.5, 0);
    signGroup.add(string);
  }
  signGroup.traverse(o => { if (o.isMesh) o.userData.interact = { kind: 'sign' }; });
  interactables.push(signGroup);
  group.add(signGroup);

  // --- Décor -----------------------------------------------------------------------------------------
  // Étagère murale à trophées derrière le comptoir.
  const shelfWood = std(0x8b6a45, { roughness: 0.6 });
  group.add(box(4, 0.05, 0.3, shelfWood, -6, 1.75, CLUB.minZ + 0.3));
  group.add(box(4, 0.05, 0.3, shelfWood, -6, 2.35, CLUB.minZ + 0.3));
  const gold = new THREE.MeshStandardMaterial({ color: 0xd4a83a, metalness: 1, roughness: 0.22 });
  gold.userData.reflective = true;
  const cupGeo = new THREE.LatheGeometry([[0, 0], [0.07, 0], [0.07, 0.02], [0.02, 0.04], [0.02, 0.12], [0.08, 0.16], [0.09, 0.26], [0, 0.26]].map(p => new THREE.Vector2(p[0], p[1])), 24);
  for (let i = 0; i < 7; i++) {
    const cup = new THREE.Mesh(cupGeo, gold);
    const s = 0.7 + (i % 3) * 0.25;
    cup.scale.setScalar(s);
    cup.position.set(-7.6 + i * 0.5, i % 2 ? 1.775 : 2.375, CLUB.minZ + 0.3);
    cup.castShadow = true;
    group.add(cup);
  }
  // Affiches.
  const posters = [
    [L('TOURNOI D\'ÉTÉ', 'SUMMER TOURNAMENT'), L('Simple & double · 12 au 20 juillet', 'Singles & doubles · 12–20 July'), '#d9673a'],
    [L('ÉCOLE DE TENNIS', 'TENNIS SCHOOL'), L('Mini-tennis dès 5 ans', 'Mini-tennis from age 5'), '#2f6fe0'],
    [L('DÉCOUVRE LE PADEL', 'DISCOVER PADEL'), L('Séance d\'initiation gratuite', 'Free taster session'), '#1f6b4a'],
  ];
  posters.forEach(([title, sub, color], i) => {
    const tex = canvasTexture(400, 560, (g, w, h) => {
      g.fillStyle = color; g.fillRect(0, 0, w, h);
      g.fillStyle = 'rgba(255,255,255,0.12)';
      g.beginPath(); g.arc(w * 0.75, h * 0.3, 150, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#e4f05a'; g.beginPath(); g.arc(w * 0.72, h * 0.32, 60, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#ffffff'; g.font = '800 46px Outfit, Arial'; g.textAlign = 'left';
      const words = title.split(' ');
      words.forEach((wd, k) => g.fillText(wd, 30, h * 0.6 + k * 50));
      g.font = '500 24px Outfit, Arial'; g.fillText(sub, 30, h - 40);
    });
    const poster = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.12), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 }));
    poster.position.set(CLUB.minX + 0.14, 2, 9 + i * 1.2);
    poster.rotation.y = Math.PI / 2;
    group.add(poster);
  });
  // Horloge murale.
  const clock = screen(256, 256, (g, w, h, minute = 480) => {
    g.clearRect(0, 0, w, h);
    g.fillStyle = '#ffffff'; g.beginPath(); g.arc(w / 2, h / 2, 120, 0, Math.PI * 2); g.fill();
    g.strokeStyle = '#1b2420'; g.lineWidth = 10; g.stroke();
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2;
      g.lineWidth = 6; g.beginPath(); g.moveTo(w / 2 + Math.sin(a) * 100, h / 2 - Math.cos(a) * 100); g.lineTo(w / 2 + Math.sin(a) * 86, h / 2 - Math.cos(a) * 86); g.stroke();
    }
    const hA = ((minute / 60) % 12) / 12 * Math.PI * 2, mA = (minute % 60) / 60 * Math.PI * 2;
    g.lineCap = 'round';
    g.lineWidth = 10; g.beginPath(); g.moveTo(w / 2, h / 2); g.lineTo(w / 2 + Math.sin(hA) * 58, h / 2 - Math.cos(hA) * 58); g.stroke();
    g.lineWidth = 6; g.beginPath(); g.moveTo(w / 2, h / 2); g.lineTo(w / 2 + Math.sin(mA) * 90, h / 2 - Math.cos(mA) * 90); g.stroke();
  });
  const clockMesh = new THREE.Mesh(new THREE.CircleGeometry(0.3, 32), new THREE.MeshStandardMaterial({ map: clock.tex, transparent: true, roughness: 0.4 }));
  clockMesh.position.set(-2.2, 3.1, CLUB.minZ + 0.14);
  group.add(clockMesh);
  // Plantes en pot.
  const potMat = std(0x2b2f33, { roughness: 0.5 });
  const leafMat = std(0x3f7a34, { roughness: 0.8 });
  const leafGeo = new THREE.IcosahedronGeometry(0.42, 2);
  PLANTS.forEach(({ x, z }, i) => {
    const plant = modelAtHeight(i % 2 ? 'potted_plant_02' : 'potted_plant_01', i < 2 ? 1.5 : 1.2);
    if (plant) { plant.position.set(x, 0, z); plant.rotation.y = i * 1.7; group.add(plant); return; }
    group.add(box(0.5, 0.55, 0.5, potMat, x, 0.275, z));
    const leaf = new THREE.Mesh(leafGeo, leafMat);
    leaf.position.set(x, 0.95, z); leaf.scale.set(1, 1.3, 1);
    leaf.castShadow = true;
    group.add(leaf);
  });
  // Suspensions au-dessus du comptoir, caméra de surveillance, plantes grasses sur le comptoir.
  for (const lx of [-7.6, -5.6, -3.6]) {
    const lamp = modelAtHeight('modern_ceiling_lamp_01', 1.0);
    if (lamp) { lamp.position.set(lx, H - 1.0, 6.2); group.add(lamp); }
  }
  const cam = modelAtHeight('security_camera_01', 0.3);
  if (cam) { cam.position.set(CLUB.maxX - 0.35, H - 0.45, CLUB.minZ + 0.35); cam.rotation.y = -2.4; group.add(cam); }
  const succulent = modelAtHeight('potted_plant_04', 0.3);
  if (succulent) { succulent.position.set(-8.25, COUNTER.top, 7.05); group.add(succulent); }
  // Extérieur : climatiseurs à l'arrière, coffret électrique, appliques murales.
  for (const ax of [-7, 6.5]) {
    const ac = modelAtHeight('exterior_aircon_unit', 0.8);
    if (ac) { ac.position.set(ax, 0, CLUB.minZ - 0.5); ac.rotation.y = Math.PI; group.add(ac); }
  }
  const ub = modelAtHeight('utility_box_01', 1.3);
  if (ub) { ub.position.set(CLUB.maxX + 0.35, 0, 2.2); ub.rotation.y = Math.PI / 2; group.add(ub); }
  for (const [lx, lz, ry] of [[-6, CLUB.minZ - 0.15, Math.PI], [6, CLUB.minZ - 0.15, Math.PI], [CLUB.minX - 0.15, 10, -Math.PI / 2], [CLUB.maxX + 0.15, 10, Math.PI / 2]]) {
    const wl = modelAtHeight('industrial_wall_lamp', 0.3);
    if (wl) { wl.position.set(lx, 2.6, lz); wl.rotation.y = ry; group.add(wl); }
  }
  // Paillasson.
  group.add(box(2, 0.012, 1.2, std(0x3a3226, { roughness: 1 }), 0, 0.03, 13.2, { cast: false }));
  // Bancs du salon.
  const benchWood = std(0xa07a52, { roughness: 0.6 }), steel = std(0x30353a, { metalness: 0.6, roughness: 0.4 });
  {
    const b = LOBBY_BENCH;
    const sofa = modelAtHeight('sofa_02', 0.85);
    const chair = modelAtHeight('modern_arm_chair_01', 0.85);
    if (sofa && chair) {
      sofa.position.set(b.x - 0.55, 0, b.z); sofa.rotation.y = Math.PI;
      chair.position.set(b.x + 1.35, 0, b.z); chair.rotation.y = Math.PI;
      group.add(sofa, chair);
    } else {
      group.add(box(b.w, 0.06, b.d, benchWood, b.x, 0.46, b.z));
      for (const x of [b.x - b.w / 2 + 0.2, b.x + b.w / 2 - 0.2]) group.add(box(0.06, 0.44, 0.38, steel, x, 0.22, b.z));
    }
  }

  // --- Articles posés sur le comptoir --------------------------------------------------------------------
  const counterGroup = new THREE.Group();
  group.add(counterGroup);
  interactables.push(counterGroup);   // les articles posés sur le tapis se scannent au clic
  const ticketTex = {};
  const ticket = (text, color) => {
    ticketTex[text] ??= canvasTexture(256, 160, (g, w, h) => {
      g.fillStyle = '#fbfaf6'; g.fillRect(0, 0, w, h);
      g.fillStyle = color; g.fillRect(0, 0, w, 44);
      g.fillStyle = '#ffffff'; g.font = '700 26px Outfit, Arial'; g.textAlign = 'center'; g.fillText(text.split('|')[0], w / 2, 31);
      g.fillStyle = '#1b2420'; g.font = '600 30px Outfit, Arial'; g.fillText(text.split('|')[1] ?? '', w / 2, 104);
    });
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.006, 0.1), [std(0xffffff), std(0xffffff), new THREE.MeshStandardMaterial({ map: ticketTex[text] }), std(0xffffff), std(0xffffff), std(0xffffff)]);
    m.position.y = 0.004;
    m.rotation.y = Math.PI;   // texte tourné vers le caissier
    return m;
  };
  const counterViews = new Map();
  function showCounter(counter) {
    const live = new Set(counter.items.map(i => i.uid));
    for (const [uid, v] of counterViews) if (!live.has(uid)) { counterGroup.remove(v); counterViews.delete(uid); }
    const n = counter.items.length;
    counter.items.forEach((it, i) => {
      let v = counterViews.get(it.uid);
      if (!v) {
        if (it.kind === 'product') v = productMesh(it.product);
        else if (it.kind === 'booking') v = ticket(`${L('RÉSERVATION', 'BOOKING')}|${it.label.split(' ·')[0]}`, '#d9673a');
        else v = ticket(L('LICENCE|Saison 2026', 'MEMBERSHIP|2026 season'), '#1f6b4a');
        const g = new THREE.Group();
        g.add(v);
        // Boîte de sélection un peu plus grande que l'objet, pour viser facilement.
        const hit = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.28, 0.2), new THREE.MeshBasicMaterial({ visible: false }));
        hit.position.y = 0.12;
        g.add(hit);
        if (it.product === 'racket' || it.product === 'padelracket') { v.rotation.x = -Math.PI / 2; v.position.y = 0.03; }
        g.traverse(o => { o.userData.interact = { kind: 'scan', uid: it.uid }; });
        g.userData.uid = it.uid;
        counterGroup.add(g);
        counterViews.set(it.uid, g);
        v = g;
      }
      const x = COUNTER_MAT.x - 0.55 + (n === 1 ? 0.55 : (i / (n - 1)) * 1.1);
      v.userData.home = new THREE.Vector3(x, COUNTER.top + 0.01, COUNTER_MAT.z + (i % 2 ? 0.08 : -0.06));
      if (!v.userData.placed) { v.position.copy(v.userData.home).add(new THREE.Vector3(0, 0, 0.4)); v.userData.placed = true; }
      v.userData.scanned = it.scanned;
      v.traverse(o => { if (o.userData.interact) o.userData.interact.done = it.scanned; });
    });
    regScreen.redraw(counter);
  }
  // Animation : les articles glissent sur le tapis ; scannés, ils partent dans le sac.
  const bagPos = new THREE.Vector3(-3.95, COUNTER.top + 0.02, 7.0);
  function animateCounter(dt) {
    for (const v of counterViews.values()) {
      const target = v.userData.scanned ? bagPos : v.userData.home;
      v.position.lerp(target, 1 - Math.exp(-10 * dt));
      const s = v.userData.scanned ? Math.max(0.01, v.scale.x - dt * 2.5) : 1;
      v.scale.setScalar(s);
      v.visible = s > 0.02;
    }
  }
  // Sac en papier.
  const bag = box(0.3, 0.32, 0.18, std(0xc9a26b, { roughness: 0.9 }), bagPos.x, COUNTER.top + 0.16, bagPos.z);
  group.add(bag);

  function drawRegister(g, w, h, counter = null) {
    g.fillStyle = '#0f1418'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#1f6b4a'; g.fillRect(0, 0, w, 44);
    g.fillStyle = '#ffffff'; g.font = '700 24px Outfit, Arial'; g.textAlign = 'left'; g.fillText(L('CAISSE', 'TILL'), 16, 30);
    if (!counter || !counter.cust) {
      g.fillStyle = 'rgba(255,255,255,0.5)'; g.font = '500 26px Outfit, Arial'; g.textAlign = 'center';
      g.fillText(L('En attente d\'un client', 'Waiting for a customer'), w / 2, h / 2 + 10);
      return;
    }
    g.font = '500 22px Outfit, Arial';
    let y = 76;
    for (const it of counter.items.filter(i => i.scanned).slice(-6)) {
      g.fillStyle = '#d7dee3'; g.textAlign = 'left'; g.fillText(it.label, 16, y);
      g.textAlign = 'right'; g.fillText(fmtMoney(it.price), w - 16, y);
      y += 32;
    }
    g.fillStyle = '#e4f05a'; g.font = '800 34px Outfit, Arial'; g.textAlign = 'left'; g.fillText('TOTAL', 16, h - 80);
    g.textAlign = 'right'; g.fillText(fmtMoney(counter.total), w - 16, h - 80);
    if (counter.phase === 'pay') {
      g.font = '600 24px Outfit, Arial'; g.fillStyle = '#ffffff'; g.textAlign = 'left';
      if (counter.method === 'card') g.fillText(L('Paiement par carte', 'Card payment'), 16, h - 34);
      else {
        g.fillText(`${L('Donné', 'Given')} ${fmtMoney(counter.given)}`, 16, h - 34);
        g.textAlign = 'right'; g.fillStyle = '#7ee39a'; g.fillText(`${L('À rendre', 'Change')} ${fmtMoney(counter.given - counter.total)}`, w - 16, h - 34);
      }
    }
  }

  // Pièces fixes du club-house fusionnées par matériau ; ce qui bouge ou se clique reste à part.
  mergeStatic(group, o => o === counterGroup || o === laptop || o === drawer || o === term || o === signGroup);

  let lastClock = -1;
  return {
    showCounter, animateCounter,
    setOpen: open => openSign.redraw(open),
    setTerminal: text => termScreen.redraw(text),
    update(minute, night) {
      if (Math.floor(minute) !== lastClock) { lastClock = Math.floor(minute); clock.redraw(minute); }
      signMesh.material.emissiveIntensity = 0.25 + night * 1.2;
    },
  };
}
