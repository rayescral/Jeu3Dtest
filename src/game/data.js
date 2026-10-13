// Catalogue du jeu : produits, terrains, constructions, aménagements, personnel, événements et niveaux.

// cost : prix d'achat unitaire ; market : prix public conseillé ; box : unités par carton ;
// shelf : unités par tablette ; level : niveau du club requis.
// zone : où l'article se range et se vend (shop : boutique du club-house, bar : buvette, snack : snack).
// Les marques de raquettes sont inventées.
export const PRODUCTS = {
  // --- Boutique : consommables
  balls: { name: 'Tube de balles', short: 'Balles', cost: 3.2, market: 6.9, box: 12, shelf: 10, level: 1, color: '#e8f04a' },
  water: { name: 'Eau minérale 50 cl', short: 'Eau', cost: 0.35, market: 1.5, box: 24, shelf: 12, level: 1, color: '#7cc4f0' },
  iso: { name: 'Boisson isotonique', short: 'Isotonique', cost: 0.9, market: 2.8, box: 18, shelf: 12, level: 2, color: '#ff8a3d' },
  grip: { name: 'Surgrip (x3)', short: 'Surgrips', cost: 2.1, market: 6.5, box: 20, shelf: 12, level: 2, color: '#f2f2f2' },
  energy: { name: 'Barre énergétique', short: 'Barre', cost: 0.6, market: 2.2, box: 24, shelf: 12, level: 2, color: '#b5651d' },
  wristband: { name: 'Poignets éponge (x2)', short: 'Poignets', cost: 1.8, market: 6, box: 20, shelf: 12, level: 2, color: '#e04a4a' },
  strings: { name: 'Bobine de cordage', short: 'Cordage', cost: 6, market: 16, box: 10, shelf: 10, level: 3, color: '#f2c94c' },
  padelballs: { name: 'Balles de padel', short: 'Balles padel', cost: 3.4, market: 7.5, box: 12, shelf: 10, level: 3, color: '#c8f04a' },
  // --- Boutique : raquettes de tennis
  racketJunior: { name: 'Raquette junior Strata 25', short: 'Strata Junior', brand: 'Strata', cost: 22, market: 49, box: 4, shelf: 4, level: 3, color: '#ff5fa2', racket: 'tennis' },
  racket: { name: 'Raquette Volta Pro 100', short: 'Volta Pro', brand: 'Volta', cost: 48, market: 109, box: 4, shelf: 4, level: 3, color: '#2f6fe0', racket: 'tennis' },
  racketHexa: { name: 'Raquette Hexa Power 105', short: 'Hexa Power', brand: 'Hexa', cost: 70, market: 159, box: 4, shelf: 4, level: 4, color: '#e8a21a', racket: 'tennis' },
  racketAero: { name: 'Raquette Aerion Tour 98', short: 'Aerion Tour', brand: 'Aerion', cost: 95, market: 219, box: 4, shelf: 4, level: 5, color: '#d63a3a', racket: 'tennis' },
  racketTitan: { name: 'Raquette Titan Graphite', short: 'Titan', brand: 'Titan', cost: 130, market: 299, box: 4, shelf: 4, level: 7, color: '#18191c', racket: 'tennis' },
  // --- Boutique : padel
  padelracket: { name: 'Pala Kraken Control', short: 'Kraken', brand: 'Kraken', cost: 42, market: 95, box: 4, shelf: 4, level: 5, color: '#111111', racket: 'padel' },
  padelPro: { name: 'Pala Vibra Carbon Attack', short: 'Vibra Carbon', brand: 'Vibra', cost: 110, market: 249, box: 4, shelf: 4, level: 6, color: '#7a4fd6', racket: 'padel' },
  // --- Boutique : textile et accessoires
  cap: { name: 'Casquette du club', short: 'Casquette', cost: 5.5, market: 18, box: 10, shelf: 8, level: 4, color: '#1f8a5b' },
  towel: { name: 'Serviette brodée', short: 'Serviette', cost: 4, market: 14, box: 12, shelf: 8, level: 4, color: '#3fb7a6' },
  tshirt: { name: 'T-shirt du club', short: 'T-shirt', cost: 7, market: 24, box: 12, shelf: 8, level: 5, color: '#ffffff' },
  shoes: { name: 'Chaussures Courtline', short: 'Chaussures', cost: 38, market: 89, box: 4, shelf: 4, level: 6, color: '#f4f4f0' },
  bag: { name: 'Sac thermobag', short: 'Sac', cost: 30, market: 75, box: 4, shelf: 4, level: 7, color: '#1c1f24' },
  // --- Buvette
  beer: { name: 'Bière pression', short: 'Bière', cost: 0.8, market: 3.5, box: 24, shelf: 12, level: 2, color: '#f2b632', zone: 'bar' },
  soda: { name: 'Soda en canette', short: 'Soda', cost: 0.45, market: 2.2, box: 24, shelf: 12, level: 2, color: '#d62d2d', zone: 'bar' },
  coffee: { name: 'Café', short: 'Café', cost: 0.2, market: 1.5, box: 30, shelf: 12, level: 2, color: '#6b4226', zone: 'bar' },
  juice: { name: 'Jus d\'orange', short: 'Jus', cost: 0.6, market: 2.5, box: 18, shelf: 12, level: 4, color: '#ffa31a', zone: 'bar' },
  // --- Snack
  sandwich: { name: 'Sandwich jambon-beurre', short: 'Sandwich', cost: 1.5, market: 4.5, box: 12, shelf: 8, level: 3, color: '#e9c46a', zone: 'snack' },
  panini: { name: 'Panini trois fromages', short: 'Panini', cost: 1.8, market: 5.5, box: 12, shelf: 8, level: 3, color: '#d4a373', zone: 'snack' },
  pizza: { name: 'Part de pizza', short: 'Pizza', cost: 1.3, market: 3.9, box: 12, shelf: 8, level: 4, color: '#e76f51', zone: 'snack' },
  cookie: { name: 'Cookie maison', short: 'Cookie', cost: 0.35, market: 1.8, box: 24, shelf: 12, level: 3, color: '#a0703c', zone: 'snack' },
};
for (const P of Object.values(PRODUCTS)) P.zone ??= 'shop';
export const PRODUCT_IDS = Object.keys(PRODUCTS);
export const ZONE_LABEL = { shop: 'Boutique', bar: 'Buvette', snack: 'Snack' };

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

// Bâtiments construits sur place : un chantier apparaît, puis le bâtiment monte petit à petit.
// build : durée du chantier en secondes réelles.
export const FACILITIES = {
  buvette: { name: 'Buvette', desc: 'Bière, sodas et cafés servis au comptoir, terrasse avec tables', price: 2500, level: 2, build: 60, zone: 'bar' },
  parking: { name: 'Parking payant', desc: 'Barrière et horodateur : chaque voiture paie le stationnement', price: 1200, level: 2, build: 25 },
  snack: { name: 'Snack', desc: 'Sandwichs, paninis, pizzas et cookies, surtout à l\'heure du déjeuner', price: 4500, level: 3, build: 90, zone: 'snack' },
};

// Aménagements achetables depuis l'ordinateur.
export const SHELF_PRICE = 450;          // une étagère de boutique supplémentaire
export const SHELF_START = 2;            // étagères disponibles au départ
export const UPGRADES = {
  lockers: { name: 'Vestiaires rénovés', desc: '+40 licenciés possibles et clients plus satisfaits', price: 3500, level: 3 },
  lights: { name: 'Éclairage des courts', desc: 'Le club reste ouvert jusqu\'à 23 h', price: 6000, level: 4 },
};

export const STAFF = {
  security: { name: 'Agent de sécurité', desc: 'Fait sortir les joueurs qui dépassent leur créneau', salary: 85, level: 2 },
  reception: { name: 'Hôte d\'accueil', desc: 'Encaisse les clients quand tu n\'es pas au comptoir', salary: 95, level: 3 },
  barman: { name: 'Serveur de buvette', desc: 'Sert les clients de la buvette', salary: 70, level: 3, needs: 'buvette' },
  cook: { name: 'Employé du snack', desc: 'Sert les clients du snack', salary: 75, level: 4, needs: 'snack' },
  keeper: { name: 'Agent d\'entretien', desc: 'Brosse les terrains usés', salary: 80, level: 4 },
};

// Prix de départ des prestations (modifiables sur l'ordinateur).
export const SERVICES = {
  tennis: { name: 'Location court de tennis (1 h)', market: 16 },
  padel: { name: 'Location terrain de padel (1 h)', market: 30 },
  licence: { name: 'Licence annuelle', market: 85 },
  parking: { name: 'Ticket de parking', market: 2 },
};

// Événements du jour : un par journée (sauf la première), annoncé à l'ouverture.
// Les coefficients modifient la fréquence des types de clients ; drinks / rackets : envie d'en acheter.
export const EVENTS = {
  calm: { name: 'Journée ordinaire', desc: 'Rien de spécial aujourd\'hui.', weight: 4 },
  tournament: { name: 'Tournoi interne', desc: 'Beaucoup de réservations et de spectateurs assoiffés.', weight: 1.4, book: 1.7, bar: 1.8, xp: 1.2 },
  heatwave: { name: 'Canicule', desc: 'Il fait très chaud : boissons et serviettes s\'arrachent.', weight: 1.2, drinks: 2.2, book: 0.85, bar: 1.6 },
  rain: { name: 'Averses', desc: 'Moins de parties, mais la boutique et le snack tournent.', weight: 1, book: 0.45, shop: 1.3, snack: 1.4, bar: 1.2 },
  champion: { name: 'Visite d\'une championne', desc: 'Une joueuse pro signe des autographes : foule et ventes de raquettes.', weight: 0.8, rate: 1.5, rackets: 3, xp: 1.3 },
  promo: { name: 'Promo fournisseur', desc: 'Un article est 40 % moins cher à commander aujourd\'hui.', weight: 1 },
  inspection: { name: 'Visite de la ligue', desc: 'Un inspecteur passe à 16 h : des terrains propres rapportent une prime.', weight: 0.9 },
  kids: { name: 'Mercredi des enfants', desc: 'Stage junior : raquettes junior, cookies et sodas très demandés.', weight: 0.9, juniors: 3, snack: 1.4 },
};

// Défis du jour : récompense si l'objectif est atteint avant la fin de la journée.
export const CHALLENGES = [
  { id: 'shopItems', text: n => `Vends ${n} articles en boutique`, base: 8, per: 3, reward: 120 },
  { id: 'bookings', text: n => `Encaisse ${n} réservations de terrain`, base: 3, per: 1, reward: 150 },
  { id: 'licences', text: n => `Signe ${n} nouvelles licences`, base: 1, per: 0.5, reward: 160 },
  { id: 'barItems', text: n => `Sers ${n} consommations à la buvette`, base: 8, per: 3, reward: 150, needs: 'buvette' },
  { id: 'snackItems', text: n => `Sers ${n} plats au snack`, base: 6, per: 2, reward: 170, needs: 'snack' },
  { id: 'rackets', text: n => `Vends ${n} raquette${n > 1 ? 's' : ''}`, base: 1, per: 0.4, reward: 200, level: 3 },
  { id: 'evictions', text: n => `Fais sortir ${n} groupe${n > 1 ? 's' : ''} qui dépasse${n > 1 ? 'nt' : ''} son créneau`, base: 1, per: 0.3, reward: 120 },
];

// XP nécessaire pour atteindre chaque niveau (index = niveau - 1).
export const LEVELS = [0, 120, 350, 750, 1350, 2200, 3300, 4800, 6600, 9000];
export const levelFor = xp => { let l = 1; while (l < LEVELS.length && xp >= LEVELS[l]) l++; return l; };

export const OPEN_HOUR = 8;
export const CLOSE_HOUR = 21;
export const LATE_CLOSE_HOUR = 23;
export const START_MONEY = 2500;
export const START_LICENCES = 4;
