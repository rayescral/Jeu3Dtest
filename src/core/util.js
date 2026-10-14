// Petits outils partagés.
import { EN } from './i18n.js';

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));

export function dampAngle(a, b, lambda, dt) {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * (1 - Math.exp(-lambda * dt));
}

export const rand = (a = 0, b = 1) => a + Math.random() * (b - a);
export const randInt = (a, b) => Math.floor(rand(a, b + 1));
export const pick = arr => arr[Math.floor(Math.random() * arr.length)];

// Arrondi aux 10 centimes, comme les prix du club.
export const round10 = v => Math.round(v * 10) / 10;

// Montants : « 1 234,50 € » en français, « €1,234.50 » en anglais.
export const fmtMoney = v => EN ? `${v < 0 ? '-' : ''}€${Math.abs(v).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  : `${v.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
export const fmtMoney0 = v => EN ? `${v < 0 ? '-' : ''}€${Math.abs(Math.round(v)).toLocaleString('en-GB')}` : `${Math.round(v).toLocaleString('fr-FR')} €`;
export const fmtClock = minutes => {
  const h = Math.floor(minutes / 60) % 24, m = Math.floor(minutes % 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

export const dist2 = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
