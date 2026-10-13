// Catalogue du jeu : produits de la boutique, terrains, aménagements, personnel et niveaux.

// cost : prix d'achat unitaire ; market : prix public conseillé ; box : unités par carton ;
// shelf : unités par étagère ; level : niveau du club requis.
export const PRODUCTS = {
  balls: { name: 'Tube de balles', short: 'Balles', cost: 3.2, market: 6.9, box: 12, shelf: 10, level: 1, color: '#e8f04a' },
  water: { name: 'Eau minérale 50 cl', short: 'Eau', cost: 0.35, market: 1.5, box: 24, shelf: 12, level: 1, color: '#7cc4f0' },
  iso: { name: 'Boisson isotonique', short: 'Isotonique', cost: 0.9, market: 2.8, box: 18, shelf: 12, level: 2, color: '#ff8a3d' },
  grip: { name: 'Surgrip (x3)', short: 'Surgrips', cost: 2.1, market: 6.5, box: 20, shelf: 12, level: 2, color: '#f2f2f2' },
  racket: { name: 'Raquette de tennis', short: 'Raquette', cost: 48, market: 109, box: 4, shelf: 4, level: 3, color: '#2f6fe0' },
  padelballs: { name: 'Balles de padel', short: 'Balles padel', cost: 3.4, market: 7.5, box: 12, shelf: 10, level: 3, color: '#c8f04a' },
  padelracket: { name: 'Raquette de padel', short: 'Pala padel', cost: 42, market: 95, box: 4, shelf: 4, level: 5, color: '#111111' },
  cap: { name: 'Casquette du club', short: 'Casquette', cost: 5.5, market: 18, box: 10, shelf: 8, level: 4, color: '#1f8a5b' },
};
export const PRODUCT_IDS = Object.keys(PRODUCTS);

// Emplacements de terrains. Le premier est déjà construit.
export const COURT_TYPES = {
  clay: { name: 'Terre battue', sport: 'tennis', wear: 0.24 },
  hard: { name: 'Résine', sport: 'tennis', wear: 0.12 },
  padel: { name: 'Padel', sport: 'padel', wear: 0.1 },
};
export const COURTS = [
  { id: 'T1', label: 'Court 1', surface: 'clay', price: 0, level: 1 },
  { id: 'T2', label: 'Court 2', surface: 'hard', price: 3200, level: 2 },
  { id: 'P1', label: 'Padel 1', surface: 'padel', price: 5200, level: 3 },
  { id: 'T3', label: 'Court 3', surface: 'clay', price: 6500, level: 4 },
  { id: 'P2', label: 'Padel 2', surface: 'padel', price: 7500, level: 5 },
  { id: 'T4', label: 'Court 4', surface: 'hard', price: 9000, level: 6 },
  { id: 'P3', label: 'Padel 3', surface: 'padel', price: 10500, level: 7 },
];

// Aménagements achetables depuis l'ordinateur.
export const SHELF_PRICE = 450;          // une étagère de boutique supplémentaire
export const SHELF_START = 2;            // étagères disponibles au départ
export const UPGRADES = {
  lockers: { name: 'Vestiaires rénovés', desc: '+40 licenciés possibles et clients plus satisfaits', price: 3500, level: 3 },
  bar: { name: 'Coin buvette', desc: 'Les joueurs achètent plus souvent une boisson', price: 2500, level: 2 },
  lights: { name: 'Éclairage des courts', desc: 'Le club reste ouvert jusqu\'à 23 h', price: 6000, level: 4 },
};

export const STAFF = {
  reception: { name: 'Hôte d\'accueil', desc: 'Encaisse les clients quand tu n\'es pas au comptoir', salary: 95, level: 3 },
  keeper: { name: 'Agent d\'entretien', desc: 'Brosse les terrains usés', salary: 80, level: 4 },
};

// Prix de départ des prestations (modifiables sur l'ordinateur).
export const SERVICES = {
  tennis: { name: 'Location court de tennis (1 h)', market: 16 },
  padel: { name: 'Location terrain de padel (1 h)', market: 30 },
  licence: { name: 'Licence annuelle', market: 85 },
};

// XP nécessaire pour atteindre chaque niveau (index = niveau - 1).
export const LEVELS = [0, 120, 350, 750, 1350, 2200, 3300, 4800, 6600, 9000];
export const levelFor = xp => { let l = 1; while (l < LEVELS.length && xp >= LEVELS[l]) l++; return l; };

export const OPEN_HOUR = 8;
export const CLOSE_HOUR = 21;
export const LATE_CLOSE_HOUR = 23;
export const START_MONEY = 2500;
export const START_LICENCES = 12;
