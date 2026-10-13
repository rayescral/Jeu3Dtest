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

// Étagères de la boutique : 4 contre le mur de droite, 2 contre le mur du fond.
// facing : direction vers laquelle l'étagère est tournée (angle autour de y, 0 = vers +z).
export const SHELF_SLOTS = [
  { x: 9.45, z: 3.1, facing: -Math.PI / 2 },
  { x: 9.45, z: 5.6, facing: -Math.PI / 2 },
  { x: 9.45, z: 8.1, facing: -Math.PI / 2 },
  { x: 9.45, z: 10.6, facing: -Math.PI / 2 },
  { x: 4.3, z: 0.45, facing: 0 },
  { x: 6.9, z: 0.45, facing: 0 },
].map((s, i) => ({ ...s, id: i, w: 2.1, d: 0.6, browse: { x: s.x + Math.sin(s.facing) * 1.25, z: s.z + Math.cos(s.facing) * 1.25 } }));

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
  return out;
}

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
  ];
}
