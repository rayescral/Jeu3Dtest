// Buvette et snack : emplacement réservé, chantier qui avance pour de vrai (clôture, ouvriers, dalle,
// échafaudage, murs qui montent, toit, auvent, enseigne), puis bâtiment terminé avec sa terrasse.
// Parking payant : barrière et horodateur.
import * as THREE from 'three';
import { STANDS, PAY_MACHINE, PARKING_ROAD, PARKING_LANE_Z } from '../game/layout.js';
import { FACILITIES, PRODUCTS } from '../game/data.js';
import { cladTexture, concreteTexture, canvasTexture } from './textures.js';
import { productMesh } from './products.js';
import { pbr, modelAtHeight, breakTiling } from './assets.js';
import { createPersonView } from './people.js';
import { clamp, fmtMoney, fmtMoney0 } from '../core/util.js';
import { L, EN } from '../core/i18n.js';
import { mergeStatic } from './batch.js';

const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.7, ...o });
const H = 2.8;                    // hauteur des murs

const THEME = {
  buvette: { title: L('BUVETTE', 'BAR'), stripe: ['#c0392b', '#fbfaf6'], wall: 0x6b4a2e, accent: 0xc0392b, items: ['beer', 'soda', 'coffee', 'juice'] },
  snack: { title: L('SNACK', 'SNACK BAR'), stripe: ['#f2c94c', '#1f6b4a'], wall: 0x2f6f5a, accent: 0xf2c94c, items: ['sandwich', 'panini', 'pizza', 'cookie'] },
};

function boxMesh(w, h, d, material, { cast = true, receive = true } = {}) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.castShadow = cast; m.receiveShadow = receive;
  return m;
}

// Panneau dessiné (enseigne, ardoise, pancarte de chantier).
function board(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d');
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  return { tex, redraw: (...a) => { g.clearRect(0, 0, w, h); draw(g, w, h, ...a); tex.needsUpdate = true; } };
}

const stripeTexture = (a, b) => canvasTexture(256, 64, (g, w, h) => {
  for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? b : a; g.fillRect(i * w / 8, 0, w / 8, h); }
  g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(0, h - 6, w, 6);
});

// Toile de parasol à 8 pans, légèrement creusée entre les baleines, avec un bord festonné.
let parasolGeo = null, bulbGeo = null, sockGeo = null;
function parasolGeometry() {
  const R = 1.3, ribs = 8, seg = 6, per = 6;
  const pos = [], uv = [], idx = [];
  const N = ribs * per;
  for (let i = 0; i <= seg; i++) {
    const r = (i / seg) * R;
    for (let j = 0; j <= N; j++) {
      const a = (j / N) * Math.PI * 2, f = (j % per) / per;
      const sag = Math.sin(f * Math.PI) * 0.06 * (r / R);           // creux entre deux baleines
      const y = 0.42 * (1 - r / R) ** 1.2 - sag;
      pos.push(Math.cos(a) * r * (1 - sag * 0.5), y, Math.sin(a) * r * (1 - sag * 0.5));
      uv.push(j / N, i / seg);   // une bande de couleur par pan
    }
  }
  for (let i = 0; i < seg; i++) for (let j = 0; j < N; j++) {
    const a = i * (N + 1) + j, b = a + N + 1;
    idx.push(a, b, a + 1, a + 1, b, b + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}

export function createStands(scene, interactables, state) {
  const views = {};
  for (const key of Object.keys(STANDS)) views[key] = buildStand(key);
  const parking = buildParking();

  // --- Buvette / snack -----------------------------------------------------------------------------
  function buildStand(key) {
    const S = STANDS[key], T = THEME[key], F = FACILITIES[key];
    const root = new THREE.Group();
    scene.add(root);
    const W = S.x1 - S.x0, D = S.z1 - S.z0, cx = (S.x0 + S.x1) / 2, cz = (S.z0 + S.z1) / 2;
    const v = { key, S, root, parts: [], workers: [], built: false, buildingShown: false };

    // Emplacement (avant achat) : marquage au sol et pancarte.
    const plot = new THREE.Group();
    const plotMark = new THREE.Mesh(new THREE.PlaneGeometry(W, D + 6), new THREE.MeshBasicMaterial({ color: 0x1f6b4a, transparent: true, opacity: 0.12, depthWrite: false }));
    plotMark.rotation.x = -Math.PI / 2; plotMark.position.set(cx, 0.03, cz + 3);
    plot.add(plotMark);
    const plotSign = board(512, 320, (g, w, h, lines) => {
      g.fillStyle = '#fbfaf6'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#1f6b4a'; g.fillRect(0, 0, w, 70);
      g.fillStyle = '#fff'; g.font = '800 44px Outfit, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(lines[0], w / 2, 36);
      g.fillStyle = '#1b2420'; g.font = '600 34px Outfit, Arial';
      lines.slice(1).forEach((l, i) => g.fillText(l, w / 2, 120 + i * 58));
    });
    const plotBoard = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.0), new THREE.MeshStandardMaterial({ map: plotSign.tex, roughness: 0.6 }));
    plotBoard.position.set(cx, 1.5, S.z1 + 3.5);
    for (const s of [-0.7, 0.7]) { const post = boxMesh(0.06, 2, 0.06, std(0x6b4a2e)); post.position.set(cx + s, 1, S.z1 + 3.48); plot.add(post); }
    plot.add(plotBoard);
    root.add(plot);
    v.plot = plot; v.plotSign = plotSign;

    // Chantier : clôture, pancarte d'avancement, bétonnière, palette de briques.
    const site = new THREE.Group();
    const fenceMat = new THREE.MeshStandardMaterial({ map: canvasTexture(128, 64, (g, w, h) => {
      g.fillStyle = '#f4f4f0'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#d9673a'; for (let i = -2; i < 6; i++) { g.beginPath(); g.moveTo(i * 32, h); g.lineTo(i * 32 + 16, h); g.lineTo(i * 32 + 48, 0); g.lineTo(i * 32 + 32, 0); g.fill(); }
    }), roughness: 0.6, side: THREE.DoubleSide });
    const fx0 = S.x0 - 0.6, fx1 = S.x1 + 0.6, fz0 = S.z0 - 0.6, fz1 = S.z1 + 0.6;
    const fence = (x0, z0, x1, z1) => {
      const len = Math.hypot(x1 - x0, z1 - z0);
      const p = new THREE.Mesh(new THREE.PlaneGeometry(len, 1.1), fenceMat);
      p.position.set((x0 + x1) / 2, 0.6, (z0 + z1) / 2);
      p.rotation.y = -Math.atan2(z1 - z0, x1 - x0);
      site.add(p);
      for (let k = 0; k <= Math.ceil(len / 2); k++) {
        const t = k / Math.ceil(len / 2);
        const foot = boxMesh(0.5, 0.12, 0.25, std(0x3a3f45)); foot.position.set(x0 + (x1 - x0) * t, 0.06, z0 + (z1 - z0) * t);
        site.add(foot);
      }
    };
    fence(fx0, fz0, fx1, fz0); fence(fx0, fz1, fx1, fz1); fence(fx0, fz0, fx0, fz1); fence(fx1, fz0, fx1, fz1);
    const siteSign = board(512, 256, (g, w, h, p) => {
      g.fillStyle = '#ffd21a'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#1b2420'; g.font = '800 40px Outfit, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(`${L('CHANTIER', 'BUILDING SITE')} · ${F.name.toUpperCase()}`, w / 2, 52);
      g.fillStyle = 'rgba(0,0,0,0.15)'; g.fillRect(40, 110, w - 80, 46);
      g.fillStyle = '#1f6b4a'; g.fillRect(40, 110, (w - 80) * (p ?? 0), 46);
      g.fillStyle = '#1b2420'; g.font = '700 36px Outfit, Arial';
      g.fillText(`${Math.floor((p ?? 0) * 100)}${EN ? '' : ' '}%`, w / 2, 205);
    });
    const siteBoard = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.9), new THREE.MeshStandardMaterial({ map: siteSign.tex, roughness: 0.6 }));
    siteBoard.position.set(cx, 1.6, fz1 + 0.05);
    site.add(siteBoard);
    // Bétonnière.
    const mixer = new THREE.Group();
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 0.7, 16), std(0xff8c1a, { roughness: 0.5 }));
    drum.rotation.z = 1.1; drum.position.y = 0.8;
    mixer.add(drum, boxMesh(0.8, 0.5, 0.5, std(0x3a3f45)));
    mixer.children[1].position.y = 0.3;
    mixer.position.set(S.side < 0 ? fx1 + 1.2 : fx0 - 1.2, 0, fz1 - 1);
    site.add(mixer);
    v.drum = drum;
    // Palette de parpaings.
    const bricks = new THREE.Group();
    for (let i = 0; i < 12; i++) { const b = boxMesh(0.4, 0.2, 0.2, std(0xa9a9a2, { roughness: 0.95 })); b.position.set((i % 3) * 0.42 - 0.42, 0.22 + Math.floor(i / 6) * 0.21, (Math.floor(i / 3) % 2) * 0.22 - 0.11); bricks.add(b); }
    bricks.add(boxMesh(1.3, 0.12, 0.5, std(0xb38b5d)));
    bricks.children[bricks.children.length - 1].position.y = 0.06;
    bricks.position.set(S.side < 0 ? fx1 + 1.2 : fx0 - 1.2, 0, fz0 + 1.5);
    site.add(bricks);
    site.visible = false;
    root.add(site);
    v.site = site; v.siteSign = siteSign;

    // --- Bâtiment : chaque pièce apparaît à son étape du chantier ([début, fin] de l'avancement).
    const building = new THREE.Group();
    root.add(building);
    v.building = building;
    const part = (mesh, x, y, z, stage, rise = true) => {
      const holder = new THREE.Group();
      holder.position.set(x, y, z);
      holder.add(mesh);
      if (rise) mesh.position.y += mesh.geometry.parameters?.height / 2 || 0;
      holder.userData.stage = stage;
      building.add(holder);
      v.parts.push(holder);
      return holder;
    };
    const conc = concreteTexture();
    const slabMat = pbr('Concrete034', { repeat: [W / 2, 1], tint: 0xc9c5bc }) ?? new THREE.MeshStandardMaterial({ map: conc, roughness: 0.9 });
    part(boxMesh(W + 0.4, 0.12, D + 0.4, slabMat), cx, 0, cz, [0.02, 0.12]);
    // Carrelage intérieur.
    const tiles = canvasTexture(256, 256, (g, w, h) => {
      g.fillStyle = '#e9e4da'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#c9c2b4'; g.lineWidth = 3;
      for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, h); g.moveTo(0, i * 64); g.lineTo(w, i * 64); g.stroke(); }
    }, { repeat: [W / 1.2, D / 1.2] });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.3, D - 0.3), pbr('Tiles107', { repeat: [W / 1.2, D / 1.2], roughness: 0.8 }) ?? new THREE.MeshStandardMaterial({ map: tiles, roughness: 0.5 }));
    floor.rotation.x = -Math.PI / 2;
    const fl = part(floor, cx, 0.125, cz, [0.12, 0.16], false);
    fl.children[0].receiveShadow = true;

    const clad = cladTexture().clone(); clad.needsUpdate = true;
    clad.wrapS = clad.wrapT = THREE.RepeatWrapping; clad.repeat.set(2, 1);
    const wallMat = pbr('WoodSiding008', { repeat: [W / 2.2, 1.3], tint: T.wall, normalScale: 1.2 }) ?? new THREE.MeshStandardMaterial({ map: clad, color: T.wall, roughness: 0.75 });
    const inner = pbr('Plaster001', { repeat: [2, 1], tint: 0xf1ede4 }) ?? std(0xf4f1ea, { roughness: 0.9 });
    const t = 0.25;
    const wallMats = [wallMat, inner, wallMat, wallMat, wallMat, inner];
    // Murs : fond, côté extérieur, côté porte (avec porte de service), qui montent rangée par rangée.
    part(boxMesh(W, H, t, wallMats), cx, 0.12, S.z0, [0.18, 0.55]);
    const outer = S.side < 0 ? S.x0 : S.x1;
    part(boxMesh(t, H, D, wallMats), outer, 0.12, cz, [0.22, 0.6]);
    const d = S.door;
    part(boxMesh(t, H, d.z0 - S.z0, wallMats), d.x, 0.12, (S.z0 + d.z0) / 2, [0.24, 0.6]);
    part(boxMesh(t, H, S.z1 - d.z1, wallMats), d.x, 0.12, (d.z1 + S.z1) / 2, [0.26, 0.62]);
    part(boxMesh(t, H - 2.2, d.z1 - d.z0, wallMats), d.x, 2.32, (d.z0 + d.z1) / 2, [0.58, 0.64]);
    // Poteaux d'angle côté comptoir et linteau.
    const postMat = std(0x2a2f33, { metalness: 0.5, roughness: 0.4 });
    for (const x of [S.x0 + 0.12, S.x1 - 0.12]) part(boxMesh(0.2, H, 0.2, postMat), x, 0.12, S.z1 - 0.1, [0.3, 0.62]);
    part(boxMesh(W, 0.5, 0.22, wallMat), cx, H - 0.38, S.z1 - 0.1, [0.62, 0.68]);
    // Toit et auvent rayé.
    part(boxMesh(W + 0.6, 0.18, D + 0.8, std(0x3b4045, { roughness: 0.8 })), cx, H + 0.12, cz - 0.1, [0.66, 0.76]);
    const awnTex = stripeTexture(...T.stripe); awnTex.wrapS = THREE.RepeatWrapping; awnTex.repeat.set(W / 2, 1);
    const awning = new THREE.Mesh(new THREE.PlaneGeometry(W + 0.4, 1.5), new THREE.MeshStandardMaterial({ map: awnTex, roughness: 0.8, side: THREE.DoubleSide }));
    awning.rotation.x = -Math.PI / 2 + 0.45;
    awning.castShadow = true;
    const awn = part(awning, cx, H - 0.05, S.z1 + 0.65, [0.78, 0.86], false);
    awn.children[0].position.y = -0.3;
    // Comptoir de service en bois, plateau clair.
    const cnt = S.counter;
    part(boxMesh(W, cnt.top - 0.05, cnt.maxZ - cnt.minZ, [wallMat, wallMat, inner, inner, wallMat, inner]), cx, 0.12, (cnt.minZ + cnt.maxZ) / 2, [0.72, 0.82]);
    const top = std(0xf5f3ef, { roughness: 0.3 });
    part(boxMesh(W + 0.1, 0.06, cnt.maxZ - cnt.minZ + 0.14, top), cx, cnt.top + 0.06, (cnt.minZ + cnt.maxZ) / 2, [0.8, 0.84], false);
    // Enseigne.
    const signB = board(1024, 220, g => {
      g.fillStyle = '#1b2420'; g.fillRect(0, 0, 1024, 220);
      g.fillStyle = '#' + T.accent.toString(16).padStart(6, '0'); g.fillRect(0, 190, 1024, 30);
      g.fillStyle = '#fff'; g.font = '800 130px Outfit, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(T.title, 512, 100);
    });
    signB.redraw();
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 0.78), new THREE.MeshStandardMaterial({ map: signB.tex, emissive: 0xffffff, emissiveMap: signB.tex, emissiveIntensity: 0.3 }));
    const sg = part(sign, cx, H + 0.62, S.z1 + 0.32, [0.9, 0.95], false);
    v.signMat = sign.material;
    // Ardoise des prix, au fond (redessinée quand les prix changent).
    const menu = board(512, 384, (g, w, h, prices) => {
      g.fillStyle = '#20262a'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#8a6b45'; g.lineWidth = 14; g.strokeRect(7, 7, w - 14, h - 14);
      g.fillStyle = '#f4f1ea'; g.font = '700 40px Outfit, Arial'; g.textAlign = 'center';
      g.fillText(key === 'buvette' ? L('À BOIRE', 'DRINKS') : L('À MANGER', 'FOOD'), w / 2, 62);
      g.font = '500 32px Outfit, Arial';
      T.items.forEach((id, i) => {
        g.textAlign = 'left'; g.fillStyle = state.level >= PRODUCTS[id].level ? '#f4f1ea' : 'rgba(244,241,234,0.35)';
        g.fillText(PRODUCTS[id].short, 40, 130 + i * 62);
        g.textAlign = 'right'; g.fillText(prices ? fmtMoney(prices[id]) : '', w - 40, 130 + i * 62);
      });
    });
    const menuMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.05), new THREE.MeshStandardMaterial({ map: menu.tex, roughness: 0.8 }));
    part(menuMesh, cx, 1.95, S.z0 + 0.14, [0.92, 0.96], false);
    v.menu = menu;
    // Lumière intérieure (dalle émissive).
    const lamp = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.5), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2d8, emissiveIntensity: 1.1 }));
    lamp.rotation.x = Math.PI / 2;
    part(lamp, cx, H + 0.02, cz, [0.94, 0.97], false);

    // Accessoires sur le comptoir : tireuse à bière et verres, ou vitrine et presse à panini.
    const props = new THREE.Group();
    const chrome = std(0xd8dde2, { metalness: 0.9, roughness: 0.2 });
    chrome.userData.reflective = true;
    if (key === 'buvette') {
      const tap = new THREE.Group();
      tap.add(boxMesh(0.5, 0.36, 0.14, chrome));
      tap.children[0].position.y = 0.18;
      for (let i = 0; i < 3; i++) {
        const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.012, 0.2, 10), std([0xc0392b, 0xf2c94c, 0x1f6b4a][i]));
        handle.position.set(-0.15 + i * 0.15, 0.46, 0.04);
        const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.08, 8), chrome);
        spout.position.set(-0.15 + i * 0.15, 0.28, 0.1); spout.rotation.x = Math.PI / 2;
        tap.add(handle, spout);
      }
      tap.position.set(cx - 1.2, cnt.top + 0.09, (cnt.minZ + cnt.maxZ) / 2);
      props.add(tap);
      const glassMat = new THREE.MeshStandardMaterial({ color: 0xf6e7a8, roughness: 0.05, transparent: true, opacity: 0.6 });
      for (let i = 0; i < 4; i++) {
        const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.032, 0.15, 14), glassMat);
        glass.position.set(cx + 0.5 + i * 0.13, cnt.top + 0.165, (cnt.minZ + cnt.maxZ) / 2 + 0.1);
        props.add(glass);
      }
      // Tonneaux devant la buvette.
      for (const [dx, dz] of [[-0.6, 0.6], [0.6, 0.65]]) {
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.8, 18), std(0x8a5a32, { roughness: 0.8 }));
        barrel.position.set((S.side < 0 ? S.x0 : S.x1) + dx * -S.side, 0.4, S.z1 + dz);
        barrel.castShadow = true;
        props.add(barrel);
      }
    } else {
      const caseMat = new THREE.MeshStandardMaterial({ color: 0xdff1f7, roughness: 0.05, transparent: true, opacity: 0.35, depthWrite: false });
      caseMat.userData.reflective = true;
      const vitrine = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.42, 0.5), caseMat);
      vitrine.position.set(cx + 0.9, cnt.top + 0.3, (cnt.minZ + cnt.maxZ) / 2);
      props.add(vitrine);
      for (let i = 0; i < 5; i++) {
        const m = productMesh(['sandwich', 'panini', 'pizza', 'sandwich', 'cookie'][i]);
        m.position.set(cx + 0.3 + i * 0.3, cnt.top + 0.1, (cnt.minZ + cnt.maxZ) / 2);
        props.add(m);
      }
      const grill = new THREE.Group();
      grill.add(boxMesh(0.5, 0.12, 0.4, chrome), boxMesh(0.5, 0.1, 0.4, std(0x1b2420)));
      grill.children[0].position.y = 0.06; grill.children[1].position.y = 0.17;
      grill.position.set(cx - 1.3, cnt.top + 0.09, (cnt.minZ + cnt.maxZ) / 2);
      props.add(grill);
    }
    props.traverse(o => { if (o.isMesh) o.castShadow = true; });
    const ph = new THREE.Group(); ph.add(props); ph.userData.stage = [0.96, 1]; building.add(ph); v.parts.push(ph);

    // Échafaudage pendant la montée des murs.
    const scaffold = new THREE.Group();
    const tube = std(0x9aa3a8, { metalness: 0.6, roughness: 0.4 });
    const plank = std(0xb38b5d, { roughness: 0.9 });
    for (const [x, z] of [[S.x0 - 0.5, S.z0 - 0.5], [S.x1 + 0.5, S.z0 - 0.5], [S.x0 - 0.5, S.z1 + 0.4], [S.x1 + 0.5, S.z1 + 0.4], [cx, S.z0 - 0.5], [cx, S.z1 + 0.4]]) {
      const p = boxMesh(0.06, 3.4, 0.06, tube); p.position.set(x, 1.7, z); scaffold.add(p);
    }
    for (const y of [1.2, 2.4]) {
      for (const z of [S.z0 - 0.5, S.z1 + 0.4]) { const b = boxMesh(W + 1, 0.05, 0.4, plank); b.position.set(cx, y, z); scaffold.add(b); }
    }
    scaffold.visible = false;
    root.add(scaffold);
    v.scaffold = scaffold;

    // Terrasse : dallage, tables, parasols, guirlande lumineuse (visible une fois terminé).
    const terrace = new THREE.Group();
    const tt = conc.clone(); tt.needsUpdate = true; tt.wrapS = tt.wrapT = THREE.RepeatWrapping; tt.repeat.set(5, 3);
    const paveMat = pbr('PavingStones136', { repeat: [(W + 2) / 2.4, 6.4 / 2.4] });
    const pave = new THREE.Mesh(new THREE.PlaneGeometry(W + 2, 6.4), paveMat ? breakTiling(paveMat, { variation: 0.1 }) : new THREE.MeshStandardMaterial({ map: tt, color: 0xe8e2d6, roughness: 0.9 }));
    pave.rotation.x = -Math.PI / 2; pave.position.set(cx, 0.018, S.z1 + 3.2); pave.receiveShadow = true;
    terrace.add(pave);
    const wood = std(0x9b7a4a, { roughness: 0.8 });
    const tableTop = pbr('WoodFloor051', { repeat: [0.5, 0.5], tint: 0xd8c8b0 }) ?? wood;
    const canvasMat = new THREE.MeshStandardMaterial({ map: stripeTexture(...T.stripe), roughness: 0.85, side: THREE.DoubleSide });
    for (const tb of S.tables) {
      const table = new THREE.Group();
      // Table de bistrot : plateau en bois sur pied fonte, chaises de terrasse tournées vers la table.
      const topM = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.04, 32), tableTop); topM.position.y = 0.74;
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.012, 6, 40).rotateX(Math.PI / 2), postMat); rim.position.y = 0.74;
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.72, 10), postMat); leg.position.y = 0.37;
      const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.26, 0.05, 20), postMat); foot.position.y = 0.025;
      table.add(topM, rim, leg, foot);
      for (const [sx, sz] of [[0.85, 0], [-0.85, 0], [0, 0.85], [0, -0.85]]) {
        const chair = modelAtHeight('plastic_monobloc_chair_01', 0.82);
        if (chair) { chair.position.set(sx, 0, sz); chair.rotation.y = Math.atan2(-sx, -sz); table.add(chair); continue; }
        const stool = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.45, 12), wood);
        stool.position.set(sx, 0.225, sz);
        table.add(stool);
      }
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.4, 8), postMat); pole.position.y = 1.2;
      const shade = new THREE.Mesh(parasolGeo ??= parasolGeometry(), canvasMat); shade.position.y = 2.08;
      table.add(pole, shade);
      table.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      table.position.set(tb.x, 0, tb.z);
      terrace.add(table);
    }
    // Guirlande d'ampoules entre deux mâts.
    const bulbs = new THREE.MeshStandardMaterial({ color: 0xfff2c4, emissive: 0xffd27a, emissiveIntensity: 0.2 });
    const mastX = [S.x0 - 0.8, S.x1 + 0.8];
    for (const x of mastX) { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 3.2, 8), postMat); m.position.set(x, 1.6, S.z1 + 5.7); m.castShadow = true; terrace.add(m); }
    const wirePts = [];
    for (let i = 0; i <= 16; i++) {
      const u = i / 16, x = mastX[0] + (mastX[1] - mastX[0]) * u;
      const y = 3.05 - Math.sin(u * Math.PI) * 0.6;
      wirePts.push(new THREE.Vector3(x, y + 0.06, S.z1 + 5.7));
      if (i === 0 || i === 16) continue;
      const b = new THREE.Mesh(bulbGeo ??= new THREE.SphereGeometry(0.035, 10, 8).scale(1, 1.25, 1), bulbs);
      b.position.set(x, y, S.z1 + 5.7);
      const sock = new THREE.Mesh(sockGeo ??= new THREE.CylinderGeometry(0.014, 0.014, 0.04, 8), postMat);
      sock.position.set(x, y + 0.045, S.z1 + 5.7);
      terrace.add(b, sock);
    }
    const wire = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(wirePts), 48, 0.006, 4), postMat);
    terrace.add(wire);
    v.bulbs = bulbs;
    mergeStatic(terrace);
    terrace.visible = false;
    root.add(terrace);
    v.terrace = terrace;

    // Volume de visée : le comptoir de service.
    const hit = new THREE.Mesh(new THREE.BoxGeometry(W, 0.9, 1.6), new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.set(cx, cnt.top + 0.2, (cnt.minZ + cnt.maxZ) / 2);
    hit.userData.interact = { kind: 'stand', stand: key };
    hit.visible = true;
    v.hit = hit;

    // Ouvriers (personnages décoratifs) qui travaillent sur le chantier.
    const spots = [
      { x: S.x0 - 1.2, z: cz, rot: Math.PI / 2 }, { x: S.x1 + 1.2, z: S.z0 + 1, rot: -Math.PI / 2 },
      { x: cx, z: S.z1 + 1.4, rot: Math.PI }, { x: cx - 1.5, z: S.z0 - 1.3, rot: 0 },
    ];
    v.makeWorkers = () => {
      for (let i = 0; i < 3; i++) {
        const p = { id: -1 - i, role: 'worker', seed: (i + 1) * 0.173 + (S.side > 0 ? 0.5 : 0), x: spots[i].x, z: spots[i].z, rot: spots[i].rot, action: 'hammer', path: [], look: null, k: i, t: Math.random() * 6 };
        const wv = createPersonView(p);
        wv.root.position.set(p.x, 0, p.z);
        root.add(wv.root);
        v.workers.push({ p, view: wv });
      }
    };
    return v;
  }

  function applyStand(key, instant = false) {
    const v = views[key], f = state.facilities[key], F = FACILITIES[key];
    const p = f.built ? 1 : f.building ? f.progress : 0;
    v.plot.visible = !f.built && !f.building;
    if (v.plot.visible) {
      const ok = state.level >= F.level;
      v.plotSign.redraw([`${L('EMPLACEMENT', 'PLOT FOR')} ${F.name.toUpperCase()}`, fmtMoney0(F.price), ok ? L('Ordinateur › Club', 'Computer › Club') : L(`Niveau ${F.level} requis`, `Level ${F.level} required`)]);
    }
    v.site.visible = !!f.building;
    v.scaffold.visible = !!f.building && p > 0.14 && p < 0.9;
    v.terrace.visible = !!f.built;
    if (f.building && !v.workers.length) v.makeWorkers();
    if (!f.building && v.workers.length) { for (const w of v.workers) v.root.remove(w.view.root); v.workers.length = 0; }
    for (const part of v.parts) {
      const [a, b] = part.userData.stage;
      const k = clamp((p - a) / (b - a), 0, 1);
      part.visible = k > 0;
      part.scale.y = Math.max(0.001, k);
    }
    if (f.building) v.siteSign.redraw(p);
    if (f.built && !v.built) {
      v.built = true;
      interactables.push(v.hit);
      v.root.add(v.hit);
      v.menu.redraw(state.prices);
      // Construction terminée : les murs, le comptoir et le décor ne bougent plus, on les fusionne.
      for (const part of v.parts) { part.scale.y = 1; part.visible = true; }
      mergeStatic(v.building);
    }
  }

  // --- Parking payant : barrière levante et horodateur -----------------------------------------------
  function buildParking() {
    const root = new THREE.Group();
    scene.add(root);
    const bx = PARKING_ROAD.barrierX, lane = PARKING_LANE_Z - 0.8;
    const group = new THREE.Group();
    const post = boxMesh(0.35, 1.1, 0.35, std(0xf2c94c, { roughness: 0.5 }));
    post.position.set(bx, 0.55, lane - 1.9);
    const arm = new THREE.Group();
    arm.position.set(bx, 1.0, lane - 1.9);
    const stripes = new THREE.MeshStandardMaterial({ map: canvasTexture(256, 16, (g, w, h) => { for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#c0392b' : '#ffffff'; g.fillRect(i * 32, 0, 32, h); } }), roughness: 0.5 });
    const bar = boxMesh(0.08, 0.08, 3.6, stripes);
    bar.position.z = 1.8;
    arm.add(bar);
    // Horodateur.
    const machine = new THREE.Group();
    machine.add(boxMesh(0.5, 1.5, 0.35, std(0x1f6b4a, { roughness: 0.5 })));
    machine.children[0].position.y = 0.75;
    const scr = board(256, 160, g => {
      g.fillStyle = '#c8e6c9'; g.fillRect(0, 0, 256, 160);
      g.fillStyle = '#123'; g.font = '700 40px Outfit, Arial'; g.textAlign = 'center';
      g.fillText('PARKING', 128, 60); g.font = '600 30px Outfit, Arial'; g.fillText('Ticket', 128, 115);
    });
    scr.redraw();
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.22), new THREE.MeshStandardMaterial({ map: scr.tex, emissive: 0xffffff, emissiveMap: scr.tex, emissiveIntensity: 0.4 }));
    screen.position.set(0, 1.15, 0.18);
    machine.add(screen);
    const pSign = board(256, 256, g => {
      g.fillStyle = '#2f6fe0'; g.fillRect(0, 0, 256, 256);
      g.fillStyle = '#fff'; g.font = '800 190px Outfit, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText('P', 128, 140);
    });
    pSign.redraw();
    const pPanel = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.6), new THREE.MeshStandardMaterial({ map: pSign.tex }));
    pPanel.position.set(0, 2.2, 0); machine.add(pPanel);
    const pPole = boxMesh(0.06, 2, 0.06, std(0x9aa3a8)); pPole.position.y = 1; pPole.position.z = -0.1; machine.add(pPole);
    machine.position.set(PAY_MACHINE.x, 0, PAY_MACHINE.z);
    machine.rotation.y = Math.PI / 2;
    group.add(post, arm, machine);
    group.traverse(o => { if (o.isMesh) o.castShadow = true; });
    root.add(group);
    // Chantier du parking : plots et barrières.
    const cones = new THREE.Group();
    for (let i = 0; i < 5; i++) {
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.5, 12), std(0xff6a00, { roughness: 0.5 }));
      c.position.set(bx - 2 + i, 0.25, lane - 2.6);
      cones.add(c);
    }
    root.add(cones);
    return { group, arm, cones, open: 0 };
  }
  function applyParking() {
    const f = state.facilities.parking;
    parking.group.visible = !!f.built || (f.building && f.progress > 0.5);
    parking.group.scale.y = f.built ? 1 : clamp((f.progress - 0.5) * 2, 0.01, 1);
    parking.cones.visible = !!f.building;
  }

  for (const key of Object.keys(views)) applyStand(key, true);
  applyParking();

  let nightOn = null, t = 0;
  return {
    refresh(key) { if (key === 'parking') applyParking(); else if (views[key]) applyStand(key); },
    refreshAll() { for (const k of Object.keys(views)) applyStand(k); applyParking(); },
    refreshMenus() { for (const v of Object.values(views)) if (v.built) v.menu.redraw(state.prices); },
    // La barrière se lève quand une voiture arrive (rendu des voitures : traffic.js).
    setBarrier(open) { parking.target = open ? 1 : 0; },
    update(dt, night) {
      t += dt;
      for (const v of Object.values(views)) {
        if (v.site.visible) v.drum.rotation.y += dt * 2.5;
        for (const w of v.workers) {
          // Les ouvriers alternent travail sur place et petits déplacements.
          w.p.t -= dt;
          if (w.p.t <= 0) { w.p.t = 4 + Math.random() * 5; w.p.action = w.p.action === 'hammer' ? 'walk' : 'hammer'; w.p.target = { x: w.p.x + (Math.random() - 0.5) * 2, z: w.p.z + (Math.random() - 0.5) * 1.2 }; }
          if (w.p.action === 'walk' && w.p.target) {
            const dx = w.p.target.x - w.p.x, dz = w.p.target.z - w.p.z, d = Math.hypot(dx, dz);
            if (d > 0.05) { w.p.x += dx / d * dt * 1.1; w.p.z += dz / d * dt * 1.1; w.p.rot = Math.atan2(dx, dz); } else w.p.action = 'hammer';
          }
          w.view.update(dt, w.p);
        }
      }
      parking.open += ((parking.target ?? 0) - parking.open) * (1 - Math.exp(-4 * dt));
      parking.arm.rotation.x = -parking.open * 1.4;
      const on = night > 0.35;
      if (on !== nightOn) {
        nightOn = on;
        for (const v of Object.values(views)) { v.bulbs.emissiveIntensity = on ? 2.2 : 0.2; v.signMat.emissiveIntensity = on ? 1.1 : 0.3; }
      }
    },
  };
}
