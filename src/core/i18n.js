// Langue du jeu : français ou anglais. Choisie dans le menu (gardée dans le navigateur) ; par défaut, celle
// du système. Changer de langue recharge la page : tous les textes, y compris ceux dessinés dans le décor
// (enseignes, étiquettes), sont donc choisis une seule fois, au chargement.
const KEY = 'tennis-club-lang';

export const LANG = (() => {
  try { const v = localStorage.getItem(KEY); if (v === 'fr' || v === 'en') return v; } catch { /* stockage indisponible */ }
  if (typeof window === 'undefined') return 'fr';   // tests (Node)
  const nav = navigator.language || 'fr';
  return nav.toLowerCase().startsWith('fr') ? 'fr' : 'en';
})();
export const EN = LANG === 'en';

// Texte selon la langue : L('Bonjour', 'Hello').
export const L = (fr, en) => (EN ? en : fr);

export function setLang(lang) {
  try { localStorage.setItem(KEY, lang); } catch { /* rien */ }
}
