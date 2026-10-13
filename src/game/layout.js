// Plan du club (en mètres). x vers la droite, z vers la rue (le devant du club-house est à z = 14).
// Les courts sont derrière le club-house (z négatif). Ce fichier est pur : utilisable sans rendu.

export const CLUB = { minX: -10, maxX: 10, minZ: 0, maxZ: 14, height: 4.2 };
export const DOOR_W = 2.4;

export const COUNTER = { minX: -8.5, maxX: -3, minZ: 6.6, maxZ: 7.4, top: 1.02 };
export const STAFF_SPOT = { x: -5.6, z: 5.8 };        // derrière le comptoir
export const QUEUE = [0, 1, 2, 3, 4, 5].map(i => ({ x: -5.6, z: 8.3 + i * 0.95 }));
export const LAPTOP = { x: -7.75, z: 6.95 };
export const REGISTER = { x: -6.55, z: 6.95 };
export const TERMINAL = { x: -3.55, z: 7.05 };
export const COUNTER_MAT = { x: -4.7, z: 7.0 };       // où les clients posent leurs articles
export const SIGN = { x: 2.2, z: 14.0 };

export const SPAWN = { x: 0, z: 30 };
export const FRONT_OUT = { x: 0, z: 15.4 };
export const FRONT_IN = { x: 0, z: 12.6 };
export const BACK_IN = { x: 0, z: 1.3 };
export const BACK_OUT = { x: 0, z: -1.8 };
export const LOBBY = [
  { x: 1.4, z: 11.6 }, { x: 2.4, z: 11.6 }, { x: 3.4, z: 11.6 }, { x: 4.4, z: 11.6 },
  { x: 1.4, z: 12.7 }, { x: 2.4, z: 12.7 }, { x: 3.4, z: 12.7 }, { x: 4.4, z: 12.7 },
  { x: -1.6, z: 3.2 }, { x: -1.6, z: 4.2 }, { x: -1.6, z: 5.2 }, { x: 1.6, z: 3.2 }, { x: 1.6, z: 4.2 }, { x: 1.6, z: 5.2 },
];
export const DELIVERY = { x: 6.2, z: 17.6 };           // palette de livraison, devant le club

// Mobilier du club-house (le rendu et les collisions utilisent les mêmes positions).
export const PLANTS = [{ x: -9.3, z: 13.3 }, { x: 9.3, z: 13.3 }, { x: -1.9, z: 0.6 }, { x: 1.9, z: 0.6 }];
export const LOBBY_BENCH = { x: 3.4, z: 13.5, w: 3.6, d: 0.42 };

// Étagères de la boutique : 4 contre le mur de droite, 2 contre le mur du fond.
// facing : direction vers laquelle l'étagère est tournée (angle autour de y, 0 = vers +z).
const SHOP_SHELVES = [
  { x: 9.45, z: 3.1, facing: -Math.PI / 2 },
  { x: 9.45, z: 5.6, facing: -Math.PI / 2 },
  { x: 9.45, z: 8.1, facing: -Math.PI / 2 },
  { x: 9.45, z: 10.6, facing: -Math.PI / 2 },
  { x: 4.3, z: 0.45, facing: 0 },
  { x: 6.9, z: 0.45, facing: 0 },
].map(s => ({ ...s, zone: 'shop' }));

// --- Buvette (à l'ouest du club-house) et snack (à l'est) -------------------------------------------
// Petits bâtiments : comptoir de service côté nord (vers le parvis), porte de service à l'est (buvette)
// ou à l'ouest (snack), étagère réfrigérée au fond, terrasse avec tables devant.
function stand(side, zone) {
  const m = x => x * side;                    // side = -1 : buvette (ouest), +1 : snack (est)
  const x0 = Math.min(m(13), m(20)), x1 = Math.max(m(13), m(20));
  const cx = m(16.5);
  const tables = [[m(19.2), 10.4], [m(19.2), 12.8], [m(13.8), 10.4], [m(13.8), 12.8]].map(([x, z]) => ({ x, z }));
  const seats = [];
  for (const t of tables) {
    const inner = t.x + (cx > t.x ? 0.9 : -0.9);
    seats.push({ x: inner, z: t.z, look: t }, { x: t.x, z: t.z + 0.85, look: t }, { x: t.x, z: t.z - 0.85, look: t });
  }
  return {
    side, zone, x0, x1, z0: 3, z1: 8.2, cx,
    counter: { minX: x0, maxX: x1, minZ: 7.8, maxZ: 8.6, top: 1.05 },
    door: { x: side < 0 ? x1 : x0, z0: 4.6, z1: 5.8 },     // porte de service, côté club-house
    staff: { x: cx, z: 7.0 },
    queue: [0, 1, 2, 3, 4].map(i => ({ x: cx, z: 9.3 + i * 0.9 })),
    approach: { x: m(12), z: 15.4 },
    entry: { x: cx, z: 13.9 },
    tables, seats,
    shelves: [m(18.2), m(14.8)].map(x => ({ x, z: 3.45, facing: 0, zone })),
  };
}
export const STANDS = { buvette: stand(-1, 'bar'), snack: stand(1, 'snack') };

export const SHELF_SLOTS = [...SHOP_SHELVES, ...STANDS.buvette.shelves.map(s => ({ ...s, stand: 'buvette' })), ...STANDS.snack.shelves.map(s => ({ ...s, stand: 'snack' }))]
  .map((s, i) => ({ ...s, id: i, w: 2.1, d: 0.6, browse: { x: s.x + Math.sin(s.facing) * 1.25, z: s.z + Math.cos(s.facing) * 1.25 } }));

// --- Parking : 2 rangées de places, une allée centrale (z = 31), entrée à l'ouest par une barrière.
export const PARKING_LANE_Z = 31;
export const PARKING_ROAD = { inX: -60, outX: 70, barrierX: -23 };
export const PARKING_SPOTS = [];
for (const z of [26.2, 35.8]) {
  for (const x of [-18.7, -16.1, -13.5, -10.9, -8.3, -5.7, 4.7, 7.3, 9.9, 12.5, 15.1, 17.7]) PARKING_SPOTS.push({ x, z, row: z < 31 ? 1 : -1 });
}
// Deux places occupées en permanence (voitures du personnel).
export const RESERVED_SPOTS = [0, 23];
export const PAY_MACHINE = { x: -24.8, z: 28.0 };
// Porte d'une voiture garée : on en descend dans l'espace entre deux places.
export const carDoor = spot => ({ x: spot.x + 1.3, z: spot.z });

// Poste de l'agent de sécurité, sur le parvis.
export const SECURITY_POST = { x: 3.2, z: 16.2 };

// Courts. cx, cz : centre ; route : chemin depuis la porte arrière jusqu'au portillon.
export const TENNIS_AREA = { w: 18.3, l: 36.6 };
export const PADEL_AREA = { w: 12, l: 22 };
const TOP = -4;
// Les padels n'ont pas de portillon en haut : on y entre par les ouvertures latérales, au niveau du filet.
// door : côté (+1 / -1) de l'ouverture utilisée, tourné vers l'allée.
export const COURT_SLOTS = {
  T1: { cx: -11, cz: TOP - TENNIS_AREA.l / 2, route: [{ x: 0, z: -2 }, { x: -11, z: -2 }, { x: -11, z: -5.2 }] },
  T2: { cx: 11, cz: TOP - TENNIS_AREA.l / 2, route: [{ x: 0, z: -2 }, { x: 11, z: -2 }, { x: 11, z: -5.2 }] },
  P1: { cx: -31, cz: TOP - PADEL_AREA.l / 2, door: 1, route: [{ x: 0, z: -2 }, { x: -24.6, z: -2 }, { x: -24.6, z: -15 }] },
  P2: { cx: 31, cz: TOP - PADEL_AREA.l / 2, door: -1, route: [{ x: 0, z: -2 }, { x: 24.6, z: -2 }, { x: 24.6, z: -15 }] },
  T3: { cx: -11, cz: -44 - TENNIS_AREA.l / 2, route: [{ x: 0, z: -2 }, { x: 0, z: -42.3 }, { x: -11, z: -42.3 }, { x: -11, z: -45.2 }] },
  T4: { cx: 11, cz: -44 - TENNIS_AREA.l / 2, route: [{ x: 0, z: -2 }, { x: 0, z: -42.3 }, { x: 11, z: -42.3 }, { x: 11, z: -45.2 }] },
  P3: { cx: -31, cz: -30 - PADEL_AREA.l / 2, door: 1, route: [{ x: 0, z: -2 }, { x: -22.5, z: -2 }, { x: -22.5, z: -41 }, { x: -24.6, z: -41 }] },
};

// Entrée dans le terrain de padel par l'ouverture latérale, vers le côté (+1 / -1) du filet.
export function padelEntry(slotId, side) {
  const s = COURT_SLOTS[slotId], d = s.door;
  return [
    { x: s.cx + 5.7 * d, z: s.cz + 0.3 * side },
    { x: s.cx + 4.4 * d, z: s.cz + 0.3 * side },
    { x: s.cx + 4.2 * d, z: s.cz + 1.2 * side },
  ];
}

// Pour rejoindre la file (le long du comptoir) sans traverser le comptoir.
export const QUEUE_APPROACH_X = -2.2;
export const COUNTER_EXIT = { x: -1.8, z: 8.6 };

// Positions des joueurs sur un court : deux (tennis) ou quatre (padel).
export function playSpots(slotId, sport) {
  const s = COURT_SLOTS[slotId];
  if (sport === 'tennis') return [{ x: s.cx, z: s.cz + 13.2, side: 1 }, { x: s.cx, z: s.cz - 13.2, side: -1 }];
  return [
    { x: s.cx - 2.4, z: s.cz + 7.2, side: 1 }, { x: s.cx + 2.4, z: s.cz + 7.2, side: 1 },
    { x: s.cx - 2.4, z: s.cz - 7.2, side: -1 }, { x: s.cx + 2.4, z: s.cz - 7.2, side: -1 },
  ];
}

export const WORLD = { minX: -44, maxX: 44, minZ: -86, maxZ: 34 };

// Obstacles pour le joueur : rectangles { minX, maxX, minZ, maxZ }.
export function staticColliders() {
  const t = 0.25, out = [];
  const wall = (minX, maxX, minZ, maxZ) => out.push({ minX, maxX, minZ, maxZ });
  const half = DOOR_W / 2;
  // Façade avant et mur du fond, chacun percé d'une porte au centre.
  wall(CLUB.minX, -half, CLUB.maxZ - t / 2, CLUB.maxZ + t / 2);
  wall(half, CLUB.maxX, CLUB.maxZ - t / 2, CLUB.maxZ + t / 2);
  wall(CLUB.minX, -half, CLUB.minZ - t / 2, CLUB.minZ + t / 2);
  wall(half, CLUB.maxX, CLUB.minZ - t / 2, CLUB.minZ + t / 2);
  wall(CLUB.minX - t / 2, CLUB.minX + t / 2, CLUB.minZ, CLUB.maxZ);
  wall(CLUB.maxX - t / 2, CLUB.maxX + t / 2, CLUB.minZ, CLUB.maxZ);
  out.push({ ...COUNTER });
  for (const p of PLANTS) out.push({ minX: p.x - 0.3, maxX: p.x + 0.3, minZ: p.z - 0.3, maxZ: p.z + 0.3 });
  const b = LOBBY_BENCH;
  out.push({ minX: b.x - b.w / 2, maxX: b.x + b.w / 2, minZ: b.z - b.d / 2, maxZ: b.z + b.d / 2 });
  return out;
}

// Murs, comptoir et tables d'une buvette ou d'un snack construit ; chantier : une seule emprise.
export function standColliders(key, built) {
  const S = STANDS[key], t = 0.25, out = [];
  if (!built) return [{ minX: S.x0 - 0.5, maxX: S.x1 + 0.5, minZ: S.z0 - 0.5, maxZ: S.z1 + 0.5 }];
  out.push({ minX: S.x0, maxX: S.x1, minZ: S.z0 - t / 2, maxZ: S.z0 + t / 2 });               // fond
  const outer = S.side < 0 ? S.x0 : S.x1;
  out.push({ minX: outer - t / 2, maxX: outer + t / 2, minZ: S.z0, maxZ: S.z1 });              // côté extérieur
  const d = S.door.x;
  out.push({ minX: d - t / 2, maxX: d + t / 2, minZ: S.z0, maxZ: S.door.z0 });                 // côté porte
  out.push({ minX: d - t / 2, maxX: d + t / 2, minZ: S.door.z1, maxZ: S.z1 });
  out.push({ minX: S.x0, maxX: S.x1, minZ: S.counter.minZ, maxZ: S.counter.maxZ });           // comptoir
  for (const tb of S.tables) out.push({ minX: tb.x - 0.5, maxX: tb.x + 0.5, minZ: tb.z - 0.5, maxZ: tb.z + 0.5 });
  return out;
}

export function parkingColliders(paid) {
  return paid ? [{ minX: PAY_MACHINE.x - 0.3, maxX: PAY_MACHINE.x + 0.3, minZ: PAY_MACHINE.z - 0.25, maxZ: PAY_MACHINE.z + 0.25 }] : [];
}
export const carCollider = spot => ({ minX: spot.x - 0.95, maxX: spot.x + 0.95, minZ: spot.z - 2.3, maxZ: spot.z + 2.3 });

export function shelfCollider(slot) {
  const horiz = Math.abs(Math.sin(slot.facing)) < 0.5;   // tournée vers ±z → longue selon x
  const hw = (horiz ? slot.w : slot.d) / 2, hd = (horiz ? slot.d : slot.w) / 2;
  return { minX: slot.x - hw, maxX: slot.x + hw, minZ: slot.z - hd, maxZ: slot.z + hd };
}

// Grillage (tennis) ou parois vitrées (padel) d'un terrain construit.
export function courtColliders(slotId, sport) {
  const s = COURT_SLOTS[slotId], t = 0.15;
  if (sport === 'tennis') {
    const A = TENNIS_AREA, gate = 0.9;
    const x0 = s.cx - A.w / 2, x1 = s.cx + A.w / 2, z1 = s.cz + A.l / 2, z0 = s.cz - A.l / 2;
    return [
      { minX: x0, maxX: s.cx - gate, minZ: z1 - t, maxZ: z1 + t },
      { minX: s.cx + gate, maxX: x1, minZ: z1 - t, maxZ: z1 + t },
      { minX: x0, maxX: x1, minZ: z0 - t, maxZ: z0 + t },
      { minX: x0 - t, maxX: x0 + t, minZ: z0, maxZ: z1 },
      { minX: x1 - t, maxX: x1 + t, minZ: z0, maxZ: z1 },
      { minX: s.cx - 6.4, maxX: s.cx + 6.4, minZ: s.cz - 0.06, maxZ: s.cz + 0.06 },   // filet
      { minX: s.cx - 7.8, maxX: s.cx - 7.0, minZ: s.cz - 0.4, maxZ: s.cz + 0.4 },        // chaise d'arbitre
      ...[-2.2, 2.2].map(z => ({ minX: s.cx - 8.15, maxX: s.cx - 7.65, minZ: s.cz + z - 0.8, maxZ: s.cz + z + 0.8 })),  // bancs (côté chaise)
      ...poles(s, A.w / 2 + 0.6, 9),
    ];
  }
  // Padel : 10 x 20 m, ouvertures de 1,5 m de chaque côté au niveau du filet.
  const x0 = s.cx - 5, x1 = s.cx + 5, z0 = s.cz - 10, z1 = s.cz + 10, o = 0.75;
  return [
    { minX: x0, maxX: x1, minZ: z1 - t, maxZ: z1 + t },
    { minX: x0, maxX: x1, minZ: z0 - t, maxZ: z0 + t },
    { minX: x0 - t, maxX: x0 + t, minZ: s.cz + o, maxZ: z1 }, { minX: x0 - t, maxX: x0 + t, minZ: z0, maxZ: s.cz - o },
    { minX: x1 - t, maxX: x1 + t, minZ: s.cz + o, maxZ: z1 }, { minX: x1 - t, maxX: x1 + t, minZ: z0, maxZ: s.cz - o },
    { minX: s.cx - 4.6, maxX: s.cx + 4.6, minZ: s.cz - 0.05, maxZ: s.cz + 0.05 },          // filet
    ...poles(s, 5.8, 6),
  ];
}

// Mâts d'éclairage, aux quatre coins extérieurs d'un terrain.
function poles(s, dx, dz) {
  const out = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const x = s.cx + sx * dx, z = s.cz + sz * dz;
    out.push({ minX: x - 0.15, maxX: x + 0.15, minZ: z - 0.15, maxZ: z + 0.15 });
  }
  return out;
}

// Trajet d'une voiture : de la route à sa place (arrivée), ou de sa place à la sortie (départ, en marche
// arrière pour s'extraire). Segments droits ou courbes (a → b, point de contrôle c), vitesse v en m/s.
// La simulation et le rendu utilisent les mêmes trajets, donc la même durée.
export function carRoute(spot, leaving) {
  const laneIn = PARKING_LANE_Z - 0.8, laneOut = PARKING_LANE_Z + 0.8, R = PARKING_ROAD;
  if (!leaving) {
    const turn = Math.max(spot.x - 5, R.barrierX + 1.5);
    return [
      { a: { x: R.inX, z: laneIn }, b: { x: R.barrierX - 6, z: laneIn }, v: 11 },
      { a: { x: R.barrierX - 6, z: laneIn }, b: { x: turn, z: laneIn }, v: 6.5 },
      { a: { x: turn, z: laneIn }, c: { x: spot.x, z: laneIn }, b: { x: spot.x, z: spot.z }, v: 3 },
    ];
  }
  return [
    { a: { x: spot.x, z: spot.z }, c: { x: spot.x, z: laneOut }, b: { x: spot.x - 4, z: laneOut }, v: 2, reverse: true },
    { a: { x: spot.x - 4, z: laneOut }, b: { x: 26, z: laneOut }, v: 7.5 },
    { a: { x: 26, z: laneOut }, b: { x: R.outX, z: laneOut }, v: 11 },
  ];
}
function segPoint(s, u) {
  if (!s.c) return { x: s.a.x + (s.b.x - s.a.x) * u, z: s.a.z + (s.b.z - s.a.z) * u };
  const k = 1 - u;
  return { x: k * k * s.a.x + 2 * k * u * s.c.x + u * u * s.b.x, z: k * k * s.a.z + 2 * k * u * s.c.z + u * u * s.b.z };
}
function segLength(s) {
  if (!s.c) return Math.hypot(s.b.x - s.a.x, s.b.z - s.a.z);
  let len = 0, p = s.a;
  for (let i = 1; i <= 16; i++) { const q = segPoint(s, i / 16); len += Math.hypot(q.x - p.x, q.z - p.z); p = q; }
  return len;
}
export const routeDuration = segs => segs.reduce((a, s) => a + segLength(s) / s.v, 0);
// Position et cap d'une voiture à l'instant t (en secondes) sur son trajet.
export function routePose(segs, t) {
  for (const s of segs) {
    const d = segLength(s) / s.v;
    if (t <= d || s === segs[segs.length - 1]) {
      const u = Math.min(1, Math.max(0, t / d));
      const p = segPoint(s, u), q = segPoint(s, Math.min(1, u + 0.01)), o = segPoint(s, Math.max(0, u - 0.01));
      let heading = Math.atan2(q.x - o.x, q.z - o.z);
      if (s.reverse) heading += Math.PI;
      return { x: p.x, z: p.z, heading };
    }
    t -= d;
  }
  return null;
}
