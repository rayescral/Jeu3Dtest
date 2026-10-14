import { L } from '../core/i18n.js';

// Catalogue du jeu : produits, terrains, constructions, aménagements, personnel, événements et niveaux.

// cost : prix d'achat unitaire ; market : prix public conseillé ; box : unités par carton ;
// shelf : unités par tablette ; level : niveau du club requis.
// zone : où l'article se range et se vend (shop : boutique du club-house, bar : buvette, snack : snack).
// Les marques de raquettes sont inventées.
export const PRODUCTS = {
  // --- Boutique : consommables
  balls: { name: L('Tube de balles', 'Tube of balls'), short: L('Balles', 'Balls'), cost: 3.2, market: 6.9, box: 12, shelf: 10, level: 1, color: '#e8f04a' },
  water: { name: L('Eau minérale 50 cl', 'Mineral water 50 cl'), short: L('Eau', 'Water'), cost: 0.35, market: 1.5, box: 24, shelf: 12, level: 1, color: '#7cc4f0' },
  iso: { name: L('Boisson isotonique', 'Isotonic drink'), short: L('Isotonique', 'Isotonic'), cost: 0.9, market: 2.8, box: 18, shelf: 12, level: 2, color: '#ff8a3d' },
  grip: { name: L('Surgrip (x3)', 'Overgrip (x3)'), short: L('Surgrips', 'Overgrips'), cost: 2.1, market: 6.5, box: 20, shelf: 12, level: 2, color: '#f2f2f2' },
  energy: { name: L('Barre énergétique', 'Energy bar'), short: L('Barre', 'Bar'), cost: 0.6, market: 2.2, box: 24, shelf: 12, level: 2, color: '#b5651d' },
  wristband: { name: L('Poignets éponge (x2)', 'Sweatbands (x2)'), short: L('Poignets', 'Sweatbands'), cost: 1.8, market: 6, box: 20, shelf: 12, level: 2, color: '#e04a4a' },
  strings: { name: L('Bobine de cordage', 'String reel'), short: L('Cordage', 'Strings'), cost: 6, market: 16, box: 10, shelf: 10, level: 3, color: '#f2c94c' },
  dampener: { name: L('Antivibrateurs (x2)', 'Vibration dampeners (x2)'), short: L('Antivibrateurs', 'Dampeners'), cost: 1.2, market: 5, box: 24, shelf: 12, level: 2, color: '#7a4fd6' },
  padelballs: { name: L('Balles de padel', 'Padel balls'), short: L('Balles padel', 'Padel balls'), cost: 3.4, market: 7.5, box: 12, shelf: 10, level: 3, color: '#c8f04a' },
  // --- Boutique : raquettes de tennis
  racketJunior: { name: L('Raquette junior Strata 25', 'Strata 25 junior racket'), short: 'Strata Junior', brand: 'Strata', cost: 22, market: 49, box: 4, shelf: 4, level: 3, color: '#ff5fa2', racket: 'tennis' },
  racket: { name: L('Raquette Volta Pro 100', 'Volta Pro 100 racket'), short: 'Volta Pro', brand: 'Volta', cost: 48, market: 109, box: 4, shelf: 4, level: 3, color: '#2f6fe0', racket: 'tennis' },
  racketHexa: { name: L('Raquette Hexa Power 105', 'Hexa Power 105 racket'), short: 'Hexa Power', brand: 'Hexa', cost: 70, market: 159, box: 4, shelf: 4, level: 4, color: '#e8a21a', racket: 'tennis' },
  racketAero: { name: L('Raquette Aerion Tour 98', 'Aerion Tour 98 racket'), short: 'Aerion Tour', brand: 'Aerion', cost: 95, market: 219, box: 4, shelf: 4, level: 5, color: '#d63a3a', racket: 'tennis' },
  racketTitan: { name: L('Raquette Titan Graphite', 'Titan Graphite racket'), short: 'Titan', brand: 'Titan', cost: 130, market: 299, box: 4, shelf: 4, level: 7, color: '#18191c', racket: 'tennis' },
  // --- Boutique : padel
  padelracket: { name: L('Pala Kraken Control', 'Kraken Control padel racket'), short: 'Kraken', brand: 'Kraken', cost: 42, market: 95, box: 4, shelf: 4, level: 5, color: '#111111', racket: 'padel' },
  padelPro: { name: L('Pala Vibra Carbon Attack', 'Vibra Carbon Attack padel racket'), short: 'Vibra Carbon', brand: 'Vibra', cost: 110, market: 249, box: 4, shelf: 4, level: 6, color: '#7a4fd6', racket: 'padel' },
  // --- Boutique : textile et accessoires
  cap: { name: L('Casquette du club', 'Club cap'), short: L('Casquette', 'Cap'), cost: 5.5, market: 18, box: 10, shelf: 8, level: 4, color: '#1f8a5b' },
  towel: { name: L('Serviette brodée', 'Embroidered towel'), short: L('Serviette', 'Towel'), cost: 4, market: 14, box: 12, shelf: 8, level: 4, color: '#3fb7a6' },
  tshirt: { name: L('T-shirt du club', 'Club T-shirt'), short: 'T-shirt', cost: 7, market: 24, box: 12, shelf: 8, level: 5, color: '#ffffff' },
  socks: { name: L('Chaussettes de sport (lot de 3)', 'Sports socks (3-pack)'), short: L('Chaussettes', 'Socks'), cost: 3, market: 11, box: 12, shelf: 8, level: 3, color: '#f4f4f0' },
  shoes: { name: L('Chaussures Courtline', 'Courtline shoes'), short: L('Chaussures', 'Shoes'), cost: 38, market: 89, box: 4, shelf: 4, level: 6, color: '#f4f4f0' },
  bag: { name: L('Sac thermobag', 'Thermobag'), short: L('Sac', 'Bag'), cost: 30, market: 75, box: 4, shelf: 4, level: 7, color: '#1c1f24' },
  // --- Buvette
  beer: { name: L('Bière pression', 'Draught beer'), short: L('Bière', 'Beer'), cost: 0.8, market: 3.5, box: 24, shelf: 12, level: 2, color: '#f2b632', zone: 'bar' },
  soda: { name: L('Soda en canette', 'Canned soda'), short: 'Soda', cost: 0.45, market: 2.2, box: 24, shelf: 12, level: 2, color: '#d62d2d', zone: 'bar' },
  coffee: { name: L('Café', 'Coffee'), short: L('Café', 'Coffee'), cost: 0.2, market: 1.5, box: 30, shelf: 12, level: 2, color: '#6b4226', zone: 'bar' },
  protein: { name: L('Shake protéiné', 'Protein shake'), short: L('Shake', 'Shake'), cost: 1.1, market: 3.9, box: 12, shelf: 10, level: 3, color: '#5b8def', zone: 'bar' },
  juice: { name: L('Jus d\'orange', 'Orange juice'), short: L('Jus', 'Juice'), cost: 0.6, market: 2.5, box: 18, shelf: 12, level: 4, color: '#ffa31a', zone: 'bar' },
  // --- Snack
  sandwich: { name: L('Sandwich jambon-beurre', 'Ham and butter sandwich'), short: 'Sandwich', cost: 1.5, market: 4.5, box: 12, shelf: 8, level: 3, color: '#e9c46a', zone: 'snack' },
  panini: { name: L('Panini trois fromages', 'Three-cheese panini'), short: 'Panini', cost: 1.8, market: 5.5, box: 12, shelf: 8, level: 3, color: '#d4a373', zone: 'snack' },
  pizza: { name: L('Part de pizza', 'Slice of pizza'), short: 'Pizza', cost: 1.3, market: 3.9, box: 12, shelf: 8, level: 4, color: '#e76f51', zone: 'snack' },
  crepe: { name: L('Crêpe au sucre', 'Sugar crêpe'), short: L('Crêpe', 'Crêpe'), cost: 0.4, market: 2.8, box: 20, shelf: 10, level: 3, color: '#f3d79b', zone: 'snack' },
  cookie: { name: L('Cookie maison', 'Homemade cookie'), short: 'Cookie', cost: 0.35, market: 1.8, box: 24, shelf: 12, level: 3, color: '#a0703c', zone: 'snack' },
};
for (const P of Object.values(PRODUCTS)) P.zone ??= 'shop';
export const PRODUCT_IDS = Object.keys(PRODUCTS);
export const ZONE_LABEL = { shop: L('Boutique', 'Shop'), bar: L('Buvette', 'Bar'), snack: L('Snack', 'Snack bar') };

// Emplacements de terrains. Le premier est déjà construit.
export const COURT_TYPES = {
  clay: { name: L('Terre battue', 'Clay'), sport: 'tennis', wear: 0.24 },
  hard: { name: L('Résine', 'Hard court'), sport: 'tennis', wear: 0.12 },
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
  buvette: { name: L('Buvette', 'Bar'), desc: L('Bière, sodas et cafés servis au comptoir, terrasse avec tables', 'Beer, sodas and coffee served at the counter, terrace with tables'), price: 2500, level: 2, build: 60, zone: 'bar' },
  parking: { name: L('Parking payant', 'Paid parking'), desc: L('Barrière et horodateur : chaque voiture paie le stationnement', 'Barrier and ticket machine: every car pays for parking'), price: 1200, level: 2, build: 25 },
  snack: { name: L('Snack', 'Snack bar'), desc: L('Sandwichs, paninis, pizzas et cookies, surtout à l\'heure du déjeuner', 'Sandwiches, paninis, pizzas and cookies, especially at lunchtime'), price: 4500, level: 3, build: 90, zone: 'snack' },
};

// Aménagements achetables depuis l'ordinateur.
export const SHELF_PRICE = 450;          // une étagère de boutique supplémentaire (gondole)
// Meubles de boutique, tous de la même emprise (2,1 m × 0,6 m). levels : nombre d'emplacements ;
// cap : multiplicateur de la contenance de chaque emplacement ; only : articles acceptés (null = tous).
const SMALL = ['balls', 'padelballs', 'grip', 'wristband', 'energy', 'strings', 'dampener'];
export const SHELF_TYPES = {
  gondola: { name: L('Gondole', 'Gondola'), desc: L('3 tablettes, tous les articles', '3 shelves, any item'), price: 450, levels: 3, cap: 1, level: 1, only: null },
  bin: { name: L('Bacs à vrac', 'Dump bins'), desc: L('2 grands bacs pour balles, grips, poignets, barres et cordages : contenance ×2,5', '2 large bins for balls, grips, sweatbands, bars and strings: 2.5× capacity'), price: 380, levels: 2, cap: 2.5, level: 2, only: SMALL },
  racketWall: { name: L('Mur à raquettes', 'Racket wall'), desc: L('Raquettes suspendues, manche en bas, sur 2 rangées : contenance ×2', 'Rackets hung handle down on 2 rows: 2× capacity'), price: 700, levels: 2, cap: 2, level: 3, only: 'racket' },
  table: { name: L('Table de présentation', 'Display table'), desc: L('Textile, chaussures et sacs, sur une table et un plateau : contenance ×1,5', 'Apparel, shoes and bags on a table and a top tier: 1.5× capacity'), price: 520, levels: 2, cap: 1.5, level: 4, only: ['cap', 'towel', 'tshirt', 'bag', 'shoes', 'socks'] },
};
export const shelfAccepts = (type, id) => {
  const T = SHELF_TYPES[type] ?? SHELF_TYPES.gondola;
  if (!T.only) return true;
  return T.only === 'racket' ? !!PRODUCTS[id]?.racket : T.only.includes(id);
};
export const shelfCap = (type, id) => Math.max(1, Math.round(PRODUCTS[id].shelf * (SHELF_TYPES[type] ?? SHELF_TYPES.gondola).cap));
export const SHELF_START = 2;            // étagères disponibles au départ
export const UPGRADES = {
  lockers: { name: L('Vestiaires rénovés', 'Renovated locker rooms'), desc: L('+40 licenciés possibles et clients plus satisfaits', '+40 possible members and happier customers'), price: 3500, level: 3 },
  lights: { name: L('Éclairage des courts', 'Court floodlights'), desc: L('Le club reste ouvert jusqu\'à 23 h', 'The club stays open until 11 pm'), price: 6000, level: 4 },
};

export const STAFF = {
  security: { name: L('Agent de sécurité', 'Security guard'), desc: L('Fait sortir les joueurs qui dépassent leur créneau', 'Sends off players who overrun their slot'), salary: 85, level: 2 },
  reception: { name: L('Hôte d\'accueil', 'Receptionist'), desc: L('Encaisse les clients quand tu n\'es pas au comptoir', 'Serves customers when you\'re not at the counter'), salary: 95, level: 3 },
  barman: { name: L('Serveur de buvette', 'Bartender'), desc: L('Sert les clients de la buvette', 'Serves bar customers'), salary: 70, level: 3, needs: 'buvette' },
  cook: { name: L('Employé du snack', 'Snack bar cook'), desc: L('Sert les clients du snack', 'Serves snack bar customers'), salary: 75, level: 4, needs: 'snack' },
  keeper: { name: L('Agent d\'entretien', 'Groundskeeper'), desc: L('Brosse les terrains usés', 'Brushes worn courts'), salary: 80, level: 4 },
};

// Prix de départ des prestations (modifiables sur l'ordinateur).
export const SERVICES = {
  tennis: { name: L('Location court de tennis (1 h)', 'Tennis court rental (1 h)'), market: 16 },
  padel: { name: L('Location terrain de padel (1 h)', 'Padel court rental (1 h)'), market: 30 },
  licence: { name: L('Licence annuelle', 'Annual membership'), market: 85 },
  parking: { name: L('Ticket de parking', 'Parking ticket'), market: 2 },
};

// Événements du jour : un par journée (sauf la première), annoncé à l'ouverture.
// Les coefficients modifient la fréquence des types de clients ; drinks / rackets : envie d'en acheter.
export const EVENTS = {
  calm: { name: L('Journée ordinaire', 'Ordinary day'), desc: L('Rien de spécial aujourd\'hui.', 'Nothing special today.'), weight: 4 },
  tournament: { name: L('Tournoi interne', 'Club tournament'), desc: L('Beaucoup de réservations et de spectateurs assoiffés.', 'Lots of bookings and thirsty spectators.'), weight: 1.4, book: 1.7, bar: 1.8, xp: 1.2 },
  heatwave: { name: L('Canicule', 'Heatwave'), desc: L('Il fait très chaud : boissons et serviettes s\'arrachent.', 'It is scorching: drinks and towels are selling fast.'), weight: 1.2, drinks: 2.2, book: 0.85, bar: 1.6 },
  rain: { name: L('Averses', 'Showers'), desc: L('Moins de parties, mais la boutique et le snack tournent.', 'Fewer matches, but the shop and snack bar are busy.'), weight: 1, book: 0.45, shop: 1.3, snack: 1.4, bar: 1.2 },
  champion: { name: L('Visite d\'une championne', 'Champion visit'), desc: L('Une joueuse pro signe des autographes : foule et ventes de raquettes.', 'A pro player signs autographs: crowds and racket sales.'), weight: 0.8, rate: 1.5, rackets: 3, xp: 1.3 },
  promo: { name: L('Promo fournisseur', 'Supplier deal'), desc: L('Un article est 40 % moins cher à commander aujourd\'hui.', 'One item is 40% cheaper to order today.'), weight: 1 },
  inspection: { name: L('Visite de la ligue', 'League inspection'), desc: L('Un inspecteur passe à 16 h : des terrains propres rapportent une prime.', 'An inspector comes at 4 pm: clean courts earn a bonus.'), weight: 0.9 },
  // Événement organisé par le joueur uniquement (poids nul : jamais tiré au hasard).
  openday: { name: L('Journée portes ouvertes', 'Open day'), desc: L('Le club accueille le public : beaucoup de curieux et de nouvelles licences.', 'The club welcomes the public: lots of visitors and new members.'), weight: 0, rate: 1.35, licence: 2.6, xp: 1.1 },
  kids: { name: L('Mercredi des enfants', 'Kids\' Wednesday'), desc: L('Stage junior : raquettes junior, cookies et sodas très demandés.', 'Junior camp: junior rackets, cookies and sodas in high demand.'), weight: 0.9, juniors: 3, snack: 1.4 },
};

// Communication (onglet de l'ordinateur) : campagnes de publicité, une fois par jour chacune, qui font
// connaître le club (notoriété) ; événements à organiser pour le lendemain.
export const CAMPAIGNS = {
  flyers: { name: L('Affiches et flyers', 'Posters and flyers'), desc: L('Dans les commerces du quartier', 'In local shops'), price: 120, fame: 2, level: 1 },
  social: { name: L('Publicité sur les réseaux sociaux', 'Social media ads'), desc: L('Vidéos du club et offres de bienvenue', 'Club videos and welcome offers'), price: 260, fame: 3.5, level: 2 },
  paper: { name: L('Article dans le journal local', 'Local newspaper feature'), desc: L('Une pleine page sur le club', 'A full-page story about the club'), price: 480, fame: 5.5, level: 3 },
  radio: { name: L('Spot à la radio', 'Radio ad'), desc: L('Toute la région entend parler du club', 'The whole area hears about the club'), price: 950, fame: 9, level: 5 },
};
export const ORGANIZE = {
  tournament: { name: L('Organiser le tournoi du club', 'Host the club tournament'), desc: L('Demain : réservations et spectateurs en masse', 'Tomorrow: lots of bookings and spectators'), price: 400, level: 2, fame: 4 },
  openday: { name: L('Journée portes ouvertes', 'Open day'), desc: L('Demain : visiteurs curieux et nouvelles licences', 'Tomorrow: curious visitors and new members'), price: 250, level: 2, fame: 3 },
  kids: { name: L('Stage enfants', 'Kids camp'), desc: L('Demain : raquettes junior, cookies et sodas', 'Tomorrow: junior rackets, cookies and sodas'), price: 300, level: 3, fame: 3 },
};

// Défis du jour : récompense si l'objectif est atteint avant la fin de la journée.
export const CHALLENGES = [
  { id: 'shopItems', text: n => L(`Vends ${n} articles en boutique`, `Sell ${n} items in the shop`), base: 8, per: 3, reward: 120 },
  { id: 'bookings', text: n => L(`Encaisse ${n} réservations de terrain`, `Take ${n} court bookings`), base: 3, per: 1, reward: 150 },
  { id: 'licences', text: n => L(`Signe ${n} nouvelles licences`, `Sign up ${n} new members`), base: 1, per: 0.5, reward: 160 },
  { id: 'barItems', text: n => L(`Sers ${n} consommations à la buvette`, `Serve ${n} drinks at the bar`), base: 8, per: 3, reward: 150, needs: 'buvette' },
  { id: 'snackItems', text: n => L(`Sers ${n} plats au snack`, `Serve ${n} dishes at the snack bar`), base: 6, per: 2, reward: 170, needs: 'snack' },
  { id: 'rackets', text: n => L(`Vends ${n} raquette${n > 1 ? 's' : ''}`, `Sell ${n} racket${n > 1 ? 's' : ''}`), base: 1, per: 0.4, reward: 200, level: 3 },
  { id: 'evictions', text: n => L(`Fais sortir ${n} groupe${n > 1 ? 's' : ''} qui dépasse${n > 1 ? 'nt' : ''} son créneau`, `Send off ${n} group${n > 1 ? 's' : ''} overrunning their slot`), base: 1, per: 0.3, reward: 120 },
];

// XP nécessaire pour atteindre chaque niveau (index = niveau - 1).
// (seuils relevés : la progression doit prendre plusieurs journées par niveau)
export const LEVELS = [0, 300, 900, 1900, 3300, 5200, 7600, 10500, 14000, 18000];
export const levelFor = xp => { let l = 1; while (l < LEVELS.length && xp >= LEVELS[l]) l++; return l; };

export const OPEN_HOUR = 8;
export const CLOSE_HOUR = 21;
export const LATE_CLOSE_HOUR = 23;
export const START_MONEY = 2500;
export const START_LICENCES = 4;
export const START_FAME = 3;           // notoriété de départ (sur 100)
