// Le relief de la vallée : fonction d'altitude (en mètres) partagée par le rendu, le vol et la carte.
// Aucun appel à Three.js ici, pour pouvoir l'utiliser partout.
import { createNoise } from './noise.js';
import { lerp, smoothstep } from './util.js';

const N = createNoise(42);

export const TERRAIN_SIZE = 24000;    // côté du terrain affiché (m)
export const PLAY_RADIUS = 9000;      // au-delà, on demande au pilote de faire demi-tour
export const WATER_LEVEL = 395;       // surface du lac
export const CLOUD_BASE = 3000;       // base des cumulus

// La vallée serpente du sud au nord ; le fond suit cette courbe.
export const valleyX = z => 900 * Math.sin(z / 2600) + 280 * Math.sin(z / 1100 + 1);

const LAKE = { x: valleyX(-2600), z: -2600, rx: 700, rz: 1250 };

function rawHeight(x, z) {
  const dv = Math.abs(x - valleyX(z));
  const valley = smoothstep(300, 2000, dv);                 // 0 au fond de la vallée
  const massif = N.fbm(x / 9000 + 3.1, z / 9000 - 1.7, 3) * 0.5 + 0.5;
  const ridges = N.ridged(x / 5200 + 10, z / 5200 - 4, 6);   // arêtes alpines
  const hills = N.fbm(x / 900, z / 900, 4);
  return 430 + z * -0.008
    + Math.pow(ridges, 1.25) * 2050 * (0.4 + massif) * valley
    + valley * 220
    + hills * (25 + 70 * valley);
}

// Terrain d'aviation : une bande d'herbe orientée nord-sud au fond de la vallée.
const afZ = 3900;
export const AIRFIELD = { x: valleyX(afZ), z: afZ, halfWidth: 30, halfLength: 450 };
AIRFIELD.h = rawHeight(AIRFIELD.x, AIRFIELD.z);

export function heightAt(x, z) {
  let h = rawHeight(x, z);
  // Le lac : une cuvette sous le niveau de l'eau.
  const lk = ((x - LAKE.x) / LAKE.rx) ** 2 + ((z - LAKE.z) / LAKE.rz) ** 2;
  if (lk < 1.8) h = lerp(WATER_LEVEL - 30, h, smoothstep(0.6, 1.8, lk));
  // Le terrain d'aviation est parfaitement plat.
  const ax = Math.abs(x - AIRFIELD.x) / (AIRFIELD.halfWidth + 120);
  const az = Math.abs(z - AIRFIELD.z) / (AIRFIELD.halfLength + 200);
  const d = Math.max(ax, az);
  if (d < 2.2) h = lerp(AIRFIELD.h, h, smoothstep(1, 2.2, d));
  return h;
}

// Pente locale (0 = plat, 1 = vertical) et gradient, par différences finies.
export function gradientAt(x, z, e = 15) {
  const gx = (heightAt(x + e, z) - heightAt(x - e, z)) / (2 * e);
  const gz = (heightAt(x, z + e) - heightAt(x, z - e)) / (2 * e);
  return { gx, gz, slope: 1 - 1 / Math.sqrt(1 + gx * gx + gz * gz) };
}

// Densité de forêt entre 0 et 1 (zones boisées en taches, jamais trop haut ni dans l'eau).
export function forestAt(x, z, h = heightAt(x, z)) {
  const n = N.fbm(x / 1400 + 50, z / 1400 + 20, 4) * 0.5 + 0.5;
  const alt = smoothstep(WATER_LEVEL + 5, WATER_LEVEL + 40, h) * (1 - smoothstep(1650, 1950, h));
  return smoothstep(0.42, 0.6, n) * alt;
}

export const inLake = (x, z) => ((x - LAKE.x) / LAKE.rx) ** 2 + ((z - LAKE.z) / LAKE.rz) ** 2 < 1.1 && heightAt(x, z) < WATER_LEVEL;
export { LAKE };
