// Ciel physique (diffusion atmosphérique), soleil, éclairage d'environnement, brume et cumulus.
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { mulberry32 } from './util.js';
import { CLOUD_BASE } from './heightmap.js';

// Après-midi d'été : soleil au sud-ouest, assez haut pour chauffer les pentes.
const SUN_ELEVATION = 34, SUN_AZIMUTH = 215;

function makeSky(scale) {
  const sky = new Sky();
  sky.scale.setScalar(scale);
  const u = sky.material.uniforms;
  u.turbidity.value = 4.5;
  u.rayleigh.value = 1.4;
  u.mieCoefficient.value = 0.004;
  u.mieDirectionalG.value = 0.82;
  return sky;
}

// Texture de "bouffée" de nuage : plusieurs disques flous superposés.
function puffTexture() {
  const S = 128, c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  const rand = mulberry32(5);
  for (let i = 0; i < 26; i++) {
    const x = S / 2 + (rand() - 0.5) * S * 0.45, y = S / 2 + (rand() - 0.5) * S * 0.45, r = S * (0.12 + rand() * 0.2);
    const grd = g.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, 'rgba(255,255,255,0.55)');
    grd.addColorStop(0.6, 'rgba(255,255,255,0.25)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createSky(renderer, scene) {
  const sunDir = new THREE.Vector3().setFromSphericalCoords(1,
    THREE.MathUtils.degToRad(90 - SUN_ELEVATION), THREE.MathUtils.degToRad(SUN_AZIMUTH));

  const sky = makeSky(80000);
  sky.material.uniforms.sunPosition.value.copy(sunDir);
  scene.add(sky);

  // Environnement pré-filtré : reflets du ciel sur le planeur, l'eau et la lumière ambiante.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  const envSky = makeSky(50);
  envSky.material.uniforms.sunPosition.value.copy(sunDir);
  envScene.add(envSky);
  scene.environment = pmrem.fromScene(envScene, 0.02).texture;
  scene.environmentIntensity = 1;

  const sun = new THREE.DirectionalLight(0xfff0dc, 3.2);
  sun.position.copy(sunDir).multiplyScalar(400);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -40, right: 40, top: 40, bottom: -40, near: 1, far: 900 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.05;
  scene.add(sun, sun.target);

  // Brume de vallée : couleur proche de l'horizon.
  scene.fog = new THREE.FogExp2(0xa9bccf, 0.000085);

  return {
    sun, sunDir,
    // L'ombre portée suit le planeur.
    follow(p) {
      sun.target.position.copy(p);
      sun.position.copy(p).addScaledVector(sunDir, 400);
    },
  };
}

// Un cumulus par thermique, posé sur la base des nuages, plus quelques nuages "décoratifs".
export function createClouds(scene, thermals) {
  const tex = puffTexture();
  const rand = mulberry32(11);
  const group = new THREE.Group();
  const lit = new THREE.Color(0.97, 0.97, 0.96), shade = new THREE.Color(0.6, 0.64, 0.71);
  const mats = [];
  for (let k = 0; k < 6; k++) {
    const m = new THREE.SpriteMaterial({ map: tex, color: lit.clone().lerp(shade, k / 5), transparent: true, depthWrite: false, fog: true, toneMapped: false });
    mats.push(m);
  }
  // Chaque nuage est un groupe centré sur sa base, qu'on peut déplacer et faire grossir.
  const makeCloud = size => {
    const cloud = new THREE.Group();
    const W = 380 * size, H = 330 * size;
    const n = Math.round(26 * size);
    for (let i = 0; i < n; i++) {
      // Base plate, sommet bourgeonnant.
      const a = rand() * Math.PI * 2, rr = Math.sqrt(rand());
      const yN = Math.pow(rand(), 1.4);
      const spread = 1 - yN * 0.55;
      const sp = new THREE.Sprite(mats[Math.min(5, Math.floor((1 - yN) * 5.5 * (0.7 + rand() * 0.5)))]);
      sp.position.set(Math.cos(a) * rr * W * spread, 80 + yN * H, Math.sin(a) * rr * W * spread);
      const sc = (180 + rand() * 220) * size;
      sp.scale.set(sc, sc * 0.8, 1);
      cloud.add(sp);
    }
    cloud.position.y = CLOUD_BASE;
    group.add(cloud);
    return cloud;
  };
  const linked = thermals.map(t => ({ t, cloud: makeCloud(0.8 + t.w / 4) }));
  for (let i = 0; i < 10; i++) {
    const c = makeCloud(0.6 + rand() * 0.6);
    c.position.set((rand() * 2 - 1) * 11000, CLOUD_BASE, (rand() * 2 - 1) * 11000);
  }
  // Les cumulus suivent leur thermique : ils dérivent, grossissent puis se dissipent.
  group.userData.update = () => {
    for (const { t, cloud } of linked) {
      cloud.position.x = t.cx; cloud.position.z = t.cz;
      const s = 0.15 + 0.85 * t.life;
      cloud.scale.set(s, s * s, s);
      cloud.visible = t.life > 0.03;
    }
  };
  group.userData.update();
  scene.add(group);
  return group;
}
