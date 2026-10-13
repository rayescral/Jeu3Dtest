// Vérifie qu'aucun trajet de personnage ne traverse un mur, un grillage, un filet, le comptoir ou une étagère.
// Lancer : node tests/paths.test.mjs
import { Club, createState } from '../src/game/club.js';
import { COURTS, COURT_TYPES } from '../src/game/data.js';
import {
  staticColliders, shelfCollider, courtColliders, SHELF_SLOTS, COURT_SLOTS, playSpots, QUEUE, LOBBY,
  SPAWN, FRONT_OUT, FRONT_IN, BACK_IN, BACK_OUT, STAFF_SPOT,
  STANDS, standColliders, PARKING_SPOTS, carCollider, carDoor, PARKING_LANE_Z, SECURITY_POST, parkingColliders,
} from '../src/game/layout.js';

let failures = 0;
const SHOP = SHELF_SLOTS.filter(s => s.zone === 'shop');
const boxes = [...staticColliders(), ...SHELF_SLOTS.map(shelfCollider)];
for (const c of COURTS) boxes.push(...courtColliders(c.id, COURT_TYPES[c.surface].sport).map(b => ({ ...b, court: c.id })));
for (const k of Object.keys(STANDS)) boxes.push(...standColliders(k, true).map(b => ({ ...b, stand: k })));
boxes.push(...parkingColliders(true));
// Toutes les places de parking occupées : on doit pouvoir passer entre les voitures.
const carBoxes = PARKING_SPOTS.map(carCollider);

const inside = (p, b, m = 0.12) => p.x > b.minX - m && p.x < b.maxX + m && p.z > b.minZ - m && p.z < b.maxZ + m;
const insideCar = (p, b) => inside(p, b, 0.1);
const _unused = (p, b, m = 0.12) => p.x > b.minX - m && p.x < b.maxX + m && p.z > b.minZ - m && p.z < b.maxZ + m;
function checkPath(name, pts) {
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.ceil(Math.hypot(b.x - a.x, b.z - a.z) / 0.05);
    for (let k = 0; k <= n; k++) {
      const p = { x: a.x + (b.x - a.x) * k / n, z: a.z + (b.z - a.z) * k / n };
      const hit = boxes.find(bx => inside(p, bx)) ?? carBoxes.find(bx => insideCar(p, bx));
      if (hit) { failures++; console.error(`ÉCHEC ${name} : segment ${i} traverse un obstacle en (${p.x.toFixed(2)}, ${p.z.toFixed(2)})`, hit); return; }
    }
  }
}

const club = new Club(createState(), {});
// Entrée, file, salon, étagères.
checkPath('arrivée', [SPAWN, FRONT_OUT, FRONT_IN]);
for (const q of QUEUE) checkPath('file', [FRONT_IN, q]);
for (const l of LOBBY) checkPath('salon', [FRONT_IN, l]);
for (const s of SHOP) checkPath(`étagère ${s.id}`, [FRONT_IN, s.browse]);
checkPath('sortie depuis la file', [QUEUE[0], ...club.pathOut({ x: QUEUE[0].x, z: QUEUE[0].z })]);
checkPath('accueil', [STAFF_SPOT, STAFF_SPOT]);
// Rejoindre la file depuis n'importe où dans le club-house (étagères, salon, entrée).
const starts = [FRONT_IN, ...LOBBY, ...SHOP.map(s => s.browse)];
for (const from of starts) for (const q of QUEUE) checkPath(`vers la file depuis (${from.x}, ${from.z})`, [from, ...club.queuePath(from, q)]);
// D'une étagère à l'autre, et vers le salon.
for (const a of SHOP) for (const b of SHOP) checkPath(`étagère ${a.id} → ${b.id}`, [a.browse, b.browse]);
for (const a of SHOP) for (const l of LOBBY) checkPath(`étagère ${a.id} → salon`, [a.browse, l]);
for (const l of LOBBY) checkPath('salon → sortie', [l, ...club.pathOut(l)]);
// Chaque terrain, chaque place, aller et retour.
for (const c of COURTS) {
  const sport = COURT_TYPES[c.surface].sport;
  for (const spot of playSpots(c.id, sport)) {
    for (const from of [QUEUE[0], ...LOBBY]) {
    const go = club.courtPath(from, c.id, spot, sport);
    checkPath(`${c.id} aller (${spot.x.toFixed(1)}, ${spot.z.toFixed(1)})`, [from, ...go]);
    }
    const back = club.courtExit({ x: spot.x, z: spot.z }, c.id, sport);
    checkPath(`${c.id} retour`, [spot, ...back, BACK_OUT, BACK_IN, FRONT_IN]);
  }
}
// Buvette et snack : arrivée, file, tables, sortie ; depuis les courts après une partie.
for (const [k, S] of Object.entries(STANDS)) {
  checkPath(`${k} arrivée`, [FRONT_OUT, S.approach, S.entry]);
  for (const q of S.queue) checkPath(`${k} file`, [S.entry, q]);
  for (const seat of S.seats) {
    checkPath(`${k} table (${seat.x}, ${seat.z})`, [S.entry, { x: S.cx, z: seat.z }, seat]);
    checkPath(`${k} file → table`, [S.queue[0], { x: S.cx, z: seat.z }, seat]);
    checkPath(`${k} table → sortie`, [seat, ...club.pathOut(seat, null)]);
  }
  checkPath(`${k} service`, [S.staff, S.staff]);
  checkPath(`${k} depuis les courts`, [{ x: 0, z: -2 }, { x: S.approach.x, z: -2 }, S.approach, S.entry]);
}
// Parking : de chaque voiture au club-house, et retour.
PARKING_SPOTS.forEach((spot, i) => {
  const door = carDoor(spot);
  const cust = { car: { spot: i } };
  checkPath(`parking ${i} → club`, [door, ...club.entryHead(cust, door), FRONT_IN]);
  checkPath(`club → parking ${i}`, [FRONT_IN, ...club.pathOut(FRONT_IN, cust)]);
});
// Agent de sécurité : du parvis à chaque terrain.
for (const c of COURTS) checkPath(`sécurité ${c.id}`, [SECURITY_POST, FRONT_OUT, FRONT_IN, BACK_IN, BACK_OUT, ...COURT_SLOTS[c.id].route]);
console.log(failures ? `${failures} échec(s)` : 'Aucun trajet ne traverse d\'obstacle');
process.exit(failures ? 1 : 0);
