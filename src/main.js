// Ascendance : boucle principale, caméra, règles du vol (atterrissage, circuit) et écrans.
import * as THREE from 'three';
import { damp } from './util.js';
import { heightAt, gradientAt, forestAt, WATER_LEVEL, AIRFIELD, PLAY_RADIUS } from './heightmap.js';
import { createTerrain } from './terrain.js';
import { createSky, createClouds } from './sky.js';
import { createAir, WIND } from './air.js';
import { Glider, V_NE } from './glider.js';
import { createCourse, TURNPOINTS } from './course.js';
import { createHud } from './hud.js';
import { createInput } from './input.js';
import { createAudio } from './audio.js';

const $ = id => document.getElementById(id);

// --- Rendu -------------------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.55;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
$('game').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, 1, 0.3, 70000);
function fit() {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.fov = camera.aspect < 1 ? 80 : 62;
  camera.updateProjectionMatrix();
}
addEventListener('resize', fit);
fit();

// Laisse le navigateur afficher l'écran de chargement avant de générer la vallée.
await new Promise(r => requestAnimationFrame(() => setTimeout(r, 30)));

// Réglage allégé pour les téléphones et tablettes (ou en ajoutant #lite à l'adresse).
const LITE = matchMedia('(pointer: coarse)').matches || location.hash === '#lite';
if (LITE) { renderer.setPixelRatio(1); renderer.shadowMap.enabled = false; }

const sky = createSky(renderer, scene);
const terrain = createTerrain(scene, sky.sunDir, { lite: LITE });
const air = createAir(TURNPOINTS);
const clouds = createClouds(scene, air.thermals);
const course = createCourse(scene);
const glider = new Glider(scene);
const hud = createHud();
const input = createInput(renderer.domElement);
const audio = createAudio();

// --- État de la partie ----------------------------------------------------------------------
const game = {
  state: 'menu',         // menu | fly | ground | paused | end
  time: 0, distance: 0, maxAlt: 0, bestClimb: 0,
  camMode: 'chase',
  warp: 1,
  varioAvg: 0,
  onField: false,
};

const START = { x: AIRFIELD.x + 250, z: AIRFIELD.z + 300, alt: AIRFIELD.h + 900 };

// --- Caméra -----------------------------------------------------------------------------------
const camQ = new THREE.Quaternion();
const UP = new THREE.Vector3(0, 1, 0), RIGHT = new THREE.Vector3(1, 0, 0);
let shake = 0;
let yaw = 0;

function reset() {
  glider.place(START.x, START.alt, START.z, 0);
  course.reset();
  Object.assign(game, { time: 0, distance: 0, maxAlt: START.alt, bestClimb: 0, varioAvg: 0, warp: 1, onField: false });
  camQ.copy(glider.quat);
}

function updateCamera(dt) {
  const look = new THREE.Quaternion().setFromAxisAngle(UP, -input.lookX)
    .multiply(new THREE.Quaternion().setFromAxisAngle(RIGHT, -input.lookY));
  if (game.camMode === 'cockpit') {
    camera.position.copy(new THREE.Vector3(0, 0.4, -2.05).applyQuaternion(glider.quat).add(glider.pos));
    camera.quaternion.copy(glider.quat).multiply(look);
    camera.near = 0.05;
  } else {
    // La caméra suit avec un léger retard et n'accompagne qu'en partie l'inclinaison.
    camQ.slerp(glider.quat, 1 - Math.exp(-3.2 * dt));
    const level = new THREE.Quaternion().setFromAxisAngle(UP, -glider.heading);
    const q = camQ.clone().slerp(level, 0.35).multiply(look);
    camera.position.copy(glider.pos).add(new THREE.Vector3(0, 2.8, 16).applyQuaternion(q));
    const floor = Math.max(heightAt(camera.position.x, camera.position.z), WATER_LEVEL) + 1.5;
    if (camera.position.y < floor) camera.position.y = floor;
    camera.quaternion.copy(q).multiply(new THREE.Quaternion().setFromAxisAngle(RIGHT, -0.1));
    camera.near = 0.3;
  }
  if (shake > 0) {
    shake = Math.max(0, shake - dt);
    camera.position.add(new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(shake * 0.4));
  }
  // Turbulence légère, plus forte dans les thermiques et à grande vitesse.
  const turb = game.state === 'fly' ? 0.002 + Math.abs(glider.lift) * 0.0015 + glider.speed * 0.00004 : 0;
  camera.rotateZ((Math.random() - 0.5) * turb);
  camera.updateProjectionMatrix();
  glider.pilot.visible = game.camMode !== 'cockpit';
  const inCockpit = game.camMode === 'cockpit' && game.state !== 'menu' && game.state !== 'end';
  $('cockpit').hidden = !inCockpit;
  if (inCockpit) {
    // Le fil de laine sur la verrière : il part de travers quand le planeur dérape ou que l'air est agité.
    yaw = damp(yaw, -glider.ail * 18 + (Math.random() - 0.5) * (4 + Math.abs(glider.lift) * 4), 6, dt);
    $('yaw-string').setAttribute('d', `M500 42 q ${yaw * 0.4} 30 ${yaw} 70`);
  }
}

// --- Écrans -----------------------------------------------------------------------------------
function show(id) {
  for (const s of ['menu', 'pause', 'end']) $(s).hidden = s !== id;
  $('hud').hidden = !(id === null || id === 'pause');
  input.enabled = id === null;
  if (id) input.releaseAll();
}

let bannerTimer;
function banner(title, sub = '', ms = 3500) {
  $('banner-title').textContent = title;
  $('banner-sub').textContent = sub;
  const el = $('banner');
  el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
  clearTimeout(bannerTimer);
  bannerTimer = setTimeout(() => el.classList.remove('show'), ms);
}

const fmtTime = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
const fmtKm = m => `${(m / 1000).toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} km`;

function start() {
  audio.init();
  reset();
  game.state = 'fly';
  show(null);
  banner(`Largage à ${Math.round(START.alt).toLocaleString('fr-FR')} m`, 'Cherche les thermiques sous les cumulus : quand le vario bipe, spirale !', 5500);
}

function finish(kind, title, text) {
  game.state = 'end';
  $('end-kicker').textContent = { win: 'Circuit bouclé', field: 'Atterrissage en campagne', crash: 'Accident', home: 'Retour au terrain' }[kind];
  $('end-title').textContent = title;
  $('end-text').textContent = text;
  $('end-time').textContent = fmtTime(game.time);
  $('end-dist').textContent = fmtKm(game.distance);
  $('end-alt').textContent = `${Math.round(game.maxAlt).toLocaleString('fr-FR')} m`;
  $('end-climb').textContent = `+${game.bestClimb.toFixed(1)} m/s`;
  $('end-tps').textContent = `${course.state.next} / ${TURNPOINTS.length}`;
  $('end').dataset.kind = kind;
  if (kind === 'crash') shake = 1;
  setTimeout(() => { if (game.state === 'end') show('end'); }, kind === 'crash' ? 1200 : 400);
}

input.onKey = code => {
  if (code === 'KeyC' && (game.state === 'fly' || game.state === 'ground')) {
    game.camMode = game.camMode === 'chase' ? 'cockpit' : 'chase';
  }
  if ((code === 'KeyP' || code === 'Escape') && (game.state === 'fly' || game.state === 'paused')) {
    game.state = game.state === 'paused' ? 'fly' : 'paused';
    show(game.state === 'paused' ? 'pause' : null);
  }
  if (code === 'KeyT' && game.state === 'fly') game.warp = game.warp === 1 ? 3 : 1;
  if (code === 'KeyM') $('btn-mute').textContent = audio.toggle() ? 'Son coupé' : 'Son';
};
$('btn-start').addEventListener('click', start);
$('btn-again').addEventListener('click', start);
$('btn-resume').addEventListener('click', () => input.onKey('KeyP'));
$('btn-mute').addEventListener('click', e => { e.currentTarget.textContent = audio.toggle() ? 'Son coupé' : 'Son'; e.currentTarget.blur(); });

// --- Contact avec le sol ------------------------------------------------------------------------
function touchdown() {
  const { x, z } = glider.pos;
  const ground = heightAt(x, z);
  const vs = glider.vario, bank = Math.abs(glider.bank), sp = glider.speed;
  const { slope } = gradientAt(x, z, 10);
  const onField = Math.abs(x - AIRFIELD.x) < AIRFIELD.halfWidth + 40 && Math.abs(z - AIRFIELD.z) < AIRFIELD.halfLength + 80;

  if (ground < WATER_LEVEL) return finish('crash', 'Amerrissage', 'Le planeur s\'est posé dans le lac. Le pilote nage jusqu\'à la rive, trempé mais indemne.');
  if (forestAt(x, z) > 0.35 && !onField) return finish('crash', 'Dans les arbres', 'Pas de champ dégagé : le planeur finit dans la forêt. Garde toujours un champ à portée de plané.');
  if (sp > 40 || vs < -3.5 || bank > 0.4 || slope > 0.2 || glider.pitch < -0.25) {
    return finish('crash', 'Atterrissage brutal', `Contact à ${Math.round(sp * 3.6)} km/h avec ${vs.toFixed(1)} m/s de vitesse verticale. Arrive moins vite, ailes à plat, et arrondis juste avant le sol.`);
  }
  // Posé : le planeur roule jusqu'à l'arrêt.
  game.state = 'ground';
  game.onField = onField;
  audio.thud();
  shake = 0.4;
}

function endRollout() {
  if (game.onField && course.complete) finish('win', 'Circuit réalisé !', `Les ${TURNPOINTS.length} points de virage sont validés et tu t'es posé sur la piste.`);
  else if (game.onField) finish('home', 'Posé au terrain', `Atterrissage réussi, mais il manque ${TURNPOINTS.length - course.state.next} point(s) de virage au circuit.`);
  else finish('field', 'Aux vaches !', 'Atterrissage réussi dans un champ. L\'équipe va venir te chercher avec la remorque.');
}

// --- Simulation ----------------------------------------------------------------------------------
function step(dt) {
  air.advance(game.time);
  const lift = air.sample(glider.pos.x, glider.pos.y, glider.pos.z);
  const px = glider.pos.x, pz = glider.pos.z;
  glider.update(dt, input, lift);
  game.time += dt;
  game.distance += Math.hypot(glider.pos.x - px, glider.pos.z - pz);
  game.maxAlt = Math.max(game.maxAlt, glider.pos.y);

  const tp = course.update(glider.pos);
  if (tp) {
    audio.chime();
    banner(`${tp.name} validé`, course.complete ? 'Dernière étape : retour au terrain et atterrissage' : `Prochain point : ${course.target.name}`);
  }

  const ground = Math.max(heightAt(glider.pos.x, glider.pos.z), WATER_LEVEL);
  if (glider.pos.y - 0.45 <= ground) { glider.pos.y = ground + 0.45; touchdown(); }
}

function rollout(dt) {
  // Sur la roue, ailes à plat, le planeur freine jusqu'à l'arrêt.
  glider.phi = damp(glider.phi, 0, 6, dt);
  glider.theta = damp(glider.theta, 0, 6, dt);
  glider.syncQuat();
  glider.speed = Math.max(0, glider.speed - 4 * dt);
  const dir = glider.forward.setY(0).normalize();
  glider.pos.addScaledVector(dir, glider.speed * dt);
  glider.pos.y = heightAt(glider.pos.x, glider.pos.z) + 0.45;
  glider.vario = 0;
  if (glider.speed <= 0.5) endRollout();
}

function warning(agl) {
  if (game.state !== 'fly') return '';
  if (glider.stalled) return 'Décrochage : rends la main';
  if (glider.speed > V_NE) return 'Survitesse';
  if (Math.hypot(glider.pos.x, glider.pos.z) > PLAY_RADIUS) return 'Hors zone : fais demi-tour';
  if (agl < 150 && Math.hypot(glider.pos.x - AIRFIELD.x, glider.pos.z - AIRFIELD.z) > 1500) return 'Bas : choisis un champ';
  return '';
}

// Cap et distance vers le prochain point (ou le terrain), et marge pour rentrer en plané.
function navInfo() {
  const target = course.target ?? { name: 'Terrain', x: AIRFIELD.x, z: AIRFIELD.z };
  const dx = target.x - glider.pos.x, dz = target.z - glider.pos.z;
  const home = Math.hypot(AIRFIELD.x - glider.pos.x, AIRFIELD.z - glider.pos.z);
  const margin = glider.pos.y - (AIRFIELD.h + 150 + home / 25);   // finesse de sécurité 25
  return {
    navLabel: course.target ? `Point ${course.state.next + 1} / ${TURNPOINTS.length}` : 'Retour',
    navName: target.name,
    navDist: fmtKm(Math.hypot(dx, dz)),
    navRel: Math.atan2(dx, -dz) - glider.heading,
    glideText: `Marge retour terrain : ${margin >= 0 ? '+' : ''}${Math.round(margin)} m`,
  };
}

// --- Boucle ------------------------------------------------------------------------------------
const clock = new THREE.Clock();
let elapsed = 0;

function tick() {
  const realDt = Math.min(clock.getDelta(), 0.05);
  elapsed += realDt;
  input.poll(realDt);

  if (game.state === 'fly') {
    const total = realDt * game.warp;
    const n = Math.ceil(total / 0.02);
    for (let i = 0; i < n && game.state === 'fly'; i++) step(total / n);
    game.bestClimb = Math.max(game.bestClimb, glider.vario);
    game.varioAvg = damp(game.varioAvg, glider.vario, 1 / 20, total);   // intégrateur ~20 s
  } else if (game.state === 'ground') {
    rollout(realDt);
    game.time += realDt;
  } else if (game.state === 'menu') {
    // Démonstration derrière le menu : le planeur spirale tranquillement.
    glider.update(realDt, { pitch: 0, roll: 0.3, brake: false }, 0);
    glider.pos.y = START.alt;
  }

  const agl = glider.pos.y - Math.max(heightAt(glider.pos.x, glider.pos.z), WATER_LEVEL);
  if (game.state !== 'menu') {
    hud.update(glider, {
      varioAvg: game.varioAvg, agl,
      groundSpeed: Math.hypot(glider.forward.x * glider.speed + WIND.x, glider.forward.z * glider.speed + WIND.z),
      timeText: fmtTime(game.time), warp: game.warp, course: course.state,
      warning: warning(agl), ...navInfo(),
    });
  }
  audio.update(glider.speed, glider.vario, game.state === 'fly', glider.stalled);

  updateCamera(realDt);
  sky.follow(glider.pos);
  terrain.update(elapsed);
  course.animate(elapsed);
  if (game.state === 'menu') air.advance(0);
  clouds.userData.update();
  renderer.render(scene, camera);
}

reset();
show('menu');
renderer.setAnimationLoop(tick);
$('loading').hidden = true;

// Accès depuis la console pour tester (ex. __jeu.glider.pos.y = 2500).
window.__jeu = { game, glider, course, air, start, camera, banner, AIRFIELD, heightAt };
