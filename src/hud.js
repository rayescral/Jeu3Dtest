// Tableau de bord : anémomètre, variomètre et altimètre dessinés comme de vrais instruments,
// carte topographique et indications de navigation.
import { clamp } from './util.js';
import { heightAt, WATER_LEVEL, PLAY_RADIUS, AIRFIELD } from './heightmap.js';
import { TURNPOINTS, TP_RADIUS } from './course.js';

const $ = id => document.getElementById(id);
const DEG = Math.PI / 180;

function setupCanvas(id) {
  const c = $(id), dpr = Math.min(devicePixelRatio || 1, 2);
  const size = c.width;
  c.width = c.height = size * dpr;
  c.style.width = c.style.height = `${size}px`;
  const g = c.getContext('2d');
  g.scale(dpr, dpr);
  return { g, size };
}

// Fond commun : boîtier noir, lunette, cadran.
function bezel(g, s) {
  const c = s / 2;
  g.clearRect(0, 0, s, s);
  const rim = g.createRadialGradient(c, c * 0.7, c * 0.2, c, c, c);
  rim.addColorStop(0, '#4b5058'); rim.addColorStop(1, '#16181c');
  g.fillStyle = rim; g.beginPath(); g.arc(c, c, c - 1, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#0b0c0e'; g.beginPath(); g.arc(c, c, c - 7, 0, Math.PI * 2); g.fill();
}

function ticks(g, c, r, from, to, steps, len, width, color = '#e9edf2') {
  g.strokeStyle = color; g.lineWidth = width;
  for (let i = 0; i <= steps; i++) {
    const a = from + (to - from) * (i / steps);
    g.beginPath();
    g.moveTo(c + Math.cos(a) * r, c + Math.sin(a) * r);
    g.lineTo(c + Math.cos(a) * (r - len), c + Math.sin(a) * (r - len));
    g.stroke();
  }
}

function needle(g, c, a, len, color = '#f6f7f8') {
  g.save();
  g.translate(c, c); g.rotate(a);
  g.shadowColor = 'rgba(0,0,0,.6)'; g.shadowBlur = 4;
  g.fillStyle = color;
  g.beginPath(); g.moveTo(-len * 0.18, -2.2); g.lineTo(len, -0.8); g.lineTo(len, 0.8); g.lineTo(-len * 0.18, 2.2); g.closePath(); g.fill();
  g.restore();
  g.fillStyle = '#2a2d33'; g.beginPath(); g.arc(c, c, 5, 0, Math.PI * 2); g.fill();
}

function label(g, text, x, y, size = 11, color = '#e9edf2', weight = 600) {
  g.fillStyle = color;
  g.font = `${weight} ${size}px "Barlow Condensed", "Arial Narrow", sans-serif`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, x, y);
}

function arc(g, c, r, a0, a1, color, w) {
  g.strokeStyle = color; g.lineWidth = w;
  g.beginPath(); g.arc(c, c, r, a0, a1); g.stroke();
}

// Anémomètre : 0 à 280 km/h sur 300°.
function drawAsi(g, s, kmh) {
  const c = s / 2, r = c - 10;
  bezel(g, s);
  const A = v => (-240 + (clamp(v, 0, 280) / 280) * 300) * DEG;
  arc(g, c, r - 3, A(68), A(180), '#3fbf5f', 5);
  arc(g, c, r - 3, A(180), A(260), '#e8c040', 5);
  ticks(g, c, r, A(260), A(260), 1, 14, 3, '#e5383b');
  ticks(g, c, r, A(0), A(280), 28, 6, 1.2);
  ticks(g, c, r, A(0), A(250), 5, 11, 2);
  for (let v = 0; v <= 250; v += 50) label(g, String(v), c + Math.cos(A(v)) * (r - 24), c + Math.sin(A(v)) * (r - 24), 12);
  label(g, 'km/h', c, c + r * 0.42, 10, '#9aa3ad', 500);
  needle(g, c, A(kmh), r - 8);
}

// Variomètre : ±5 m/s, zéro à 9 heures, montée dans le sens horaire.
function drawVario(g, s, v, avg) {
  const c = s / 2, r = c - 10;
  bezel(g, s);
  const A = x => (180 + (clamp(x, -5, 5) / 5) * 180) * DEG;
  arc(g, c, r - 3, A(0), A(5), 'rgba(63,191,95,.55)', 5);
  arc(g, c, r - 3, A(-5), A(0), 'rgba(229,56,59,.45)', 5);
  ticks(g, c, r, A(-5), A(5), 20, 7, 1.2);
  ticks(g, c, r, A(-5), A(5), 10, 12, 2);
  for (const x of [-4, -2, 0, 2, 4]) label(g, String(Math.abs(x)), c + Math.cos(A(x)) * (r - 24), c + Math.sin(A(x)) * (r - 24), 12);
  label(g, 'm/s', c + r * 0.3, c - r * 0.3, 10, '#9aa3ad', 500);
  g.fillStyle = '#1b1e23'; g.fillRect(c - 22, c + r * 0.3, 44, 18);
  label(g, (avg >= 0 ? '+' : '') + avg.toFixed(1), c, c + r * 0.3 + 9.5, 13, avg >= 0 ? '#7ee39a' : '#ff8a8a', 700);
  needle(g, c, A(v), r - 8, '#ffd24a');
}

// Altimètre : l'aiguille fait un tour pour 1000 m, l'affichage numérique donne l'altitude.
function drawAlt(g, s, alt) {
  const c = s / 2, r = c - 10;
  bezel(g, s);
  const A = x => (-90 + (x / 1000) * 360) * DEG;
  ticks(g, c, r, A(0), A(1000), 50, 6, 1.2);
  ticks(g, c, r, A(0), A(1000), 10, 12, 2);
  for (let k = 0; k < 10; k++) label(g, String(k), c + Math.cos(A(k * 100)) * (r - 22), c + Math.sin(A(k * 100)) * (r - 22), 13);
  g.fillStyle = '#1b1e23'; g.fillRect(c - 30, c + r * 0.22, 60, 20);
  label(g, `${Math.round(alt).toLocaleString('fr-FR')} m`, c, c + r * 0.22 + 10.5, 13, '#f2f4f7', 700);
  needle(g, c, A(((alt % 1000) + 1000) % 1000), r - 8);
}

export function createHud() {
  const asi = setupCanvas('asi'), vario = setupCanvas('vario'), alt = setupCanvas('alt');
  const map = setupCanvas('map');

  // Carte topographique pré-calculée (teintes hypsométriques + ombrage).
  const MAP_R = PLAY_RADIUS;
  const relief = document.createElement('canvas');
  const RS = 220;
  relief.width = relief.height = RS;
  const rg = relief.getContext('2d'), img = rg.createImageData(RS, RS);
  for (let j = 0; j < RS; j++) for (let i = 0; i < RS; i++) {
    const x = (i / RS * 2 - 1) * MAP_R, z = (j / RS * 2 - 1) * MAP_R;
    const h = heightAt(x, z), hw = heightAt(x - 60, z - 60);
    let col;
    if (h < WATER_LEVEL) col = [58, 104, 140];
    else {
      const t = clamp((h - WATER_LEVEL) / 1900, 0, 1);
      const stops = [[0, [104, 132, 78]], [0.35, [150, 152, 100]], [0.7, [150, 128, 104]], [0.85, [190, 186, 182]], [1, [245, 247, 250]]];
      let k = 0; while (k < stops.length - 2 && t > stops[k + 1][0]) k++;
      const [t0, c0] = stops[k], [t1, c1] = stops[k + 1], f = (t - t0) / (t1 - t0);
      col = c0.map((v, n) => v + (c1[n] - v) * f);
    }
    const shade = clamp(1 + (h - hw) / 90, 0.55, 1.35);
    const o = (j * RS + i) * 4;
    img.data[o] = col[0] * shade; img.data[o + 1] = col[1] * shade; img.data[o + 2] = col[2] * shade; img.data[o + 3] = 255;
  }
  rg.putImageData(img, 0, 0);

  const toMap = (x, z) => [(x / MAP_R * 0.5 + 0.5) * map.size, (z / MAP_R * 0.5 + 0.5) * map.size];

  function drawMap(glider, courseState) {
    const g = map.g, S = map.size;
    g.clearRect(0, 0, S, S);
    g.drawImage(relief, 0, 0, S, S);
    // Itinéraire.
    const route = [{ x: AIRFIELD.x, z: AIRFIELD.z }, ...TURNPOINTS, { x: AIRFIELD.x, z: AIRFIELD.z }];
    g.setLineDash([4, 3]); g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = 1.2;
    g.beginPath(); route.forEach((p, i) => { const [x, y] = toMap(p.x, p.z); i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.stroke();
    g.setLineDash([]);
    TURNPOINTS.forEach((tp, i) => {
      const [x, y] = toMap(tp.x, tp.z);
      g.strokeStyle = courseState.done[i] ? '#5fe08a' : i === courseState.next ? '#ffa640' : '#ffffff';
      g.lineWidth = 2;
      g.beginPath(); g.arc(x, y, Math.max(4, TP_RADIUS / MAP_R * S * 0.5), 0, Math.PI * 2); g.stroke();
      label(g, String(i + 1), x, y, 10, '#fff', 700);
    });
    const [ax, ay] = toMap(AIRFIELD.x, AIRFIELD.z);
    g.fillStyle = '#fff'; g.fillRect(ax - 1.5, ay - 6, 3, 12);
    // Planeur.
    const [px, py] = toMap(glider.pos.x, glider.pos.z);
    g.save(); g.translate(px, py); g.rotate(glider.heading);
    g.fillStyle = '#ffd24a'; g.strokeStyle = '#111'; g.lineWidth = 1;
    g.beginPath(); g.moveTo(0, -7); g.lineTo(5, 5); g.lineTo(0, 2.5); g.lineTo(-5, 5); g.closePath(); g.fill(); g.stroke();
    g.restore();
  }

  let lastDom = 0;
  return {
    update(glider, info) {
      drawAsi(asi.g, asi.size, glider.speed * 3.6);
      drawVario(vario.g, vario.size, glider.vario, info.varioAvg);
      drawAlt(alt.g, alt.size, glider.pos.y);
      drawMap(glider, info.course);
      // Le texte n'a pas besoin d'être rafraîchi à chaque image.
      const now = performance.now();
      if (now - lastDom < 100) return;
      lastDom = now;
      $('agl').textContent = `${Math.max(0, Math.round(info.agl)).toLocaleString('fr-FR')} m`;
      $('gs').textContent = `${Math.round(info.groundSpeed * 3.6)} km/h`;
      $('timer').textContent = info.timeText;
      $('warp').hidden = info.warp === 1;
      $('warp').textContent = `×${info.warp}`;
      $('nav-label').textContent = info.navLabel;
      $('nav-name').textContent = info.navName;
      $('nav-dist').textContent = info.navDist;
      $('nav-arrow').style.transform = `rotate(${info.navRel}rad)`;
      $('nav-glide').textContent = info.glideText;
      const w = $('warning');
      w.textContent = info.warning;
      w.hidden = !info.warning;
    },
  };
}
