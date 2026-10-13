// L'île : relief, eau, ciel, arbres, rochers, ruines, piédestaux des cristaux et portail.
import * as THREE from 'three';
import { clamp, lerp, smoothstep, mulberry32 } from './util.js';

export const ISLAND_R = 62;   // rayon de l'île
export const PLAY_R = 54;     // limite invisible pour le joueur
export const WATER_Y = -0.6;

// Hauteur du sol en (x, z). Tout le monde (joueur, ennemis, décor) s'en sert.
export function heightAt(x, z) {
  const d = Math.hypot(x, z);
  let h = 1.6 * Math.sin(x * 0.07) * Math.cos(z * 0.06)
        + 0.9 * Math.sin(x * 0.15 + 1.3) * Math.sin(z * 0.12 + 0.4)
        + 0.35 * Math.sin((x + z) * 0.3);
  const plaza = smoothstep(15, 8, d);           // place centrale bien plate
  h = lerp(h, 0.4, plaza);
  const edge = smoothstep(ISLAND_R - 18, ISLAND_R + 4, d);
  return lerp(h + 0.7, -3.5, edge);
}

export function createWorld(scene) {
  const rand = mulberry32(7);
  const colliders = [];   // cercles { x, z, r } infranchissables
  const animated = [];    // objets qui bougent tout seuls
  const occluders = [];   // décor qui peut cacher le héros (la caméra s'en rapproche)

  // --- Ciel (dôme dégradé) ------------------------------------------------
  const skyGeo = new THREE.SphereGeometry(400, 32, 16);
  const top = new THREE.Color(0x3d8ee0), bottom = new THREE.Color(0xcfe8f7);
  const skyCol = [];
  for (let i = 0; i < skyGeo.attributes.position.count; i++) {
    const y = skyGeo.attributes.position.getY(i) / 400;
    const c = bottom.clone().lerp(top, clamp(y * 1.6, 0, 1));
    skyCol.push(c.r, c.g, c.b);
  }
  skyGeo.setAttribute('color', new THREE.Float32BufferAttribute(skyCol, 3));
  scene.add(new THREE.Mesh(skyGeo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false })));
  scene.fog = new THREE.Fog(0xcfe8f7, 60, 170);

  // --- Lumières -------------------------------------------------------------
  scene.add(new THREE.HemisphereLight(0xdff2ff, 0x557a3a, 0.9));
  const sun = new THREE.DirectionalLight(0xfff1d6, 1.6);
  sun.position.set(30, 50, 20);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -35, right: 35, top: 35, bottom: -35, near: 1, far: 140 });
  sun.shadow.bias = -0.0005;
  scene.add(sun, sun.target);

  // --- Relief ----------------------------------------------------------------
  const ground = new THREE.PlaneGeometry(190, 190, 150, 150);
  ground.rotateX(-Math.PI / 2);
  const gp = ground.attributes.position;
  const sand = new THREE.Color(0xe6d29a), grassLow = new THREE.Color(0x78c254), grassHigh = new THREE.Color(0x4e9a3a);
  const stone = new THREE.Color(0xb9b2a3);
  const gCol = [];
  for (let i = 0; i < gp.count; i++) {
    const x = gp.getX(i), z = gp.getZ(i);
    const y = heightAt(x, z);
    gp.setY(i, y);
    const d = Math.hypot(x, z);
    let c;
    if (y < WATER_Y + 0.9) c = sand.clone();
    else c = grassLow.clone().lerp(grassHigh, clamp((y - 0.5) / 2.5, 0, 1));
    if (d < 13) c.lerp(stone, smoothstep(13, 11, d));   // dallage de la place
    c.offsetHSL(0, 0, (rand() - 0.5) * 0.04);
    gCol.push(c.r, c.g, c.b);
  }
  ground.setAttribute('color', new THREE.Float32BufferAttribute(gCol, 3));
  ground.computeVertexNormals();
  const groundMesh = new THREE.Mesh(ground, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 }));
  groundMesh.receiveShadow = true;
  scene.add(groundMesh);

  // --- Eau ---------------------------------------------------------------------
  const waterGeo = new THREE.PlaneGeometry(800, 800, 60, 60);
  waterGeo.rotateX(-Math.PI / 2);
  const water = new THREE.Mesh(waterGeo, new THREE.MeshStandardMaterial({
    color: 0x2f8fc9, transparent: true, opacity: 0.85, roughness: 0.3, metalness: 0.1, flatShading: true,
  }));
  water.position.y = WATER_Y;
  scene.add(water);
  const waterBase = Float32Array.from(waterGeo.attributes.position.array);
  animated.push(t => {
    const p = waterGeo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = waterBase[i * 3], z = waterBase[i * 3 + 2];
      p.setY(i, Math.sin(x * 0.08 + t * 1.2) * 0.15 + Math.cos(z * 0.07 + t) * 0.15);
    }
    p.needsUpdate = true;
    waterGeo.computeVertexNormals();
  });

  // --- Utilitaires de placement -----------------------------------------------
  const blocked = (x, z, r) => colliders.some(c => Math.hypot(c.x - x, c.z - z) < c.r + r);
  function randomSpot(minD, maxD, r) {
    for (let k = 0; k < 200; k++) {
      const a = rand() * Math.PI * 2, d = lerp(minD, maxD, Math.sqrt(rand()));
      const x = Math.cos(a) * d, z = Math.sin(a) * d;
      if (!blocked(x, z, r) && heightAt(x, z) > WATER_Y + 0.8) return { x, z };
    }
    return null;
  }

  // --- Place centrale : ruines + portail -----------------------------------------
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0xc9c1ae, flatShading: true, roughness: 0.9 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
    const x = Math.cos(a) * 10, z = Math.sin(a) * 10;
    const h = i % 3 === 1 ? 1.4 : 4.2;   // quelques colonnes brisées
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.7, h, 8), stoneMat);
    col.position.set(x, heightAt(x, z) + h / 2, z);
    col.castShadow = col.receiveShadow = true;
    scene.add(col);
    occluders.push(col);
    colliders.push({ x, z, r: 0.8 });
  }

  const portal = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.35, 10, 28), stoneMat);
  ring.position.y = 2.6;
  ring.castShadow = true;
  const veilMat = new THREE.MeshStandardMaterial({ color: 0x555566, emissive: 0x000000, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
  const veil = new THREE.Mesh(new THREE.CircleGeometry(2.0, 28), veilMat);
  veil.position.y = 2.6;
  const base = new THREE.Mesh(new THREE.CylinderGeometry(3, 3.4, 0.4, 16), stoneMat);
  base.position.y = 0.2;
  base.receiveShadow = true;
  portal.add(ring, veil, base);
  portal.position.set(0, heightAt(0, 0), 0);
  scene.add(portal);
  const portalLight = new THREE.PointLight(0x9b7bff, 0, 14);
  portalLight.position.set(0, heightAt(0, 0) + 2.6, 0);
  scene.add(portalLight);
  const portalState = { active: false };
  animated.push(t => {
    if (!portalState.active) return;
    veilMat.emissive.setHSL(0.72 + Math.sin(t * 2) * 0.05, 0.9, 0.45);
    veilMat.opacity = 0.75 + Math.sin(t * 3) * 0.1;
    veil.rotation.z = t;
    portalLight.intensity = 30 + Math.sin(t * 4) * 6;
  });

  // --- Piédestaux des cristaux ---------------------------------------------------
  const crystalSpots = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + 0.6;
    const d = 38 + (i % 2) * 6;
    const x = Math.cos(a) * d, z = Math.sin(a) * d;
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.4, 0.8, 8), stoneMat);
    ped.position.set(x, heightAt(x, z) + 0.2, z);
    ped.castShadow = ped.receiveShadow = true;
    scene.add(ped);
    crystalSpots.push({ x, z, y: heightAt(x, z) + 1.9 });
    colliders.push({ x, z, r: 1.3 });
  }
  const nearCrystal = (x, z, r) => crystalSpots.some(c => Math.hypot(c.x - x, c.z - z) < 4 + r);

  // --- Arbres -------------------------------------------------------------------
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x7a5232, flatShading: true });
  const leafMats = [0x3f8f3a, 0x4fa043, 0x2f7a34].map(c => new THREE.MeshStandardMaterial({ color: c, flatShading: true }));
  for (let i = 0; i < 95; i++) {
    const s = 0.8 + rand() * 0.7;
    const p = randomSpot(16, ISLAND_R - 12, 1.2 * s);
    if (!p || nearCrystal(p.x, p.z, 1)) continue;
    const tree = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25 * s, 0.35 * s, 2 * s, 6), trunkMat);
    trunk.position.y = s;
    tree.add(trunk);
    const leaf = leafMats[Math.floor(rand() * leafMats.length)];
    for (let k = 0; k < 3; k++) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry((1.8 - k * 0.45) * s, 1.8 * s, 7), leaf);
      cone.position.y = (2.2 + k * 1.0) * s;
      cone.rotation.y = rand() * Math.PI;
      tree.add(cone);
    }
    tree.traverse(o => { o.castShadow = true; o.receiveShadow = true; });
    tree.position.set(p.x, heightAt(p.x, p.z) - 0.1, p.z);
    tree.rotation.y = rand() * Math.PI * 2;
    scene.add(tree);
    occluders.push(tree);
    colliders.push({ x: p.x, z: p.z, r: 0.5 * s });
  }

  // --- Rochers --------------------------------------------------------------------
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x8d8a85, flatShading: true, roughness: 1 });
  for (let i = 0; i < 40; i++) {
    const s = 0.6 + rand() * 1.4;
    const p = randomSpot(15, ISLAND_R - 8, s);
    if (!p || nearCrystal(p.x, p.z, s)) continue;
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), rockMat);
    rock.position.set(p.x, heightAt(p.x, p.z) + s * 0.3, p.z);
    rock.rotation.set(rand() * 3, rand() * 3, rand() * 3);
    rock.scale.y = 0.7;
    rock.castShadow = rock.receiveShadow = true;
    scene.add(rock);
    occluders.push(rock);
    colliders.push({ x: p.x, z: p.z, r: s * 0.85 });
  }

  // --- Touffes d'herbe et fleurs (instanciées, sans collision) ---------------------
  const tuftGeo = new THREE.ConeGeometry(0.12, 0.5, 4);
  const tufts = new THREE.InstancedMesh(tuftGeo, new THREE.MeshStandardMaterial({ color: 0x5aa83f, flatShading: true }), 700);
  const flowerGeo = new THREE.IcosahedronGeometry(0.12, 0);
  const flowers = new THREE.InstancedMesh(flowerGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true }), 160);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(1, 1, 1);
  const flowerCols = [0xff6b8b, 0xffd23f, 0xffffff, 0xb07cff].map(c => new THREE.Color(c));
  let ti = 0, fi = 0;
  while (ti < tufts.count || fi < flowers.count) {
    const a = rand() * Math.PI * 2, d = 13 + rand() * (ISLAND_R - 22);
    const x = Math.cos(a) * d, z = Math.sin(a) * d, y = heightAt(x, z);
    if (y < WATER_Y + 1) continue;
    if (ti < tufts.count) {
      q.setFromEuler(new THREE.Euler((rand() - 0.5) * 0.4, 0, (rand() - 0.5) * 0.4));
      m.compose(new THREE.Vector3(x, y + 0.2, z), q, sc);
      tufts.setMatrixAt(ti++, m);
    } else {
      m.compose(new THREE.Vector3(x, y + 0.25, z), q.identity(), sc);
      flowers.setMatrixAt(fi, m);
      flowers.setColorAt(fi++, flowerCols[Math.floor(rand() * flowerCols.length)]);
    }
  }
  scene.add(tufts, flowers);

  // --- Collisions -----------------------------------------------------------------
  // Repousse un cercle (position p, rayon r) hors des obstacles et le garde sur l'île.
  function resolve(p, r) {
    for (const c of colliders) {
      const dx = p.x - c.x, dz = p.z - c.z, d = Math.hypot(dx, dz), min = c.r + r;
      if (d < min && d > 1e-5) { p.x = c.x + (dx / d) * min; p.z = c.z + (dz / d) * min; }
    }
    const d = Math.hypot(p.x, p.z);
    if (d > PLAY_R) { p.x *= PLAY_R / d; p.z *= PLAY_R / d; }
  }

  return {
    sun, colliders, occluders, crystalSpots, portal: portalState, portalPos: new THREE.Vector3(0, heightAt(0, 0), 0),
    resolve, randomSpot,
    activatePortal() { portalState.active = true; ring.material = ring.material.clone(); ring.material.emissive.set(0x3a2a77); },
    deactivatePortal() {
      portalState.active = false; ring.material = stoneMat;
      veilMat.emissive.set(0); veilMat.opacity = 0.35; portalLight.intensity = 0;
    },
    update(t, focus) {
      animated.forEach(f => f(t));
      // L'ombre suit le joueur pour rester nette.
      sun.position.set(focus.x + 30, focus.y + 50, focus.z + 20);
      sun.target.position.copy(focus);
    },
  };
}
