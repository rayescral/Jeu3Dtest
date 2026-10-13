// Extérieur : ciel et cycle du jour, soleil et ombres, pelouse, allées, parking, arbres et haies.
import * as THREE from 'three';
import { mergeGeometries } from './geometry.js';
import { clamp, lerp } from '../core/util.js';
import { grassTexture, concreteTexture, asphaltTexture, labelTexture } from './textures.js';
import { CLUB, COURT_SLOTS } from '../game/layout.js';

const SKY_VERT = /* glsl */`
  varying vec3 vDir;
  void main() {
    vDir = normalize((modelMatrix * vec4(position, 0.0)).xyz);
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww;
  }`;
const SKY_FRAG = /* glsl */`
  uniform vec3 uTop, uHorizon, uGround, uSunColor, uSunDir;
  varying vec3 vDir;
  void main() {
    vec3 d = normalize(vDir);
    float h = d.y;
    vec3 col = h > 0.0 ? mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(uHorizon, uGround, clamp(-h * 4.0, 0.0, 1.0));
    float s = max(dot(d, normalize(uSunDir)), 0.0);
    col += uSunColor * (pow(s, 900.0) * 6.0 + pow(s, 12.0) * 0.35);
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

// Couleurs du ciel selon l'heure (matin, midi, coucher, nuit).
const KEYS = [
  { h: 6, top: 0x253a66, hor: 0xe9a679, sun: 0xffb070 },
  { h: 9, top: 0x4b86d1, hor: 0xcfe3f2, sun: 0xfff1d8 },
  { h: 13, top: 0x3f7fd0, hor: 0xd5e8f5, sun: 0xffffff },
  { h: 18, top: 0x4a7fc4, hor: 0xe8dcc4, sun: 0xffe2b0 },
  { h: 20.3, top: 0x34508c, hor: 0xf0a06a, sun: 0xff9a50 },
  { h: 21.5, top: 0x16224a, hor: 0x5a4a6a, sun: 0xff7a40 },
  { h: 23.5, top: 0x0a1028, hor: 0x1e2742, sun: 0x223355 },
];

function skyAt(hour) {
  let a = KEYS[0], b = KEYS[KEYS.length - 1];
  for (let i = 0; i < KEYS.length - 1; i++) if (hour >= KEYS[i].h && hour <= KEYS[i + 1].h) { a = KEYS[i]; b = KEYS[i + 1]; break; }
  if (hour > KEYS[KEYS.length - 1].h) a = b;
  const t = a === b ? 0 : clamp((hour - a.h) / (b.h - a.h), 0, 1);
  const mix = (x, y) => new THREE.Color(x).lerp(new THREE.Color(y), t);
  return { top: mix(a.top, b.top), hor: mix(a.hor, b.hor), sun: mix(a.sun, b.sun) };
}

export function createEnvironment(scene, renderer) {
  // --- Ciel ---------------------------------------------------------------------------------
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      uTop: { value: new THREE.Color() }, uHorizon: { value: new THREE.Color() }, uGround: { value: new THREE.Color(0x3a4a32) },
      uSunColor: { value: new THREE.Color() }, uSunDir: { value: new THREE.Vector3(0, 1, 0) },
    },
    vertexShader: SKY_VERT, fragmentShader: SKY_FRAG, side: THREE.BackSide, depthWrite: false,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(500, 32, 16), skyMat);
  sky.frustumCulled = false;
  sky.renderOrder = -1;
  scene.add(sky);
  scene.fog = new THREE.Fog(0xcfe3f2, 90, 260);

  // Environnement pour les reflets (vitres, métal, vernis) : rendu du ciel seul.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  const envSky = new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), skyMat);
  envScene.add(envSky);
  let envRT = null;

  // --- Lumières ------------------------------------------------------------------------------
  const sun = new THREE.DirectionalLight(0xffffff, 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, near: 1, far: 160 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.03;
  scene.add(sun, sun.target);
  const hemi = new THREE.HemisphereLight(0xdfefff, 0x8a8272, 1.0);
  scene.add(hemi);
  // Lumière d'appoint uniforme (très peu coûteuse) : elle remplace les reflets diffus de l'environnement
  // et éclaire l'intérieur du club-house, où le toit bloque le soleil.
  const ambient = new THREE.AmbientLight(0xfff3e4, 0.9);
  scene.add(ambient);

  // --- Sol -------------------------------------------------------------------------------------
  const grass = new THREE.Mesh(new THREE.PlaneGeometry(240, 260), new THREE.MeshStandardMaterial({ map: grassTexture(), roughness: 0.95 }));
  grass.rotation.x = -Math.PI / 2;
  grass.position.set(0, 0, -25);
  grass.receiveShadow = true;
  scene.add(grass);

  const conc = concreteTexture();
  const path = (x0, x1, z0, z1, y = 0.015) => {
    const t = conc.clone(); t.needsUpdate = true;
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(Math.max(1, (x1 - x0) / 2), Math.max(1, (z1 - z0) / 2));
    const m = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }));
    m.rotation.x = -Math.PI / 2;
    m.position.set((x0 + x1) / 2, y, (z0 + z1) / 2);
    m.receiveShadow = true;
    scene.add(m);
  };
  // Parvis, allées vers les courts.
  path(-13, 13, 14, 21);
  path(-1.6, 1.6, 21, 26);
  path(-37, 37, -3.4, -0.6);
  path(-1.5, 1.5, -44, -3.4);
  path(-12, 12, -43.6, -41);
  path(-24, -21, -42, -3.4);
  path(-26, -23, -42, -3.4, 0.016);
  path(23, 26, -16, -3.4, 0.016);
  path(-10.4, 10.4, -0.6, 0.02, 0.02);

  // Parking.
  const asphalt = new THREE.Mesh(new THREE.PlaneGeometry(44, 14), new THREE.MeshStandardMaterial({ map: asphaltTexture(), roughness: 0.92 }));
  asphalt.rotation.x = -Math.PI / 2; asphalt.position.set(0, 0.01, 31);
  asphalt.receiveShadow = true;
  scene.add(asphalt);
  const lineMat = new THREE.MeshStandardMaterial({ color: 0xf2f2ee, roughness: 0.7 });
  for (let x = -20; x <= 20; x += 2.6) {
    if (Math.abs(x) < 2.5) continue;
    for (const z of [26.2, 35.8]) {
      const l = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 4.6), lineMat);
      l.rotation.x = -Math.PI / 2; l.position.set(x, 0.02, z);
      scene.add(l);
    }
  }
  // Les voitures (garées ou en mouvement) sont gérées par traffic.js.
  // Obstacles extérieurs pour le joueur (haies, troncs, poteaux).
  const colliders = [];
  const block = (x, z, hx, hz) => colliders.push({ minX: x - hx, maxX: x + hx, minZ: z - hz, maxZ: z + hz });
  // Route d'accès au parking, de part et d'autre.
  for (const [x0, x1] of [[-90, -22], [22, 90]]) {
    const t = asphaltTexture().clone(); t.needsUpdate = true;
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set((x1 - x0) / 8, 1);
    const road = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, 5), new THREE.MeshStandardMaterial({ map: t, roughness: 0.92 }));
    road.rotation.x = -Math.PI / 2; road.position.set((x0 + x1) / 2, 0.012, 31);
    road.receiveShadow = true;
    scene.add(road);
    for (let x = x0 + 2; x < x1 - 2; x += 6) {
      const dash = new THREE.Mesh(new THREE.PlaneGeometry(3, 0.14), lineMat);
      dash.rotation.x = -Math.PI / 2; dash.position.set(x + 1.5, 0.02, 31);
      scene.add(dash);
    }
  }

  // --- Arbres et haies -------------------------------------------------------------------------
  const trunkGeo = new THREE.CylinderGeometry(0.18, 0.28, 3.2, 10).translate(0, 1.6, 0);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5b4330, roughness: 0.9 });
  const blobs = [[0, 0, 0, 2.1], [1.3, -0.4, 0.4, 1.5], [-1.2, -0.3, -0.5, 1.6], [0.3, 1.1, -0.6, 1.5], [-0.4, 0.7, 1.1, 1.4], [0.6, -0.8, -1.2, 1.3]];
  const crownGeo = mergeGeometries(blobs.map(([x, y, z, r]) => new THREE.SphereGeometry(r, 20, 14).translate(x, y, z)));
  const crownMat = new THREE.MeshStandardMaterial({ color: 0x4a7a32, roughness: 0.85 });
  const spots = [];
  const blocked = (x, z) => {
    if (x > -14 && x < 14 && z > -4 && z < 39) return true;               // club-house, parvis, parking
    if (x > -25 && x < 25 && z > -4 && z < 39) return true;               // buvette, snack, terrasses, parking
    if (Math.abs(z - 31) < 4.5) return true;                              // route d'accès
    for (const s of Object.values(COURT_SLOTS)) if (Math.abs(x - s.cx) < 14 && z < s.cz + 22 && z > s.cz - 22) return true;
    if (Math.abs(x) < 3 && z < 0) return true;
    return false;
  };
  for (let i = 0; i < 400 && spots.length < 70; i++) {
    const x = (Math.random() * 2 - 1) * 70, z = -95 + Math.random() * 150;
    if (blocked(x, z)) continue;
    if (Math.abs(x) < 44 && z > -86 && z < 0 && Math.random() < 0.7) continue;  // garder les abords des courts dégagés
    spots.push([x, z, 0.8 + Math.random() * 0.6]);
  }
  // Une rangée de platanes le long de la rue.
  for (let x = -40; x <= 40; x += 8) if (Math.abs(x) > 16) spots.push([x, 40, 1.1]);
  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, spots.length);
  const crowns = new THREE.InstancedMesh(crownGeo, crownMat, spots.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), pv = new THREE.Vector3(), col = new THREE.Color();
  spots.forEach(([x, z, s], i) => {
    block(x, z, 0.32 * s, 0.32 * s);
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.random() * 6.28);
    m.compose(pv.set(x, 0, z), q, sv.set(s, s, s)); trunks.setMatrixAt(i, m);
    m.compose(pv.set(x, 4.2 * s, z), q, sv.set(s, s * (0.9 + Math.random() * 0.3), s)); crowns.setMatrixAt(i, m);
    crowns.setColorAt(i, col.setHSL(0.24 + Math.random() * 0.06, 0.45, 0.3 + Math.random() * 0.1));
  });
  trunks.castShadow = crowns.castShadow = true;
  crowns.receiveShadow = true;
  scene.add(trunks, crowns);

  // Haie le long du parking et clôture de la propriété.
  const hedgeMat = new THREE.MeshStandardMaterial({ color: 0x3f6b2c, roughness: 0.95 });
  for (const [x0, x1] of [[-22, -2], [2, 22]]) {
    block((x0 + x1) / 2, 22.6, (x1 - x0) / 2, 0.45);
    const hedge = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, 1.1, 0.9), hedgeMat);
    hedge.position.set((x0 + x1) / 2, 0.55, 22.6);
    hedge.castShadow = hedge.receiveShadow = true;
    scene.add(hedge);
  }

  // Panneau d'entrée du club.
  const signTex = labelTexture('TENNIS CLUB DES PLATANES', { w: 1024, h: 160, bg: '#1f6b4a', fg: '#ffffff', font: '700 70px Outfit, Arial, sans-serif', accent: '#e4f05a' });
  const board = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.8, 0.12), [
    new THREE.MeshStandardMaterial({ color: 0x1f6b4a }), new THREE.MeshStandardMaterial({ color: 0x1f6b4a }),
    new THREE.MeshStandardMaterial({ color: 0x1f6b4a }), new THREE.MeshStandardMaterial({ color: 0x1f6b4a }),
    new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.5 }), new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.5 }),
  ]);
  board.position.set(-6, 2.2, 23.2);
  board.castShadow = true;
  const postMat = new THREE.MeshStandardMaterial({ color: 0x2a2f33, metalness: 0.6, roughness: 0.4 });
  for (const s of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.6, 10), postMat);
    post.position.set(-6 + s * 2.3, 1.3, 23.2);
    block(-6 + s * 2.3, 23.2, 0.12, 0.12);
    scene.add(post);
  }
  scene.add(board);

  // --- Heure du jour ------------------------------------------------------------------------------
  let lastEnvHour = -10;
  const sunDir = new THREE.Vector3();
  function setTime(minute, focus) {
    const hour = minute / 60;
    const c = skyAt(hour);
    skyMat.uniforms.uTop.value.copy(c.top);
    skyMat.uniforms.uHorizon.value.copy(c.hor);
    skyMat.uniforms.uSunColor.value.copy(c.sun);
    // Course du soleil : lever à l'est vers 6 h, coucher à l'ouest vers 21 h.
    const f = clamp((hour - 6) / 15, 0, 1);
    const elev = Math.sin(f * Math.PI) * THREE.MathUtils.degToRad(62) - (hour > 21 ? (hour - 21) * 0.08 : 0);
    const az = lerp(THREE.MathUtils.degToRad(100), THREE.MathUtils.degToRad(265), f);
    sunDir.set(Math.sin(az) * Math.cos(elev), Math.sin(elev), -Math.cos(az) * Math.cos(elev) * 0.6 + 0.35).normalize();
    skyMat.uniforms.uSunDir.value.copy(sunDir);
    const day = clamp(sunDir.y * 6, 0, 1);
    sun.color.copy(c.sun);
    sun.intensity = 3.2 * day;
    hemi.intensity = lerp(0.35, 0.85, clamp(sunDir.y * 3 + 0.15, 0, 1));
    ambient.intensity = lerp(0.75, 0.9, day);
    // Le soir, l'ambiance prend la teinte chaude des éclairages du club.
    hemi.color.copy(c.top).lerp(new THREE.Color(0xffffff), 0.55).lerp(new THREE.Color(0xffd9a8), clamp(1 - sunDir.y * 6, 0, 1) * 0.6);
    scene.fog.color.copy(c.hor);
    sun.position.copy(focus).addScaledVector(sunDir, 80);
    sun.target.position.copy(focus);
    if (Math.abs(hour - lastEnvHour) > 1.5) {
      lastEnvHour = hour;
      const old = envRT;
      envRT = pmrem.fromScene(envScene, 0.04);
      // Les reflets ne sont appliqués qu'aux matériaux marqués (vitres, métal, carrosseries, verni) :
      // sur le reste, l'éclairage d'ambiance suffit et coûte beaucoup moins cher.
      scene.traverse(o => {
        if (!o.material) return;
        for (const m of [].concat(o.material)) if (m.userData.reflective) { m.envMap = envRT.texture; m.needsUpdate = !m.userData.hadEnv; m.userData.hadEnv = true; }
      });
      old?.dispose();
    }
    return { night: 1 - day, hour };
  }

  return { setTime, sun, colliders };
}

// Voiture : silhouette latérale extrudée aux arêtes arrondies, vitres teintées, roues.
// (exportée pour les voitures animées du parking)
function carShape(points) {
  const sh = new THREE.Shape();
  points.forEach(([x, y], i) => (i ? sh.lineTo(x, y) : sh.moveTo(x, y)));
  return sh;
}
const CAR_BODY = carShape([[-2.15, 0.3], [2.1, 0.3], [2.2, 0.55], [2.15, 0.85], [1.2, 0.98], [0.6, 1.42], [-1.0, 1.45], [-1.9, 1.05], [-2.2, 0.95], [-2.25, 0.5]]);
const CAR_GLASS = carShape([[1.05, 1.0], [0.52, 1.36], [-0.95, 1.38], [-1.72, 1.04]]);
let carGeo = null, glassGeo = null;
export function car(x, z, color, rot) {
  carGeo ??= new THREE.ExtrudeGeometry(CAR_BODY, { depth: 1.6, bevelEnabled: true, bevelSize: 0.12, bevelThickness: 0.12, bevelSegments: 5, curveSegments: 8 }).translate(0, 0, -0.8);
  glassGeo ??= new THREE.ExtrudeGeometry(CAR_GLASS, { depth: 1.66, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 3 }).translate(0, 0, -0.83);
  const g = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({ color, roughness: 0.25, metalness: 0.5 });
  paint.userData.reflective = true;
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x1a2430, roughness: 0.05, metalness: 0.6 });
  glassMat.userData.reflective = true;
  const body = new THREE.Mesh(carGeo, paint);
  const glass = new THREE.Mesh(glassGeo, glassMat);
  g.add(body, glass);
  const tire = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.9 });
  const rim = new THREE.MeshStandardMaterial({ color: 0xb8bcc2, metalness: 0.8, roughness: 0.3 });
  for (const sx of [-1.35, 1.35]) for (const sz of [-0.86, 0.86]) {
    const w = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.24, 20).rotateX(Math.PI / 2), tire);
    w.position.set(sx, 0.34, sz);
    const r = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.25, 16).rotateX(Math.PI / 2), rim);
    r.position.copy(w.position);
    g.add(w, r);
  }
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.position.set(x, 0, z);
  g.rotation.y = rot + Math.PI / 2;
  return g;
}
