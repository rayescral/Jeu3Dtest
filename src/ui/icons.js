// Petites icônes SVG des produits et de l'interface.
import { PRODUCTS } from '../game/data.js';

const tennisRacket = c => `<svg viewBox="0 0 48 48"><ellipse cx="24" cy="16" rx="10" ry="13" fill="none" stroke="${c}" stroke-width="3"/><path d="M17 20h14M17 14h14M21 5v22M27 5v22" stroke="#c9cfcc" stroke-width="1"/><path d="M24 29v15" stroke="#222" stroke-width="5" stroke-linecap="round"/></svg>`;
const padelRacket = c => `<svg viewBox="0 0 48 48"><ellipse cx="24" cy="17" rx="11" ry="13" fill="#15171a" stroke="${c}" stroke-width="2.5"/><g fill="${c}"><circle cx="20" cy="13" r="1.6"/><circle cx="28" cy="13" r="1.6"/><circle cx="24" cy="18" r="1.6"/><circle cx="20" cy="22" r="1.6"/><circle cx="28" cy="22" r="1.6"/></g><path d="M24 30v14" stroke="#222" stroke-width="5" stroke-linecap="round"/></svg>`;

export const PRODUCT_ICONS = {
  energy: '<svg viewBox="0 0 48 48"><rect x="6" y="18" width="36" height="12" rx="3" fill="#b5651d"/><rect x="16" y="18" width="16" height="12" fill="#ffe9a8"/><path d="M22 20l-2 5h4l-2 4" stroke="#b5651d" stroke-width="2" fill="none"/></svg>',
  wristband: '<svg viewBox="0 0 48 48"><ellipse cx="17" cy="26" rx="10" ry="7" fill="none" stroke="#e04a4a" stroke-width="6"/><ellipse cx="31" cy="22" rx="10" ry="7" fill="none" stroke="#f07a6a" stroke-width="6"/></svg>',
  strings: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#f2c94c"/><circle cx="24" cy="24" r="10" fill="none" stroke="#d9a520" stroke-width="2"/><circle cx="24" cy="24" r="5" fill="#1b2420"/></svg>',
  towel: '<svg viewBox="0 0 48 48"><rect x="8" y="14" width="32" height="20" rx="3" fill="#3fb7a6"/><rect x="8" y="28" width="32" height="3" fill="#ffffff"/><circle cx="24" cy="21" r="3" fill="#1f6b4a"/></svg>',
  tshirt: '<svg viewBox="0 0 48 48"><path d="M16 8l-10 6 4 8 5-2v20h18V20l5 2 4-8-10-6c-1 3-4 5-8 5s-7-2-8-5z" fill="#fff" stroke="#c9cfcc" stroke-width="1.5"/><circle cx="24" cy="22" r="3.5" fill="#1f6b4a"/></svg>',
  shoes: '<svg viewBox="0 0 48 48"><path d="M5 30c0-6 3-12 8-12l5 4c4 3 10 4 16 4 5 0 9 2 9 6v4H5z" fill="#f4f4f0" stroke="#c9cfcc" stroke-width="1.5"/><path d="M5 33h38" stroke="#f26b3a" stroke-width="3"/></svg>',
  bag: '<svg viewBox="0 0 48 48"><rect x="4" y="16" width="40" height="18" rx="9" fill="#1c1f24"/><rect x="21" y="16" width="6" height="18" fill="#e4f05a"/><path d="M16 16c0-5 16-5 16 0" stroke="#1c1f24" stroke-width="3" fill="none"/></svg>',
  beer: '<svg viewBox="0 0 48 48"><path d="M13 12h18v28a3 3 0 0 1-3 3H16a3 3 0 0 1-3-3z" fill="#f2b632"/><path d="M13 10c0-3 18-3 18 0v6H13z" fill="#fff"/><path d="M31 18h4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4" fill="none" stroke="#d9d0b0" stroke-width="3"/></svg>',
  soda: '<svg viewBox="0 0 48 48"><rect x="15" y="8" width="18" height="34" rx="3" fill="#d62d2d"/><rect x="16" y="6" width="16" height="4" rx="2" fill="#b8bcc2"/><path d="M15 24c6-4 12 4 18 0" stroke="#fff" stroke-width="3" fill="none"/></svg>',
  coffee: '<svg viewBox="0 0 48 48"><path d="M12 16h22l-3 24H15z" fill="#f4efe6" stroke="#c9b9a0"/><rect x="11" y="12" width="24" height="5" rx="2" fill="#1b2420"/><rect x="14" y="24" width="18" height="7" fill="#6b4226"/></svg>',
  juice: '<svg viewBox="0 0 48 48"><path d="M16 12h16v30H16z" fill="#ffa31a"/><path d="M16 12l3-5h10l3 5z" fill="#ffffff"/><circle cx="24" cy="26" r="5" fill="#fff3d6"/></svg>',
  sandwich: '<svg viewBox="0 0 48 48"><path d="M6 36L24 10l18 26z" fill="#e9c46a" stroke="#c9a24a" stroke-width="2"/><path d="M10 31h28" stroke="#e76f51" stroke-width="3"/><path d="M13 27h22" stroke="#7cb342" stroke-width="2.5"/></svg>',
  panini: '<svg viewBox="0 0 48 48"><rect x="6" y="16" width="36" height="16" rx="6" fill="#d4a373"/><path d="M14 18v12M20 18v12M26 18v12M32 18v12" stroke="#6b3e1e" stroke-width="2"/></svg>',
  pizza: '<svg viewBox="0 0 48 48"><path d="M24 44L8 10c10-5 22-5 32 0z" fill="#f4c26b"/><path d="M24 40L11 13c8-3 18-3 26 0z" fill="#e76f51"/><circle cx="22" cy="20" r="3" fill="#9b2226"/><circle cx="28" cy="27" r="2.5" fill="#9b2226"/></svg>',
  cookie: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#c08a4a"/><circle cx="18" cy="20" r="2.5" fill="#3b2414"/><circle cx="28" cy="18" r="2" fill="#3b2414"/><circle cx="26" cy="29" r="2.5" fill="#3b2414"/><circle cx="17" cy="29" r="1.8" fill="#3b2414"/></svg>',
  balls: '<svg viewBox="0 0 48 48"><rect x="15" y="6" width="18" height="36" rx="4" fill="#1d3f8f"/><rect x="14" y="4" width="20" height="5" rx="2" fill="#f5f5f2"/><circle cx="24" cy="16" r="6" fill="#e8f04a"/><circle cx="24" cy="29" r="6" fill="#e8f04a"/></svg>',
  padelballs: '<svg viewBox="0 0 48 48"><rect x="15" y="6" width="18" height="36" rx="4" fill="#0f7a54"/><rect x="14" y="4" width="20" height="5" rx="2" fill="#f5f5f2"/><circle cx="24" cy="16" r="6" fill="#c8f04a"/><circle cx="24" cy="29" r="6" fill="#c8f04a"/></svg>',
  water: '<svg viewBox="0 0 48 48"><path d="M20 6h8v5l4 5v24a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3V16l4-5z" fill="#cfe9f7" stroke="#7cb5d6" stroke-width="1.5"/><rect x="20" y="3" width="8" height="5" rx="1" fill="#2a7cc0"/><rect x="16" y="24" width="16" height="8" fill="#2a7cc0"/></svg>',
  iso: '<svg viewBox="0 0 48 48"><rect x="15" y="8" width="18" height="34" rx="3" fill="#ff8a3d"/><rect x="16" y="6" width="16" height="4" rx="2" fill="#b8bcc2"/><rect x="15" y="20" width="18" height="6" fill="#fff"/></svg>',
  grip: '<svg viewBox="0 0 48 48"><rect x="14" y="5" width="20" height="38" rx="2" fill="#fff" stroke="#c9cfcc"/><rect x="14" y="11" width="20" height="7" fill="#e04a4a"/><path d="M18 24l12 4M18 30l12 4M18 36l12 4" stroke="#1b2420" stroke-width="2"/></svg>',
  racket: '<svg viewBox="0 0 48 48"><ellipse cx="24" cy="16" rx="10" ry="13" fill="none" stroke="#2f6fe0" stroke-width="3"/><path d="M17 20h14M17 14h14M21 5v22M27 5v22" stroke="#c9cfcc" stroke-width="1"/><path d="M24 29v15" stroke="#222" stroke-width="5" stroke-linecap="round"/></svg>',
  padelracket: '<svg viewBox="0 0 48 48"><ellipse cx="24" cy="17" rx="11" ry="13" fill="#15171a"/><g fill="#c8f04a"><circle cx="20" cy="13" r="1.6"/><circle cx="28" cy="13" r="1.6"/><circle cx="24" cy="18" r="1.6"/><circle cx="20" cy="22" r="1.6"/><circle cx="28" cy="22" r="1.6"/></g><path d="M24 30v14" stroke="#222" stroke-width="5" stroke-linecap="round"/></svg>',
  cap: '<svg viewBox="0 0 48 48"><path d="M9 30a15 15 0 0 1 30 0z" fill="#1f8a5b"/><path d="M28 30h14a3 3 0 0 1-3 4H28z" fill="#167048"/><circle cx="24" cy="15" r="2" fill="#167048"/></svg>',
};

export const ICON = {
  cart: '<svg viewBox="0 0 24 24"><path d="M3 4h2l2.4 11h11l2-8H6.3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="19.5" r="1.5" fill="currentColor"/><circle cx="17" cy="19.5" r="1.5" fill="currentColor"/></svg>',
  tag: '<svg viewBox="0 0 24 24"><path d="M3 12V4h8l10 10-8 8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="7.5" cy="8.5" r="1.5" fill="currentColor"/></svg>',
  court: '<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="1" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5 12h14M8 7h8M8 17h8M12 7v10" stroke="currentColor" stroke-width="1.5"/></svg>',
  club: '<svg viewBox="0 0 24 24"><path d="M3 10l9-6 9 6v10H3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 20v-6h6v6" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  stats: '<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  people: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="9" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M16 14.5a5 5 0 0 1 6 5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" fill="currentColor"/></svg>',
  build: '<svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V10l7-5 7 5v11" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 21v-5h6v5" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
};

for (const [id, P] of Object.entries(PRODUCTS)) if (P.racket && id !== 'racket' && id !== 'padelracket') PRODUCT_ICONS[id] = P.racket === 'padel' ? padelRacket(P.color) : tennisRacket(P.color);
