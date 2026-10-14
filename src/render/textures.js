// Textures dessinées sur canvas : surfaces de jeu avec leurs vraies lignes, sols, cartons, étiquettes.
import * as THREE from 'three';
import { PRODUCTS } from '../game/data.js';
import { L } from '../core/i18n.js';

const cache = new Map();

export function canvasTexture(w, h, draw, { repeat = null, srgb = true, mips = true } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d', { willReadFrequently: true });
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
  t.generateMipmaps = mips;
  return t;
}

// Bruit de valeur rapide, pour salir et varier les surfaces.
function noiseLayer(g, w, h, { scale = 64, alpha = 0.08, color = '0,0,0', seed = 1 } = {}) {
  const cols = Math.ceil(w / scale) + 2, rows = Math.ceil(h / scale) + 2;
  let s = seed * 9301;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const grid = Array.from({ length: rows }, () => Array.from({ length: cols }, rnd));
  const img = g.getImageData(0, 0, w, h), d = img.data;
  const [cr, cg, cb] = color.split(',').map(Number);
  for (let y = 0; y < h; y++) {
    const gy = y / scale, iy = Math.floor(gy), fy = gy - iy, sy = fy * fy * (3 - 2 * fy);
    for (let x = 0; x < w; x++) {
      const gx = x / scale, ix = Math.floor(gx), fx = gx - ix, sx = fx * fx * (3 - 2 * fx);
      const a = grid[iy][ix], b = grid[iy][ix + 1], c = grid[iy + 1][ix], e = grid[iy + 1][ix + 1];
      const v = (a + (b - a) * sx) + ((c + (e - c) * sx) - (a + (b - a) * sx)) * sy;
      const k = (v - 0.5) * 2 * alpha;
      const i = (y * w + x) * 4;
      if (k > 0) { d[i] += (255 - d[i]) * k; d[i + 1] += (255 - d[i + 1]) * k; d[i + 2] += (255 - d[i + 2]) * k; }
      else { d[i] += (d[i] - cr) * k; d[i + 1] += (d[i + 1] - cg) * k; d[i + 2] += (d[i + 2] - cb) * k; }
    }
  }
  g.putImageData(img, 0, 0);
}

function speckle(g, w, h, n, colors, size = [1, 2]) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[i % colors.length];
    const r = size[0] + Math.random() * (size[1] - size[0]);
    g.fillRect(Math.random() * w, Math.random() * h, r, r);
  }
}

function memo(key, make) {
  if (!cache.has(key)) cache.set(key, make());
  return cache.get(key);
}

// --- Sols -------------------------------------------------------------------------------------
export const grassTexture = () => memo('grass', () => canvasTexture(512, 512, (g, w, h) => {
  g.fillStyle = '#4f8a35'; g.fillRect(0, 0, w, h);
  noiseLayer(g, w, h, { scale: 96, alpha: 0.18, seed: 3 });
  noiseLayer(g, w, h, { scale: 18, alpha: 0.12, seed: 7 });
  for (let i = 0; i < 9000; i++) {
    const x = Math.random() * w, y = Math.random() * h, l = 3 + Math.random() * 5;
    g.strokeStyle = Math.random() < 0.5 ? 'rgba(120,170,70,0.35)' : 'rgba(40,80,30,0.35)';
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + (Math.random() - 0.5) * 2, y - l); g.stroke();
  }
}, { repeat: [60, 60] }));

export const woodFloorTexture = () => memo('wood', () => canvasTexture(1024, 1024, (g, w, h) => {
  const plankH = h / 8;
  for (let r = 0; r < 8; r++) {
    let x = -Math.random() * 300;
    while (x < w) {
      const len = 260 + Math.random() * 260;
      const tone = 150 + Math.random() * 35;
      g.fillStyle = `rgb(${tone + 25},${tone - 15},${tone - 60})`;
      g.fillRect(x, r * plankH, len, plankH);
      // Veinage.
      for (let k = 0; k < 14; k++) {
        g.strokeStyle = `rgba(90,55,25,${0.05 + Math.random() * 0.08})`;
        g.lineWidth = 1 + Math.random() * 2;
        const yy = r * plankH + Math.random() * plankH;
        g.beginPath(); g.moveTo(x, yy);
        g.bezierCurveTo(x + len * 0.3, yy + (Math.random() - 0.5) * 10, x + len * 0.6, yy + (Math.random() - 0.5) * 10, x + len, yy);
        g.stroke();
      }
      g.fillStyle = 'rgba(40,25,10,0.55)';
      g.fillRect(x, r * plankH, 2, plankH);
      x += len;
    }
    g.fillStyle = 'rgba(40,25,10,0.5)';
    g.fillRect(0, r * plankH, w, 2);
  }
  noiseLayer(g, w, h, { scale: 128, alpha: 0.06, seed: 11 });
}, { repeat: [5, 4] }));

export const concreteTexture = () => memo('concrete', () => canvasTexture(512, 512, (g, w, h) => {
  g.fillStyle = '#b9b6ae'; g.fillRect(0, 0, w, h);
  noiseLayer(g, w, h, { scale: 80, alpha: 0.12, seed: 5 });
  speckle(g, w, h, 4000, ['rgba(80,80,80,0.25)', 'rgba(255,255,255,0.25)']);
  g.strokeStyle = 'rgba(70,70,70,0.35)'; g.lineWidth = 2;
  g.strokeRect(0, 0, w, h);
}, { repeat: [1, 1] }));

export const asphaltTexture = () => memo('asphalt', () => canvasTexture(512, 512, (g, w, h) => {
  g.fillStyle = '#4a4b4e'; g.fillRect(0, 0, w, h);
  noiseLayer(g, w, h, { scale: 60, alpha: 0.1, seed: 9 });
  speckle(g, w, h, 12000, ['rgba(20,20,20,0.5)', 'rgba(140,140,140,0.35)'], [1, 2.5]);
}, { repeat: [12, 12] }));

export const gravelTexture = () => memo('gravel', () => canvasTexture(512, 512, (g, w, h) => {
  g.fillStyle = '#a89c86'; g.fillRect(0, 0, w, h);
  speckle(g, w, h, 16000, ['#8f8470', '#c4b9a3', '#766b58', '#d8cfbd'], [1.5, 4]);
}, { repeat: [6, 10] }));

export const wallTexture = () => memo('wall', () => canvasTexture(256, 256, (g, w, h) => {
  g.fillStyle = '#efece6'; g.fillRect(0, 0, w, h);
  noiseLayer(g, w, h, { scale: 48, alpha: 0.03, seed: 13 });
}, { repeat: [4, 1] }));

export const cladTexture = () => memo('clad', () => canvasTexture(512, 512, (g, w, h) => {
  // Bardage bois vertical de la façade.
  for (let x = 0; x < w; x += 32) {
    const t = 120 + Math.random() * 25;
    g.fillStyle = `rgb(${t + 40},${t + 5},${t - 30})`;
    g.fillRect(x, 0, 32, h);
    g.fillStyle = 'rgba(30,20,10,0.5)'; g.fillRect(x, 0, 2, h);
  }
  noiseLayer(g, w, h, { scale: 64, alpha: 0.08, seed: 17 });
}, { repeat: [6, 1] }));

// --- Surfaces de jeu ---------------------------------------------------------------------------
// Un pixel = 1,8 cm. Dimensions réglementaires : 23,77 x 10,97 m (double), couloirs de 1,37 m.
function drawTennisLines(g, W, H, areaW, areaL, color) {
  const px = W / areaW;
  const cx = W / 2, cy = H / 2;
  const L = 23.77 * px, D = 10.97 * px, S = 8.23 * px, SV = 6.40 * px, lw = Math.max(3, 0.05 * px);
  g.fillStyle = color;
  const rect = (x, y, w, h) => g.fillRect(x, y, w, h);
  // Lignes de fond et latérales (double et simple).
  rect(cx - D / 2, cy - L / 2, D, lw); rect(cx - D / 2, cy + L / 2 - lw, D, lw);
  rect(cx - D / 2, cy - L / 2, lw, L); rect(cx + D / 2 - lw, cy - L / 2, lw, L);
  rect(cx - S / 2, cy - L / 2, lw, L); rect(cx + S / 2 - lw, cy - L / 2, lw, L);
  // Lignes de service et ligne médiane.
  rect(cx - S / 2, cy - SV - lw / 2, S, lw); rect(cx - S / 2, cy + SV - lw / 2, S, lw);
  rect(cx - lw / 2, cy - SV, lw, SV * 2);
  // Marques centrales.
  rect(cx - lw / 2, cy - L / 2, lw, 0.15 * px); rect(cx - lw / 2, cy + L / 2 - 0.15 * px, lw, 0.15 * px);
}

export const clayTexture = () => memo('clay', () => canvasTexture(1024, 2048, (g, w, h) => {
  // Brique pilée : orange chaud, zones plus sèches (claires) et plus tassées (foncées), grain fin.
  g.fillStyle = '#bd5a2c'; g.fillRect(0, 0, w, h);
  noiseLayer(g, w, h, { scale: 220, alpha: 0.12, seed: 21, color: '90,30,10' });
  noiseLayer(g, w, h, { scale: 40, alpha: 0.06, seed: 23, color: '90,30,10' });
  // Usure claire au fond de court et autour des lignes de service, là où l'on joue le plus.
  const px = w / 18.3;
  for (const s of [-1, 1]) {
    const grd = g.createRadialGradient(w / 2, h / 2 + s * 12.4 * px, 10, w / 2, h / 2 + s * 12.4 * px, 6 * px);
    grd.addColorStop(0, 'rgba(226,150,100,0.35)'); grd.addColorStop(1, 'rgba(226,150,100,0)');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
  }
  speckle(g, w, h, 60000, ['rgba(110,40,15,0.35)', 'rgba(235,150,100,0.3)', 'rgba(250,210,180,0.18)'], [1, 2.2]);
  drawTennisLines(g, w, h, 18.3, 36.6, 'rgba(246,240,228,0.92)');
  // Lignes légèrement recouvertes de terre par endroits.
  speckle(g, w, h, 9000, ['rgba(189,90,44,0.55)'], [1, 3]);
}));

export const hardTexture = () => memo('hard', () => canvasTexture(1024, 2048, (g, w, h) => {
  g.fillStyle = '#3d7a5a'; g.fillRect(0, 0, w, h);
  const px = w / 18.3;
  g.fillStyle = '#2f5d9e';
  g.fillRect(w / 2 - 10.97 * px / 2, h / 2 - 23.77 * px / 2, 10.97 * px, 23.77 * px);
  noiseLayer(g, w, h, { scale: 90, alpha: 0.05, seed: 31 });
  speckle(g, w, h, 30000, ['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.05)'], [1, 2]);
  drawTennisLines(g, w, h, 18.3, 36.6, '#f4f4f0');
}));

export const padelTexture = () => memo('padel', () => canvasTexture(1024, 2048, (g, w, h) => {
  g.fillStyle = '#2a64b8'; g.fillRect(0, 0, w, h);
  // Gazon synthétique : petites fibres.
  speckle(g, w, h, 90000, ['rgba(80,140,230,0.4)', 'rgba(15,45,110,0.4)'], [1, 2]);
  noiseLayer(g, w, h, { scale: 120, alpha: 0.05, seed: 41 });
  // La texture couvre exactement le terrain de 10 x 20 m : lignes de service à 6,95 m du filet, ligne médiane.
  const px = w / 10, cx = w / 2, cy = h / 2, lw = 0.05 * px;
  g.fillStyle = '#f4f4f0';
  g.fillRect(cx - 5 * px, cy - 6.95 * px - lw / 2, 10 * px, lw);
  g.fillRect(cx - 5 * px, cy + 6.95 * px - lw / 2, 10 * px, lw);
  g.fillRect(cx - lw / 2, cy - 6.95 * px, lw, 13.9 * px);
}));

// Usure : traces de pas, glissades et feuilles. L'opacité suit l'usure du terrain.
export const wearTexture = surface => memo('wear-' + surface, () => canvasTexture(512, 1024, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  const px = w / (surface === 'padel' ? 10 : 18.3);
  const zones = surface === 'padel' ? [h / 2 - 7.2 * px, h / 2 + 7.2 * px] : [h / 2 - 12 * px, h / 2 + 12 * px];
  for (const zy of zones) {
    for (let i = 0; i < 260; i++) {
      const x = w / 2 + (Math.random() - 0.5) * w * 0.55, y = zy + (Math.random() - 0.5) * 3.5 * px;
      g.fillStyle = surface === 'clay' ? 'rgba(110,40,15,0.5)' : 'rgba(40,40,30,0.25)';
      g.save(); g.translate(x, y); g.rotate(Math.random() * Math.PI);
      g.fillRect(-2, -5, 4 + Math.random() * 4, 10 + Math.random() * 20);
      g.restore();
    }
  }
  // Glissades et ballons de poussière.
  for (let i = 0; i < 120; i++) {
    const x = Math.random() * w, y = Math.random() * h;
    g.fillStyle = surface === 'clay' ? 'rgba(235,170,120,0.35)' : 'rgba(120,110,80,0.2)';
    g.beginPath(); g.ellipse(x, y, 4 + Math.random() * 10, 2 + Math.random() * 5, Math.random() * 3, 0, Math.PI * 2); g.fill();
  }
  // Feuilles mortes.
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * w, y = Math.random() * h;
    g.fillStyle = ['#8a5a24', '#a87a2e', '#6d4a1e'][i % 3];
    g.save(); g.translate(x, y); g.rotate(Math.random() * 6);
    g.beginPath(); g.ellipse(0, 0, 5, 2.5, 0, 0, Math.PI * 2); g.fill();
    g.restore();
  }
}));

// Grillage et filet (motif répété avec transparence).
export const meshTexture = (key, color, cell = 16, line = 2, repeat = [1, 1]) => memo('mesh-' + key, () => canvasTexture(64, 64, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  g.strokeStyle = color; g.lineWidth = line;
  g.beginPath();
  for (let i = 0; i <= w; i += cell) { g.moveTo(i, 0); g.lineTo(i, h); g.moveTo(0, i); g.lineTo(w, i); }
  g.stroke();
}, { repeat }));

// --- Cartons et étiquettes -------------------------------------------------------------------------
export const boxTexture = product => memo('box-' + product, () => canvasTexture(256, 256, (g, w, h) => {
  g.fillStyle = '#c9a26b'; g.fillRect(0, 0, w, h);
  noiseLayer(g, w, h, { scale: 40, alpha: 0.08, seed: 51 });
  g.fillStyle = 'rgba(120,85,40,0.35)';
  for (let y = 0; y < h; y += 6) g.fillRect(0, y, w, 1);
  // Ruban adhésif.
  g.fillStyle = 'rgba(210,190,150,0.85)'; g.fillRect(w / 2 - 18, 0, 36, h);
  // Étiquette produit.
  const P = PRODUCTS[product];
  g.fillStyle = '#fbfaf6'; g.fillRect(28, 150, w - 56, 78);
  g.fillStyle = P.color; g.fillRect(28, 150, 18, 78);
  g.fillStyle = '#1b2420'; g.font = '700 26px Outfit, Arial, sans-serif'; g.textBaseline = 'middle';
  g.fillText(P.short, 58, 176);
  g.font = '500 18px Outfit, Arial, sans-serif'; g.fillStyle = '#56605a';
  g.fillText(`x${P.box}`, 58, 206);
}));

export function labelTexture(text, { w = 512, h = 128, bg = '#ffffff', fg = '#1b2420', font = '700 64px Outfit, Arial, sans-serif', accent = null } = {}) {
  return canvasTexture(w, h, (g) => {
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    if (accent) { g.fillStyle = accent; g.fillRect(0, h - h * 0.12, w, h * 0.12); }
    g.fillStyle = fg; g.font = font; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(text, w / 2, h / 2);
  });
}

// Étiquette de produit imprimée (tube de balles, canette...).
export const productLabel = (product) => memo('lbl-' + product, () => canvasTexture(256, 128, (g, w, h) => {
  const P = PRODUCTS[product];
  const palettes = {
    balls: ['#1d3f8f', '#e8f04a', 'ACE'], padelballs: ['#0f7a54', '#c8f04a', 'PADEL'],
    water: ['#dff1fb', '#2a7cc0', 'SOURCE'], iso: ['#ff8a3d', '#ffffff', 'BOOST'],
    energy: ['#b5651d', '#ffe9a8', 'POWER'], shoes: ['#ffffff', '#f26b3a', 'COURTLINE'],
    beer: ['#f2e6c4', '#7a1f1f', 'BLONDE'], soda: ['#d62d2d', '#ffffff', 'FIZZ'], coffee: ['#f4efe6', '#6b4226', L('CAFÉ', 'COFFEE')],
    juice: ['#ffa31a', '#ffffff', 'ORANGE'],
  };
  const [bg, fg, brand] = palettes[product] || ['#ffffff', P.color, P.short];
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  g.fillStyle = fg; g.font = '800 54px Outfit, Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(brand, w / 2, h / 2 + 2);
  g.fillRect(0, 8, w, 6); g.fillRect(0, h - 14, w, 6);
}));
