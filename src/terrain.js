// Rendu du paysage : relief lissé avec un shader de matières (herbe, roche, neige, plage),
// forêts instanciées, lac, terrain d'aviation.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { mulberry32 } from './util.js';
import { heightAt, gradientAt, forestAt, TERRAIN_SIZE, WATER_LEVEL, AIRFIELD } from './heightmap.js';

// Bruit GLSL partagé (bruit de valeur + fbm).
const GLSL_NOISE = /* glsl */`
  float tHash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float tNoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(tHash(i), tHash(i + vec2(1, 0)), u.x), mix(tHash(i + vec2(0, 1)), tHash(i + vec2(1, 1)), u.x), u.y);
  }
  float tFbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * tNoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
  // Bruit 3D : pas d'étirement sur les falaises verticales.
  float tHash3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float tNoise3(vec3 x) {
    vec3 i = floor(x), f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(tHash3(i), tHash3(i + vec3(1, 0, 0)), f.x), mix(tHash3(i + vec3(0, 1, 0)), tHash3(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(tHash3(i + vec3(0, 0, 1)), tHash3(i + vec3(1, 0, 1)), f.x), mix(tHash3(i + vec3(0, 1, 1)), tHash3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
  }
  float tFbm3(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * tNoise3(p); p = p * 2.07 + 13.7; a *= 0.5; } return s; }
`;

function terrainMaterial() {
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.95, metalness: 0 });
  mat.onBeforeCompile = shader => {
    shader.uniforms.uWater = { value: WATER_LEVEL };
    shader.uniforms.uRunway = { value: new THREE.Vector4(AIRFIELD.x, AIRFIELD.z, AIRFIELD.halfWidth, AIRFIELD.halfLength) };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec3 aBake;
        varying vec3 vWPos;
        varying vec3 vWNormal;
        varying vec3 vBake;`)
      .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>
        vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vWNormal = normalize(mat3(modelMatrix) * objectNormal);
        vBake = aBake;`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vWPos;
        varying vec3 vWNormal;
        varying vec3 vBake;   // x : soleil (ombres portées des montagnes), y : occlusion, z : forêt
        uniform float uWater;
        uniform vec4 uRunway;
        ${GLSL_NOISE}`)
      .replace('#include <color_fragment>', /* glsl */`
        vec3 tn = normalize(vWNormal);
        float slope = 1.0 - tn.y;
        float h = vWPos.y;
        vec2 p = vWPos.xz;
        float nLarge = tFbm(p * 0.0012);
        float nMid = tFbm3(vWPos * 0.011);
        float nFine = tFbm3(vWPos * 0.11);
        float nMicro = tNoise(p * 1.7);
        float camDist = length(cameraPosition - vWPos);

        // Prairies : deux verts, des zones plus sèches, et des pelouses alpines plus haut.
        vec3 grassA = vec3(0.075, 0.13, 0.03);
        vec3 grassB = vec3(0.15, 0.19, 0.055);
        vec3 dry = vec3(0.24, 0.20, 0.10);
        vec3 col = mix(grassA, grassB, smoothstep(0.3, 0.7, nLarge));
        col = mix(col, dry, smoothstep(0.55, 0.85, nMid) * 0.45);
        col = mix(col, vec3(0.15, 0.15, 0.085), smoothstep(1350.0, 1800.0, h + nMid * 200.0));
        // Sous-bois : sol sombre et aiguilles là où poussent les forêts.
        col = mix(col, vec3(0.03, 0.055, 0.022), smoothstep(0.15, 0.7, vBake.z) * 0.85);
        col *= 0.8 + 0.35 * nFine + 0.1 * nMicro;

        // Roche sur les pentes raides et sur les sommets.
        float rockM = smoothstep(0.24, 0.40, slope + (nMid - 0.5) * 0.25);
        rockM = max(rockM, smoothstep(2050.0, 2350.0, h + nMid * 250.0) * 0.85);
        vec3 rock = mix(vec3(0.10, 0.095, 0.09), vec3(0.22, 0.20, 0.18), nFine) * (0.75 + 0.5 * nMid);
        rock = mix(rock, rock * vec3(1.12, 1.0, 0.86), smoothstep(0.4, 0.8, nLarge));          // roches plus ocre par endroits
        rock *= 0.9 + 0.2 * tNoise(vec2((p.x + p.y) * 0.012, h * 0.04));                      // strates discrètes
        col = mix(col, rock, rockM);

        // Neige au-dessus de 1900 m environ, sauf dans les parois.
        float snowM = smoothstep(1850.0, 1980.0, h + (nMid - 0.5) * 380.0) * (1.0 - smoothstep(0.42, 0.62, slope));
        col = mix(col, vec3(0.80, 0.83, 0.88) * (0.92 + 0.08 * nFine), snowM);

        // Grève claire au bord de l'eau.
        float beach = 1.0 - smoothstep(uWater + 1.5, uWater + 7.0, h + nFine * 3.0);
        col = mix(col, vec3(0.30, 0.27, 0.20) * (0.9 + 0.2 * nFine), beach);

        // Piste en herbe tondue, bandes alternées comme un vrai terrain de vol à voile.
        vec2 rp = p - uRunway.xy;
        if (abs(rp.x) < uRunway.z && abs(rp.y) < uRunway.w) {
          float stripe = step(0.5, fract(rp.y / 40.0));
          col = mix(vec3(0.10, 0.19, 0.04), vec3(0.15, 0.25, 0.06), stripe);
          if (abs(rp.x) > uRunway.z - 1.0) col = vec3(0.6);
        }
        diffuseColor.rgb = col;

        // Relief de détail (rochers, ravines) ajouté à l'éclairage, estompé au loin.
        vec3 bp = vWPos * 0.04;
        float b0 = tFbm3(bp);
        vec3 bg = vec3(tFbm3(bp + vec3(0.15, 0, 0)), tFbm3(bp + vec3(0, 0.15, 0)), tFbm3(bp + vec3(0, 0, 0.15))) - b0;
        bg /= 0.15;
        vec3 bumpW = (bg - dot(bg, tn) * tn) * (0.12 + rockM * 0.55 + snowM * 0.15) * (1.0 - smoothstep(1500.0, 7000.0, camDist));`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = mix(0.95, 0.5, snowM);`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        normal = normalize(normal - (viewMatrix * vec4(bumpW, 0.0)).xyz);`)
      .replace('#include <lights_fragment_end>', `#include <lights_fragment_end>
        reflectedLight.directDiffuse *= vBake.x;
        reflectedLight.directSpecular *= vBake.x;
        reflectedLight.indirectDiffuse *= vBake.y;`);
  };
  return mat;
}

// Éclairage pré-calculé sur la grille du relief : ombres portées des montagnes (marche vers le soleil),
// occlusion des creux (comparaison avec l'altitude moyenne autour) et densité de forêt.
function bakeLighting(H, n, cell, sunDir) {
  const sun = new Float32Array(n * n), ao = new Float32Array(n * n);
  let maxH = -Infinity;
  for (const v of H) maxH = Math.max(maxH, v);
  const hl = Math.hypot(sunDir.x, sunDir.z);
  const dx = sunDir.x / hl, dz = sunDir.z / hl, rise = (sunDir.y / hl) * cell;
  const at = (x, z) => H[Math.min(n - 1, Math.max(0, Math.round(z))) * n + Math.min(n - 1, Math.max(0, Math.round(x)))];
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    const h0 = H[j * n + i];
    let clear = 1;
    for (let k = 1.5; k < 200; k += 1.5) {
      const ray = h0 + rise * k + 3;
      if (ray > maxH) break;
      const x = i + dx * k, z = j + dz * k;
      if (x < 0 || z < 0 || x > n - 1 || z > n - 1) break;
      clear = Math.min(clear, (ray - at(x, z)) / (k * cell) * 12);
      if (clear < -1) break;
    }
    sun[j * n + i] = Math.min(1, Math.max(0, clear * 0.5 + 0.5)) ** 1.5;
  }
  // Moyenne locale par flou séparable (rayon ~8 mailles), deux passes.
  const blur = Float32Array.from(H), tmp = new Float32Array(n * n), R = 8;
  for (let pass = 0; pass < 2; pass++) {
    for (let j = 0; j < n; j++) {
      let acc = 0;
      for (let i = -R; i <= R; i++) acc += blur[j * n + Math.min(n - 1, Math.max(0, i))];
      for (let i = 0; i < n; i++) {
        tmp[j * n + i] = acc / (2 * R + 1);
        acc += blur[j * n + Math.min(n - 1, i + R + 1)] - blur[j * n + Math.max(0, i - R)];
      }
    }
    for (let i = 0; i < n; i++) {
      let acc = 0;
      for (let j = -R; j <= R; j++) acc += tmp[Math.min(n - 1, Math.max(0, j)) * n + i];
      for (let j = 0; j < n; j++) {
        blur[j * n + i] = acc / (2 * R + 1);
        acc += tmp[Math.min(n - 1, j + R + 1) * n + i] - tmp[Math.max(0, j - R) * n + i];
      }
    }
  }
  for (let k = 0; k < n * n; k++) {
    const cavity = blur[k] - H[k];        // > 0 : creux, < 0 : crête
    ao[k] = Math.min(1.08, Math.max(0.45, 1 - cavity / 260));
  }
  return { sun, ao };
}

function buildGround(scene, sunDir) {
  const seg = 720, n = seg + 1, cell = TERRAIN_SIZE / seg;
  const geo = new THREE.PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE, seg, seg);
  geo.rotateX(-Math.PI / 2);          // ligne j : z croissant, colonne i : x croissant
  const pos = geo.attributes.position;
  const H = new Float32Array(n * n);
  for (let k = 0; k < pos.count; k++) { H[k] = heightAt(pos.getX(k), pos.getZ(k)); pos.setY(k, H[k]); }
  geo.computeVertexNormals();
  const { sun, ao } = bakeLighting(H, n, cell, sunDir);
  const bake = new Float32Array(n * n * 3);
  for (let k = 0; k < n * n; k++) {
    bake[k * 3] = sun[k];
    bake[k * 3 + 1] = ao[k];
    bake[k * 3 + 2] = forestAt(pos.getX(k), pos.getZ(k), H[k]);
  }
  geo.setAttribute('aBake', new THREE.BufferAttribute(bake, 3));
  const mesh = new THREE.Mesh(geo, terrainMaterial());
  mesh.receiveShadow = true;
  scene.add(mesh);
  // Lumière reçue en un point, pour assombrir les arbres à l'ombre.
  return (x, z) => {
    const i = Math.round((x / TERRAIN_SIZE + 0.5) * seg), j = Math.round((z / TERRAIN_SIZE + 0.5) * seg);
    const k = Math.min(n - 1, Math.max(0, j)) * n + Math.min(n - 1, Math.max(0, i));
    return (0.35 + 0.65 * sun[k]) * Math.min(1, ao[k]);
  };
}

// Normal map d'eau générée (vaguelettes), répétable sans couture.
function waterNormals() {
  const S = 256, data = new Uint8Array(S * S * 4);
  const hgt = (x, y) => {
    let v = 0;
    const waves = [[3, 1, 0.3], [1, 4, 0.25], [5, -3, 0.15], [-7, 2, 0.1], [9, 8, 0.06], [-13, 11, 0.04]];
    for (const [a, b, amp] of waves) v += amp * Math.sin(2 * Math.PI * (a * x + b * y) / S);
    return v;
  };
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const dx = hgt(x + 1, y) - hgt(x - 1, y), dy = hgt(x, y + 1) - hgt(x, y - 1);
    const n = new THREE.Vector3(-dx * 6, -dy * 6, 1).normalize();
    const i = (y * S + x) * 4;
    data[i] = (n.x * 0.5 + 0.5) * 255; data[i + 1] = (n.y * 0.5 + 0.5) * 255; data[i + 2] = (n.z * 0.5 + 0.5) * 255; data[i + 3] = 255;
  }
  const tex = new THREE.DataTexture(data, S, S);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.anisotropy = 8;
  tex.repeat.set(160, 160);
  tex.needsUpdate = true;
  return tex;
}

function buildWater(scene) {
  const normalMap = waterNormals();
  const mat = new THREE.MeshStandardMaterial({
    color: 0x0b2a30, roughness: 0.06, metalness: 0.0, normalMap, normalScale: new THREE.Vector2(0.35, 0.35),
    envMapIntensity: 1.2, transparent: true, opacity: 0.94,
  });
  const water = new THREE.Mesh(new THREE.PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE), mat);
  water.rotation.x = -Math.PI / 2;
  water.position.y = WATER_LEVEL;
  water.receiveShadow = true;
  scene.add(water);
  return t => { normalMap.offset.set(t * 0.004, t * 0.0025); };
}

// --- Arbres --------------------------------------------------------------------------
function colorize(geo, color) {
  const c = new THREE.Color(color), arr = [];
  for (let i = 0; i < geo.attributes.position.count; i++) arr.push(c.r, c.g, c.b);
  geo.setAttribute('color', new THREE.Float32BufferAttribute(arr, 3));
  return geo;
}

function pineGeometry() {
  const parts = [colorize(new THREE.CylinderGeometry(0.25, 0.4, 4, 6).translate(0, 2, 0), 0x3b2a1e)];
  const layers = [[3.6, 7, 4.5], [2.6, 6, 8.5], [1.5, 5, 12.5]];
  for (const [r, h, y] of layers) parts.push(colorize(new THREE.ConeGeometry(r, h, 8, 1).translate(0, y, 0), 0x1c3318));
  return mergeGeometries(parts.map(g => (g.index ? g.toNonIndexed() : g)));
}

function broadleafGeometry() {
  const crown = new THREE.IcosahedronGeometry(4, 2);
  const p = crown.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const k = 1 + 0.18 * Math.sin(v.x * 1.3) * Math.cos(v.z * 1.1 + v.y);
    p.setXYZ(i, v.x * k, v.y * k * 0.85 + 8, v.z * k);
  }
  crown.computeVertexNormals();
  const trunk = new THREE.CylinderGeometry(0.3, 0.5, 6, 6).translate(0, 3, 0);
  return mergeGeometries([colorize(trunk.toNonIndexed(), 0x3b2a1e), colorize(crown, 0x2c4a1c)]);
}

function buildForests(scene, shadeAt, maxTrees) {
  const rand = mulberry32(99);
  const pines = [], leafy = [];
  const R = 9500;
  for (let k = 0; k < 160000 && pines.length + leafy.length < maxTrees; k++) {
    const x = (rand() * 2 - 1) * R, z = (rand() * 2 - 1) * R;
    const h = heightAt(x, z);
    if (h < WATER_LEVEL + 3) continue;
    const f = forestAt(x, z, h);
    if (rand() > f) continue;
    if (Math.abs(x - AIRFIELD.x) < AIRFIELD.halfWidth + 160 && Math.abs(z - AIRFIELD.z) < AIRFIELD.halfLength + 260) continue;
    const { slope } = gradientAt(x, z, 8);
    if (slope > 0.32) continue;
    const pine = h > 700 || rand() < 0.35;
    (pine ? pines : leafy).push({ x, y: h - 0.5, z, s: 0.7 + rand() * 0.7, r: rand() * Math.PI * 2, c: rand() });
  }
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 });
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), col = new THREE.Color();
  for (const [list, geo, tint] of [[pines, pineGeometry(), [0.75, 1.15]], [leafy, broadleafGeometry(), [0.8, 1.3]]]) {
    const inst = new THREE.InstancedMesh(geo, mat, list.length);
    list.forEach((t, i) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), t.r);
      s.set(t.s, t.s * (0.85 + t.c * 0.4), t.s);
      m.compose(p.set(t.x, t.y, t.z), q, s);
      inst.setMatrixAt(i, m);
      const k = (tint[0] + (tint[1] - tint[0]) * t.c) * shadeAt(t.x, t.z);
      inst.setColorAt(i, col.setRGB(k, k * (0.95 + t.c * 0.1), k * 0.9));
    });
    inst.frustumCulled = false;
    scene.add(inst);
  }
}

// --- Terrain d'aviation : hangar, manche à air, balises de bord de piste ---------------------
function buildAirfield(scene) {
  const g = new THREE.Group();
  g.position.set(AIRFIELD.x, AIRFIELD.h, AIRFIELD.z);
  const white = new THREE.MeshStandardMaterial({ color: 0xf2f2ee, roughness: 0.5 });
  // Bornes blanches le long de la piste.
  const markGeo = new THREE.BoxGeometry(1.5, 0.4, 3);
  for (let z = -AIRFIELD.halfLength; z <= AIRFIELD.halfLength; z += 60) {
    for (const sx of [-1, 1]) {
      const mk = new THREE.Mesh(markGeo, white);
      mk.position.set(sx * (AIRFIELD.halfWidth + 2), 0.2, z);
      g.add(mk);
    }
  }
  // Hangar à toit arrondi.
  const metal = new THREE.MeshStandardMaterial({ color: 0x9aa3a8, roughness: 0.45, metalness: 0.6 });
  const roof = new THREE.Mesh(new THREE.CylinderGeometry(12, 12, 40, 32, 1, false, -Math.PI / 2, Math.PI), metal);
  roof.rotation.x = -Math.PI / 2;   // axe du cylindre le long de la piste, voûte vers le haut
  roof.position.set(AIRFIELD.halfWidth + 60, 0, 120);
  roof.castShadow = roof.receiveShadow = true;
  g.add(roof);
  const door = new THREE.Mesh(new THREE.CircleGeometry(12, 32, 0, Math.PI), new THREE.MeshStandardMaterial({ color: 0x3b4247, roughness: 0.6 }));
  door.position.set(AIRFIELD.halfWidth + 60, 0, 100.05);
  door.rotation.y = Math.PI;
  g.add(door);
  // Manche à air.
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 7, 8), white);
  pole.position.set(-AIRFIELD.halfWidth - 25, 3.5, -AIRFIELD.halfLength + 40);
  g.add(pole);
  const sock = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.2, 3, 16, 1, true), new THREE.MeshStandardMaterial({ color: 0xff6a1a, side: THREE.DoubleSide, roughness: 0.7 }));
  sock.rotation.z = Math.PI / 2 - 0.15;
  sock.position.set(-AIRFIELD.halfWidth - 23.5, 6.7, -AIRFIELD.halfLength + 40);
  g.add(sock);
  scene.add(g);
}

export function createTerrain(scene, sunDir, { lite = false } = {}) {
  const shadeAt = buildGround(scene, sunDir);
  const updateWater = buildWater(scene);
  buildForests(scene, shadeAt, lite ? 18000 : 50000);
  buildAirfield(scene);
  return { update: t => updateWater(t) };
}
