// Extérieur : ciel photographique et cycle du jour, soleil et ombres, pelouse, allées pavées avec
// bordures, parking, route, platanes, haies, lampadaires, panneau du club.
import * as THREE from 'three';
import { carModel, CAR_TYPES } from './cars.js';
import { mergeGeometries } from './geometry.js';
import { clamp, lerp } from '../core/util.js';
import { grassTexture, concreteTexture, asphaltTexture, labelTexture } from './textures.js';
import { CLUB, COURT_SLOTS, PARKING_SPOTS } from '../game/layout.js';
import { pbr, breakTiling, modelAtHeight, assets } from './assets.js';
import { createSky } from './sky.js';
import { createTrees, hedgeMesh, updateWind } from './trees.js';
import { L } from '../core/i18n.js';

// Couleur de la lumière du soleil selon l'heure (matin, midi, coucher, nuit).
const KEYS = [
  { h: 5, sun: 0xff9a5a, top: 0x1a2440 }, { h: 7, sun: 0xffc48a, top: 0x5a7fb8 }, { h: 9.5, sun: 0xfff1de, top: 0x4b86d1 },
  { h: 16, sun: 0xffffff, top: 0x3f7fd0 }, { h: 18.5, sun: 0xffdcae, top: 0x4a7fc4 }, { h: 20.3, sun: 0xff9a50, top: 0x34508c },
  { h: 21.5, sun: 0xff7a40, top: 0x16224a }, { h: 23.5, sun: 0x223355, top: 0x0a1028 },
];
function sunColorAt(hour) {
  let a = KEYS[0], b = KEYS[KEYS.length - 1];
  for (let i = 0; i < KEYS.length - 1; i++) if (hour >= KEYS[i].h && hour <= KEYS[i + 1].h) { a = KEYS[i]; b = KEYS[i + 1]; break; }
  if (hour > KEYS[KEYS.length - 1].h) a = b;
  const t = a === b ? 0 : clamp((hour - a.h) / (b.h - a.h), 0, 1);
  return { sun: new THREE.Color(a.sun).lerp(new THREE.Color(b.sun), t), top: new THREE.Color(a.top).lerp(new THREE.Color(b.top), t) };
}

const flat = (geo, mat, x, y, z) => {
  const m = new THREE.Mesh(geo, mat);
  m.rotation.x = -Math.PI / 2; m.position.set(x, y, z);
  m.receiveShadow = true;
  return m;
};

export function createEnvironment(scene, renderer) {
  const photo = assets.ready;
  // --- Ciel ---------------------------------------------------------------------------------
  const sky = photo ? createSky(scene, renderer) : null;
  if (!sky) scene.background = new THREE.Color(0x9fc3dd);
  scene.fog = new THREE.Fog(0xcfe3f2, 70, 300);

  // --- Lumières ------------------------------------------------------------------------------
  const sun = new THREE.DirectionalLight(0xffffff, 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -32, right: 32, top: 32, bottom: -32, near: 1, far: 180 });
  sun.shadow.bias = -0.0003;
  sun.shadow.normalBias = 0.035;
  sun.shadow.radius = 3;
  scene.add(sun, sun.target);
  const hemi = new THREE.HemisphereLight(0xdfefff, 0x6a6458, photo ? 0.25 : 1.0);
  scene.add(hemi);
  // Sans ciel photographique (repli), une lumière d'ambiance remplace l'éclairage par le ciel.
  const ambient = new THREE.AmbientLight(0xfff3e4, photo ? 0 : 0.9);
  scene.add(ambient);

  // --- Sol -------------------------------------------------------------------------------------
  const grassMat = breakTiling(pbr('Grass001', { repeat: [120, 130], normalScale: 1.2 }), { variation: 0.22 })
    ?? new THREE.MeshStandardMaterial({ map: grassTexture(), roughness: 0.95 });
  scene.add(flat(new THREE.PlaneGeometry(240, 260), grassMat, 0, 0, -25));

  // Allées : dalles claires sur le parvis, grandes dalles de béton le long des courts, avec bordures.
  const curbMat = pbr('Concrete034', { repeat: [1, 1], tint: 0x9d9a92 }) ?? new THREE.MeshStandardMaterial({ color: 0xb9b6ae, roughness: 0.9 });
  const curbs = [];
  const path = (x0, x1, z0, z1, kind = 'slab', y = 0.02, curb = true) => {
    const w = x1 - x0, d = z1 - z0;
    const name = 'PavingStones128';
    const tile = kind === 'slab' ? 3.2 : 3.8;
    const m = breakTiling(pbr(name, { repeat: [w / tile, d / tile], normalScale: 1.2 }), { variation: 0.12, warm: [1.04, 1.0, 0.94] });
    if (m) scene.add(flat(new THREE.PlaneGeometry(w, d), m, (x0 + x1) / 2, y, (z0 + z1) / 2));
    else {
      const t = concreteTexture().clone(); t.needsUpdate = true; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(Math.max(1, w / 2), Math.max(1, d / 2));
      scene.add(flat(new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }), (x0 + x1) / 2, y, (z0 + z1) / 2));
    }
    // Bordures en béton sur les côtés longs.
    const bw = 0.12, bh = 0.08;
    if (!curb) return;
    if (w > d) for (const z of [z0, z1]) curbs.push(new THREE.BoxGeometry(w, bh, bw).translate((x0 + x1) / 2, bh / 2, z));
    else for (const x of [x0, x1]) curbs.push(new THREE.BoxGeometry(bw, bh, d).translate(x, bh / 2, (z0 + z1) / 2));
  };
  path(-13, 13, 14, 21, 'slab');
  path(-1.6, 1.6, 21, 26, 'slab', 0.021);
  path(-37, 37, -3.4, -0.6, 'big', 0.02, false);
  path(-1.5, 1.5, -44, -3.4, 'big', 0.021, false);
  path(-12, 12, -43.6, -41, 'big', 0.02, false);
  path(-26, -21, -42, -3.4, 'big', 0.022, false);
  path(23, 26, -16, -3.4, 'big', 0.022, false);
  path(-10.4, 10.4, -0.6, 0.02, 'big', 0.024, false);
  const curbMesh = new THREE.Mesh(mergeGeometries(curbs), curbMat);
  curbMesh.receiveShadow = true;
  scene.add(curbMesh);

  // Parking et route : enrobé photographique, marquage peint.
  const asphalt = (w, d, x, z, y = 0.012) => {
    const m = breakTiling(pbr('Asphalt025C', { repeat: [w / 5, d / 5], normalScale: 1 }), { variation: 0.1, warm: [1.0, 1.0, 1.0] })
      ?? new THREE.MeshStandardMaterial({ map: asphaltTexture(), roughness: 0.92 });
    scene.add(flat(new THREE.PlaneGeometry(w, d), m, x, y, z));
  };
  asphalt(44, 14, 0, 31, 0.01);
  for (const [x0, x1] of [[-90, -22], [22, 90]]) asphalt(x1 - x0, 5, (x0 + x1) / 2, 31, 0.012);
  const paint = new THREE.MeshStandardMaterial({ color: 0xf2f2ea, roughness: 0.75, transparent: true, opacity: 0.88, polygonOffset: true, polygonOffsetFactor: -2 });
  const lines = [];
  for (let x = -20; x <= 20; x += 2.6) {
    if (Math.abs(x) < 2.5) continue;
    for (const z of [26.2, 35.8]) lines.push(new THREE.PlaneGeometry(0.12, 4.6).rotateX(-Math.PI / 2).translate(x, 0.022, z));
  }
  for (const [x0, x1] of [[-90, -22], [22, 90]]) for (let x = x0 + 2; x < x1 - 2; x += 6) lines.push(new THREE.PlaneGeometry(3, 0.14).rotateX(-Math.PI / 2).translate(x + 1.5, 0.022, 31));
  // Symbole de place réservée au personnel.
  scene.add(new THREE.Mesh(mergeGeometries(lines), paint));

  // Obstacles extérieurs pour le joueur (haies, troncs, poteaux).
  const colliders = [];
  const block = (x, z, hx, hz) => colliders.push({ minX: x - hx, maxX: x + hx, minZ: z - hz, maxZ: z + hz });

  // --- Platanes ---------------------------------------------------------------------------------
  const spots = [];
  const blocked = (x, z) => {
    if (x > -25 && x < 25 && z > -4 && z < 39) return true;               // club-house, buvette, snack, parking
    if (Math.abs(z - 31) < 4.5) return true;                              // route d'accès
    for (const s of Object.values(COURT_SLOTS)) if (Math.abs(x - s.cx) < 14 && z < s.cz + 22 && z > s.cz - 22) return true;
    if (Math.abs(x) < 3 && z < 0) return true;
    return false;
  };
  let seed = 12345;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  for (let i = 0; i < 500 && spots.length < 60; i++) {
    const x = (rnd() * 2 - 1) * 72, z = -95 + rnd() * 150;
    if (blocked(x, z)) continue;
    if (Math.abs(x) < 44 && z > -86 && z < 0 && rnd() < 0.7) continue;  // garder les abords des courts dégagés
    if (spots.some(([sx, sz]) => Math.hypot(sx - x, sz - z) < 7)) continue;
    spots.push([x, z, 0.85 + rnd() * 0.35, rnd() * 6.28]);
  }
  // Une rangée de platanes le long de la rue.
  for (let x = -40; x <= 40; x += 8) if (Math.abs(x) > 16) spots.push([x, 40.5, 1.0 + rnd() * 0.15, rnd() * 6.28]);
  for (const [x, z, s] of spots) block(x, z, 0.32 * s, 0.32 * s);
  if (!(photo && createTrees(scene, spots))) {
    // Repli : arbres simplifiés.
    const trunkGeo = new THREE.CylinderGeometry(0.18, 0.28, 3.2, 10).translate(0, 1.6, 0);
    const crownGeo = mergeGeometries([[0, 0, 0, 2.1], [1.3, -0.4, 0.4, 1.5], [-1.2, -0.3, -0.5, 1.6]].map(([x, y, z, r]) => new THREE.SphereGeometry(r, 16, 12).translate(x, y, z)));
    const trunks = new THREE.InstancedMesh(trunkGeo, new THREE.MeshStandardMaterial({ color: 0x5b4330 }), spots.length);
    const crowns = new THREE.InstancedMesh(crownGeo, new THREE.MeshStandardMaterial({ color: 0x4a7a32 }), spots.length);
    const m = new THREE.Matrix4();
    spots.forEach(([x, z, s], i) => { trunks.setMatrixAt(i, m.makeScale(s, s, s).setPosition(x, 0, z)); crowns.setMatrixAt(i, m.makeScale(s, s, s).setPosition(x, 4.2 * s, z)); });
    trunks.castShadow = crowns.castShadow = true;
    scene.add(trunks, crowns);
  }

  // --- Haies le long du parking -------------------------------------------------------------------
  for (const [x0, x1] of [[-22, -2], [2, 22]]) {
    block((x0 + x1) / 2, 22.6, (x1 - x0) / 2, 0.45);
    const h = hedgeMesh(x1 - x0, 1.15, 0.9, x0 + 100);
    if (h) { h.position.set((x0 + x1) / 2, 0, 22.6); scene.add(h); }
    else {
      const hedge = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, 1.1, 0.9), new THREE.MeshStandardMaterial({ color: 0x3f6b2c, roughness: 0.95 }));
      hedge.position.set((x0 + x1) / 2, 0.55, 22.6);
      hedge.castShadow = hedge.receiveShadow = true;
      scene.add(hedge);
    }
  }

  // --- Lampadaires : parvis, allée des courts, parking ---------------------------------------------------
  const lamps = [];
  if (photo) {
    for (const [x, z] of [[-12.4, 20.4], [12.4, 20.4], [-3, 25.5], [3, 25.5], [-30, -0.2], [-17, -0.2], [17, -0.2], [30, -0.2], [-21, 37.8], [21, 37.8], [-21, 24], [21, 24]]) {
      const l = modelAtHeight('street_lamp_01', 3.6);
      if (!l) break;
      l.position.set(x, 0, z);
      scene.add(l);
      block(x, z, 0.18, 0.18);
      l.traverse(o => { if (o.isMesh && /bulb|glass/i.test(o.material.name)) { o.material = o.material.clone(); lamps.push(o.material); } });
    }
  }

  // --- Panneau d'entrée du club ---------------------------------------------------------------------
  const signTex = labelTexture(L('TENNIS CLUB DES PLATANES', 'PLANE TREES TENNIS CLUB'), { w: 1024, h: 160, bg: '#1f6b4a', fg: '#ffffff', font: '700 70px Outfit, Arial, sans-serif', accent: '#e4f05a' });
  const green = new THREE.MeshStandardMaterial({ color: 0x1f6b4a, roughness: 0.5 });
  const face = new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.45 });
  const board = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.8, 0.12), [green, green, green, green, face, face]);
  board.position.set(-6, 2.2, 23.2);
  board.castShadow = true;
  const postMat = new THREE.MeshStandardMaterial({ color: 0x2a2f33, metalness: 0.7, roughness: 0.35 });
  for (const s of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.6, 12), postMat);
    post.position.set(-6 + s * 2.3, 1.3, 23.2);
    post.castShadow = true;
    block(-6 + s * 2.3, 23.2, 0.12, 0.12);
    scene.add(post);
  }
  scene.add(board);

  // --- Heure du jour ------------------------------------------------------------------------------
  const sunDir = new THREE.Vector3();
  let t0 = performance.now();
  function setTime(minute, focus) {
    const hour = minute / 60;
    const c = sunColorAt(hour);
    // Course du soleil : lever à l'est vers 6 h, coucher à l'ouest vers 21 h.
    const f = clamp((hour - 6) / 15, 0, 1);
    const elev = Math.sin(f * Math.PI) * THREE.MathUtils.degToRad(58) - (hour > 21 ? (hour - 21) * 0.08 : 0) - (hour < 6 ? (6 - hour) * 0.08 : 0);
    const az = lerp(THREE.MathUtils.degToRad(100), THREE.MathUtils.degToRad(265), f);
    sunDir.set(Math.sin(az) * Math.cos(elev), Math.sin(elev), -Math.cos(az) * Math.cos(elev) * 0.6 + 0.35).normalize();
    const day = clamp(sunDir.y * 6, 0, 1);
    sun.color.copy(c.sun);
    sun.intensity = 3.0 * day;
    hemi.intensity = (photo ? 0.25 : lerp(0.35, 0.85, clamp(sunDir.y * 3 + 0.15, 0, 1)));
    hemi.color.copy(c.top).lerp(new THREE.Color(0xffffff), 0.6);
    ambient.intensity = photo ? 0 : lerp(0.75, 0.9, day);
    let night = 1 - day;
    if (sky) {
      const r = sky.update(hour, sunDir, c.sun);
      scene.fog.color.copy(r.fogColor);
      sky.dome.position.copy(focus);
      // L'éclairage par le ciel baisse la nuit ; les éclairages du club prennent le relais.
      scene.environmentIntensity = lerp(1.0, 0.18, r.night);
      night = Math.max(night, r.night);
    } else scene.fog.color.set(0xcfe3f2);
    sun.position.copy(focus).addScaledVector(sunDir, 90);
    sun.target.position.copy(focus);
    for (const m of lamps) { m.emissive?.set(0xffd9a0); if (m.emissive) m.emissiveIntensity = night > 0.4 ? 3 : 0; }
    updateWind((performance.now() - t0) / 1000);
    return { night, hour };
  }

  return { setTime, sun, colliders };
}

// Voiture (modèle dans cars.js), exportée pour les voitures animées du parking.
export function car(x, z, color, rot, type) {
  const g = carModel(color, type ?? CAR_TYPES[Math.floor(Math.random() * CAR_TYPES.length)]);
  g.position.set(x, 0, z);
  g.rotation.y = rot + Math.PI / 2;
  return g;
}
