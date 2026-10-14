// Tennis Club Simulator : point d'entrée. Relie la simulation (game/), le rendu (render/),
// le joueur (core/) et l'interface (ui/).
import * as THREE from 'three';
import { Club, createState, SAVE_VERSION } from './game/club.js';
import { PRODUCTS, COURTS, COURT_TYPES, EVENTS } from './game/data.js';
import {
  staticColliders, shelfCollider, courtColliders, SHELF_SLOTS, WORLD, LAPTOP, COURT_SLOTS,
  STANDS, standColliders, parkingColliders, carCollider, PARKING_SPOTS, RESERVED_SPOTS,
} from './game/layout.js';
import { createStands } from './render/stands.js';
import { loadAssets } from './render/assets.js';
import { createTraffic } from './render/traffic.js';
import { createEnvironment } from './render/environment.js';
import { createBuilding } from './render/building.js';
import { createShelves } from './render/shelves.js';
import { createCourts } from './render/courts.js';
import { createPersonView, setViewer } from './render/people.js';
import { liteScene } from './render/lite.js';
import { boxMesh } from './render/products.js';
import { createInput } from './core/input.js';
import { Player } from './core/player.js';
import { createAudio } from './core/audio.js';
import { createHud } from './ui/hud.js';
import { createComputer } from './ui/computer.js';
import { createPayment } from './ui/payment.js';
import { fmtMoney, fmtMoney0, clamp, lerp } from './core/util.js';
import { L, EN, LANG, setLang } from './core/i18n.js';

const $ = id => document.getElementById(id);
// Textes fixes de la page en anglais (attributs data-en de index.html).
if (EN) {
  document.documentElement.lang = 'en';
  document.querySelectorAll('[data-en]').forEach(el => { el.innerHTML = el.dataset.en; });
  document.querySelectorAll('[data-en-title]').forEach(el => { el.title = el.dataset.enTitle; });
}

// En cas d'erreur inattendue, on l'affiche plutôt que de laisser un écran figé.
function showError(msg) {
  const el = $('error');
  if (!el) return;
  el.hidden = false;
  el.querySelector('code').textContent = String(msg).slice(0, 400);
}
addEventListener('error', e => showError(e.message));
addEventListener('unhandledrejection', e => showError(e.reason?.message ?? e.reason));

const SAVE_KEY = 'tennis-club-sim-save-v1';

// --- Rendu ---------------------------------------------------------------------------------------
// Carte graphique, lue avant de créer le rendu (l'anticrénelage se choisit à la création). Les puces intégrées
// (Intel, Radeon intégrées, mobiles) démarrent en mode économie.
const GPU_NAME = (() => {
  try {
    const c = document.createElement('canvas'), gl = c.getContext('webgl2') || c.getContext('webgl');
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const name = String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER));
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return name;
  } catch { return ''; }
})();
const weakGPU = /intel|swiftshader|llvmpipe|softpipe|software|basic render|mali|adreno|powervr|radeon\(tm\) graphics|radeon graphics|vega \d+ graphics/i.test(GPU_NAME) && !/\barc\b/i.test(GPU_NAME);
// Qualité graphique : « ultra » (pleine définition, ombres fines), « haute » par défaut, « économie » pour les
// ordinateurs modestes (matériaux simplifiés, sans ombres ni anticrénelage).
const QUALITIES = ['high', 'ultra', 'low'];
let quality = weakGPU ? 'low' : 'high', qualityChosen = false;
try { const q = localStorage.getItem('tennis-club-quality'); if (QUALITIES.includes(q)) { quality = q; qualityChosen = true; } } catch { /* stockage indisponible */ }
const renderer = new THREE.WebGLRenderer({ antialias: quality !== 'low', powerPreference: 'high-performance' });
// Résolution dynamique : si l'image ralentit, le jeu baisse un peu sa définition interne (et la remonte quand
// tout redevient fluide). Ainsi il s'adapte à chaque ordinateur sans que le joueur ait à régler quoi que ce soit.
let resScale = 1;
const baseRatio = () => (quality === 'ultra' ? Math.min(devicePixelRatio, 2) : quality === 'high' ? Math.min(devicePixelRatio, 1.5) : Math.min(devicePixelRatio, 1));
// Rendu logiciel (navigateur sans accélération graphique) : le jeu ne peut pas être fluide, on prévient le joueur.
let gpuName = '?';
const softwareGL = (() => {
  try {
    const gl = renderer.getContext(), ext = gl.getExtension('WEBGL_debug_renderer_info');
    const name = String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER));
    // Nom court de la carte graphique utilisée (affiché avec F3), ex. « NVIDIA GeForce RTX 3060 Laptop GPU ».
    gpuName = (name.match(/(NVIDIA[^,(]*|AMD[^,(]*|Radeon[^,(]*|Intel[^,(]*|Apple[^,(]*|SwiftShader|llvmpipe)/i)?.[0] ?? name).trim().slice(0, 48);
    return /swiftshader|llvmpipe|softpipe|software|basic render/i.test(name);
  } catch { return false; }
})();
function applyQuality() {
  renderer.setPixelRatio(baseRatio() * resScale);
  // Ombres : recalculées à chaque image en ultra, une image sur deux sinon (invisible à l'œil, deux fois moins de travail).
  renderer.shadowMap.autoUpdate = quality === 'ultra';
  renderer.shadowMap.enabled = quality !== 'low';
  const sz = quality === 'ultra' ? 4096 : 2048;
  if (env?.sun && env.sun.shadow.mapSize.x !== sz) { env.sun.shadow.mapSize.set(sz, sz); env.sun.shadow.map?.dispose(); env.sun.shadow.map = null; }
  scene?.traverse(o => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { m.needsUpdate = true; }); });
  fit?.();
}
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
$('game').appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, 1, 0.05, 600);
scene.add(camera);
function fit() {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
}
addEventListener('resize', fit);
applyQuality();

const interactables = [];
// Créés une fois les ressources graphiques chargées (voir le démarrage, en bas du fichier).
let env = null, building = null, traffic = null;
const audio = createAudio();
const hud = createHud();
const input = createInput(renderer.domElement);
const player = new Player(camera);
player.yaw = 0;

// --- État de la partie (créé au lancement) --------------------------------------------------------------
let club = null, shelves = null, courts = null, computer = null, payment = null, stands = null;
let colliders = staticColliders();
const personViews = new Map();
const boxViews = new Map();
let mode = 'menu';           // menu | play | pause | summary
const ui = { target: null, hint: '', progress: 0, held: null };

function hasSave() { try { return !!localStorage.getItem(SAVE_KEY); } catch { return false; } }
function save() {
  if (!club) return false;
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(club.serialize())); return true; } catch { return false; }
}
function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || !(s.version >= 1 && s.version <= SAVE_VERSION)) return null;
    // Sauvegarde d'une version précédente, faite en pleine journée : l'horloge tournait déjà.
    s.dayStarted ??= s.minute > 8 * 60 + 1;
    return s;
  } catch { return null; }
}

function rebuildColliders() {
  colliders = [...staticColliders(), ...env.colliders];
  club.s.shelves.forEach((sh, i) => { if (sh.built) colliders.push(shelfCollider(SHELF_SLOTS[i])); });
  for (const c of COURTS) if (club.s.courts[c.id].built) colliders.push(...courtColliders(c.id, COURT_TYPES[c.surface].sport));
  for (const k of Object.keys(STANDS)) {
    const f = club.s.facilities[k];
    if (f.built || f.building) colliders.push(...standColliders(k, f.built));
  }
  colliders.push(...parkingColliders(club.s.facilities.parking.built));
  for (const i of RESERVED_SPOTS) colliders.push(carCollider(PARKING_SPOTS[i]));
  for (const car of club.cars) if (car.state === 'parked') colliders.push(carCollider(PARKING_SPOTS[car.spot]));
}

function addBoxView(box) {
  const m = boxMesh(box.product);
  m.position.set(box.x, (box.y ?? 0) + m.userData.size[1] / 2, box.z);
  m.rotation.y = (box.id * 1.7) % 0.4 - 0.2;
  m.userData.interact = { kind: 'box', id: box.id };
  scene.add(m);
  interactables.push(m);
  boxViews.set(box.id, m);
}
function removeBoxView(box) {
  const m = boxViews.get(box.id);
  if (!m) return;
  if (player.held?.box === box) player.release();
  m.parent?.remove(m);
  const i = interactables.indexOf(m);
  if (i >= 0) interactables.splice(i, 1);
  boxViews.delete(box.id);
}

function completeObjective(id) {
  if (!club || club.s.objectives.includes(id)) return;
  club.s.objectives.push(id);
  hud.objectives(club.s.objectives);
}

const progressSteps = {};
const hooks = {
  spawnPerson(p) {
    const v = createPersonView(p);
    personViews.set(p.id, v);
    v.root.position.set(p.x, 0, p.z);
    scene.add(v.root);
  },
  despawnPerson(p) {
    const v = personViews.get(p.id);
    if (v) { scene.remove(v.root); personViews.delete(p.id); }
  },
  bubble(p, text, kind) { personViews.get(p.id)?.say(text, kind); },
  shelfChanged(i) { shelves?.refresh(i); },
  shelfBuilt(i, quiet) { shelves?.refresh(i); rebuildColliders(); if (!quiet) hud.notify(L('Nouvelle étagère installée', 'New shelf installed'), 'good'); },
  counterChanged(c) { building.showCounter(c); hud.checkout(c); },
  boxAdded(box) { addBoxView(box); },
  boxRemoved(box) { removeBoxView(box); },
  boxMoved(box) {
    const m = boxViews.get(box.id);
    if (m) { m.position.set(box.x, (box.y ?? 0) + m.userData.size[1] / 2, box.z); }
  },
  courtChanged(id, built) { courts?.refresh(id); if (built) { rebuildColliders(); } },
  courtSession(id, persons, start, sport) {
    if (start) courts.startSession(id, persons, sport, p => personViews.get(p.id));
    else courts.endSession(id);
  },
  notify(text, kind) { hud.notify(text, kind); audio.notify(); },
  sound(name) {
    audio[name]?.();
    if (name === 'order') completeObjective('order');
    if (name === 'cash' && atCounter()) completeObjective('serve');
  },
  levelUp(level, unlocks) {
    audio.level();
    showLevelUp(level, unlocks);
    courts?.refreshAll();
    stands?.refreshAll();
  },
  facilityChanged(key, done) { stands?.refresh(key); rebuildColliders(); if (done) { audio.level(); stands?.refreshMenus(); } else audio.build(); },
  facilityProgress(key, p) {
    const step = Math.floor(p * 50);
    if (step !== progressSteps[key]) { progressSteps[key] = step; stands?.refresh(key); }
  },
  carArrive(car) { traffic.arrive(car); },
  carParked(car) { traffic.parked(car); rebuildColliders(); if (club.s.facilities.parking.built) audio.coin(); },
  carLeave(car) { traffic.leave(car); rebuildColliders(); },
  carRemoved(car) { traffic.remove(car); },
  standChanged() {},
  standServed() { audio.pour(); },
  challengeChanged() { hud.challenge(club); },
  dayEnded(summary) { showSummary(summary); },
  openChanged(open) { building.setOpen(open); },
  pricesChanged() { shelves?.invalidate(); stands?.refreshMenus(); },
  upgradeBought(k) { hud.notify(L('Aménagement installé', 'Upgrade installed'), 'good'); },
};

function startGame(state) {
  club = new Club(state, hooks);
  shelves = createShelves(scene, interactables, club.s);
  stands = createStands(scene, interactables, club.s);
  courts = createCourts(scene, club.s, interactables, pos => audio.ball(pos.distanceTo(camera.position)));
  for (const b of club.s.boxes) { b.held = false; addBoxView(b); }
  club.syncStaff();
  if (softwareGL) {
    applyPerfLevel(LEVELS_PERF.length - 1);
    setTimeout(() => hud.notify(L('Ton navigateur n\'utilise pas la carte graphique : le jeu sera lent. Active « Utiliser l\'accélération graphique » dans ses paramètres, ou joue avec l\'application Windows.',
      'Your browser is not using the graphics card: the game will be slow. Turn on "Use graphics acceleration" in its settings, or play the Windows app.'), 'bad'), 1500);
  }
  rebuildColliders();
  building.setOpen(false);
  building.showCounter(club.counter);
  computer = createComputer(club, {
    onClose: closeUi, sound: audio,
    onEndDay: () => { closeUi(); if (club.canEndDay()) club.endDay(); },
  });
  payment = createPayment(club, {
    sound: audio, onClose: closeUi, notify: (t, k) => hud.notify(t, k),
  });
  player.pos.set(0, 0, 19);
  player.yaw = 0; player.pitch = -0.05;
  hud.objectives(club.s.objectives);
  mode = 'play';
  $('menu').hidden = true;
  $('hud').hidden = false;
  audio.init();
  input.requestLock();
  hud.notify(L(`Jour ${club.s.day} : le club ouvre à 8 h. Retourne la pancarte quand tu es prêt.`, `Day ${club.s.day}: the club opens at 8 am. Flip the sign when you're ready.`), 'info');
  announceDay();
}

// Événement et défi du jour.
function announceDay() {
  hud.challenge(club);
  const ev = club.s.event;
  if (ev && ev.id !== 'calm') {
    const E = EVENTS[ev.id];
    const extra = ev.id === 'promo' && ev.product ? L(` Aujourd'hui : ${PRODUCTS[ev.product].name}.`, ` Today: ${PRODUCTS[ev.product].name}.`) : '';
    setTimeout(() => hud.notify(L(`${E.name} : ${E.desc}${extra}`, `${E.name}: ${E.desc}${extra}`), 'info'), 900);
  }
}

// --- Interfaces superposées ----------------------------------------------------------------------------
function openUi(kind) {
  input.uiOpen = true;
  input.exitLock();
  if (kind === 'computer') computer.open();
  if (kind === 'card' || kind === 'cash') payment.open(kind);
}
function closeUi() {
  computer?.close();
  if (payment?.isOpen) payment.close();     // rappelle closeUi, sans effet la seconde fois
  if (mode !== 'play') return;
  input.uiOpen = false;
  input.requestLock();
}

function showPause() {
  if (mode !== 'play') return;
  mode = 'pause';
  input.uiOpen = true;
  computer?.close();
  $('pause').hidden = false;
  $('save-status').textContent = '';
}
function resume() {
  mode = 'play';
  $('pause').hidden = true;
  input.uiOpen = false;
  input.requestLock();
}

function showLevelUp(level, unlocks) {
  const el = $('levelup');
  el.innerHTML = `<div><span>${L('Niveau', 'Level')} ${level}</span><b>${L('Le club grandit !', 'The club is growing!')}</b>${unlocks.length ? `<p>${L('Débloqué :', 'Unlocked:')} ${unlocks.join(' · ')}</p>` : ''}</div>`;
  el.hidden = false;
  el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
  clearTimeout(showLevelUp.t);
  showLevelUp.t = setTimeout(() => { el.hidden = true; }, 5200);
}

function showSummary(s) {
  mode = 'summary';
  input.uiOpen = true;
  input.exitLock();
  computer?.close();
  if (payment?.isOpen) payment.close();
  const income = s.courts + s.shop + s.licenceFees + s.bar + s.snack + s.parking + s.tips + s.bonus;
  const expenses = s.orders + s.build + s.salaries + s.upkeep;
  const line = (label, v) => (v ? `<dt>${label}</dt><dd>${fmtMoney(v)}</dd>` : '');
  const ev = EVENTS[s.event] ?? EVENTS.calm;
  const drift = s.licenceDrift;
  $('summary').innerHTML = `<div class="sheet">
    <p class="kicker">${L('Fin de journée', 'End of day')}</p><h2>${L(`Bilan du jour ${s.day}`, `Day ${s.day} report`)}</h2>
    <div class="sum-grid">
      <section><h3>${L('Recettes', 'Income')}</h3>
        <dl><dt>${L('Locations de terrains', 'Court rentals')}</dt><dd>${fmtMoney(s.courts)}</dd><dt>${L('Boutique', 'Shop')}</dt><dd>${fmtMoney(s.shop)}</dd><dt>${L('Licences', 'Memberships')}</dt><dd>${fmtMoney(s.licenceFees)}</dd>
          ${line(L('Buvette', 'Bar'), s.bar)}${line(L('Snack', 'Snack bar'), s.snack)}${line(L('Parking', 'Parking'), s.parking)}${line(L('Pourboires', 'Tips'), s.tips)}${line(L('Primes et défis', 'Bonuses and challenges'), s.bonus)}</dl>
        <p class="total">${fmtMoney(income)}</p></section>
      <section><h3>${L('Dépenses', 'Expenses')}</h3>
        <dl><dt>${L('Commandes', 'Orders')}</dt><dd>${fmtMoney(s.orders)}</dd><dt>${L('Travaux', 'Construction')}</dt><dd>${fmtMoney(s.build)}</dd><dt>${L('Salaires', 'Wages')}</dt><dd>${fmtMoney(s.salaries)}</dd><dt>${L('Entretien et charges', 'Upkeep and bills')}</dt><dd>${fmtMoney(s.upkeep)}</dd></dl>
        <p class="total neg">−${fmtMoney(expenses)}</p></section>
    </div>
    <div class="sum-kpis">
      <div><span>${L('Résultat', 'Result')}</span><b class="${income - expenses >= 0 ? 'pos' : 'neg'}">${income - expenses >= 0 ? '+' : ''}${fmtMoney(income - expenses)}</b></div>
      <div><span>${L('Clients', 'Customers')}</span><b>${s.customers}</b><small>${L(`${s.happy} satisfaits · ${s.angry} mécontents`, `${s.happy} happy · ${s.angry} unhappy`)}</small></div>
      <div><span>${L('Licenciés', 'Members')}</span><b>${s.licences}</b><small>${L(`${s.newLicences} nouvelles licences`, `${s.newLicences} new members`)}${drift ? ` · ${drift > 0 ? '+' : ''}${drift} ${L('bouche-à-oreille', 'word of mouth')}` : ''}</small></div>
      <div><span>${L('Satisfaction', 'Satisfaction')}</span><b>${(s.satisfaction * 5).toFixed(1)} / 5</b></div>
    </div>
    <p class="sum-extra">${ev.name}${s.challenge ? ` · ${L(`Défi « ${s.challenge.text} » :`, `Challenge "${s.challenge.text}":`)} ${s.challenge.done ? `<b class="pos">${L('réussi', 'done')}</b>` : `<b class="neg">${L('raté', 'failed')}</b>`}` : ''}${s.evictions ? ` · ${L(`${s.evictions} groupe${s.evictions > 1 ? 's' : ''} sorti${s.evictions > 1 ? 's' : ''} du terrain`, `${s.evictions} group${s.evictions > 1 ? 's' : ''} sent off court`)}` : ''}</p>
    <button class="primary" id="btn-next-day">${L('Jour suivant', 'Next day')}</button>
    <p class="muted small" id="sum-save"></p>
  </div>`;
  $('summary').hidden = false;
  $('sum-save').textContent = save() ? L('Partie sauvegardée.', 'Game saved.') : L('Sauvegarde impossible dans ce navigateur : la partie continue sans.', 'Saving is not possible in this browser: the game continues without it.');
  $('btn-next-day').addEventListener('click', () => {
    club.nextDay();
    building.showCounter(club.counter);
    hud.checkout(club.counter);
    $('summary').hidden = true;
    mode = 'play';
    input.uiOpen = false;
    input.requestLock();
    save();
    rebuildColliders();
    hud.notify(L(`Jour ${club.s.day} : bonne journée !`, `Day ${club.s.day}: have a good day!`), 'info');
    announceDay();
  });
}

// --- Commandes du joueur ------------------------------------------------------------------------------
function atStand() {
  for (const [k, S] of Object.entries(STANDS)) if (player.pos.x > S.x0 && player.pos.x < S.x1 && player.pos.z > S.z0 && player.pos.z < S.z1 + 1.2) return k;
  return null;
}
function atCounter() { return player.pos.x > -9.8 && player.pos.x < -2.6 && player.pos.z > 3.8 && player.pos.z < 6.6; }

input.onLockChange = (locked, reason) => {
  if (reason === 'exit' && mode === 'play' && !input.uiOpen) showPause();
};

input.onKey = (code) => {
  if (code === 'Escape') {
    if (mode === 'pause') return resume();
    if (input.uiOpen && mode === 'play') return closeUi();
    if (mode === 'play' && input.fallback) return showPause();
    return;
  }
  if (mode !== 'play' || input.uiOpen) return;
  if (code === 'KeyE') interact();
  if (code === 'KeyG') dropHeld();
  if (code === 'Tab') openUi('computer');
  if (code === 'KeyM') { $('btn-mute').textContent = audio.toggle() ? L('Activer le son', 'Unmute') : L('Couper le son', 'Mute'); }
};

input.onClick = (button, phase) => {
  if (mode !== 'play' || input.uiOpen || phase !== 'down') return;
  const t = ui.target;
  if (!t) return;
  const held = player.held?.box;
  if (button === 'primary') {
    if (held && t.kind === 'shelf') {
      const r = club.placeItem(held, t.shelf, t.level);
      if (r === 'ok') { audio.place(); completeObjective('shelf'); }
      else if (r === 'full') { hud.notify(L('Cette tablette est pleine', 'This shelf is full'), 'bad'); audio.error(); }
      else if (r === 'other') { hud.notify(L('Un autre produit est déjà rangé ici', 'Another product is already stocked here'), 'bad'); audio.error(); }
      else if (r === 'none') { hud.notify(L('Achète d\'abord cette étagère sur l\'ordinateur', 'Buy this shelf on the computer first'), 'bad'); audio.error(); }
      else if (r === 'zone') { hud.notify(zoneMessage(held.product), 'bad'); audio.error(); }
    } else if (t.kind === 'scan' && !t.done) club.scan(t.uid);
    else if (t.kind === 'card' && club.counter.phase === 'pay' && club.counter.method === 'card') openUi('card');
    else if (t.kind === 'cash' && club.counter.phase === 'pay' && club.counter.method === 'cash') openUi('cash');
  } else if (button === 'secondary') {
    if (held && t.kind === 'shelf') {
      const r = club.takeItem(held, t.shelf, t.level);
      if (r === 'ok') audio.pick();
      else if (r === 'full') hud.notify(L('Le carton est plein', 'The box is full'), 'bad');
    } else if (!held && t.kind === 'shelf') club.clearLevel(t.shelf, t.level);
  }
};

function zoneMessage(product) {
  const z = PRODUCTS[product].zone;
  return z === 'bar' ? L('Ce produit se range dans le frigo de la buvette', 'This product goes in the bar fridge') : z === 'snack' ? L('Ce produit se range dans la vitrine du snack', 'This product goes in the snack bar display') : L('Ce produit se range dans la boutique du club-house', 'This product goes in the clubhouse shop');
}
function orderText(cust) {
  return cust.order.map(o => `${o.qty} × ${PRODUCTS[o.product].short}`).join(' + ');
}

// Terrain dont le créneau est dépassé, si le joueur est dessus ou à son portillon.
function nearOvertimeCourt() {
  for (const c of COURTS) {
    if (!club.court[c.id].overtime) continue;
    const S = COURT_SLOTS[c.id], A = COURT_TYPES[c.surface].sport === 'padel' ? { w: 12, l: 22 } : { w: 18.3, l: 36.6 };
    if (Math.abs(player.pos.x - S.cx) < A.w / 2 + 2 && Math.abs(player.pos.z - S.cz) < A.l / 2 + 2.5) return c.id;
  }
  return null;
}
function evictAt(courtId) {
  const r = club.evict(courtId, 'player');
  if (r === 'ok') { audio.whistle(); hud.notify(L('Les joueurs libèrent le terrain', 'The players are leaving the court'), 'good'); }
  else if (r === 'refused') audio.error();
}

function interact() {
  const t = ui.target;
  if (!t || t.kind === 'court') {
    const oc = nearOvertimeCourt();
    if (oc) return evictAt(oc);
  }
  if (!t) return;
  if (t.kind === 'stand') {
    const r = club.serveStand(t.stand);
    if (r === 'none') hud.notify(L('Personne n\'attend au comptoir', 'Nobody is waiting at the counter'), 'info');
    else if (r === 'ok') completeObjective('serve');
    return;
  }

  if (t.kind === 'box' && !player.held) {
    const box = club.s.boxes.find(b => b.id === t.id);
    if (!box || !club.pickBox(box)) return;
    const m = boxViews.get(box.id);
    scene.remove(m);
    // Le carton porté ne doit pas intercepter la visée.
    const k = interactables.indexOf(m);
    if (k >= 0) interactables.splice(k, 1);
    player.hold(box, m);
    audio.pick();
    completeObjective('pick');
  } else if (t.kind === 'laptop') openUi('computer');
  else if (t.kind === 'sign') {
    const open = club.toggleOpen();
    audio.click();
    if (open) { completeObjective('open'); hud.notify(L('Le club est ouvert : les premiers clients arrivent', 'The club is open: the first customers are arriving'), 'good'); }
  }
}

function dropHeld() {
  if (!player.held) return;
  const h = player.held;
  const p = player.floorPoint(2.2) ?? new THREE.Vector3(player.pos.x - Math.sin(player.yaw) * 0.9, 0, player.pos.z - Math.cos(player.yaw) * 0.9);
  // On ne pose pas un carton dans un mur ou une étagère.
  for (const b of colliders) if (p.x > b.minX - 0.3 && p.x < b.maxX + 0.3 && p.z > b.minZ - 0.3 && p.z < b.maxZ + 0.3) {
    p.set(player.pos.x - Math.sin(player.yaw) * 0.7, 0, player.pos.z - Math.cos(player.yaw) * 0.7);
    break;
  }
  player.release();
  scene.add(h.mesh);
  interactables.push(h.mesh);
  h.mesh.rotation.set(0, player.yaw, 0);
  club.dropBox(h.box, p.x, p.z, 0);
  audio.place();
}

// Ce que vise le joueur, et l'aide affichée sous le viseur.
function updateTarget(dt) {
  ui.target = player.aim(interactables, 3.4);
  const t = ui.target, held = player.held?.box;
  ui.held = held ? { product: held.product, qty: held.qty } : null;
  let hint = '';
  const key = k => `<kbd>${k}</kbd>`;
  if (t) {
    if (t.kind === 'shelf') {
      const lvl = club.s.shelves[t.shelf].levels[t.level];
      const name = lvl.product ? `${PRODUCTS[lvl.product].short} · ${lvl.qty} / ${PRODUCTS[lvl.product].shelf}` : L('Emplacement libre', 'Empty slot');
      if (held) {
        if (SHELF_SLOTS[t.shelf].zone !== PRODUCTS[held.product].zone) hint = `${name}<br><span class="warn">${zoneMessage(held.product)}</span>`;
        else if (lvl.product && lvl.product !== held.product && lvl.qty > 0) hint = `${name}<br><span class="warn">${L('Un autre produit est rangé ici', 'Another product is stocked here')}</span>`;
        else hint = `${name}<br>${key(L('Clic gauche', 'Left click'))} ${L('Ranger', 'Stock')} · ${key(L('Clic droit', 'Right click'))} ${L('Reprendre', 'Take back')}`;
      } else hint = lvl.product && lvl.qty === 0 ? `${name}<br>${key(L('Clic droit', 'Right click'))} ${L("Retirer l'étiquette", 'Remove the label')}` : name;
    } else if (t.kind === 'box' && !held) {
      const box = club.s.boxes.find(b => b.id === t.id);
      if (box) hint = `${key('E')} ${L('Prendre le carton', 'Pick up the box')} · ${PRODUCTS[box.product].short} (${box.qty})`;
    } else if (t.kind === 'laptop') hint = `${key('E')} ${L("Utiliser l'ordinateur", 'Use the computer')}`;
    else if (t.kind === 'sign') hint = `${key('E')} ${club.s.open ? L('Fermer le club', 'Close the club') : L('Ouvrir le club', 'Open the club')}`;
    else if (t.kind === 'scan' && !t.done) hint = `${key(L('Clic', 'Click'))} ${L("Scanner l'article", 'Scan the item')}`;
    else if (t.kind === 'card') hint = club.counter.phase === 'pay' && club.counter.method === 'card' ? `${key(L('Clic', 'Click'))} ${L('Encaisser par carte', 'Take card payment')}` : L('Terminal de paiement', 'Payment terminal');
    else if (t.kind === 'cash') hint = club.counter.phase === 'pay' && club.counter.method === 'cash' ? `${key(L('Clic', 'Click'))} ${L('Ouvrir le tiroir-caisse', 'Open the cash drawer')}` : L('Tiroir-caisse', 'Cash drawer');
    else if (t.kind === 'stand') {
      const cust = club.standOrder(t.stand);
      const name = t.stand === 'buvette' ? 'Buvette' : 'Snack';
      if (cust) {
        const missing = cust.order.find(o => club.standStock(t.stand, o.product) < o.qty);
        hint = `${name} · ${L('commande :', 'order:')} ${orderText(cust)}${missing ? `<br><span class="warn">${L('Stock insuffisant :', 'Not enough stock:')} ${PRODUCTS[missing.product].short}</span>` : ''}<br>${key('E')} ${L('Servir', 'Serve')}`;
      } else hint = `${name} · ${L("personne n'attend", 'nobody waiting')}`;
    } else if (t.kind === 'court') {
      const st = club.s.courts[t.court];
      if (!club.canClean(t.court)) hint = L('Partie en cours', 'Match in progress');
      else if (st.wear > 0.02) hint = `${key(L('Maintenir E', 'Hold E'))} ${L('Brosser le terrain', 'Brush the court')} · ${L('usure', 'wear')} ${(st.wear * 100).toFixed(0)}${EN ? '' : ' '}%`;
      else hint = L('Terrain impeccable', 'Court in perfect shape');
    }
  }
  // Brossage : maintenir E en visant un terrain.
  if (t?.kind === 'court' && input.down('KeyE') && club.canClean(t.court) && club.s.courts[t.court].wear > 0.02) {
    ui.progress += dt / 2.8;
    audio.brushing(true);
    if (ui.progress >= 1) { club.clean(t.court); ui.progress = 0; audio.brushing(false); audio.place(); completeObjective('clean'); hud.notify(L('Terrain brossé', 'Court brushed'), 'good'); }
  } else { ui.progress = 0; audio.brushing(false); }
  // Près d'un terrain dont le créneau est dépassé : on peut faire sortir les joueurs.
  if (!hint || t?.kind === 'court') {
    const oc = nearOvertimeCourt();
    if (oc) hint = `<span class="warn">${L(`${COURTS.find(c => c.id === oc).label} : créneau dépassé !`, `${COURTS.find(c => c.id === oc).label}: slot overrun!`)}</span><br>${key('E')} ${L('Faire sortir les joueurs', 'Send the players off')}`;
  }
  ui.hint = hint;
}

// --- Écran titre -----------------------------------------------------------------------------------------
$('btn-new').addEventListener('click', () => {
  if (hasSave() && !confirmNew()) return;
  startGame(createState());
});
function confirmNew() {
  const btn = $('btn-new');
  if (btn.dataset.confirm) return true;
  btn.dataset.confirm = '1';
  btn.textContent = L('Écraser la sauvegarde ?', 'Overwrite your save?');
  setTimeout(() => { btn.dataset.confirm = ''; btn.textContent = L('Nouvelle partie', 'New game'); }, 3000);
  return false;
}
$('btn-continue').addEventListener('click', () => { const s = load(); if (s) startGame(s); });
$('btn-continue').hidden = !hasSave();
$('btn-resume').addEventListener('click', resume);
$('btn-save').addEventListener('click', () => { $('save-status').textContent = save() ? L('Partie sauvegardée.', 'Game saved.') : L('Sauvegarde impossible dans ce navigateur.', 'Saving is not possible in this browser.'); });
$('btn-quit').addEventListener('click', () => { save(); location.reload(); });
// Changer de langue : la partie est sauvegardée, puis la page se recharge dans l'autre langue.
for (const id of ['btn-lang', 'btn-lang-pause']) $(id)?.addEventListener('click', () => {
  if (club && mode !== 'menu') save();
  setLang(EN ? 'fr' : 'en');
  location.reload();
});
$('click-to-play').addEventListener('click', () => input.requestLock());
$('btn-mute').addEventListener('click', e => { e.currentTarget.textContent = audio.toggle() ? L('Activer le son', 'Unmute') : L('Couper le son', 'Mute'); });
const qBtn = $('btn-quality');
const qLabel = () => { qBtn.textContent = { ultra: L('Graphismes : ultra', 'Graphics: ultra'), high: L('Graphismes : haute qualité', 'Graphics: high quality'), low: L('Graphismes : mode économie', 'Graphics: power saving') }[quality]; };
qLabel();
qBtn.addEventListener('click', () => {
  const before = quality;
  quality = QUALITIES[(QUALITIES.indexOf(quality) + 1) % QUALITIES.length];
  qualityChosen = true;
  try { localStorage.setItem('tennis-club-quality', quality); } catch { /* rien */ }
  // Entrer dans le mode économie ou en sortir change les matériaux et l'anticrénelage : la partie est
  // sauvegardée et la page rechargée.
  if ((before === 'low') !== (quality === 'low')) { if (club && mode !== 'menu') save(); location.reload(); return; }
  applyQuality(); fps.good = 0; applyPerfLevel(0); qLabel();
});
// --- Boucle -----------------------------------------------------------------------------------------------
const clock = new THREE.Clock();
let menuT = 0, birdT = 4, stepPhase = 0, lastW = 0, lastH = 0;

// Adaptation automatique à l'ordinateur : si l'image ralentit (moins de 38 images/s), on allège par paliers
// — ombres moins souvent recalculées, puis sans ombres, puis définition un peu réduite — et on revient en arrière
// quand tout est fluide. En « ultra », rien n'est touché.
let liteFill = null;
const fps = { t: 0, n: 0, frame: 0, rate: 60, good: 0, level: 0, js: 0, draw: 0 };
const LEVELS_PERF = [
  { shadowEvery: 2, shadows: true, scale: 1 },
  { shadowEvery: 4, shadows: true, scale: 1 },
  { shadowEvery: 4, shadows: false, scale: 1 },
  { shadowEvery: 4, shadows: false, scale: 0.85 },
  { shadowEvery: 4, shadows: false, scale: 0.72 },
];
function applyPerfLevel(l) {
  fps.level = l;
  const P = LEVELS_PERF[l];
  const shadows = quality !== 'low' && P.shadows;
  if (renderer.shadowMap.enabled !== shadows) { renderer.shadowMap.enabled = shadows; scene.traverse(o => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { m.needsUpdate = true; }); }); }
  if (resScale !== P.scale) { resScale = P.scale; renderer.setPixelRatio(baseRatio() * resScale); fit(); }
}
function adaptResolution(realDt) {
  fps.t += realDt; fps.n++;
  if (fps.t < 2) return;
  fps.rate = fps.n / fps.t;
  fps.t = 0; fps.n = 0;
  const n = Math.max(1, fps.frames2 ?? 1);
  window.__perfStats = { fps: fps.rate, js: fps.js / n, draw: fps.draw / n, level: fps.level, gpu: gpuName };
  if (fpsBox) fpsBox.textContent = `${Math.round(fps.rate)} ${L('images/s', 'fps')} · ${L('palier', 'level')} ${fps.level} · ${L('jeu', 'game')} ${(fps.js / n).toFixed(1)} ms · ${L('envoi', 'submit')} ${(fps.draw / n).toFixed(1)} ms · ${gpuName}${softwareGL ? L(' · sans carte graphique', ' · no GPU') : ''}`;
  fps.js = 0; fps.draw = 0; fps.frames2 = 0;
  if (quality === 'ultra' || document.hidden || mode !== 'play') return;
  if (fps.rate < 38 && fps.level < LEVELS_PERF.length - 1) { fps.good = 0; applyPerfLevel(fps.level + 1); }
  // Une fois les ombres coupées, on ne les rallume plus (chaque bascule fige l'image un instant).
  else if (fps.rate > 56 && fps.level > (fps.level >= 2 ? 2 : 0) && ++fps.good >= 3) { fps.good = 0; applyPerfLevel(fps.level - 1); }
}
// Compteur d'images par seconde (touche F3).
let fpsBox = null;
addEventListener('keydown', e => {
  if (e.code !== 'F3') return;
  e.preventDefault();
  if (fpsBox) { fpsBox.remove(); fpsBox = null; return; }
  fpsBox = document.createElement('div');
  fpsBox.style.cssText = 'position:fixed;top:8px;left:50%;transform:translateX(-50%);z-index:50;background:rgba(0,0,0,.6);color:#e4f05a;font:600 13px Outfit,Arial;padding:4px 10px;border-radius:8px;pointer-events:none';
  fpsBox.textContent = '…';
  document.body.appendChild(fpsBox);
});

function tick() {
  const tStart = performance.now();
  const realDt = clock.getDelta();
  const dt = Math.min(realDt, 0.05);
  adaptResolution(realDt);
  if (!renderer.shadowMap.autoUpdate && fps.frame++ % LEVELS_PERF[fps.level].shadowEvery === 0) renderer.shadowMap.needsUpdate = true;
  setViewer(camera.position);
  if (quality === 'low' && fps.frame % 20 === 0) liteScene(scene);
  // Mode économie : les matériaux simplifiés ne reçoivent pas la lumière du ciel ; une lumière d'ambiance la remplace.
  if (quality === 'low' && !liteFill) { liteFill = new THREE.HemisphereLight(0xe6eef6, 0xc4c0b8, 1.3); scene.add(liteFill); }
  // Si la fenêtre a changé de taille sans prévenir (passage en plein écran), on réajuste l'image.
  if (lastW !== innerWidth || lastH !== innerHeight) { lastW = innerWidth; lastH = innerHeight; fit(); }
  if (mode === 'menu') {
    // Plan large autour du club derrière l'écran titre.
    menuT += dt * 0.05;
    camera.position.set(Math.sin(menuT) * 20, 7 + Math.sin(menuT * 0.7) * 1.5, 28 + Math.cos(menuT) * 6);   // hors des arbres de la rue
    camera.lookAt(0, 2, 4);
    env.setTime(10.5 * 60 + Math.sin(menuT) * 30, new THREE.Vector3(0, 0, 5));
  } else {
    if (mode === 'play') {
      club.update(dt, { playerAtCounter: atCounter(), playerAtStand: atStand() });
      player.update(dt, input, colliders, WORLD);
      player.pushFrom(club.persons);
      player.resolve(colliders);
      updateTarget(dt);
      // Pas et oiseaux.
      if (Math.floor(player.stepPhase / Math.PI) !== stepPhase) { stepPhase = Math.floor(player.stepPhase / Math.PI); audio.step(); }
      birdT -= dt;
      if (birdT <= 0) { birdT = 5 + Math.random() * 12; if (club.s.minute < 20 * 60 && (player.pos.z < 0 || player.pos.z > 14)) audio.bird(); }
    }
    for (const p of club.persons) personViews.get(p.id)?.update(dt, p);
    courts.update(dt);
    stands.setBarrier(traffic.update(dt));
    building.animateCounter(dt);
    player.animateHeld(dt);
    const { night } = env.setTime(club.s.minute, player.pos);
    if (liteFill) liteFill.intensity = 1.3 - night * 1.05;
    building.update(club.s.minute, night);
    stands.update(dt, night);
    courts.setNight(night > 0.35 && club.s.upgrades.lights);
    hud.update(club, ui);
    const ch = input.locked || input.fallback || mode !== 'play' || input.uiOpen;
    if ($('click-to-play').hidden !== ch) $('click-to-play').hidden = ch;
    const lh = !(input.fallback && mode === 'play' && !input.uiOpen);
    if ($('look-help').hidden !== lh) $('look-help').hidden = lh;
  }
  const tDraw = performance.now();
  renderer.render(scene, camera);
  fps.js += tDraw - tStart; fps.draw += performance.now() - tDraw; fps.frames2 = (fps.frames2 ?? 0) + 1;
}
// Démarrage : ressources graphiques (textures photographiques, ciels, modèles 3D), puis la scène.
(async () => {
  const bar = $('loading-bar');
  await loadAssets(p => { if (bar) bar.style.width = `${Math.round(p * 100)}%`; });
  env = createEnvironment(scene, renderer);
  applyQuality();
  building = createBuilding(scene, interactables);
  traffic = createTraffic(scene);
  renderer.setAnimationLoop(tick);
  $('loading').hidden = true;
})();

// Accès pour les tests automatisés et la console.
window.__club = { get club() { return club; }, colliders: () => colliders, renderer, scene, camera, player, startGame, createState, hooks, interact, input, ui, openUi, closeUi, dropHeld, viewOf: p => personViews.get(p.id), get traffic() { return traffic; } };
