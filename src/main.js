// Point d'entrée : boucle de jeu, caméra, règles de la partie et interface.
import * as THREE from 'three';
import { clamp, damp } from './util.js';
import { createWorld, heightAt, ISLAND_R } from './world.js';
import { Player, MAX_HP } from './player.js';
import { Slime } from './enemies.js';
import { Effects } from './effects.js';
import { createInput } from './input.js';
import { createAudio } from './audio.js';

const $ = id => document.getElementById(id);

// --- Rendu ------------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
$('game').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 900);
function fitCamera() {
  camera.aspect = innerWidth / innerHeight;
  camera.fov = camera.aspect < 1 ? 78 : 60;   // écran vertical (téléphone) : champ plus large
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
}
addEventListener('resize', fitCamera);
fitCamera();

const world = createWorld(scene);
const player = new Player(scene);
const effects = new Effects(scene);
const input = createInput(renderer.domElement);
const audio = createAudio();

// --- Caméra à la troisième personne -------------------------------------------------
const cam = { yaw: 0, pitch: 0.35, dist: 8, cur: 8, target: new THREE.Vector3(), shake: 0 };
const ray = new THREE.Raycaster();
function updateCamera(dt) {
  cam.yaw -= input.lookX * 0.0025;
  cam.pitch = clamp(cam.pitch + input.lookY * 0.002, -0.15, 1.2);
  cam.dist = clamp(cam.dist + input.zoom * 0.8, 4, 16);
  const focus = player.pos.clone().add(new THREE.Vector3(0, 1.7, 0));
  cam.target.x = damp(cam.target.x, focus.x, 12, dt);
  cam.target.y = damp(cam.target.y, focus.y, 8, dt);
  cam.target.z = damp(cam.target.z, focus.z, 12, dt);
  const off = new THREE.Vector3(
    Math.sin(cam.yaw) * Math.cos(cam.pitch),
    Math.sin(cam.pitch),
    Math.cos(cam.yaw) * Math.cos(cam.pitch),
  ).multiplyScalar(cam.dist);
  // Si un arbre ou une colonne se trouve entre le héros et la caméra, on avance la caméra.
  const dir = off.clone().normalize();
  ray.set(cam.target, dir);
  ray.far = cam.dist;
  const hit = ray.intersectObjects(world.occluders, true)[0];
  const want = hit ? Math.max(1.5, hit.distance - 0.4) : cam.dist;
  cam.cur = want < cam.cur ? want : damp(cam.cur, want, 4, dt);
  camera.position.copy(cam.target).addScaledVector(dir, cam.cur);
  const floor = heightAt(camera.position.x, camera.position.z) + 0.6;
  if (camera.position.y < floor) camera.position.y = floor;
  cam.shake = Math.max(0, cam.shake - dt * 2.5);
  const s = cam.shake * cam.shake;
  camera.position.add(new THREE.Vector3((Math.random() - 0.5) * s, (Math.random() - 0.5) * s, (Math.random() - 0.5) * s));
  camera.lookAt(cam.target);
}

// --- Cristaux et cœurs à ramasser -----------------------------------------------------
const crystalGeo = new THREE.OctahedronGeometry(0.6, 0);
const crystals = world.crystalSpots.map(spot => {
  const mesh = new THREE.Mesh(crystalGeo, new THREE.MeshStandardMaterial({
    color: 0x6ff3ff, emissive: 0x1aa6c9, emissiveIntensity: 0.9, roughness: 0.1, metalness: 0.2, flatShading: true,
  }));
  mesh.scale.set(1, 1.6, 1);
  mesh.castShadow = true;
  const light = new THREE.PointLight(0x6ff3ff, 8, 9);
  scene.add(mesh, light);
  return { spot, mesh, light, taken: false };
});

const heartShape = new THREE.Shape();
heartShape.moveTo(0, -0.5);
heartShape.bezierCurveTo(-0.15, -0.3, -0.6, -0.1, -0.5, 0.2);
heartShape.bezierCurveTo(-0.4, 0.5, -0.05, 0.5, 0, 0.25);
heartShape.bezierCurveTo(0.05, 0.5, 0.4, 0.5, 0.5, 0.2);
heartShape.bezierCurveTo(0.6, -0.1, 0.15, -0.3, 0, -0.5);
const heartGeo = new THREE.ExtrudeGeometry(heartShape, { depth: 0.2, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 2 });
heartGeo.center();
const heartMat = new THREE.MeshStandardMaterial({ color: 0xff4d6d, emissive: 0x801030, roughness: 0.3 });
const hearts = [];
function dropHeart(pos) {
  const m = new THREE.Mesh(heartGeo, heartMat);
  m.castShadow = true;
  m.position.copy(pos);
  scene.add(m);
  hearts.push({ m, base: heightAt(pos.x, pos.z) + 0.8, t: Math.random() * 6, life: 20 });
}

// --- État de la partie --------------------------------------------------------------
const game = {
  state: 'menu',            // menu | play | dead | won
  enemies: [],
  boss: null,
  collected: 0,
  kills: 0,
  time: 0,
  respawnT: 0,
  hitStop: 0,
  audio,
  dust: (pos, n) => effects.burst(pos.clone().add(new THREE.Vector3(0, 0.1, 0)), { color: 0xd8c8a0, count: n, speed: 3, up: 2, size: 0.15, life: 0.5 }),
  onPlayerHurt() {
    audio.hurt();
    cam.shake = 0.7;
    flashVignette();
    effects.burst(player.pos.clone().add(new THREE.Vector3(0, 1.2, 0)), { color: 0xff5050, count: 10, speed: 4 });
  },
  playerStrike(pos, facing, range) {
    const fx = Math.sin(facing), fz = Math.cos(facing);
    let touched = false;
    for (const e of [...game.enemies]) {
      if (e.dead) continue;
      const dx = e.pos.x - pos.x, dz = e.pos.z - pos.z, d = Math.hypot(dx, dz);
      const reach = range + e.radius * 0.8;
      if (d > reach || Math.abs(e.pos.y - pos.y) > e.size * 2 + 1.5) continue;
      const dot = d > 0.01 ? (dx * fx + dz * fz) / d : 1;
      if (dot < 0.3 && d > e.radius + 0.6) continue;   // derrière le héros
      e.hit(1, pos);
      touched = true;
      const at = e.pos.clone().add(new THREE.Vector3(0, e.size, 0));
      effects.burst(at, { color: 0xfff3b0, count: 8, speed: 7, up: 3, size: 0.12, life: 0.35, glow: true });
      if (e.dead) killEnemy(e);
    }
    if (touched) { audio.hit(); game.hitStop = 0.06; cam.shake = Math.max(cam.shake, 0.4); }
  },
  bossLanded(b) {
    audio.stomp();
    effects.ring(b.pos, { color: 0xc59bff, radius: 7, life: 0.55 });
    game.dust(b.pos, 16);
    const d = Math.hypot(player.pos.x - b.pos.x, player.pos.z - b.pos.z);
    cam.shake = Math.max(cam.shake, clamp(1.2 - d / 25, 0.2, 1));
    if (player.onGround && d < 6.5) player.hurt(1, b.pos, game);
    // Le roi appelle des renforts de temps en temps.
    if (b.hops % 5 === 0 && game.enemies.length < 14) {
      for (let i = 0; i < 2; i++) {
        const a = Math.random() * Math.PI * 2;
        spawnSlime(b.pos.x + Math.cos(a) * 4, b.pos.z + Math.sin(a) * 4, true);
      }
    }
  },
};

function spawnSlime(x, z, aggro = false) {
  const s = new Slime(scene, x, z);
  s.aggro = aggro;
  game.enemies.push(s);
  return s;
}

function killEnemy(e) {
  game.kills++;
  const at = e.pos.clone().add(new THREE.Vector3(0, e.size, 0));
  effects.burst(at, { color: e.mat.color.getHex(), count: e.boss ? 60 : 16, speed: e.boss ? 12 : 6, up: e.boss ? 10 : 5, size: e.boss ? 0.4 : 0.2, life: e.boss ? 1.4 : 0.8 });
  audio.kill();
  e.dispose();
  game.enemies.splice(game.enemies.indexOf(e), 1);
  if (e.boss) {
    game.boss = null;
    $('boss').hidden = true;
    world.activatePortal();
    audio.portal();
    banner('Le portail est ouvert !', 'Entre dans le portail au centre de l\'île');
    // Les derniers slimes fuient la place.
    for (const s of game.enemies) s.aggro = false;
  } else if (Math.random() < 0.3 || player.hp <= 2) {
    dropHeart(at);
  }
}

function collectCrystal(c) {
  c.taken = true;
  c.mesh.visible = false;
  c.light.intensity = 0;
  game.collected++;
  audio.pickup();
  effects.burst(c.mesh.position, { color: 0x6ff3ff, count: 24, speed: 6, up: 6, size: 0.18, glow: true, life: 1 });
  if (game.collected === crystals.length) {
    const b = new Slime(scene, 0, -6, { boss: true });
    b.aggro = true;
    game.enemies.push(b);
    game.boss = b;
    $('boss').hidden = false;
    audio.roar();
    cam.shake = 1;
    banner('Le Roi Slime se réveille !', 'Il garde le portail au centre de l\'île');
  } else {
    banner(`Cristal ${game.collected} / ${crystals.length}`, `Encore ${crystals.length - game.collected} à trouver`);
  }
}

function resetGame() {
  for (const e of game.enemies) e.dispose();
  game.enemies.length = 0;
  for (const h of hearts) scene.remove(h.m);
  hearts.length = 0;
  effects.clear();
  for (const c of crystals) {
    c.taken = false; c.mesh.visible = true; c.light.intensity = 8;
    c.mesh.position.set(c.spot.x, c.spot.y, c.spot.z);
    c.light.position.copy(c.mesh.position);
    // Trois gardiens autour de chaque cristal.
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + Math.random();
      spawnSlime(c.spot.x + Math.cos(a) * 5, c.spot.z + Math.sin(a) * 5);
    }
  }
  for (let i = 0; i < 6; i++) {
    const p = world.randomSpot(20, 50, 1);
    if (p) spawnSlime(p.x, p.z);
  }
  world.deactivatePortal();
  game.boss = null;
  game.collected = 0; game.kills = 0; game.time = 0; game.respawnT = 0;
  player.reset(new THREE.Vector3(0, 0, 14));
  cam.yaw = 0; cam.pitch = 0.35; cam.dist = 8; cam.cur = 8;
  cam.target.copy(player.pos);
  $('boss').hidden = true;
}

// --- Interface -----------------------------------------------------------------------
let bannerTimer = null;
function banner(title, sub = '') {
  $('banner-title').textContent = title;
  $('banner-sub').textContent = sub;
  const el = $('banner');
  el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
  clearTimeout(bannerTimer);
  bannerTimer = setTimeout(() => el.classList.remove('show'), 2800);
}
function flashVignette() {
  const v = $('vignette');
  v.classList.remove('hit'); void v.offsetWidth; v.classList.add('hit');
}

function objectiveText() {
  if (game.boss) return 'Bats le Roi Slime';
  if (world.portal.active) return 'Entre dans le portail au centre';
  return `Trouve les cristaux (${game.collected}/${crystals.length})`;
}

let lastHud = '';
function updateHud() {
  let h = '';
  for (let i = 0; i < MAX_HP; i++) h += `<span class="heart${i < player.hp ? '' : ' empty'}">♥</span>`;
  const key = h + game.collected + objectiveText() + (game.boss ? game.boss.hp : '');
  if (key !== lastHud) {
    lastHud = key;
    $('hearts').innerHTML = h;
    $('crystals').textContent = `${game.collected} / ${crystals.length}`;
    $('objective').textContent = objectiveText();
    if (game.boss) $('boss-fill').style.width = `${(game.boss.hp / game.boss.maxHp) * 100}%`;
  }
  $('timer').textContent = formatTime(game.time);
}
const formatTime = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

// Mini-carte : l'île vue du dessus, le cône indique où regarde la caméra.
const map = $('minimap'), mctx = map.getContext('2d');
function drawMinimap() {
  const W = map.width, c = W / 2, s = (W / 2 - 6) / ISLAND_R;
  mctx.clearRect(0, 0, W, W);
  mctx.fillStyle = '#2f8fc9'; mctx.beginPath(); mctx.arc(c, c, c, 0, Math.PI * 2); mctx.fill();
  mctx.fillStyle = '#e6d29a'; mctx.beginPath(); mctx.arc(c, c, (ISLAND_R - 6) * s, 0, Math.PI * 2); mctx.fill();
  mctx.fillStyle = '#5fae45'; mctx.beginPath(); mctx.arc(c, c, (ISLAND_R - 10) * s, 0, Math.PI * 2); mctx.fill();
  mctx.fillStyle = '#c9c1ae'; mctx.beginPath(); mctx.arc(c, c, 12 * s, 0, Math.PI * 2); mctx.fill();
  mctx.fillStyle = world.portal.active ? '#b48cff' : '#777'; mctx.beginPath(); mctx.arc(c, c, 3, 0, Math.PI * 2); mctx.fill();
  for (const cr of crystals) {
    if (cr.taken) continue;
    const x = c + cr.spot.x * s, y = c + cr.spot.z * s;
    mctx.fillStyle = '#6ff3ff'; mctx.strokeStyle = '#0b4f63'; mctx.lineWidth = 1.5;
    mctx.beginPath(); mctx.moveTo(x, y - 6); mctx.lineTo(x + 4, y); mctx.lineTo(x, y + 6); mctx.lineTo(x - 4, y); mctx.closePath();
    mctx.fill(); mctx.stroke();
  }
  for (const e of game.enemies) {
    mctx.fillStyle = e.boss ? '#8e44ec' : '#d33';
    mctx.beginPath(); mctx.arc(c + e.pos.x * s, c + e.pos.z * s, e.boss ? 5 : 2.2, 0, Math.PI * 2); mctx.fill();
  }
  const px = c + player.pos.x * s, py = c + player.pos.z * s;
  const look = Math.atan2(-Math.cos(cam.yaw), -Math.sin(cam.yaw));
  mctx.fillStyle = 'rgba(255,255,255,0.25)';
  mctx.beginPath(); mctx.moveTo(px, py);
  mctx.arc(px, py, 22, look - 0.5, look + 0.5); mctx.closePath(); mctx.fill();
  mctx.save(); mctx.translate(px, py); mctx.rotate(-player.facing);
  mctx.fillStyle = '#fff'; mctx.strokeStyle = '#1d1d2b'; mctx.lineWidth = 1.5;
  mctx.beginPath(); mctx.moveTo(0, 6); mctx.lineTo(4, -4); mctx.lineTo(-4, -4); mctx.closePath(); mctx.fill(); mctx.stroke();
  mctx.restore();
}

function showScreen(id) {
  for (const s of ['menu', 'over', 'win']) $(s).hidden = s !== id;
  $('hud').hidden = id !== null;
  input.enabled = id === null;
  if (id !== null) { input.releaseAll(); try { document.exitPointerLock?.(); } catch { /* rien */ } }
}

function start() {
  audio.unlock();
  resetGame();
  game.state = 'play';
  showScreen(null);
  banner('Le Gardien des Cristaux', 'Trouve les 5 cristaux cachés sur l\'île');
}
$('btn-start').addEventListener('click', start);
$('btn-retry').addEventListener('click', start);
$('btn-again').addEventListener('click', start);
$('btn-mute').addEventListener('click', e => { e.currentTarget.textContent = audio.toggle() ? '🔇' : '🔊'; e.currentTarget.blur(); });

// --- Boucle principale ----------------------------------------------------------------
const clock = new THREE.Clock();
let elapsed = 0;

function tick() {
  let dt = Math.min(clock.getDelta(), 0.05);
  elapsed += dt;
  input.poll();

  if (game.hitStop > 0) { game.hitStop -= dt; dt *= 0.1; }

  if (game.state === 'play' || game.state === 'dead') {
    player.update(dt, input, cam.yaw, world, game);
    for (const e of [...game.enemies]) e.update(dt, player, world, game);

    if (game.state === 'play') {
      game.time += dt;

      for (const c of crystals) {
        if (c.taken) continue;
        if (Math.hypot(player.pos.x - c.spot.x, player.pos.z - c.spot.z) < 2.5 && player.pos.y < c.spot.y + 2) collectCrystal(c);
      }
      for (let i = hearts.length - 1; i >= 0; i--) {
        const h = hearts[i];
        h.life -= dt;
        if (player.pos.distanceTo(h.m.position) < 1.6 && player.hp < MAX_HP) {
          player.heal(1); audio.heal();
          effects.burst(h.m.position, { color: 0xff4d6d, count: 10, speed: 3, up: 4, glow: true });
          scene.remove(h.m); hearts.splice(i, 1);
        } else if (h.life <= 0) {
          scene.remove(h.m); hearts.splice(i, 1);
        }
      }
      // Quelques slimes reviennent pour que l'île ne reste pas vide.
      game.respawnT += dt;
      if (game.respawnT > 10 && !game.boss && game.enemies.length < 10) {
        game.respawnT = 0;
        const p = world.randomSpot(18, 52, 1);
        if (p && Math.hypot(p.x - player.pos.x, p.z - player.pos.z) > 20) spawnSlime(p.x, p.z);
      }
      if (world.portal.active && Math.hypot(player.pos.x, player.pos.z) < 2.2) {
        game.state = 'won';
        audio.win();
        $('win-time').textContent = formatTime(game.time);
        $('win-kills').textContent = game.kills;
        showScreen('win');
      }
      if (player.dead) {
        game.state = 'dead';
        audio.lose();
        setTimeout(() => {
          if (game.state !== 'dead') return;
          $('over-crystals').textContent = `${game.collected} / ${crystals.length}`;
          $('over-kills').textContent = game.kills;
          showScreen('over');
        }, 1600);
      }
    }
    updateHud();
    drawMinimap();
  } else if (game.state === 'menu') {
    // Lent travelling autour de l'île derrière le menu.
    cam.yaw += dt * 0.08;
  }

  for (const c of crystals) {
    if (c.taken) continue;
    c.mesh.rotation.y += dt * 1.5;
    c.mesh.position.y = c.spot.y + Math.sin(elapsed * 2 + c.spot.x) * 0.2;
  }
  for (const h of hearts) {
    h.t += dt;
    h.m.rotation.y += dt * 2.5;
    h.m.position.y = h.base + Math.sin(h.t * 3) * 0.15;
    h.m.visible = h.life > 4 || Math.floor(h.life * 6) % 2 === 0;
  }

  effects.update(dt);
  updateCamera(dt);
  world.update(elapsed, player.pos);
  renderer.render(scene, camera);
  input.consume();
}

resetGame();
showScreen('menu');
renderer.setAnimationLoop(tick);

// Accès depuis la console du navigateur, pratique pour tester (ex. __jeu.player.hp = 99).
window.__jeu = { game, player, world, crystals, collectCrystal, cam };
