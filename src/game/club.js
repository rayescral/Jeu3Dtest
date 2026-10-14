// Simulation du club : temps, clients, file d'attente, caisse, stock, terrains, buvette et snack,
// parking, personnel, événements du jour, économie.
// Aucune dépendance au rendu : le rendu est prévenu par des "hooks". Testable sous Node.
import {
  PRODUCTS, PRODUCT_IDS, COURTS, COURT_TYPES, SERVICES, STAFF, UPGRADES, FACILITIES, EVENTS, CHALLENGES, LEVELS, levelFor,
  SHELF_TYPES, shelfAccepts, shelfCap, CAMPAIGNS, ORGANIZE,
  SHELF_PRICE, SHELF_START, OPEN_HOUR, CLOSE_HOUR, LATE_CLOSE_HOUR, START_MONEY, START_LICENCES, START_FAME,
} from './data.js';
import {
  SPAWN, FRONT_OUT, FRONT_IN, BACK_IN, BACK_OUT, QUEUE, LOBBY, SHELF_SLOTS, COURT_SLOTS, STAFF_SPOT,
  DELIVERY, playSpots, padelEntry, TENNIS_AREA, QUEUE_APPROACH_X, COUNTER_EXIT,
  STANDS, PARKING_SPOTS, RESERVED_SPOTS, PARKING_LANE_Z, carDoor, SECURITY_POST, carRoute, routeDuration,
} from './layout.js';
import { clamp, rand, randInt, pick, round10, dist2, fmtMoney } from '../core/util.js';
import { L as T } from '../core/i18n.js';   // (L désigne aussi le meneur d'un groupe de clients)

export const GAME_MIN_PER_SEC = 2;        // 1 seconde réelle = 2 minutes de jeu
const WALK_SPEED = 1.45;
const QUEUE_PATIENCE = 75;               // secondes réelles avant d'abandonner la file
const COURT_PATIENCE = 50;
const STAND_PATIENCE = 45;
const MAX_CUSTOMERS = 18;
const OVERTIME_CHANCE = 0.28;            // part des parties qui dépassent leur créneau
const OVERTIME_MAX = 80;                 // au-delà, les joueurs finissent par partir d'eux-mêmes
export const SHELF_LEVELS = 3;
export const PALLET_SLOTS = 18;
export const SAVE_VERSION = 3;

const ZONE_STAT = { bar: 'bar', snack: 'snack' };

export function createState() {
  const s = {
    version: SAVE_VERSION,
    money: START_MONEY, day: 1, minute: OPEN_HOUR * 60, open: false, dayStarted: false,
    xp: 0, level: 1, licences: START_LICENCES, satisfaction: 0.62, fame: START_FAME,
    prices: {},
    courts: Object.fromEntries(COURTS.map((c, i) => [c.id, { built: i === 0, wear: 0 }])),
    shelves: [],
    boxes: [],
    orders: [],
    staff: {},
    upgrades: { lockers: false, lights: false },
    facilities: {},
    stats: freshStats(),
    nextId: 1,
    objectives: [],
    event: { id: 'calm' },
    challenge: null,
  };
  migrateState(s);
  s.challenge = { id: 'shopItems', target: 5, reward: 100, done: false };
  return s;
}

// Met à jour une sauvegarde d'une version précédente (ou complète un état neuf).
export function migrateState(s) {
  s.prices ??= {}; s.shelves ??= [];
  // Version 3 : deux emplacements de boutique ajoutés (index 6 et 7), avant ceux de la buvette et du snack.
  if ((s.version ?? 1) < 3 && s.shelves.length === 10) s.shelves.splice(6, 0, undefined, undefined); s.staff ??= {}; s.facilities ??= {}; s.upgrades ??= {}; s.boxes ??= []; s.orders ??= []; s.objectives ??= [];
  for (const id of PRODUCT_IDS) s.prices[id] ??= round10(PRODUCTS[id].market);
  for (const id of Object.keys(SERVICES)) s.prices[id] ??= SERVICES[id].market;
  SHELF_SLOTS.forEach((slot, i) => {
    s.shelves[i] ??= {
      type: 'gondola',
      built: slot.zone === 'shop' && i < SHELF_START,
      levels: Array.from({ length: SHELF_LEVELS }, () => ({ product: null, qty: 0 })),
    };
  });
  for (const k of Object.keys(STAFF)) s.staff[k] ??= false;
  for (const k of Object.keys(FACILITIES)) s.facilities[k] ??= { built: false, building: false, progress: 0 };
  // L'ancien « coin buvette » devient une vraie buvette déjà construite.
  if (s.upgrades.bar) {
    s.facilities.buvette = { built: true, building: false, progress: 1 };
    SHELF_SLOTS.forEach((slot, i) => { if (slot.stand === 'buvette') s.shelves[i].built = true; });
  }
  delete s.upgrades.bar;
  for (const k of Object.keys(UPGRADES)) s.upgrades[k] ??= false;
  s.stats = { ...freshStats(), ...s.stats };
  s.event ??= { id: 'calm' };
  // Notoriété (ajoutée après coup) : estimée d'après le niveau atteint.
  s.fame ??= clamp(START_FAME + ((s.level ?? 1) - 1) * 7, 0, 100);
  s.challenge ??= null;
  s.version = SAVE_VERSION;
  return s;
}

function freshStats() {
  return {
    courts: 0, shop: 0, licenceFees: 0, bar: 0, snack: 0, parking: 0, tips: 0, bonus: 0,
    orders: 0, build: 0, salaries: 0, upkeep: 0,
    customers: 0, happy: 0, angry: 0, newLicences: 0, sessions: 0,
    shopItems: 0, bookings: 0, barItems: 0, snackItems: 0, rackets: 0, evictions: 0, cars: 0,
  };
}

export class Club {
  constructor(state, hooks = {}) {
    this.s = migrateState(state);
    this.h = new Proxy(hooks, { get: (t, k) => t[k] ?? (() => {}) });
    this.persons = [];
    this.customers = [];
    this.queue = [];
    this.court = {};       // état non sauvegardé des terrains : réservation, partie en cours
    for (const c of COURTS) this.court[c.id] = { reservedBy: null, playing: false, cleaning: false, overtime: false };
    this.counter = { cust: null, items: [], phase: 'idle', total: 0, method: null, given: 0, autoT: 0 };
    this.staff = {};
    for (const k of Object.keys(STAFF)) this.staff[k] = null;
    this.lobbyUsed = new Set();
    this.stand = {};
    for (const k of Object.keys(STANDS)) this.stand[k] = { queue: [], seats: new Set(), autoT: 0 };
    this.cars = [];
    this.dayOver = false;
    this.inspected = false;
  }

  // ---------------------------------------------------------------------------------- outils
  id() { return this.s.nextId++; }
  get closeMinute() { return (this.s.upgrades.lights ? LATE_CLOSE_HOUR : CLOSE_HOUR) * 60; }
  get capacity() {
    let cap = 25;
    for (const c of COURTS) if (this.s.courts[c.id].built) cap += COURT_TYPES[c.surface].sport === 'padel' ? 30 : 25;
    if (this.s.upgrades.lockers) cap += 40;
    if (this.built('buvette')) cap += 5;
    if (this.built('snack')) cap += 5;
    return cap;
  }
  get event() { return EVENTS[this.s.event?.id] ?? EVENTS.calm; }
  ev(key) { return this.event[key] ?? 1; }
  unlocked(level) { return this.s.level >= level; }
  built(facility) { return !!this.s.facilities[facility]?.built; }
  productAvailable(id) {
    const P = PRODUCTS[id];
    if (!P || !this.unlocked(P.level)) return false;
    if (P.zone === 'bar') return this.built('buvette');
    if (P.zone === 'snack') return this.built('snack');
    return true;
  }
  // Prix d'achat d'un article (promo fournisseur du jour comprise).
  unitCost(id) { return PRODUCTS[id].cost * (this.s.event?.id === 'promo' && this.s.event.product === id ? 0.6 : 1); }

  earn(amount, cat) { this.s.money += amount; this.s.stats[cat] += amount; }
  spend(amount, cat) {
    if (this.s.money < amount - 1e-6) return false;
    this.s.money -= amount; this.s.stats[cat] += amount;
    return true;
  }
  // Notoriété du club (0 à 100) : c'est elle qui attire les clients. Elle monte avec les clients contents,
  // les parties jouées, les constructions et les défis ; elle baisse avec les clients mécontents.
  addFame(n) { this.s.fame = clamp((this.s.fame ?? START_FAME) + n, 0, 100); }
  addXp(n) {
    this.s.xp += Math.round(n * this.ev('xp'));
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
    for (const k of Object.keys(FACILITIES)) if (FACILITIES[k].level === lvl) list.push(FACILITIES[k].name);
    for (const k of Object.keys(STAFF)) if (STAFF[k].level === lvl) list.push(STAFF[k].name);
    for (const k of Object.keys(UPGRADES)) if (UPGRADES[k].level === lvl) list.push(UPGRADES[k].name);
    return list;
  }
  xpProgress() {
    const l = this.s.level, a = LEVELS[l - 1], b = LEVELS[l] ?? LEVELS[LEVELS.length - 1] * 2;
    return clamp((this.s.xp - a) / (b - a), 0, 1);
  }
  // Compteurs des défis du jour.
  count(stat, n = 1) {
    this.s.stats[stat] += n;
    const ch = this.s.challenge;
    if (!ch || ch.done) return;
    const map = { shopItems: 'shopItems', bookings: 'bookings', licences: 'newLicences', barItems: 'barItems', snackItems: 'snackItems', rackets: 'rackets', evictions: 'evictions' };
    if (map[ch.id] === stat && this.s.stats[stat] >= ch.target) {
      ch.done = true;
      this.addFame(2);
      this.earn(ch.reward, 'bonus');
      this.addXp(30);
      this.h.notify(T(`Défi réussi ! +${ch.reward} €`, `Challenge complete! +€${ch.reward}`), 'good');
      this.h.sound('level');
      this.h.challengeChanged();
    }
  }

  // ---------------------------------------------------------------------------------- personnes
  spawnPerson(role, at = SPAWN, extra = {}) {
    const p = {
      id: this.id(), role, x: at.x + rand(-1.5, 1.5), z: at.z + rand(-0.5, 0.5), rot: Math.PI,
      speed: WALK_SPEED * rand(0.88, 1.12), path: [], action: 'idle', look: null, seed: Math.random(),
      holdsRacket: false, hidden: false, ...extra,
    };
    this.persons.push(p);
    this.h.spawnPerson(p);
    return p;
  }
  despawnPerson(p) {
    const i = this.persons.indexOf(p);
    if (i >= 0) this.persons.splice(i, 1);
    if (p.lobby != null) this.lobbyUsed.delete(p.lobby);
    this.freeSeat(p);
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

  // Zone de terrasse (buvette ou snack) où se trouve une personne, le cas échéant.
  standAt(p) {
    for (const [k, S] of Object.entries(STANDS)) if (Math.abs(p.x - S.cx) < 4.2 && p.z > 8.6 && p.z < 14.6) return k;
    return null;
  }

  // Trajet d'une personne vers la sortie (club-house, terrasse ou courts), puis vers sa voiture ou la rue.
  pathOut(p, cust = p.cust) {
    const pts = [];
    const sk = this.standAt(p);
    if (sk) {
      const S = STANDS[sk];
      pts.push({ x: S.cx, z: p.z }, S.entry, S.approach, FRONT_OUT);
    } else {
      if (p.z < 0) pts.push(BACK_OUT, BACK_IN);
      pts.push({ x: rand(-0.4, 0.4), z: FRONT_IN.z }, FRONT_OUT);
    }
    pts.push(...this.exitTail(cust));
    return pts;
  }
  // Du parvis à la voiture (ou à la rue pour ceux venus à pied).
  exitTail(cust) {
    const car = cust?.car;
    if (car) {
      const door = carDoor(PARKING_SPOTS[car.spot]);
      return [{ x: rand(-0.8, 0.8), z: 30 }, { x: door.x, z: PARKING_LANE_Z }, door];
    }
    return [{ x: SPAWN.x + rand(-2, 2), z: SPAWN.z }];
  }
  // Du point d'arrivée (voiture ou rue) jusqu'au parvis.
  entryHead(cust, p) {
    const car = cust.car;
    const pts = [];
    if (car) pts.push({ x: p.x, z: PARKING_LANE_Z }, { x: rand(-0.8, 0.8), z: 30 });
    pts.push(FRONT_OUT);
    return pts;
  }

  // ---------------------------------------------------------------------------------- voitures
  freeSpot() {
    const used = new Set([...RESERVED_SPOTS, ...this.cars.map(c => c.spot)]);
    const free = PARKING_SPOTS.map((_, i) => i).filter(i => !used.has(i));
    if (!free.length) return null;
    // On se gare de préférence près de l'entrée.
    free.sort((a, b) => Math.abs(PARKING_SPOTS[a].x) - Math.abs(PARKING_SPOTS[b].x) + rand(-4, 4));
    return free[0];
  }
  carArrived(car) {
    const cust = car.cust;
    car.state = 'parked';
    this.h.carParked(car);
    const door = carDoor(PARKING_SPOTS[car.spot]);
    cust.persons.forEach((p, i) => {
      p.x = door.x; p.z = door.z + (i % 2 ? 0.5 : -0.5) * Math.ceil(i / 2) * 0.7;
      p.hidden = false;
    });
    // Parking payant : ticket réglé à la borne en arrivant.
    if (this.built('parking')) {
      const price = this.s.prices.parking;
      this.earn(price, 'parking');
      this.s.stats.cars++;
      if (price > SERVICES.parking.market * 1.6) this.upset(cust, Math.min(0.4, (price / SERVICES.parking.market - 1.6) * 0.25 + 0.1), T('Le parking est hors de prix !', 'Parking is way too expensive!'));
    }
    cust.state = 'arrive';
    this.routeArrival(cust);
  }
  carDepart(car) {
    if (car.state === 'leaving') return;
    car.state = 'leaving'; car.t = 0;
    car.dur = routeDuration(carRoute(PARKING_SPOTS[car.spot], true));
    this.h.carLeave(car);
  }
  updateCars(dt) {
    for (const car of [...this.cars]) {
      car.t += dt;
      if (car.state === 'arriving' && car.t >= car.dur) this.carArrived(car);
      else if (car.state === 'leaving' && car.t >= car.dur) {
        this.cars.splice(this.cars.indexOf(car), 1);
        this.h.carRemoved(car);
      }
    }
  }

  // ---------------------------------------------------------------------------------- clients
  spawnCustomer(kind) {
    const cust = { id: this.id(), kind, persons: [], state: 'arrive', timer: 0, wants: [], basket: [], court: null, sport: null, mood: 1, queueT: 0, waitT: 0 };
    cust.vip = this.s.level >= 2 && Math.random() < 0.07;
    let size = 1;
    if (kind === 'book') {
      const sports = this.builtSports();
      cust.sport = sports.includes('padel') && (sports.length === 1 || Math.random() < 0.45) ? 'padel' : 'tennis';
      size = cust.sport === 'padel' ? 4 : 2;
      if (Math.random() < 0.3 * this.ev('drinks')) cust.wants.push(pick(['water', 'iso']));
      if (Math.random() < 0.18) cust.wants.push(cust.sport === 'padel' ? 'padelballs' : 'balls');
      if (Math.random() < 0.08) cust.wants.push(pick(['grip', 'energy', 'wristband']));
    } else if (kind === 'shop') {
      const n = Math.random() < 0.6 ? 1 : randInt(2, 3);
      const pool = PRODUCT_IDS.filter(id => PRODUCTS[id].zone === 'shop' && this.unlocked(PRODUCTS[id].level));
      for (let i = 0; i < n; i++) cust.wants.push(this.weightedProduct(pool));
    } else if (kind === 'drink' || kind === 'food') {
      size = Math.random() < 0.5 ? 1 : randInt(2, 3);
    }
    cust.wants = [...new Set(cust.wants.filter(w => w && this.productAvailable(w)))];
    // Arrivée en voiture (si une place est libre) ou à pied depuis la rue.
    const spot = Math.random() < 0.75 ? this.freeSpot() : null;
    if (spot != null) {
      cust.car = { id: this.id(), spot, cust, state: 'arriving', t: 0, color: Math.floor(Math.random() * 8), dur: routeDuration(carRoute(PARKING_SPOTS[spot], false)) };
      this.cars.push(cust.car);
      cust.state = 'driving';
    }
    for (let i = 0; i < size; i++) {
      // La raquette doit être connue avant la création du personnage (le rendu la place dans sa main).
      const p = this.spawnPerson(i === 0 ? 'leader' : 'partner', { x: SPAWN.x + i * 0.7, z: SPAWN.z + i * 0.5 },
        { cust, holdsRacket: kind === 'book', hidden: !!cust.car });
      cust.persons.push(p);
    }
    cust.leader = cust.persons[0];
    if (cust.car) this.h.carArrive(cust.car);
    else this.routeArrival(cust);
    this.customers.push(cust);
    this.s.stats.customers++;
    return cust;
  }
  // Trajet d'arrivée : vers le club-house, ou directement vers la buvette / le snack.
  routeArrival(cust) {
    const stand = cust.kind === 'drink' ? 'buvette' : cust.kind === 'food' ? 'snack' : null;
    for (const p of cust.persons) {
      const head = this.entryHead(cust, p);
      if (stand) this.goTo(p, [...head, STANDS[stand].approach, STANDS[stand].entry]);
      else this.goTo(p, [...head, { x: FRONT_IN.x + rand(-0.6, 0.6), z: FRONT_IN.z + rand(-0.3, 0.3) }]);
    }
  }
  builtSports() {
    const set = new Set();
    for (const c of COURTS) if (this.s.courts[c.id].built) set.add(COURT_TYPES[c.surface].sport);
    return [...set];
  }
  unlockedProducts(ids) { return ids.filter(id => this.productAvailable(id)); }
  weightedProduct(pool) {
    const w = {
      balls: 5, water: 4, iso: 3, grip: 3, energy: 2.5, wristband: 1.5, strings: 1.2, padelballs: 3,
      racketJunior: 0.8, racket: 1, racketHexa: 0.7, racketAero: 0.5, racketTitan: 0.3, padelracket: 0.9, padelPro: 0.5,
      cap: 1.5, towel: 1.2, tshirt: 1.2, shoes: 0.6, bag: 0.4,
    };
    for (const id of ['water', 'iso', 'towel']) w[id] *= this.ev('drinks');
    for (const id of PRODUCT_IDS) if (PRODUCTS[id].racket) w[id] *= this.ev('rackets');
    w.racketJunior *= this.ev('juniors');
    if (!this.builtSports().includes('padel')) { w.padelballs = 0.3; w.padelracket = 0.2; w.padelPro = 0.1; }
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
      case 'driving':
        break;
      case 'arrive':
        if (cust.kind === 'drink' || cust.kind === 'food') {
          // On attend que tout le groupe soit arrivé devant la terrasse.
          if (cust.persons.every(p => this.arrived(p))) this.joinStand(cust, cust.kind === 'drink' ? 'buvette' : 'snack');
          break;
        }
        if (!this.arrived(L)) break;
        for (const p of cust.persons) if (p !== L) this.goTo(p, this.shelfRoute(p, this.takeLobby(p)));
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
          else if (cust.waitT > COURT_PATIENCE || !this.s.open) { this.upset(cust, 0.45, T('Aucun terrain libre…', 'No free court…')); this.leave(cust); }
          else if (cust.waitT > 18 && Math.random() < 0.05 && this.anyOvertime()) this.say(L, T('Ils ont fini, ceux-là ?!', 'Are they done yet?!'));
        }
        break;
      case 'queue': {
        cust.queueT += dt;
        const idx = this.queue.indexOf(cust);
        if (idx === 0 && this.arrived(L) && !this.counter.cust) this.beginCheckout(cust);
        else if (cust.queueT > QUEUE_PATIENCE * (0.8 + this.s.satisfaction * 0.5)) {
          this.upset(cust, 0.55, T('Trop d\'attente !', 'This is taking forever!'));
          this.leaveQueue(cust);
          this.leave(cust);
        }
        break;
      }
      case 'counter':
        cust.queueT += dt;
        // Si personne ne s'occupe de lui pendant longtemps, il finit par partir.
        if (this.counter.idleT > 45) {
          this.upset(cust, 0.5, T('Il n\'y a personne à l\'accueil ?', 'Is nobody at reception?'));
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
      case 'overtime':
        cust.overT += dt;
        cust.refuseT = Math.max(0, (cust.refuseT ?? 0) - dt);
        if (cust.overT > OVERTIME_MAX) { this.say(L, T('Bon, on y va…', 'Right, we\'re off…'), 'info'); this.finishSession(cust); }
        else if (Math.random() < dt / 14) this.say(pick(cust.persons), pick([T('Encore un jeu !', 'One more game!'), T('Dernier point !', 'Last point!'), T('On finit le set !', 'We\'re finishing the set!'), T('Balle de match !', 'Match point!')]), 'info');
        break;
      case 'standQueue': {
        cust.queueT += dt;
        const q = this.stand[cust.stand].queue;
        if (q[0] === cust && this.arrived(L)) this.beginStandOrder(cust);
        else if (cust.queueT > STAND_PATIENCE * 1.6 * (0.8 + this.s.satisfaction * 0.5)) {
          this.upset(cust, 0.45, T('Ça n\'avance pas…', 'This line isn\'t moving…'));
          this.leaveStand(cust);
          this.leave(cust);
        }
        break;
      }
      case 'standOrder':
        cust.orderT += dt;
        if (cust.orderT > STAND_PATIENCE * (0.8 + this.s.satisfaction * 0.5)) {
          this.upset(cust, 0.5, T('Il n\'y a personne pour servir ?', 'Is nobody serving?'));
          this.leaveStand(cust);
          this.leave(cust);
        }
        break;
      case 'terrace':
        cust.timer -= dt;
        if (cust.timer <= 0 || (!this.s.open && this.s.minute > this.closeMinute + 20)) this.leave(cust);
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
      if (!shelf) { this.upset(cust, 0.15, T(`Plus de ${PRODUCTS[want].short.toLowerCase()} !`, `Out of ${PRODUCTS[want].short.toLowerCase()}!`)); continue; }
      cust.want = want; cust.shelf = shelf.index;
      const slot = SHELF_SLOTS[shelf.index];
      this.goTo(L, this.shelfRoute(L, { x: slot.browse.x + rand(-0.5, 0.5), z: slot.browse.z + rand(-0.15, 0.15) }));
      cust.shelfLook = { x: slot.x, z: slot.z };
      cust.state = 'toShelf';
      return;
    }
    this.afterShopping(cust);
  }
  // Trajet vers une étagère : les étagères du mur de gauche sont de l'autre côté du comptoir, on passe devant.
  shelfRoute(from, to) {
    const left = p => p.x < -2.5;
    return left(from) !== left(to) ? [{ x: -1.6, z: 9.6 }, to] : [to];
  }
  findShelfWith(product, from) {
    let best = null;
    this.s.shelves.forEach((sh, i) => {
      if (!sh.built || SHELF_SLOTS[i].zone !== 'shop') return;
      if (sh.levels.some(l => l.product === product && l.qty > 0)) {
        const d = dist2(from, SHELF_SLOTS[i].browse);
        if (!best || d < best.d) best = { index: i, d };
      }
    });
    return best;
  }
  priceRefused(id, price) {
    const m = PRODUCTS[id]?.market ?? SERVICES[id]?.market;
    return price > m * 1.35 || (price > m * 1.15 && Math.random() < (price / m - 1.15) * 4);
  }
  takeFromShelf(cust) {
    const sh = this.s.shelves[cust.shelf];
    const lvlIdx = sh.levels.findIndex(l => l.product === cust.want && l.qty > 0);
    const P = PRODUCTS[cust.want];
    const price = this.s.prices[cust.want];
    if (lvlIdx < 0) {
      this.upset(cust, 0.15, T(`Plus de ${P.short.toLowerCase()} !`, `Out of ${P.short.toLowerCase()}!`));
    } else if (this.priceRefused(cust.want, price)) {
      this.upset(cust, 0.12, T('Trop cher !', 'Too expensive!'));
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
    this.goTo(cust.leader, this.shelfRoute(cust.leader, this.takeLobby(cust.leader)));
    if (Math.random() < 0.6) this.say(cust.leader, T('On attend qu\'un terrain se libère', 'We\'re waiting for a court'), 'info');
  }
  releaseCourt(cust) {
    if (cust.court && this.court[cust.court].reservedBy === cust.id) {
      Object.assign(this.court[cust.court], { reservedBy: null, playing: false, overtime: false });
      this.h.courtChanged(cust.court);
    }
  }
  anyOvertime() { return Object.values(this.court).some(c => c.overtime); }
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
    if (st.wear > 0.5) this.upset(cust, 0.25, st.wear > 0.75 ? T('Le terrain est dans un état…', 'Look at the state of this court…') : T('Terrain mal entretenu', 'Poorly kept court'));
    const spots = playSpots(cust.court, cust.sport);
    cust.persons.forEach((p, i) => { p.action = 'play'; p.rot = spots[i].side > 0 ? Math.PI : 0; });
    this.s.stats.sessions++;
    this.h.courtSession(cust.court, cust.persons, true, cust.sport);
  }
  // Fin du créneau : certains joueurs ne veulent pas s'arrêter et occupent le terrain.
  endSession(cust) {
    if (!cust.overtimeDone && Math.random() < OVERTIME_CHANCE) {
      cust.overtimeDone = true;
      cust.state = 'overtime'; cust.overT = 0;
      this.court[cust.court].overtime = true;
      const label = COURTS.find(c => c.id === cust.court).label;
      this.h.notify(T(`${label} : les joueurs dépassent leur créneau ! Va les faire sortir (E) ou embauche un agent de sécurité.`, `${label}: the players are overrunning their slot! Send them off (E) or hire a security guard.`), 'bad');
      this.say(cust.leader, T('On finit le set !', 'We\'re finishing the set!'), 'info');
      this.h.courtChanged(cust.court);
      return;
    }
    this.finishSession(cust);
  }
  finishSession(cust) {
    const st = this.s.courts[cust.court];
    const surf = COURTS.find(c => c.id === cust.court).surface;
    st.wear = clamp(st.wear + COURT_TYPES[surf].wear * rand(0.8, 1.2) * (cust.state === 'overtime' ? 1.3 : 1), 0, 1);
    this.h.courtSession(cust.court, cust.persons, false, cust.sport);
    const court = cust.court, sport = cust.sport;
    this.releaseCourt(cust);
    cust.court = null;
    for (const p of cust.persons) p.action = 'idle';
    // Un verre ou un en-cas après la partie ?
    const toBar = this.built('buvette') && Math.random() < 0.4 * this.ev('bar');
    const toSnack = !toBar && this.built('snack') && Math.random() < 0.22 * this.ev('snack');
    if (toBar || toSnack) {
      const key = toBar ? 'buvette' : 'snack', S = STANDS[key];
      for (const p of cust.persons) {
        const exit = this.courtExit(p, court, sport);
        this.goTo(p, [...exit, { x: S.approach.x, z: -2 }, S.approach, S.entry]);
      }
      cust.kind = toBar ? 'drink' : 'food';
      cust.state = 'arrive';
      return;
    }
    for (const p of cust.persons) this.goTo(p, [...this.courtExit(p, court, sport), ...this.pathOut({ x: 0, z: -2 }, cust)]);
    cust.state = 'leave';
  }
  // Faire sortir des joueurs qui dépassent leur créneau (le joueur, ou l'agent de sécurité).
  evict(courtId, by = 'player') {
    const cust = this.customers.find(c => c.state === 'overtime' && c.court === courtId);
    if (!cust) return 'none';
    if (by === 'player') {
      if (cust.refuseT > 0) return 'wait';
      if (Math.random() < 0.3) {
        cust.refuseT = 2.5;
        this.say(cust.leader, pick([T('Encore 5 minutes !', 'Five more minutes!'), T('Juste ce jeu-là !', 'Just this game!'), T('On a presque fini !', 'We\'re nearly done!')]), 'bad');
        return 'refused';
      }
    }
    this.say(cust.leader, by === 'guard' ? T('D\'accord, d\'accord…', 'Okay, okay…') : T('Pardon, on y va !', 'Sorry, we\'re leaving!'), 'info');
    cust.mood = clamp(cust.mood - 0.05, 0, 1);
    this.count('evictions');
    this.addXp(5);
    this.finishSession(cust);
    return 'ok';
  }

  // --- file et caisse
  joinQueue(cust) {
    if (this.queue.length >= QUEUE.length) {
      this.upset(cust, 0.4, T('Il y a trop de monde !', 'It\'s way too crowded!'));
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
    if (cust.kind === 'licence') cust.basket.push({ kind: 'licence', price: this.s.prices.licence, label: SERVICES.licence.name });
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
    if (gave < due) this.upset(c.cust, 0.35, T('Vous ne m\'avez pas rendu assez !', 'You didn\'t give me enough change!'));
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
      if (it.kind === 'product') {
        this.count('shopItems');
        if (PRODUCTS[it.product].racket) this.count('rackets');
      }
      if (it.kind === 'booking') this.count('bookings');
    }
    if (cust.kind === 'licence') { this.s.licences++; this.count('newLicences'); }
    this.addXp(xp);
    this.h.sound('cash');
    // Attente à la caisse : au-delà de 25 s, le client est de moins en moins content.
    cust.mood = clamp(cust.mood - clamp((cust.queueT - 25) / 70, 0, 0.35), 0, 1);
    if (cust.vip && cust.queueT < 35) {
      const tip = round10(c.total * 0.12 + 2);
      this.earn(tip, 'tips');
      this.say(cust.leader, T(`Gardez la monnaie ! (+${tip.toFixed(2).replace('.', ',')} €)`, `Keep the change! (+${fmtMoney(tip)})`), 'good');
    } else if (cust.mood > 0.85 && Math.random() < 0.4) this.say(cust.leader, T('Merci, bonne journée !', 'Thanks, have a nice day!'), 'good');
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

  // ---------------------------------------------------------------------------------- buvette et snack
  standPath(p, key, target) {
    const S = STANDS[key];
    if (this.standAt(p) === key) return [{ x: S.cx, z: p.z }, target];
    return [S.approach, S.entry, target];
  }
  takeSeat(p, key) {
    const st = this.stand[key], S = STANDS[key];
    for (let i = 0; i < S.seats.length; i++) if (!st.seats.has(i)) { st.seats.add(i); p.seat = { key, i }; return S.seats[i]; }
    return { x: S.cx + rand(-1.2, 1.2), z: rand(13.2, 14.2) };
  }
  freeSeat(p) { if (p.seat) { this.stand[p.seat.key].seats.delete(p.seat.i); p.seat = null; } }
  joinStand(cust, key) {
    const st = this.stand[key], S = STANDS[key];
    cust.stand = key;
    if (!this.built(key)) return this.leave(cust);
    if (st.queue.length >= S.queue.length) {
      this.upset(cust, 0.35, (key === 'buvette' ? T('Trop de monde à la buvette !', 'The bar is packed!') : T('Trop de monde à la caisse du snack !', 'The snack bar queue is huge!')));
      return this.leave(cust);
    }
    st.queue.push(cust);
    cust.state = 'standQueue'; cust.queueT = 0;
    const L = cust.leader;
    this.goTo(L, this.standPath(L, key, S.queue[st.queue.length - 1]));
    // Les accompagnateurs attendent à une table.
    for (const p of cust.persons) if (p !== L) { const seat = this.takeSeat(p, key); this.goTo(p, [...this.standPath(p, key, { x: S.cx, z: seat.z }), seat]); p.look = seat.look ?? null; }
  }
  leaveStand(cust) {
    const st = this.stand[cust.stand];
    if (!st) return;
    const i = st.queue.indexOf(cust);
    if (i < 0) return;
    st.queue.splice(i, 1);
    const S = STANDS[cust.stand];
    st.queue.forEach((c, k) => { if (k >= i) this.goTo(c.leader, [{ x: S.cx, z: c.leader.z }, S.queue[k]]); });
    this.h.standChanged(cust.stand);
  }
  // Commande passée au comptoir : une consommation par personne (et parfois un cookie).
  beginStandOrder(cust) {
    const key = cust.stand;
    cust.state = 'standOrder'; cust.orderT = 0;
    cust.leader.rot = Math.PI;
    const n = cust.persons.length, order = {};
    const add = id => { if (id && this.productAvailable(id)) order[id] = (order[id] || 0) + 1; };
    const hour = this.s.minute / 60;
    for (let i = 0; i < n; i++) {
      if (key === 'buvette') {
        const w = { beer: hour < 11 ? 0.6 : 4, soda: 2 * this.ev('drinks'), coffee: hour < 11 ? 5 : 1.2, juice: 1.4 * this.ev('drinks'), protein: 1.1 * this.ev('drinks') };
        add(weighted(w, id => this.productAvailable(id)));
      } else {
        const lunch = hour >= 11.5 && hour < 14.5;
        const w = { sandwich: lunch ? 4 : 1.5, panini: lunch ? 3 : 1, pizza: lunch ? 3 : 1.2, cookie: lunch ? 0.8 : 3 * this.ev('juniors'), crepe: lunch ? 0.8 : 2.2 * this.ev('juniors') };
        add(weighted(w, id => this.productAvailable(id)));
        if (Math.random() < 0.3) add('cookie');
      }
    }
    cust.order = Object.entries(order).map(([product, qty]) => ({ product, qty }));
    if (!cust.order.length) { this.leaveStand(cust); return this.leave(cust); }
    const text = cust.order.map(o => `${o.qty} ${PRODUCTS[o.product].short.toLowerCase()}${o.qty > 1 && !/s$/.test(PRODUCTS[o.product].short) ? 's' : ''}`).join(' + ');
    this.say(cust.leader, T(`${text}, svp !`, `${text}, please!`), 'info');
    this.h.standChanged(key);
  }
  standOrder(key) {
    const c = this.stand[key].queue[0];
    return c && c.state === 'standOrder' ? c : null;
  }
  standStock(key, product) {
    let n = 0;
    this.s.shelves.forEach((sh, i) => { if (sh.built && SHELF_SLOTS[i].stand === key) for (const l of sh.levels) if (l.product === product) n += l.qty; });
    return n;
  }
  takeStandStock(key, product, qty) {
    let got = 0;
    this.s.shelves.forEach((sh, i) => {
      if (!sh.built || SHELF_SLOTS[i].stand !== key || got >= qty) return;
      for (const l of sh.levels) {
        if (l.product !== product) continue;
        const k = Math.min(l.qty, qty - got);
        l.qty -= k; got += k;
        if (k) this.h.shelfChanged(i);
      }
    });
    return got;
  }
  // Servir le client au comptoir (le joueur appuie sur E, ou le serveur s'en charge).
  serveStand(key) {
    const cust = this.standOrder(key);
    if (!cust) return 'none';
    let total = 0, items = 0, missing = null, tooExpensive = false;
    for (const o of cust.order) {
      const price = this.s.prices[o.product];
      if (this.priceRefused(o.product, price)) { tooExpensive = true; continue; }
      const got = this.takeStandStock(key, o.product, o.qty);
      if (got < o.qty) missing = o.product;
      total += got * price; items += got;
    }
    const zone = key === 'buvette' ? 'bar' : 'snack';
    if (items === 0) {
      this.upset(cust, 0.35, tooExpensive ? T('C\'est bien trop cher !', 'That\'s far too expensive!') : T(`Plus de ${PRODUCTS[missing ?? cust.order[0].product].short.toLowerCase()} ?!`, `No more ${PRODUCTS[missing ?? cust.order[0].product].short.toLowerCase()}?!`));
      this.leaveStand(cust);
      this.leave(cust);
      this.h.sound('error');
      return 'empty';
    }
    if (missing) this.upset(cust, 0.15, T(`Il n'y a plus de ${PRODUCTS[missing].short.toLowerCase()}…`, `There's no ${PRODUCTS[missing].short.toLowerCase()} left…`));
    else if (tooExpensive) this.upset(cust, 0.1, T('Trop cher, je ne prends pas tout', 'Too expensive, I won\'t take everything'));
    this.earn(round10(total), ZONE_STAT[zone]);
    this.count(zone === 'bar' ? 'barItems' : 'snackItems', items);
    this.addXp(2 * items);
    // Pourboire : clients VIP, ou servis très vite.
    if (cust.vip || cust.orderT < 6) {
      const tip = cust.vip ? round10(total * 0.2 + 1) : 0.5;
      if (cust.vip || Math.random() < 0.35) { this.earn(tip, 'tips'); this.say(cust.leader, T(`Merci ! (+${tip.toFixed(2).replace('.', ',')} € de pourboire)`, `Thanks! (+${fmtMoney(tip)} tip)`), 'good'); }
    } else if (!missing && Math.random() < 0.3) this.say(cust.leader, key === 'buvette' ? T('Santé !', 'Cheers!') : T('Ça a l\'air bon !', 'Looks good!'), 'good');
    cust.mood = clamp(cust.mood - clamp((cust.queueT + cust.orderT - 30) / 90, 0, 0.3), 0, 1);
    this.h.sound('cash');
    this.h.standServed(key, cust.order);
    // On s'installe en terrasse.
    this.leaveStand(cust);
    cust.state = 'terrace'; cust.timer = rand(14, 24);
    const L = cust.leader, seat = this.takeSeat(L, key);
    this.goTo(L, [{ x: STANDS[key].cx, z: seat.z }, seat]);
    L.look = seat.look ?? null;
    return 'ok';
  }

  leave(cust) {
    this.releaseCourt(cust);
    if (cust.stand) this.leaveStand(cust);
    if (this.counter.cust === cust) this.cancelCheckout();
    this.leaveQueue(cust);
    cust.state = 'leave';
    for (const p of cust.persons) { this.freeLobby(p); this.freeSeat(p); p.look = null; this.goTo(p, this.pathOut(p, cust)); }
  }
  removeCustomer(cust) {
    for (const p of cust.persons) this.despawnPerson(p);
    const i = this.customers.indexOf(cust);
    if (i >= 0) this.customers.splice(i, 1);
    this.leaveQueue(cust);
    if (cust.stand) this.leaveStand(cust);
    this.releaseCourt(cust);
    if (cust.car) {
      if (cust.car.state === 'arriving') { this.cars.splice(this.cars.indexOf(cust.car), 1); this.h.carRemoved(cust.car); }
      else this.carDepart(cust.car);
    }
    this.s.satisfaction = clamp(this.s.satisfaction * 0.9 + cust.mood * 0.1, 0, 1);
    // Bouche-à-oreille : un client content fait un peu de publicité, un mécontent en fait beaucoup plus.
    // (plus le club est déjà connu, plus il est difficile de gagner en notoriété)
    const fameNow = this.s.fame ?? START_FAME;
    this.addFame(cust.mood >= 0.75 ? 0.09 * (1 - fameNow / 125) : cust.mood < 0.5 ? -0.3 : 0);
    if (cust.mood >= 0.75) this.s.stats.happy++;
    else if (cust.mood < 0.5) this.s.stats.angry++;
  }

  // ---------------------------------------------------------------------------------- stock
  order(product, boxes) {
    const P = PRODUCTS[product];
    if (!P || !this.productAvailable(product) || boxes < 1) return false;
    const cost = round10(this.unitCost(product) * P.box * boxes);
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
    this.h.notify(T(`Livraison arrivée : ${o.boxes} carton${o.boxes > 1 ? 's' : ''} de ${PRODUCTS[o.product].short.toLowerCase()}`, `Delivery arrived: ${o.boxes} box${o.boxes > 1 ? 'es' : ''} of ${PRODUCTS[o.product].short.toLowerCase()}`), 'info');
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
  shelfLevelCap(product, shelfIdx) { return shelfCap(this.s.shelves[shelfIdx]?.type ?? 'gondola', product); }
  shelfType(i) { return SHELF_TYPES[this.s.shelves[i]?.type] ?? SHELF_TYPES.gondola; }
  // Range une unité du carton sur un niveau d'étagère (chaque article dans sa zone : boutique, buvette, snack).
  placeItem(box, shelfIdx, levelIdx) {
    const sh = this.s.shelves[shelfIdx];
    if (!sh?.built || box.qty <= 0) return 'none';
    if (SHELF_SLOTS[shelfIdx].zone !== PRODUCTS[box.product].zone) return 'zone';
    if (SHELF_SLOTS[shelfIdx].zone === 'shop' && !shelfAccepts(sh.type ?? 'gondola', box.product)) return 'type';
    if (levelIdx >= this.shelfType(shelfIdx).levels) return 'none';
    const lvl = sh.levels[levelIdx];
    if (lvl.product && lvl.product !== box.product && lvl.qty > 0) return 'other';
    if (lvl.qty >= this.shelfLevelCap(box.product, shelfIdx)) return 'full';
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
    this.addFame(3);
    this.h.courtChanged(id, true);
    this.h.notify(T(`${c.label} construit !`, `${c.label} built!`), 'good');
    return true;
  }
  // Achète un meuble de boutique du type voulu, sur le premier emplacement libre.
  buyShelf(type = 'gondola') {
    const T = SHELF_TYPES[type];
    const i = this.s.shelves.findIndex((s, k) => !s.built && SHELF_SLOTS[k].zone === 'shop');
    if (!T || i < 0 || !this.unlocked(T.level) || !this.spend(T.price, 'build')) return false;
    const sh = this.s.shelves[i];
    sh.built = true; sh.type = type;
    sh.levels = Array.from({ length: SHELF_LEVELS }, () => ({ product: null, qty: 0 }));
    this.h.shelfBuilt(i);
    return true;
  }
  // --- Communication
  campaignDone(key) { return this.s.campaigns?.[key] === this.s.day; }
  runCampaign(key) {
    const C = CAMPAIGNS[key];
    if (!C || !this.unlocked(C.level) || this.campaignDone(key) || !this.spend(C.price, 'build')) return false;
    (this.s.campaigns ??= {})[key] = this.s.day;
    // Plus le club est connu, moins une campagne rapporte.
    this.addFame(C.fame * (1 - (this.s.fame ?? 0) / 130));
    this.h.notify(T(`${C.name} : le club se fait connaître !`, `${C.name}: word about the club is spreading!`), 'good');
    return true;
  }
  organize(key) {
    const O = ORGANIZE[key];
    if (!O || !this.unlocked(O.level) || this.s.nextEvent || !this.spend(O.price, 'build')) return false;
    this.s.nextEvent = key;
    this.h.notify(T(`${O.name} : c'est prévu pour demain !`, `${O.name}: it's on for tomorrow!`), 'good');
    return true;
  }
  // Démonte un meuble vide (moitié du prix remboursée) pour en installer un autre.
  removeShelf(i) {
    const sh = this.s.shelves[i];
    if (!sh?.built || SHELF_SLOTS[i].zone !== 'shop' || sh.levels.some(l => l.qty > 0)) return false;
    if (this.s.shelves.filter((x, k) => x.built && SHELF_SLOTS[k].zone === 'shop').length <= 1) return false;
    sh.built = false;
    for (const l of sh.levels) { l.product = null; l.qty = 0; }
    this.earn(Math.round(this.shelfType(i).price / 2), 'bonus');
    this.h.shelfRemoved?.(i);
    return true;
  }
  buyUpgrade(key) {
    const u = UPGRADES[key];
    if (!u || this.s.upgrades[key] || !this.unlocked(u.level)) return false;
    if (!this.spend(u.price, 'build')) return false;
    this.s.upgrades[key] = true;
    this.addFame(2);
    this.h.upgradeBought(key);
    return true;
  }
  // Lance un chantier : le bâtiment se construit petit à petit.
  buyFacility(key) {
    const F = FACILITIES[key], f = this.s.facilities[key];
    if (!F || f.built || f.building || !this.unlocked(F.level)) return false;
    if (!this.spend(F.price, 'build')) return false;
    f.building = true; f.progress = 0;
    this.h.facilityChanged(key, false);
    this.h.notify(T(`Chantier lancé : ${F.name}. Les ouvriers sont au travail !`, `Construction started: ${F.name}. The builders are at work!`), 'good');
    return true;
  }
  updateBuilds(dt) {
    for (const [key, f] of Object.entries(this.s.facilities)) {
      if (!f.building) continue;
      f.progress = Math.min(1, f.progress + dt / FACILITIES[key].build);
      if (f.progress >= 1) {
        f.building = false; f.built = true;
        SHELF_SLOTS.forEach((slot, i) => { if (slot.stand === key) { this.s.shelves[i].built = true; this.h.shelfBuilt(i, true); } });
        this.addXp(30);
        this.addFame(4);
        this.syncStaff();
        this.h.facilityChanged(key, true);
        const tips = { buvette: T('Commande des boissons sur l\'ordinateur et range-les dans le frigo de la buvette.', 'Order drinks on the computer and stock them in the bar fridge.'), snack: T('Commande des sandwichs sur l\'ordinateur et range-les dans la vitrine du snack.', 'Order sandwiches on the computer and stock them in the snack bar display.'), parking: T('Le prix du ticket se règle dans l\'onglet Prix.', 'Set the ticket price in the Prices tab.') };
        this.h.notify(T(`${FACILITIES[key].name} terminé ! ${tips[key] ?? ''}`, `${FACILITIES[key].name} finished! ${tips[key] ?? ''}`), 'good');
      } else this.h.facilityProgress(key, f.progress);
    }
  }
  canHire(key) {
    const S = STAFF[key];
    return this.unlocked(S.level) && (!S.needs || this.built(S.needs));
  }
  setStaff(key, on) {
    if (on && !this.canHire(key)) return false;
    this.s.staff[key] = on;
    this.syncStaff();
    return true;
  }
  staffHome(key) {
    if (key === 'reception') return STAFF_SPOT;
    if (key === 'keeper') return { x: 3.5, z: -2.6 };
    if (key === 'security') return SECURITY_POST;
    if (key === 'barman') return STANDS.buvette.staff;
    if (key === 'cook') return STANDS.snack.staff;
    return STAFF_SPOT;
  }
  syncStaff() {
    for (const key of Object.keys(STAFF)) {
      const want = this.s.staff[key] && (!STAFF[key].needs || this.built(STAFF[key].needs)), have = this.staff[key];
      if (want && !have) {
        const at = this.staffHome(key);
        const p = this.spawnPerson(key, at);
        p.x = at.x; p.z = at.z; p.rot = key === 'keeper' ? Math.PI : key === 'security' ? 0 : key === 'reception' ? 0 : 0;
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
    // Serveurs de la buvette et du snack.
    for (const [key, role] of [['buvette', 'barman'], ['snack', 'cook']]) {
      const p = this.staff[role], st = this.stand[key];
      if (!p) continue;
      p.rot = 0;
      if (this.standOrder(key) && ctx.playerAtStand !== key) {
        st.autoT += dt;
        p.action = 'serve';
        if (st.autoT > 2.6) { st.autoT = 0; this.serveStand(key); }
      } else { st.autoT = 0; if (p.action === 'serve') p.action = 'idle'; }
    }
    this.updateKeeper(dt);
    this.updateSecurity(dt);
  }
  updateKeeper(dt) {
    const k = this.staff.keeper;
    if (!k) return;
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
  // Agent de sécurité : va jusqu'au terrain dont le créneau est dépassé et fait sortir les joueurs.
  updateSecurity(dt) {
    const g = this.staff.security;
    if (!g) return;
    const job = g.job;
    if (job.state === 'idle') {
      job.timer -= dt;
      if (job.timer > 0) return;
      job.timer = 1.5;
      const cust = this.customers.find(c => c.state === 'overtime' && c.overT > 3);
      if (!cust) return;
      job.court = cust.court; job.state = 'go';
      this.say(g, T('J\'y vais !', 'On my way!'), 'info');
      this.goTo(g, [FRONT_OUT, FRONT_IN, BACK_IN, BACK_OUT, ...COURT_SLOTS[cust.court].route]);
    } else if (job.state === 'go' && this.arrived(g)) {
      if (this.court[job.court].overtime) { this.say(g, T('Le créneau est terminé, merci !', 'Your slot is over, thank you!'), 'info'); this.h.sound('whistle'); }
      job.state = 'talk'; job.timer = 1.6;
    } else if (job.state === 'talk') {
      job.timer -= dt;
      if (job.timer <= 0) {
        if (this.court[job.court].overtime) this.evict(job.court, 'guard');
        job.state = 'back';
        this.goTo(g, [...[...COURT_SLOTS[job.court].route].reverse(), BACK_OUT, BACK_IN, FRONT_IN, FRONT_OUT, SECURITY_POST]);
      }
    } else if (job.state === 'back' && this.arrived(g)) {
      job.state = 'idle'; job.timer = 1; g.rot = 0;
    }
  }

  // ---------------------------------------------------------------------------------- journée
  toggleOpen() {
    if (this.dayOver) return this.s.open;
    if (!this.s.open && this.s.minute >= this.closeMinute - 30) { this.h.notify(T('Trop tard pour ouvrir aujourd\'hui', 'Too late to open today'), 'bad'); return false; }
    this.s.open = !this.s.open;
    // La journée (et l'horloge) démarre la première fois qu'on ouvre le club.
    if (this.s.open && !this.s.dayStarted) { this.s.dayStarted = true; this.h.dayStarted?.(); }
    this.h.openChanged(this.s.open);
    return this.s.open;
  }
  arrivalRate() {
    const hour = this.s.minute / 60;
    const hf = hour < 11 ? 0.75 : hour < 14 ? 1.25 : hour < 17 ? 0.85 : hour < 20 ? 1.45 : 0.9;
    // Le club se fait connaître petit à petit : peu de monde au début, l'affluence suit la notoriété.
    const fame = this.s.fame ?? START_FAME;
    let rate = (0.6 + 0.055 * fame + 0.015 * this.s.licences) * hf * (0.6 + 0.8 * this.s.satisfaction) * this.ev('rate');
    if (this.built('buvette')) rate += (0.2 + fame * 0.006) * hf;
    if (this.built('snack')) rate += (hour >= 11.5 && hour < 14.5 ? 0.6 + fame * 0.015 : 0.15);
    // Un parking trop cher fait fuir une partie des visiteurs.
    if (this.built('parking')) rate *= clamp(1.25 - 0.25 * this.s.prices.parking / SERVICES.parking.market, 0.4, 1.05);
    return rate;   // clients par heure de jeu
  }
  pickKind() {
    const hour = this.s.minute / 60;
    const courts = COURTS.filter(c => this.s.courts[c.id].built).length;
    const room = clamp(1 - this.s.licences / this.capacity, 0, 1);
    // Peu de réservations au début : le club se fait d'abord connaître par sa boutique.
    let wBook = courts ? (0.05 + 0.07 * courts) * (this.s.level <= 1 ? 0.8 : 1) * this.ev('book') : 0;
    const waiting = this.customers.filter(c => c.kind === 'book' && !c.court && c.state !== 'leave' && c.state !== 'terrace').length;
    if (waiting >= courts) wBook *= 0.1;
    const wShop = 0.42 * this.ev('shop');
    const wLic = 0.13 * room * this.ev('licence');
    const wDrink = this.built('buvette') ? 0.24 * this.ev('bar') * (hour >= 17 ? 1.5 : 1) : 0;
    const wFood = this.built('snack') ? (hour >= 11.5 && hour < 14.5 ? 0.5 : 0.1) * this.ev('snack') : 0;
    const r = Math.random() * (wBook + wShop + wLic + wDrink + wFood);
    if (r < wBook) return 'book';
    if (r < wBook + wShop) return 'shop';
    if (r < wBook + wShop + wLic) return 'licence';
    if (r < wBook + wShop + wLic + wDrink) return 'drink';
    return 'food';
  }
  canEndDay() { return !!this.s.dayStarted && !this.s.open && this.customers.length === 0 && !this.dayOver; }

  update(dt, ctx = {}) {
    if (this.dayOver) return;
    const s = this.s;
    // Avant l'ouverture, l'horloge reste à 8 h : on prépare le club sans perdre de temps.
    if (s.dayStarted) s.minute += dt * GAME_MIN_PER_SEC;
    for (const c of Object.values(this.court)) if (c.reservedBy == null) { c.playing = false; c.overtime = false; }
    this.counter.idleT = (this.counter.idleT || 0) + (this.counter.cust ? dt : 0);
    if (ctx.playerAtCounter) this.counter.idleT = 0;
    this.updateBuilds(dt);

    // Arrivées.
    if (s.open) {
      if (s.minute >= this.closeMinute) {
        s.open = false;
        this.h.openChanged(false);
        this.h.notify(T('Fermeture : plus de nouveaux clients aujourd\'hui', 'Closing time: no new customers today'), 'info');
      } else if (this.customers.length < MAX_CUSTOMERS && Math.random() < (this.arrivalRate() / 60) * GAME_MIN_PER_SEC * dt) {
        this.spawnCustomer(this.pickKind());
      }
    }
    // Visite de la ligue à 16 h.
    if (s.event?.id === 'inspection' && !this.inspected && s.minute >= 16 * 60) this.inspect();
    // Livraisons.
    for (const o of [...s.orders]) {
      o.eta -= dt;
      if (o.eta <= 0) { s.orders.splice(s.orders.indexOf(o), 1); this.deliver(o); }
    }
    this.updateCars(dt);
    for (const p of this.persons) if (p.action !== 'play' && !p.hidden) this.movePerson(p, dt);
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

  inspect() {
    this.inspected = true;
    const built = COURTS.filter(c => this.s.courts[c.id].built);
    const clean = built.every(c => this.s.courts[c.id].wear < 0.45);
    if (clean) {
      this.earn(300, 'bonus');
      this.addFame(3);
      this.s.satisfaction = clamp(this.s.satisfaction + 0.05, 0, 1);
      this.addXp(40);
      this.h.notify(T('Visite de la ligue : terrains impeccables ! Prime de 300 €', 'League inspection: spotless courts! €300 bonus'), 'good');
    } else {
      this.s.satisfaction = clamp(this.s.satisfaction - 0.04, 0, 1);
      this.h.notify(T('Visite de la ligue : l\'inspecteur trouve les terrains mal entretenus…', 'League inspection: the inspector finds the courts poorly kept…'), 'bad');
    }
  }

  endDay() {
    if (this.dayOver) return;
    this.dayOver = true;
    const s = this.s, st = s.stats;
    s.open = false;
    let salaries = 0;
    for (const k of Object.keys(STAFF)) if (s.staff[k] && this.staff[k]) salaries += STAFF[k].salary;
    let upkeep = 30;
    for (const c of COURTS) if (s.courts[c.id].built) upkeep += c.surface === 'clay' ? 30 : 22;
    if (this.built('buvette')) upkeep += 15;
    if (this.built('snack')) upkeep += 25;
    s.money -= salaries + upkeep;
    st.salaries += salaries; st.upkeep += upkeep;
    // Le bouche-à-oreille fait évoluer le nombre de licenciés.
    const before = s.licences;
    const drift = Math.round(s.licences * (s.satisfaction - 0.55) * 0.12 + (s.satisfaction > 0.7 && s.fame > 15 ? 1 : 0));
    const fameBefore = s.fameDayStart ?? s.fame;
    if (s.event?.organized && ORGANIZE[s.event.id]) this.addFame(ORGANIZE[s.event.id].fame);
    s.licences = clamp(s.licences + drift, 3, this.capacity);
    const summary = {
      day: s.day, ...st, licences: s.licences, licenceDrift: s.licences - before, satisfaction: s.satisfaction, money: s.money, level: s.level,
      fame: s.fame, fameDelta: s.fame - fameBefore,
      event: s.event?.id, challenge: s.challenge ? { ...s.challenge, text: challengeText(s.challenge) } : null,
    };
    this.h.dayEnded(summary);
    return summary;
  }

  nextDay() {
    const s = this.s;
    s.day++;
    s.fameDayStart = s.fame;
    s.minute = OPEN_HOUR * 60;
    s.open = false;
    s.dayStarted = false;
    s.stats = freshStats();
    this.dayOver = false;
    this.inspected = false;
    for (const cust of [...this.customers]) this.removeCustomer(cust);
    for (const car of [...this.cars]) this.h.carRemoved(car);
    this.cars.length = 0;
    this.queue.length = 0;
    this.lobbyUsed.clear();
    for (const st of Object.values(this.stand)) { st.queue.length = 0; st.seats.clear(); st.autoT = 0; }
    for (const k of Object.keys(this.court)) Object.assign(this.court[k], { reservedBy: null, playing: false, cleaning: false, overtime: false });
    for (const [key, p] of Object.entries(this.staff)) {
      if (!p) continue;
      const home = this.staffHome(key);
      p.job = { state: 'idle', timer: 0 }; p.path = []; p.x = home.x; p.z = home.z; p.action = 'idle';
    }
    this.rollDay();
    this.h.openChanged(false);
  }
  // Événement et défi du jour.
  rollDay() {
    const s = this.s;
    const ids = Object.keys(EVENTS).filter(id => EVENTS[id].weight > 0 && !(id === 'tournament' && s.level < 2));
    // Événement organisé la veille par le joueur, sinon tiré au hasard.
    const id = s.nextEvent && EVENTS[s.nextEvent] ? s.nextEvent : weighted(Object.fromEntries(ids.map(k => [k, EVENTS[k].weight])));
    s.event = { id, organized: !!s.nextEvent };
    s.nextEvent = null;
    if (id === 'promo') {
      const pool = PRODUCT_IDS.filter(p => this.productAvailable(p));
      s.event.product = pick(pool);
    }
    const options = CHALLENGES.filter(c => (!c.needs || this.built(c.needs)) && (!c.level || this.unlocked(c.level)));
    const c = pick(options);
    const target = Math.max(1, Math.round(c.base + c.per * (s.level - 1)));
    s.challenge = { id: c.id, target, reward: Math.round(c.reward * (1 + (s.level - 1) * 0.25) / 10) * 10, done: false };
    this.h.challengeChanged();
  }

  // Sauvegarde : uniquement l'état durable (pas les clients en cours).
  serialize() {
    const s = JSON.parse(JSON.stringify(this.s));
    s.boxes = s.boxes.map(b => ({ ...b, held: false }));
    return s;
  }
}

export function challengeText(ch) {
  const def = CHALLENGES.find(c => c.id === ch.id);
  return def ? def.text(ch.target) : '';
}
export const CHALLENGE_STAT = { shopItems: 'shopItems', bookings: 'bookings', licences: 'newLicences', barItems: 'barItems', snackItems: 'snackItems', rackets: 'rackets', evictions: 'evictions' };

// Tirage pondéré parmi les clés d'un objet { clé: poids }.
function weighted(w, ok = () => true) {
  const keys = Object.keys(w).filter(k => w[k] > 0 && ok(k));
  if (!keys.length) return null;
  const total = keys.reduce((a, k) => a + w[k], 0);
  let r = Math.random() * total;
  for (const k of keys) { r -= w[k]; if (r <= 0) return k; }
  return keys[keys.length - 1];
}

// Position d'un emplacement sur la palette de livraison (3 x 2, sur 3 hauteurs).
export function palletPos(i) {
  const layer = Math.floor(i / 6), k = i % 6;
  return { x: DELIVERY.x + ((k % 3) - 1) * 0.62, z: DELIVERY.z + (Math.floor(k / 3) - 0.5) * 0.62, y: 0.15 + layer * 0.46 };
}
