// La masse d'air : vent, ascendances thermiques (sous les cumulus) et ascendances de pente.
// sample(x, y, z) renvoie la vitesse verticale de l'air en m/s.
import { mulberry32, smoothstep } from './util.js';
import { heightAt, gradientAt, CLOUD_BASE, WATER_LEVEL, AIRFIELD } from './heightmap.js';

export const WIND = { x: 4.5, z: 1.5 };   // vent d'ouest-sud-ouest, ~17 km/h

export function createAir(turnpoints) {
  const rand = mulberry32(2024);
  const thermals = [];
  const add = (x, z, strength) => {
    // Pas de thermique au-dessus de l'eau.
    if (heightAt(x, z) < WATER_LEVEL + 10) return;
    const period = 900 + rand() * 400;
    thermals.push({ x, z, r: 180 + rand() * 100, w: strength + 0.3, period, offset: rand() * period, cx: x, cz: z, life: 1 });
  };

  // Une bonne ascendance près du terrain pour démarrer (déjà bien formée au largage).
  add(AIRFIELD.x + 600, AIRFIELD.z - 900, 3.4);
  thermals[0].offset = 150;
  // Deux ou trois sur chaque branche du circuit, légèrement décalées.
  const route = [{ x: AIRFIELD.x, z: AIRFIELD.z }, ...turnpoints, { x: AIRFIELD.x, z: AIRFIELD.z }];
  for (let i = 0; i < route.length - 1; i++) {
    const a = route[i], b = route[i + 1];
    for (const f of [0.3, 0.62, 0.9]) {
      const off = (rand() - 0.5) * 900;
      const dx = b.x - a.x, dz = b.z - a.z, len = Math.hypot(dx, dz);
      add(a.x + dx * f - (dz / len) * off, a.z + dz * f + (dx / len) * off, 2 + rand() * 2.2);
    }
  }
  // Et quelques autres ailleurs.
  for (let i = 0; i < 14; i++) add((rand() * 2 - 1) * 8000, (rand() * 2 - 1) * 8000, 1.5 + rand() * 2.5);

  // Cycle de vie : le thermique naît sur sa source, dérive avec le vent en se renforçant, puis s'éteint.
  function advance(t) {
    for (const th of thermals) {
      const age = (t + th.offset) % th.period;
      th.life = smoothstep(0, 120, age) * (1 - smoothstep(th.period - 180, th.period, age));
      th.cx = th.x + WIND.x * age * 0.9;
      th.cz = th.z + WIND.z * age * 0.9;
    }
  }
  advance(0);

  function sample(x, y, z) {
    const ground = heightAt(x, z);
    const agl = y - ground;
    let w = -0.35;   // légère descendance générale

    for (const th of thermals) {
      if (th.life < 0.02) continue;
      const dx = x - th.cx, dz = z - th.cz;
      const d2 = dx * dx + dz * dz;
      if (d2 > (th.r * 4) ** 2) continue;
      const d = Math.sqrt(d2);
      // Le thermique faiblit près du sol et s'arrête à la base des nuages.
      const top = 1 - smoothstep(CLOUD_BASE - 400, CLOUD_BASE, y);
      const bottom = smoothstep(20, 150, agl);
      w += th.w * th.life * Math.exp(-((d / th.r) ** 2)) * top * bottom;
      // Couronne de descendance autour du thermique.
      w -= 0.9 * th.life * Math.exp(-(((d - th.r * 1.8) / (th.r * 0.6)) ** 2)) * top;
    }

    // Ascendance de pente : le vent qui frappe un versant est dévié vers le haut.
    const { gx, gz } = gradientAt(x, z, 40);
    const push = gx * WIND.x + gz * WIND.z;
    if (push > 0) w += Math.min(4, push * 1.1) * (1 - smoothstep(30, 450, agl));
    return w;
  }

  return { thermals, sample, advance };
}
