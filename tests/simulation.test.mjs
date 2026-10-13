// Simulation de plusieurs journées complètes avec un "joueur robot", pour vérifier qu'aucun client
// ne reste bloqué, que l'argent et le stock restent cohérents, et qu'aucune erreur n'est levée.
// Lancer : node tests/simulation.test.mjs
import { Club, createState, SHELF_LEVELS } from '../src/game/club.js';
import { PRODUCTS, COURTS } from '../src/game/data.js';
import { round10 } from '../src/core/util.js';

let failures = 0;
const check = (cond, msg) => { if (!cond) { failures++; console.error('ÉCHEC :', msg); } };

const events = { bubbles: 0, levelUps: [], days: [] };
const hooks = {
  bubble: () => events.bubbles++,
  levelUp: (l, u) => events.levelUps.push([l, u]),
  dayEnded: s => events.days.push(s),
};

const state = createState();
const club = new Club(state, hooks);
const dt = 1 / 20;

// Le robot range un carton entier dans la première étagère qui convient.
function stockBox(box) {
  club.pickBox(box);
  for (let si = 0; si < state.shelves.length && box.qty > 0; si++) {
    if (!state.shelves[si].built) continue;
    for (let li = 0; li < SHELF_LEVELS && box.qty > 0; li++) {
      let r;
      do { r = club.placeItem(box, si, li); } while (r === 'ok' && box.qty > 0);
    }
  }
  if (box.qty > 0) club.dropBox(box, 3, 12);
}

function robot(serveCounter) {
  // Commande quand le stock baisse.
  for (const id of Object.keys(PRODUCTS)) {
    if (!club.unlocked(PRODUCTS[id].level)) continue;
    const onShelf = state.shelves.reduce((a, s) => a + s.levels.reduce((b, l) => b + (l.product === id ? l.qty : 0), 0), 0);
    const pending = state.orders.some(o => o.product === id) || state.boxes.some(b => b.product === id);
    if (onShelf < 4 && !pending && state.money > 400) club.order(id, 1);
  }
  for (const box of [...state.boxes]) if (!box.held) stockBox(box);
  // Caisse.
  const c = club.counter;
  if (serveCounter && c.cust) {
    if (c.phase === 'scan') { const it = c.items.find(i => !i.scanned); if (it) club.scan(it.uid); }
    else if (c.phase === 'pay') {
      if (c.method === 'card') check(club.payCard(c.total), 'paiement carte refusé');
      else check(club.payCash(round10(c.given - c.total)) === 'ok', 'monnaie refusée');
    }
  }
  // Entretien.
  for (const id of Object.keys(state.courts)) if (state.courts[id].wear > 0.5) club.clean(id);
  // Investissements.
  if (state.shelves.filter(s => s.built).length < 4 && state.money > 1500) club.buyShelf();
  for (const c of COURTS) if (!state.courts[c.id].built && club.unlocked(c.level) && state.money > c.price + 1500) club.buildCourt(c.id);
  if (club.unlocked(3) && !state.staff.reception) club.setStaff('reception', true);
  if (club.unlocked(4) && !state.staff.keeper) club.setStaff('keeper', true);
}

function invariants(tag) {
  const people = club.customers.reduce((a, c) => a + c.persons.length, 0) + (club.staff.reception ? 1 : 0) + (club.staff.keeper ? 1 : 0);
  check(people === club.persons.length, `${tag} : nombre de personnes incohérent (${people} / ${club.persons.length})`);
  check(Number.isFinite(state.money), `${tag} : argent invalide`);
  for (const [id, rt] of Object.entries(club.court)) {
    if (rt.reservedBy != null) check(club.customers.some(c => c.id === rt.reservedBy), `${tag} : ${id} réservé par un client disparu`);
  }
  for (const s of state.shelves) for (const l of s.levels) check(l.qty >= 0 && (!l.product || l.qty <= PRODUCTS[l.product].shelf), `${tag} : étagère incohérente`);
  check(club.queue.every(q => club.customers.includes(q)), `${tag} : file contient un client disparu`);
}

const lifetimes = new Map();
for (let day = 1; day <= 8; day++) {
  club.toggleOpen();
  let t = 0;
  const serveCounter = day !== 3;      // le jour 3, personne n'est à la caisse (test de patience)
  while (!club.dayOver && t < 2000) {
    club.update(dt, { playerAtCounter: serveCounter });
    if (Math.floor(t * 20) % 4 === 0) robot(serveCounter);
    for (const c of club.customers) lifetimes.set(c.id, (lifetimes.get(c.id) || 0) + dt);
    if (Math.floor(t * 20) % 100 === 0) invariants(`jour ${day} t=${t.toFixed(0)}`);
    t += dt;
  }
  check(club.dayOver, `jour ${day} : la journée ne s'est pas terminée (t=${t.toFixed(0)} s)`);
  const sum = events.days.at(-1);
  console.log(`Jour ${day} (${t.toFixed(0)} s) : clients ${sum.customers}, contents ${sum.happy}, mécontents ${sum.angry}, ` +
    `courts ${sum.courts.toFixed(0)} €, boutique ${sum.shop.toFixed(0)} €, licences ${sum.licenceFees.toFixed(0)} € (${sum.licences} licenciés), ` +
    `argent ${state.money.toFixed(0)} €, niveau ${state.level}, satisfaction ${(state.satisfaction * 5).toFixed(1)}/5`);
  club.nextDay();
  invariants(`après jour ${day}`);
}
const maxLife = Math.max(...lifetimes.values());
check(maxLife < 400, `un client est resté ${maxLife.toFixed(0)} s`);
console.log('Durée de vie max d\'un client :', maxLife.toFixed(0), 's ; bulles :', events.bubbles, '; niveaux :', events.levelUps.map(l => l[0]).join(', '));

// Sauvegarde / chargement.
const saved = JSON.stringify(club.serialize());
const club2 = new Club(JSON.parse(saved), {});
check(club2.s.money === state.money && club2.s.day === state.day, 'sauvegarde incohérente');

// Monnaie : cas limites.
for (let i = 0; i < 2000; i++) {
  const total = round10(Math.random() * 150 + 0.1);
  const g = Club.cashGiven(total);
  check(g >= total - 1e-9, `le client donne moins que le total (${g} < ${total})`);
}
console.log(failures ? `${failures} échec(s)` : 'Tous les tests sont passés');
process.exit(failures ? 1 : 0);
