// Simulation du club : temps, clients, file d'attente, caisse, stock, terrains, personnel, économie.
// Aucune dépendance au rendu : le rendu est prévenu par des "hooks". Testable sous Node.
import {
  PRODUCTS, PRODUCT_IDS, COURTS, COURT_TYPES, SERVICES, STAFF, UPGRADES, LEVELS, levelFor,
  SHELF_PRICE, SHELF_START, OPEN_HOUR, CLOSE_HOUR, LATE_CLOSE_HOUR, START_MONEY, START_LICENCES,
} from './data.js';
import {
  SPAWN, FRONT_OUT, FRONT_IN, BACK_IN, BACK_OUT, QUEUE, LOBBY, SHELF_SLOTS, COURT_SLOTS, STAFF_SPOT,
  DELIVERY, playSpots, padelEntry, TENNIS_AREA, QUEUE_APPROACH_X, COUNTER_EXIT,
} from './layout.js';
import { clamp, rand, randInt, pick, round10, dist2 } from '../core/util.js';

export const GAME_MIN_PER_SEC = 2;        // 1 seconde réelle = 2 minutes de jeu
const WALK_SPEED = 1.45;
const QUEUE_PATIENCE = 75;               // secondes réelles avant d'abandonner la file
const COURT_PATIENCE = 50;
const MAX_CUSTOMERS = 16;
export const SHELF_LEVELS = 3;
export const PALLET_SLOTS = 18;

export function createState() {
  const prices = {};
  for (const id of PRODUCT_IDS) prices[id] = round10(PRODUCTS[id].market);
  for (const id of Object.keys(SERVICES)) prices[id] = SERVICES[id].market;
  return {
    version: 1,
    money: START_MONEY, day: 1, minute: OPEN_HOUR * 60, open: false, dayStarted: false,
    xp: 0, level: 1, licences: START_LICENCES, satisfaction: 0.62,
    prices,
    courts: Object.fromEntries(COURTS.map((c, i) => [c.id, { built: i === 0, wear: 0 }])),
    shelves: SHELF_SLOTS.map((_, i) => ({
      built: i < SHELF_START,
      levels: Array.from({ length: SHELF_LEVELS }, () => ({ product: null, qty: 0 })),
    })),
    boxes: [],
    orders: [],
    staff: { reception: false, keeper: false },
    upgrades: { lockers: false, bar: false, lights: false },
    stats: freshStats(),
    nextId: 1,
    objectives: [],
  };
}

function freshStats() {
  return {
    courts: 0, shop: 0, licenceFees: 0,
    orders: 0, build: 0, salaries: 0, upkeep: 0,
    customers: 0, happy: 0, angry: 0, newLicences: 0, sessions: 0,
  };
}

export class Club {
  constructor(state, hooks = {}) {
    this.s = state;
    this.h = new Proxy(hooks, { get: (t, k) => t[k] ?? (() => {}) });
    this.persons = [];
    this.customers = [];
    this.queue = [];
    this.court = {};       // état non sauvegardé des terrains : réservation, partie en cours
    for (const c of COURTS) this.court[c.id] = { reservedBy: null, playing: false, cleaning: false };
    this.counter = { cust: null, items: [], phase: 'idle', total: 0, method: null, given: 0, autoT: 0 };
    this.staff = { reception: null, keeper: null };
    this.lobbyUsed = new Set();
    this.dayOver = false;
    this.orderTimer = 0;
  }

  // ---------------------------------------------------------------------------------- outils
  id() { return this.s.nextId++; }
  get closeMinute() { return (this.s.upgrades.lights ? LATE_CLOSE_HOUR : CLOSE_HOUR) * 60; }
  get capacity() {
    let cap = 25;
    for (const c of COURTS) if (this.s.courts[c.id].built) cap += COURT_TYPES[c.surface].sport === 'padel' ? 30 : 25;
    if (this.s.upgrades.lockers) cap += 40;
    return cap;
  }
  unlocked(level) { return this.s.level >= level; }

  earn(amount, cat) { this.s.money += amount; this.s.stats[cat] += amount; }
  spend(amount, cat) {
    if (this.s.money < amount - 1e-6) return false;
    this.s.money -= amount; this.s.stats[cat] += amount;
    return true;
  }
  addXp(n) {
    this.s.xp += n;
    const lvl = levelFor(this.s.xp);
    if (lvl > this.s.level) {
      this.s.level = lvl;
      this.h.levelUp(lvl, this.unlocksAt(lvl));
    }
  }
  unlocksAt(lvl) {
    const list = [];
    for (const id of PRODUCT_IDS) if (PRODUCTS[id].level === lvl) list.push(PRODUCTS[id].name);
    for (const c of COURTS) if (c.level === lvl && c.price) list.push(`${c.label} (${COURT_TYPES[c.surface].name})`);
    for (const k of Object.keys(STAFF)) if (STAFF[k].level === lvl) list.push(STAFF[k].name);
    for (const k of Object.keys(UPGRADES)) if (UPGRADES[k].level === lvl) list.push(UPGRADES[k].name);
    return list;
  }
  xpProgress() {
    const l = this.s.level, a = LEVELS[l - 1], b = LEVELS[l] ?? LEVELS[LEVELS.length - 1] * 2;
    return clamp((this.s.xp - a) / (b - a), 0, 1);
  }

  // ---------------------------------------------------------------------------------- personnes
  spawnPerson(role, at = SPAWN) {
    const p = {
      id: this.id(), role, x: at.x + rand(-1.5, 1.5), z: at.z + rand(-0.5, 0.5), rot: Math.PI,
      speed: WALK_SPEED * rand(0.88, 1.12), path: [], action: 'idle', look: null, seed: Math.random(),
      holdsRacket: false,
    };
    this.persons.push(p);
    this.h.spawnPerson(p);
    return p;
  }
  despawnPerson(p) {
    const i = this.persons.indexOf(p);
    if (i >= 0) this.persons.splice(i, 1);
    if (p.lobby != null) this.lobbyUsed.delete(p.lobby);
    this.h.despawnPerson(p);
  }
  goTo(p, points) { p.path = points.map(q => ({ x: q.x, z: q.z })); }
  arrived(p) { return p.path.length === 0; }

  movePerson(p, dt) {
    if (!p.path.length) { if (p.action === 'walk') p.action = 'idle'; return; }
    const t = p.path[0];
    const dx = t.x - p.x, dz = t.z - p.z, d = Math.hypot(dx, dz);
    const step = p.speed * dt;
    if (d <= step || d < 0.02) { p.x = t.x; p.z = t.z; p.path.shift(); }
    else { p.x += (dx / d) * step; p.z += (dz / d) * step; }
    if (d > 0.01) p.rot = Math.atan2(dx, dz);
    p.action = 'walk';
  }

  takeLobby(p) {
    for (let i = 0; i < LOBBY.length; i++) if (!this.lobbyUsed.has(i)) { this.lobbyUsed.add(i); p.lobby = i; return LOBBY[i]; }
    p.lobby = null;
    return { x: rand(-1, 4), z: rand(10.5, 12.8) };
  }
  freeLobby(p) { if (p.lobby != null) { this.lobbyUsed.delete(p.lobby); p.lobby = null; } }

  // Trajet d'une personne vers la sortie (depuis n'importe où dans le club ou sur les courts).
  pathOut(p) {
    const pts = [];
    if (p.z < 0) pts.push(BACK_OUT, BACK_IN);
    pts.push({ x: rand(-0.4, 0.4), z: FRONT_IN.z }, FRONT_OUT, { x: SPAWN.x + rand(-2, 2), z: SPAWN.z });
    return pts;
  }

  // ---------------------------------------------------------------------------------- clients
  spawnCustomer(kind) {
    const cust = { id: this.id(), kind, persons: [], state: 'arrive', timer: 0, wants: [], basket: [], court: null, sport: null, mood: 1, queueT: 0, waitT: 0 };
    let size = 1;
    if (kind === 'book') {
      const sports = this.builtSports();
      cust.sport = sports.includes('padel') && (sports.length === 1 || Math.random() < 0.45) ? 'padel' : 'tennis';
      size = cust.sport === 'padel' ? 4 : 2;
      const drinkChance = this.s.upgrades.bar ? 0.65 : 0.3;
      if (Math.random() < drinkChance) cust.wants.push(pick(this.unlockedProducts(['water', 'iso'])));
      if (Math.random() < 0.18) cust.wants.push(cust.sport === 'padel' ? 'padelballs' : 'balls');
    } else if (kind === 'shop') {
      const n = Math.random() < 0.6 ? 1 : randInt(2, 3);
      const pool = this.unlockedProducts(PRODUCT_IDS);
      for (let i = 0; i < n; i++) cust.wants.push(this.weightedProduct(pool));
    }
    cust.wants = cust.wants.filter(w => w && this.unlocked(PRODUCTS[w].level));
    cust.wants = [...new Set(cust.wants)];
    for (let i = 0; i < size; i++) {
      const p = this.spawnPerson(i === 0 ? 'leader' : 'partner', { x: SPAWN.x + i * 0.7, z: SPAWN.z + i * 0.5 });
      p.cust = cust;
      p.holdsRacket = kind === 'book';
      this.goTo(p, [FRONT_OUT, { x: FRONT_IN.x + rand(-0.6, 0.6), z: FRONT_IN.z + rand(-0.3, 0.3) }]);
      cust.persons.push(p);
    }
    cust.leader = cust.persons[0];
    this.customers.push(cust);
    this.s.stats.customers++;
    return cust;
  }
  builtSports() {
    const set = new Set();
    for (const c of COURTS) if (this.s.courts[c.id].built) set.add(COURT_TYPES[c.surface].sport);
    return [...set];
  }
  unlockedProducts(ids) { return ids.filter(id => this.unlocked(PRODUCTS[id].level)); }
  weightedProduct(pool) {
    const w = { balls: 5, water: 4, iso: 3, grip: 3, racket: 1, padelballs: 3, padelracket: 1, cap: 1.5 };
    if (!this.builtSports().includes('padel')) { w.padelballs = 0.3; w.padelracket = 0.2; }
    const total = pool.reduce((a, id) => a + (w[id] ?? 1), 0);
    let r = Math.random() * total;
    for (const id of pool) { r -= w[id] ?? 1; if (r <= 0) return id; }
    return pool[0];
  }

  say(p, text, kind = 'bad') { this.h.bubble(p, text, kind); }
  upset(cust, amount, text) {
    cust.mood = clamp(cust.mood - amount, 0, 1);
    if (text) this.say(cust.leader, text);
  }

  updateCustomer(cust, dt) {
    const L = cust.leader;
    switch (cust.state) {
      case 'arrive':
        if (!this.arrived(L)) break;
        for (const p of cust.persons) if (p !== L) this.goTo(p, [this.takeLobby(p)]);
        if (cust.wants.length) this.nextWant(cust);
        else if (cust.kind === 'book') this.findCourt(cust);
        else this.joinQueue(cust);
        break;
      case 'toShelf':
        if (this.arrived(L)) { cust.state = 'browse'; cust.timer = rand(1.2, 2.2); L.action = 'browse'; L.look = cust.shelfLook; }
        break;
      case 'browse':
        cust.timer -= dt;
        if (cust.timer <= 0) { L.look = null; this.takeFromShelf(cust); }
        break;
      case 'waitCourt':
        cust.waitT += dt;
        cust.timer -= dt;
        if (cust.timer <= 0) {
          cust.timer = 1;
          if (this.reserveCourt(cust)) this.joinQueue(cust);
          else if (cust.waitT > COURT_PATIENCE || !this.s.open) { this.upset(cust, 0.45, 'Aucun terrain libre…'); this.leave(cust); }
        }
        break;
      case 'queue': {
        cust.queueT += dt;
        const idx = this.queue.indexOf(cust);
        if (idx === 0 && this.arrived(L) && !this.counter.cust) this.beginCheckout(cust);
        else if (cust.queueT > QUEUE_PATIENCE * (0.8 + this.s.satisfaction * 0.5)) {
          this.upset(cust, 0.55, 'Trop d\'attente !');
          this.leaveQueue(cust);
          this.leave(cust);
        }
        break;
      }
      case 'counter':
        cust.queueT += dt;
        // Si personne ne s'occupe de lui pendant longtemps, il finit par partir.
        if (this.counter.idleT > 45) {
          this.upset(cust, 0.5, 'Il n\'y a personne à l\'accueil ?');
          this.cancelCheckout();
          this.leave(cust);
        }
        break;
      case 'toCourt':
        if (cust.persons.every(p => this.arrived(p))) this.startSession(cust);
        break;
      case 'playing':
        cust.timer -= dt;
        if (cust.timer <= 0) this.endSession(cust);
        break;
      case 'leave':
        if (cust.persons.every(p => this.arrived(p))) this.removeCustomer(cust);
        break;
    }
  }

  // --- boutique
  nextWant(cust) {
    const L = cust.leader;
    while (cust.wants.length) {
      const want = cust.wants.shift();
      const shelf = this.findShelfWith(want, L);
      if (!shelf) { this.upset(cust, 0.15, `Plus de ${PRODUCTS[want].short.toLowerCase()} !`); continue; }
      cust.want = want; cust.shelf = shelf.index;
      const slot = SHELF_SLOTS[shelf.index];
      this.goTo(L, [{ x: slot.browse.x + rand(-0.5, 0.5), z: slot.browse.z + rand(-0.15, 0.15) }]);
      cust.shelfLook = { x: slot.x, z: slot.z };
      cust.state = 'toShelf';
      return;
    }
    this.afterShopping(cust);
  }
  findShelfWith(product, from) {
    let best = null;
    this.s.shelves.forEach((sh, i) => {
      if (!sh.built) return;
      if (sh.levels.some(l => l.product === product && l.qty > 0)) {
        const d = dist2(from, SHELF_SLOTS[i].browse);
        if (!best || d < best.d) best = { index: i, d };
      }
    });
    return best;
  }
  takeFromShelf(cust) {
    const sh = this.s.shelves[cust.shelf];
    const lvlIdx = sh.levels.findIndex(l => l.product === cust.want && l.qty > 0);
    const P = PRODUCTS[cust.want];
    const price = this.s.prices[cust.want];
    if (lvlIdx < 0) {
      this.upset(cust, 0.15, `Plus de ${P.short.toLowerCase()} !`);
    } else if (price > P.market * 1.35 || (price > P.market * 1.15 && Math.random() < (price / P.market - 1.15) * 4)) {
      this.upset(cust, 0.12, 'Trop cher !');
    } else {
      const lvl = sh.levels[lvlIdx];
      const n = Math.min(lvl.qty, P.cost > 20 ? 1 : (Math.random() < 0.7 ? 1 : 2));
      lvl.qty -= n;
      for (let i = 0; i < n; i++) cust.basket.push({ kind: 'product', product: cust.want, price, label: P.name });
      this.h.shelfChanged(cust.shelf);
    }
    this.nextWant(cust);
  }
  afterShopping(cust) {
    if (cust.kind === 'book') return this.findCourt(cust);
    if (!cust.basket.length) return this.leave(cust);
    this.joinQueue(cust);
  }

  // --- terrains
  freeCourt(sport) {
    for (const c of COURTS) {
      const st = this.s.courts[c.id], rt = this.court[c.id];
      if (!st.built || COURT_TYPES[c.surface].sport !== sport) continue;
      if (rt.reservedBy || rt.cleaning || st.wear >= 0.9) continue;
      return c.id;
    }
    return null;
  }
  reserveCourt(cust) {
    const id = this.freeCourt(cust.sport);
    if (!id) return false;
    this.court[id].reservedBy = cust.id;
    cust.court = id;
    const price = this.s.prices[cust.sport];
    cust.basket.push({ kind: 'booking', court: id, price, label: `${COURTS.find(c => c.id === id).label} · 1 h` });
    this.h.courtChanged(id);
    return true;
  }
  findCourt(cust) {
    if (this.reserveCourt(cust)) return this.joinQueue(cust);
    cust.state = 'waitCourt'; cust.timer = 1; cust.waitT = 0;
    this.goTo(cust.leader, [this.takeLobby(cust.leader)]);
    if (Math.random() < 0.6) this.say(cust.leader, 'On attend qu\'un terrain se libère', 'info');
  }
  releaseCourt(cust) {
    if (cust.court && this.court[cust.court].reservedBy === cust.id) {
      this.court[cust.court].reservedBy = null;
      this.court[cust.court].playing = false;
      this.h.courtChanged(cust.court);
    }
  }
  // Chemin vers une place de jeu. Au tennis, on contourne le filet par le bord du court ;
  // au padel, on entre par l'ouverture latérale du côté de sa place.
  courtPath(p, slotId, spot, sport) {
    const slot = COURT_SLOTS[slotId];
    const pts = [];
    if (p.z > 0) {
      if (p.x < QUEUE_APPROACH_X) pts.push(COUNTER_EXIT);
      pts.push({ x: rand(-0.4, 0.4), z: BACK_IN.z }, BACK_OUT);
    }
    pts.push(...slot.route);
    if (sport === 'padel') pts.push(...padelEntry(slotId, spot.side));
    else if (spot.side < 0) {
      const sx = slot.cx + (TENNIS_AREA.w / 2 - 0.8) * (spot.x >= slot.cx ? 1 : -1);
      pts.push({ x: sx, z: slot.cz + 2 }, { x: sx, z: slot.cz - 2 });
    }
    pts.push({ x: spot.x, z: spot.z });
    return pts;
  }
  // Chemin inverse, de la place de jeu jusqu'à l'allée.
  courtExit(p, slotId, sport) {
    const slot = COURT_SLOTS[slotId];
    const pts = [];
    if (sport === 'padel') pts.push(...padelEntry(slotId, p.z >= slot.cz ? 1 : -1).reverse());
    else if (p.z < slot.cz - 1) {
      const sx = slot.cx + (TENNIS_AREA.w / 2 - 0.8) * (p.x >= slot.cx ? 1 : -1);
      pts.push({ x: sx, z: slot.cz - 2 }, { x: sx, z: slot.cz + 2 });
    }
    pts.push(...[...slot.route].reverse());
    return pts;
  }
  startSession(cust) {
    cust.state = 'playing';
    cust.timer = rand(32, 44);
    const st = this.s.courts[cust.court];
    this.court[cust.court].playing = true;
    if (st.wear > 0.5) this.upset(cust, 0.25, st.wear > 0.75 ? 'Le terrain est dans un état…' : 'Terrain mal entretenu');
    const spots = playSpots(cust.court, cust.sport);
    cust.persons.forEach((p, i) => { p.action = 'play'; p.rot = spots[i].side > 0 ? Math.PI : 0; });
    this.s.stats.sessions++;
    this.h.courtSession(cust.court, cust.persons, true, cust.sport);
  }
  endSession(cust) {
    const st = this.s.courts[cust.court];
    const surf = COURTS.find(c => c.id === cust.court).surface;
    st.wear = clamp(st.wear + COURT_TYPES[surf].wear * rand(0.8, 1.2), 0, 1);
    this.h.courtSession(cust.court, cust.persons, false, cust.sport);
    for (const p of cust.persons) {
      p.action = 'idle';
      this.goTo(p, [...this.courtExit(p, cust.court, cust.sport), BACK_OUT, BACK_IN, { x: rand(-0.4, 0.4), z: FRONT_IN.z }, FRONT_OUT, { x: SPAWN.x + rand(-2, 2), z: SPAWN.z }]);
    }
    this.releaseCourt(cust);
    cust.state = 'leave';
  }

  // --- file et caisse
  joinQueue(cust) {
    if (this.queue.length >= QUEUE.length) {
      this.upset(cust, 0.4, 'Il y a trop de monde !');
      return this.leave(cust);
    }
    this.queue.push(cust);
    cust.state = 'queue';
    this.freeLobby(cust.leader);
    this.goTo(cust.leader, this.queuePath(cust.leader, QUEUE[this.queue.length - 1]));
  }
  // On rejoint sa place dans la file en longeant le comptoir par le côté salle.
  queuePath(p, spot) {
    if (p.x < QUEUE_APPROACH_X - 0.5 && p.z > 7.8) return [spot];
    return [{ x: QUEUE_APPROACH_X, z: spot.z }, spot];
  }
  leaveQueue(cust) {
    const i = this.queue.indexOf(cust);
    if (i < 0) return;
    this.queue.splice(i, 1);
    this.queue.forEach((c, k) => { if (k >= i) this.goTo(c.leader, [QUEUE[k]]); });
  }

  beginCheckout(cust) {
    cust.state = 'counter';
    cust.leader.rot = Math.PI;
    const c = this.counter;
    c.cust = cust; c.phase = 'scan'; c.idleT = 0; c.autoT = 0;
    if (cust.kind === 'licence') cust.basket.push({ kind: 'licence', price: this.s.prices.licence, label: 'Licence annuelle' });
    c.items = cust.basket.map((it, i) => ({ ...it, uid: this.id(), scanned: false, index: i }));
    c.total = 0; c.method = null; c.given = 0;
    this.h.counterChanged(c);
  }
  scan(uid) {
    const c = this.counter;
    if (c.phase !== 'scan') return false;
    const it = c.items.find(i => i.uid === uid && !i.scanned);
    if (!it) return false;
    it.scanned = true;
    c.total = round10(c.total + it.price);
    c.idleT = 0;
    this.h.sound('beep');
    if (c.items.every(i => i.scanned)) this.askPayment();
    this.h.counterChanged(c);
    return true;
  }
  askPayment() {
    const c = this.counter;
    c.phase = 'pay';
    c.method = Math.random() < (c.total > 40 ? 0.7 : 0.5) ? 'card' : 'cash';
    if (c.method === 'cash') c.given = Club.cashGiven(c.total);
  }
  // Montant tendu par un client qui paie en espèces.
  static cashGiven(total) {
    if (Math.random() < 0.15) return total;
    const cents = Math.round(total * 100);
    const options = [];
    for (const step of [100, 500, 1000, 2000, 5000, 10000]) {
      const v = Math.ceil(cents / step) * step;
      if (v > cents || step === 10000) options.push(v);
    }
    const chosen = options[Math.min(options.length - 1, Math.floor(Math.random() * Math.min(3, options.length)))];
    return Math.max(chosen, cents) / 100;
  }
  payCard(amount) {
    const c = this.counter;
    if (c.phase !== 'pay' || c.method !== 'card') return false;
    if (Math.abs(amount - c.total) > 0.004) { this.h.sound('error'); return false; }
    this.completeCheckout(c.total, true);
    return true;
  }
  payCash(change) {
    const c = this.counter;
    if (c.phase !== 'pay' || c.method !== 'cash') return null;
    const due = Math.round((c.given - c.total) * 100), gave = Math.round(change * 100);
    if (gave < due) this.upset(c.cust, 0.35, 'Vous ne m\'avez pas rendu assez !');
    this.completeCheckout(c.given - change, gave === due);
    return gave === due ? 'ok' : gave < due ? 'short' : 'over';
  }
  completeCheckout(received, exact) {
    const c = this.counter, cust = c.cust;
    // Répartition des recettes par catégorie (au prorata si la monnaie était fausse).
    const ratio = c.total > 0 ? received / c.total : 1;
    let xp = exact ? 2 : 0;
    for (const it of c.items) {
      const cat = it.kind === 'booking' ? 'courts' : it.kind === 'licence' ? 'licenceFees' : 'shop';
      this.earn(it.price * ratio, cat);
      xp += it.kind === 'booking' ? 12 : it.kind === 'licence' ? 18 : 2;
    }
    if (cust.kind === 'licence') { this.s.licences++; this.s.stats.newLicences++; }
    this.addXp(xp);
    this.h.sound('cash');
    // Attente à la caisse : au-delà de 25 s, le client est de moins en moins content.
    cust.mood = clamp(cust.mood - clamp((cust.queueT - 25) / 70, 0, 0.35), 0, 1);
    if (cust.mood > 0.85 && Math.random() < 0.4) this.say(cust.leader, 'Merci, bonne journée !', 'good');
    this.queue.shift();
    this.queue.forEach((q, k) => this.goTo(q.leader, [QUEUE[k]]));
    c.cust = null; c.items = []; c.phase = 'idle'; c.total = 0; c.method = null; c.given = 0;
    this.h.counterChanged(c);
    if (cust.kind === 'book') this.sendToCourt(cust);
    else this.leave(cust);
  }
  cancelCheckout() {
    const c = this.counter;
    if (!c.cust) return;
    const cust = c.cust;
    this.leaveQueue(cust);
    c.cust = null; c.items = []; c.phase = 'idle';
    this.h.counterChanged(c);
  }
  sendToCourt(cust) {
    cust.state = 'toCourt';
    const spots = playSpots(cust.court, cust.sport);
    cust.persons.forEach((p, i) => { this.freeLobby(p); this.goTo(p, this.courtPath(p, cust.court, spots[i], cust.sport)); });
  }

  leave(cust) {
    this.releaseCourt(cust);
    cust.state = 'leave';
    for (const p of cust.persons) { this.freeLobby(p); p.look = null; this.goTo(p, this.pathOut(p)); }
  }
  removeCustomer(cust) {
    for (const p of cust.persons) this.despawnPerson(p);
    const i = this.customers.indexOf(cust);
    if (i >= 0) this.customers.splice(i, 1);
    this.leaveQueue(cust);
    this.releaseCourt(cust);
    this.s.satisfaction = clamp(this.s.satisfaction * 0.9 + cust.mood * 0.1, 0, 1);
    if (cust.mood >= 0.75) this.s.stats.happy++;
    else if (cust.mood < 0.5) this.s.stats.angry++;
  }

  // ---------------------------------------------------------------------------------- stock
  order(product, boxes) {
    const P = PRODUCTS[product];
    if (!P || !this.unlocked(P.level) || boxes < 1) return false;
    const cost = round10(P.cost * P.box * boxes);
    if (!this.spend(cost, 'orders')) return false;
    this.s.orders.push({ product, boxes, eta: 8 });   // livraison en 8 secondes réelles
    this.h.sound('order');
    return true;
  }
  deliver(o) {
    for (let i = 0; i < o.boxes; i++) {
      const slot = this.freePalletSlot();
      const box = { id: this.id(), product: o.product, qty: PRODUCTS[o.product].box, ...slot, held: false };
      this.s.boxes.push(box);
      this.h.boxAdded(box);
    }
    this.h.notify(`Livraison arrivée : ${o.boxes} carton${o.boxes > 1 ? 's' : ''} de ${PRODUCTS[o.product].short.toLowerCase()}`, 'info');
  }
  freePalletSlot() {
    const used = new Set(this.s.boxes.filter(b => b.pallet != null).map(b => b.pallet));
    for (let i = 0; i < PALLET_SLOTS; i++) if (!used.has(i)) return { pallet: i, ...palletPos(i) };
    return { pallet: null, x: DELIVERY.x + rand(-2.5, 2.5), z: DELIVERY.z + rand(1.2, 2.5), y: 0 };
  }
  pickBox(box) {
    if (box.held) return false;
    box.held = true; box.pallet = null;
    return true;
  }
  dropBox(box, x, z, y = 0) {
    box.held = false; box.x = x; box.z = z; box.y = y;
    this.h.boxMoved(box);
  }
  shelfLevelCap(product) { return PRODUCTS[product].shelf; }
  // Range une unité du carton sur un niveau d'étagère.
  placeItem(box, shelfIdx, levelIdx) {
    const sh = this.s.shelves[shelfIdx];
    if (!sh?.built || box.qty <= 0) return 'none';
    const lvl = sh.levels[levelIdx];
    if (lvl.product && lvl.product !== box.product && lvl.qty > 0) return 'other';
    if (lvl.qty >= this.shelfLevelCap(box.product)) return 'full';
    lvl.product = box.product; lvl.qty++; box.qty--;
    this.h.shelfChanged(shelfIdx);
    if (box.qty === 0) this.removeBox(box);
    return 'ok';
  }
  // Reprend une unité de l'étagère dans le carton.
  takeItem(box, shelfIdx, levelIdx) {
    const lvl = this.s.shelves[shelfIdx]?.levels[levelIdx];
    if (!lvl || lvl.product !== box.product || lvl.qty <= 0) return 'none';
    if (box.qty >= PRODUCTS[box.product].box) return 'full';
    lvl.qty--; box.qty++;
    if (lvl.qty === 0) lvl.product = null;
    this.h.shelfChanged(shelfIdx);
    return 'ok';
  }
  // Retire l'étiquette d'un niveau vide pour y ranger autre chose.
  clearLevel(shelfIdx, levelIdx) {
    const lvl = this.s.shelves[shelfIdx]?.levels[levelIdx];
    if (lvl && lvl.qty === 0) { lvl.product = null; this.h.shelfChanged(shelfIdx); }
  }
  removeBox(box) {
    const i = this.s.boxes.indexOf(box);
    if (i >= 0) this.s.boxes.splice(i, 1);
    this.h.boxRemoved(box);
  }

  // ---------------------------------------------------------------------------------- achats
  buildCourt(id) {
    const c = COURTS.find(k => k.id === id), st = this.s.courts[id];
    if (!c || st.built || !this.unlocked(c.level)) return false;
    if (!this.spend(c.price, 'build')) return false;
    st.built = true; st.wear = 0;
    this.addXp(40);
    this.h.courtChanged(id, true);
    this.h.notify(`${c.label} construit !`, 'good');
    return true;
  }
  buyShelf() {
    const i = this.s.shelves.findIndex(s => !s.built);
    if (i < 0 || !this.spend(SHELF_PRICE, 'build')) return false;
    this.s.shelves[i].built = true;
    this.h.shelfBuilt(i);
    return true;
  }
  buyUpgrade(key) {
    const u = UPGRADES[key];
    if (!u || this.s.upgrades[key] || !this.unlocked(u.level)) return false;
    if (!this.spend(u.price, 'build')) return false;
    this.s.upgrades[key] = true;
    this.h.upgradeBought(key);
    return true;
  }
  setStaff(key, on) {
    if (on && !this.unlocked(STAFF[key].level)) return false;
    this.s.staff[key] = on;
    this.syncStaff();
    return true;
  }
  syncStaff() {
    for (const key of Object.keys(STAFF)) {
      const want = this.s.staff[key], have = this.staff[key];
      if (want && !have) {
        const at = key === 'reception' ? STAFF_SPOT : { x: 3.5, z: -2.6 };
        const p = this.spawnPerson(key, at);
        p.x = at.x; p.z = at.z; p.rot = key === 'reception' ? 0 : Math.PI;
        p.job = { state: 'idle', timer: 0 };
        this.staff[key] = p;
      } else if (!want && have) {
        this.despawnPerson(have);
        this.staff[key] = null;
      }
    }
  }
  setPrice(key, value) { this.s.prices[key] = Math.max(0.1, round10(value)); this.h.pricesChanged(key); }

  // Brossage d'un terrain (joueur ou agent d'entretien).
  canClean(id) { return this.s.courts[id].built && !this.court[id].playing; }
  clean(id) {
    if (!this.canClean(id)) return false;
    this.s.courts[id].wear = 0;
    this.addXp(4);
    this.h.courtChanged(id);
    return true;
  }

  // ---------------------------------------------------------------------------------- personnel
  updateStaff(dt, ctx) {
    const r = this.staff.reception;
    if (r) {
      r.rot = 0;
      const c = this.counter;
      if (c.cust && !ctx.playerAtCounter) {
        c.autoT += dt;
        if (c.phase === 'scan' && c.autoT > 0.9) {
          c.autoT = 0;
          const it = c.items.find(i => !i.scanned);
          if (it) this.scan(it.uid);
        } else if (c.phase === 'pay' && c.autoT > 2.2) {
          if (c.method === 'card') this.payCard(c.total); else this.payCash(round10(c.given - c.total));
        }
      }
    }
    const k = this.staff.keeper;
    if (k) {
      const job = k.job;
      if (job.state === 'idle') {
        job.timer -= dt;
        if (job.timer <= 0) {
          job.timer = 3;
          let target = null;
          for (const c of COURTS) {
            const st = this.s.courts[c.id], rt = this.court[c.id];
            if (st.built && st.wear >= 0.45 && !rt.reservedBy && !rt.cleaning && (!target || st.wear > this.s.courts[target].wear)) target = c.id;
          }
          if (target) {
            this.court[target].cleaning = true;
            job.court = target; job.state = 'go';
            const slot = COURT_SLOTS[target];
            const sport = COURT_TYPES[COURTS.find(c => c.id === target).surface].sport;
            const inside = sport === 'padel' ? [...padelEntry(target, 1), { x: slot.cx, z: slot.cz + 4 }] : [{ x: slot.cx, z: slot.cz + 6 }];
            job.sport = sport;
            this.goTo(k, [...(k.z > 0 ? [BACK_IN, BACK_OUT] : []), ...slot.route, ...inside]);
          }
        }
      } else if (job.state === 'go' && this.arrived(k)) {
        job.state = 'clean'; job.timer = 7; k.action = 'clean';
      } else if (job.state === 'clean') {
        job.timer -= dt;
        if (job.timer <= 0) {
          this.s.courts[job.court].wear = 0;
          this.court[job.court].cleaning = false;
          this.h.courtChanged(job.court);
          job.state = 'back'; k.action = 'idle';
          this.goTo(k, [...this.courtExit(k, job.court, job.sport), { x: 3.5, z: -2.6 }]);
        }
      } else if (job.state === 'back' && this.arrived(k)) {
        job.state = 'idle'; job.timer = 2; k.rot = Math.PI;
      }
    }
  }

  // ---------------------------------------------------------------------------------- journée
  toggleOpen() {
    if (this.dayOver) return this.s.open;
    if (!this.s.open && this.s.minute >= this.closeMinute - 30) { this.h.notify('Trop tard pour ouvrir aujourd\'hui', 'bad'); return false; }
    this.s.open = !this.s.open;
    // La journée (et l'horloge) démarre la première fois qu'on ouvre le club.
    if (this.s.open && !this.s.dayStarted) { this.s.dayStarted = true; this.h.dayStarted?.(); }
    this.h.openChanged(this.s.open);
    return this.s.open;
  }
  arrivalRate() {
    const hour = this.s.minute / 60;
    const hf = hour < 11 ? 0.75 : hour < 14 ? 1.25 : hour < 17 ? 0.85 : hour < 20 ? 1.45 : 0.9;
    return (0.8 + 0.07 * this.s.licences) * hf * (0.55 + 0.9 * this.s.satisfaction);   // clients par heure de jeu
  }
  pickKind() {
    const hasCourts = this.builtSports().length > 0;
    const room = clamp(1 - this.s.licences / this.capacity, 0, 1);
    const courts = COURTS.filter(c => this.s.courts[c.id].built).length;
    const wLic = 0.22 * room, wBook = hasCourts ? Math.min(0.55, 0.22 + 0.08 * courts) : 0, wShop = 0.38;
    const r = Math.random() * (wLic + wBook + wShop);
    return r < wBook ? 'book' : r < wBook + wShop ? 'shop' : 'licence';
  }
  canEndDay() { return !!this.s.dayStarted && !this.s.open && this.customers.length === 0 && !this.dayOver; }

  update(dt, ctx = {}) {
    if (this.dayOver) return;
    const s = this.s;
    // Avant l'ouverture, l'horloge reste à 8 h : on prépare le club sans perdre de temps.
    if (s.dayStarted) s.minute += dt * GAME_MIN_PER_SEC;
    for (const c of Object.values(this.court)) if (c.reservedBy == null) c.playing = false;
    this.counter.idleT = (this.counter.idleT || 0) + (this.counter.cust ? dt : 0);
    if (ctx.playerAtCounter) this.counter.idleT = 0;

    // Arrivées.
    if (s.open) {
      if (s.minute >= this.closeMinute) {
        s.open = false;
        this.h.openChanged(false);
        this.h.notify('Fermeture : plus de nouveaux clients aujourd\'hui', 'info');
      } else if (this.customers.length < MAX_CUSTOMERS && Math.random() < (this.arrivalRate() / 60) * GAME_MIN_PER_SEC * dt) {
        this.spawnCustomer(this.pickKind());
      }
    }
    // Livraisons.
    for (const o of [...s.orders]) {
      o.eta -= dt;
      if (o.eta <= 0) { s.orders.splice(s.orders.indexOf(o), 1); this.deliver(o); }
    }
    for (const p of this.persons) if (p.action !== 'play') this.movePerson(p, dt);
    for (const cust of [...this.customers]) this.updateCustomer(cust, dt);
    this.updateStaff(dt, ctx);

    // Sécurité : une heure après la fermeture, tout le monde rentre.
    if (!s.open && s.minute >= this.closeMinute + 60 && this.customers.length) {
      for (const cust of [...this.customers]) { cust.mood = Math.min(cust.mood, 0.7); this.removeCustomer(cust); }
      this.cancelCheckout();
      this.queue.length = 0;
    }
    if (s.dayStarted && !s.open && s.minute >= this.closeMinute && this.customers.length === 0) this.endDay();
  }

  endDay() {
    if (this.dayOver) return;
    this.dayOver = true;
    const s = this.s, st = s.stats;
    s.open = false;
    let salaries = 0;
    for (const k of Object.keys(STAFF)) if (s.staff[k]) salaries += STAFF[k].salary;
    let upkeep = 30;
    for (const c of COURTS) if (s.courts[c.id].built) upkeep += c.surface === 'clay' ? 30 : 22;
    s.money -= salaries + upkeep;
    st.salaries += salaries; st.upkeep += upkeep;
    // Le bouche-à-oreille fait évoluer le nombre de licenciés.
    const before = s.licences;
    const drift = Math.round(s.licences * (s.satisfaction - 0.55) * 0.12 + (s.satisfaction > 0.7 ? 1 : 0));
    s.licences = clamp(s.licences + drift, 5, this.capacity);
    const summary = { day: s.day, ...st, licences: s.licences, licenceDrift: s.licences - before, satisfaction: s.satisfaction, money: s.money, level: s.level };
    this.h.dayEnded(summary);
    return summary;
  }

  nextDay() {
    const s = this.s;
    s.day++;
    s.minute = OPEN_HOUR * 60;
    s.open = false;
    s.dayStarted = false;
    s.stats = freshStats();
    this.dayOver = false;
    for (const cust of [...this.customers]) this.removeCustomer(cust);
    this.queue.length = 0;
    this.lobbyUsed.clear();
    for (const k of Object.keys(this.court)) Object.assign(this.court[k], { reservedBy: null, playing: false, cleaning: false });
    if (this.staff.keeper) { this.staff.keeper.job = { state: 'idle', timer: 0 }; this.staff.keeper.path = []; this.staff.keeper.x = 3.5; this.staff.keeper.z = -2.6; }
    this.h.openChanged(false);
  }

  // Sauvegarde : uniquement l'état durable (pas les clients en cours).
  serialize() {
    const s = JSON.parse(JSON.stringify(this.s));
    s.boxes = s.boxes.map(b => ({ ...b, held: false }));
    return s;
  }
}

// Position d'un emplacement sur la palette de livraison (3 x 2, sur 3 hauteurs).
export function palletPos(i) {
  const layer = Math.floor(i / 6), k = i % 6;
  return { x: DELIVERY.x + ((k % 3) - 1) * 0.62, z: DELIVERY.z + (Math.floor(k / 3) - 0.5) * 0.62, y: 0.15 + layer * 0.46 };
}
