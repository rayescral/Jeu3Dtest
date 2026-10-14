// Modèles 3D des produits de la boutique et des cartons de livraison.
// Géométries et matériaux sont partagés : chaque article ne coûte qu'un objet léger.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { pbr } from './assets.js';
import { PRODUCTS } from '../game/data.js';
import { boxTexture, productLabel } from './textures.js';

const std = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.55, ...opts });
// Les articles de la boutique reçoivent les reflets de l'environnement (emballages brillants, métal).
const shine = m => { m.userData.reflective = true; return m; };
const shared = {};

// Taille d'un carton (largeur, hauteur, profondeur) selon le produit.
export const BOX_SIZE = {
  balls: [0.5, 0.32, 0.36], water: [0.5, 0.3, 0.36], iso: [0.46, 0.26, 0.34], grip: [0.4, 0.2, 0.3],
  padelballs: [0.5, 0.32, 0.36], cap: [0.5, 0.28, 0.4], energy: [0.36, 0.16, 0.26], wristband: [0.36, 0.18, 0.28],
  strings: [0.42, 0.22, 0.34], towel: [0.5, 0.3, 0.4], tshirt: [0.52, 0.28, 0.4], shoes: [0.6, 0.3, 0.42], bag: [0.8, 0.34, 0.4],
  beer: [0.5, 0.3, 0.36], soda: [0.44, 0.18, 0.3], coffee: [0.4, 0.2, 0.3], juice: [0.46, 0.28, 0.34],
  sandwich: [0.46, 0.2, 0.36], panini: [0.46, 0.2, 0.36], pizza: [0.46, 0.12, 0.46], cookie: [0.36, 0.16, 0.28],
};
for (const [id, P] of Object.entries(PRODUCTS)) if (P.racket) BOX_SIZE[id] = P.racket === 'padel' ? [0.5, 0.2, 0.6] : [0.36, 0.2, 0.78];

// Encombrement d'un article sur l'étagère (largeur, profondeur) pour l'agencement.

function build(product) {
  const g = new THREE.Group();
  switch (product) {
    case 'balls':
    case 'padelballs': {
      // Tube en plastique transparent, trois balles feutrées visibles, étiquette en bas, bouchon.
      const tube = new THREE.Mesh(shared.tubeClear ??= new THREE.CylinderGeometry(0.038, 0.038, 0.24, 24, 1, true),
        shared.pet ??= shine(new THREE.MeshStandardMaterial({ color: 0xe8f2f6, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.28, depthWrite: false, side: THREE.DoubleSide })));
      tube.position.y = 0.12;
      const label = new THREE.Mesh(shared.tubeLabel ??= new THREE.CylinderGeometry(0.0385, 0.0385, 0.07, 24, 1, true), new THREE.MeshStandardMaterial({ map: productLabel(product), roughness: 0.35 }));
      label.position.y = 0.045;
      const ballMat = product === 'balls' ? (shared.ballMat ??= new THREE.MeshStandardMaterial({ map: ballTexture('#cfe617'), roughness: 0.95 })) : (shared.pballMat ??= new THREE.MeshStandardMaterial({ map: ballTexture('#b8e830'), roughness: 0.95 }));
      for (let k = 0; k < 3; k++) {
        const ball = new THREE.Mesh(shared.ballGeo ??= new THREE.SphereGeometry(0.0335, 18, 14), ballMat);
        ball.position.y = 0.04 + k * 0.069; ball.rotation.set(k, k * 2, 0);
        g.add(ball);
      }
      const cap = new THREE.Mesh(shared.tubeCap ??= new THREE.CylinderGeometry(0.041, 0.041, 0.022, 24), product === 'balls' ? (shared.capY ??= std(0xf5f5f2, { roughness: 0.4 })) : (shared.capG ??= std(0x1f6b4a, { roughness: 0.4 })));
      cap.position.y = 0.245;
      const bottom = new THREE.Mesh(shared.tubeBottom ??= new THREE.CylinderGeometry(0.039, 0.039, 0.01, 24), shared.metal ??= shine(std(0xb8bcc2, { metalness: 0.8, roughness: 0.3 })));
      bottom.position.y = 0.005;
      g.add(tube, label, cap, bottom);
      break;
    }
    case 'water': {
      shared.bottle ??= new THREE.LatheGeometry([
        [0, 0], [0.032, 0], [0.034, 0.01], [0.034, 0.13], [0.03, 0.16], [0.014, 0.19], [0.012, 0.2], [0, 0.2],
      ].map(p => new THREE.Vector2(p[0], p[1])), 20);
      const plastic = shared.waterMat ??= new THREE.MeshStandardMaterial({ color: 0xcfe9f7, roughness: 0.08, transparent: true, opacity: 0.55 });
      const b = new THREE.Mesh(shared.bottle, plastic);
      const label = new THREE.Mesh(shared.bottleLabel ??= new THREE.CylinderGeometry(0.0345, 0.0345, 0.06, 20, 1, true), new THREE.MeshStandardMaterial({ map: productLabel('water'), roughness: 0.5 }));
      label.position.y = 0.08;
      const capB = new THREE.Mesh(shared.bottleCap ??= new THREE.CylinderGeometry(0.014, 0.014, 0.018, 12), shared.blueCap ??= std(0x2a7cc0, { roughness: 0.4 }));
      capB.position.y = 0.205;
      g.add(b, label, capB);
      break;
    }
    case 'iso': {
      const can = new THREE.Mesh(shared.can ??= new THREE.CylinderGeometry(0.033, 0.033, 0.15, 20), new THREE.MeshStandardMaterial({ map: productLabel('iso'), metalness: 0.5, roughness: 0.3 }));
      can.position.y = 0.075;
      const top = new THREE.Mesh(shared.canTop ??= new THREE.CylinderGeometry(0.028, 0.033, 0.012, 20), shared.metal ??= shine(std(0xb8bcc2, { metalness: 0.8, roughness: 0.3 })));
      top.position.y = 0.156;
      g.add(can, top);
      break;
    }
    case 'grip': {
      const box = new THREE.Mesh(shared.gripBox ??= new THREE.BoxGeometry(0.09, 0.2, 0.04), [
        std(0xffffff), std(0xffffff), std(0x1b2420), std(0x1b2420),
        new THREE.MeshStandardMaterial({ map: productLabelGrip(), roughness: 0.5 }), std(0xffffff),
      ]);
      box.position.y = 0.1;
      g.add(box);
      break;
    }
    case 'energy': {
      const bar = new THREE.Mesh(shared.energy ??= new THREE.BoxGeometry(0.12, 0.025, 0.045), new THREE.MeshStandardMaterial({ map: productLabel('energy'), roughness: 0.4 }));
      bar.position.y = 0.0125;
      g.add(bar);
      break;
    }
    case 'wristband': {
      for (const dx of [-0.03, 0.03]) {
        const w = new THREE.Mesh(shared.wrist ??= new THREE.TorusGeometry(0.03, 0.014, 10, 20), shared.wristMat ??= std(0xe04a4a, { roughness: 0.95 }));
        w.rotation.x = Math.PI / 2; w.position.set(dx, 0.014, 0);
        g.add(w);
      }
      break;
    }
    case 'strings': {
      const reel = new THREE.Mesh(shared.reel ??= new THREE.CylinderGeometry(0.06, 0.06, 0.04, 24), shared.reelMat ??= std(0xf2c94c, { roughness: 0.35 }));
      reel.position.y = 0.02;
      const hub = new THREE.Mesh(shared.hub ??= new THREE.CylinderGeometry(0.022, 0.022, 0.045, 16), shared.dark ??= std(0x1b2420));
      hub.position.y = 0.02;
      g.add(reel, hub);
      break;
    }
    case 'towel':
    case 'tshirt': {
      const color = product === 'towel' ? 0x3fb7a6 : 0xffffff;
      const fold = new THREE.Mesh(shared.fold ??= roundedBox(0.2, 0.05, 0.16, 0.015), shared['fold' + product] ??= std(color, { roughness: 0.95 }));
      fold.position.y = 0.025;
      g.add(fold);
      const logo = new THREE.Mesh(shared.logoGeo ??= new THREE.CircleGeometry(0.025, 16), shared.logoMat ??= std(0x1f6b4a, { roughness: 0.9 }));
      logo.rotation.x = -Math.PI / 2; logo.position.set(0, 0.051, 0.02);
      g.add(logo);
      break;
    }
    case 'shoes': {
      const lid = new THREE.Mesh(shared.shoebox ??= new THREE.BoxGeometry(0.3, 0.11, 0.18), [
        std(0xf26b3a), std(0xf26b3a), new THREE.MeshStandardMaterial({ map: productLabel('shoes'), roughness: 0.6 }), std(0xf26b3a), std(0xf26b3a), std(0xf26b3a),
      ]);
      lid.position.y = 0.055;
      g.add(lid);
      break;
    }
    case 'bag': {
      const body = new THREE.Mesh(shared.bagGeo ??= new THREE.CapsuleGeometry(0.1, 0.5, 6, 16).rotateZ(Math.PI / 2), shared.bagMat ??= std(0x1c1f24, { roughness: 0.6 }));
      body.scale.set(1, 1, 0.75); body.position.y = 0.1;
      const stripe = new THREE.Mesh(shared.bagStripe ??= new THREE.CylinderGeometry(0.102, 0.102, 0.05, 20, 1, true).rotateZ(Math.PI / 2), shared.stripeMat ??= std(0xe4f05a, { roughness: 0.5 }));
      stripe.scale.set(1, 1, 0.75); stripe.position.y = 0.1;
      g.add(body, stripe);
      break;
    }
    case 'beer': {
      shared.beerBottle ??= new THREE.LatheGeometry([
        [0, 0], [0.03, 0], [0.031, 0.01], [0.031, 0.12], [0.02, 0.16], [0.012, 0.19], [0.013, 0.215], [0, 0.215],
      ].map(p => new THREE.Vector2(p[0], p[1])), 18);
      const b = new THREE.Mesh(shared.beerBottle, shared.beerGlass ??= shine(new THREE.MeshStandardMaterial({ color: 0x5a3208, roughness: 0.12, metalness: 0.1 })));
      const label = new THREE.Mesh(shared.beerLabel ??= new THREE.CylinderGeometry(0.0315, 0.0315, 0.05, 18, 1, true), new THREE.MeshStandardMaterial({ map: productLabel('beer'), roughness: 0.5 }));
      label.position.y = 0.07;
      const capB = new THREE.Mesh(shared.crown ??= new THREE.CylinderGeometry(0.0145, 0.0145, 0.01, 12), shared.gold ??= shine(std(0xd4af37, { metalness: 0.8, roughness: 0.3 })));
      capB.position.y = 0.218;
      g.add(b, label, capB);
      break;
    }
    case 'soda':
    case 'juice': {
      const tall = product === 'juice';
      const can = new THREE.Mesh(tall ? (shared.carton ??= new THREE.BoxGeometry(0.06, 0.16, 0.06)) : (shared.can ??= new THREE.CylinderGeometry(0.033, 0.033, 0.15, 20)),
        new THREE.MeshStandardMaterial({ map: productLabel(product), metalness: tall ? 0 : 0.5, roughness: 0.35 }));
      can.position.y = tall ? 0.08 : 0.075;
      g.add(can);
      if (!tall) {
        const top = new THREE.Mesh(shared.canTop ??= new THREE.CylinderGeometry(0.028, 0.033, 0.012, 20), shared.metal ??= shine(std(0xb8bcc2, { metalness: 0.8, roughness: 0.3 })));
        top.position.y = 0.156;
        g.add(top);
      }
      break;
    }
    case 'coffee': {
      const cup = new THREE.Mesh(shared.cup ??= new THREE.CylinderGeometry(0.04, 0.03, 0.1, 18), new THREE.MeshStandardMaterial({ map: productLabel('coffee'), roughness: 0.6 }));
      cup.position.y = 0.05;
      const lid = new THREE.Mesh(shared.cupLid ??= new THREE.CylinderGeometry(0.042, 0.042, 0.012, 18), shared.dark ??= std(0x1b2420));
      lid.position.y = 0.105;
      g.add(cup, lid);
      break;
    }
    case 'sandwich': {
      const shape = new THREE.Shape(); shape.moveTo(-0.07, 0); shape.lineTo(0.07, 0); shape.lineTo(0, 0.1); shape.closePath();
      const geo = shared.wedge ??= new THREE.ExtrudeGeometry(shape, { depth: 0.06, bevelEnabled: false }).translate(0, 0, -0.03);
      const box = new THREE.Mesh(geo, shared.wedgeMat ??= new THREE.MeshStandardMaterial({ color: 0xeaf4f4, roughness: 0.15, transparent: true, opacity: 0.55 }));
      const bread = new THREE.Mesh(shared.breadGeo ??= new THREE.ExtrudeGeometry(shape, { depth: 0.05, bevelEnabled: false }).translate(0, 0, -0.025).scale(0.9, 0.9, 1), shared.bread ??= std(0xe9c46a, { roughness: 0.9 }));
      bread.position.y = 0.005;
      g.add(box, bread);
      break;
    }
    case 'panini': {
      const p = new THREE.Mesh(shared.panini ??= roundedBox(0.16, 0.035, 0.1, 0.015), shared.paniniMat ??= std(0xd4a373, { roughness: 0.85 }));
      p.position.y = 0.018;
      g.add(p);
      for (let i = -2; i <= 2; i++) {
        const line = new THREE.Mesh(shared.grill ??= new THREE.BoxGeometry(0.008, 0.002, 0.09), shared.grillMat ??= std(0x6b3e1e));
        line.position.set(i * 0.028, 0.036, 0);
        g.add(line);
      }
      break;
    }
    case 'pizza': {
      const shape = new THREE.Shape(); shape.moveTo(0, 0); shape.lineTo(-0.06, 0.15); shape.quadraticCurveTo(0, 0.17, 0.06, 0.15); shape.closePath();
      const slice = new THREE.Mesh(shared.slice ??= new THREE.ExtrudeGeometry(shape, { depth: 0.012, bevelEnabled: false }).rotateX(-Math.PI / 2).translate(0, 0, 0.075), shared.pizzaMat ??= std(0xe76f51, { roughness: 0.8 }));
      g.add(slice);
      for (const [x, z] of [[0, 0.0], [-0.02, -0.04], [0.02, -0.03]]) {
        const pep = new THREE.Mesh(shared.pep ??= new THREE.CylinderGeometry(0.012, 0.012, 0.004, 10), shared.pepMat ??= std(0x9b2226, { roughness: 0.7 }));
        pep.position.set(x, 0.014, z);
        g.add(pep);
      }
      break;
    }
    case 'cookie': {
      const c = new THREE.Mesh(shared.cookie ??= new THREE.CylinderGeometry(0.035, 0.035, 0.012, 16), shared.cookieMat ??= std(0xc08a4a, { roughness: 0.95 }));
      c.position.y = 0.006;
      g.add(c);
      for (const [x, z] of [[0.01, 0.01], [-0.015, 0.005], [0.005, -0.017]]) {
        const chip = new THREE.Mesh(shared.chip ??= new THREE.SphereGeometry(0.005, 6, 4), shared.chipMat ??= std(0x3b2414));
        chip.position.set(x, 0.013, z);
        g.add(chip);
      }
      break;
    }
    default:
      if (PRODUCTS[product]?.racket) g.add(racketMesh(PRODUCTS[product].racket === 'padel', PRODUCTS[product].color, product));
      break;
    case 'cap': {
      const crown = new THREE.Mesh(shared.capCrown ??= new THREE.SphereGeometry(0.1, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), shared.capMat ??= std(0x1f8a5b, { roughness: 0.8 }));
      crown.scale.set(1, 0.75, 1.05);
      const visor = new THREE.Mesh(shared.visor ??= new THREE.CylinderGeometry(0.1, 0.1, 0.008, 24, 1, false, -Math.PI / 2, Math.PI), shared.capMat);
      visor.scale.set(0.9, 1, 0.9);
      visor.position.set(0, 0.004, 0.06);
      g.add(crown, visor);
      break;
    }
  }
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return g;
}

function productLabelGrip() {
  return shared.gripLabel ??= (() => {
    const c = document.createElement('canvas'); c.width = 64; c.height = 128;
    const x = c.getContext('2d');
    x.fillStyle = '#ffffff'; x.fillRect(0, 0, 64, 128);
    x.fillStyle = '#e04a4a'; x.fillRect(0, 20, 64, 24);
    x.fillStyle = '#1b2420'; x.font = '700 18px Outfit, Arial'; x.textAlign = 'center';
    x.fillText('GRIP', 32, 80); x.font = '500 13px Outfit, Arial'; x.fillText('x3', 32, 102);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
}

// Raquette de tennis fidèle : profil de cadre extrudé (tête ovale, cœur ouvert, pont), cordage en grille,
// manche octogonal avec grip enroulé et bouchon. Pala de padel : tête pleine percée, décor imprimé.
// Debout, tête vers le haut, manche en bas (y = 0). Longueur réelle : 68,6 cm (tennis), 46 cm (padel).
const BRAND_NAMES = { racket: 'VOLTA', racketHexa: 'HEXA', racketAero: 'AERION', racketTitan: 'TITAN', racketJunior: 'STRATA', padelracket: 'KRAKEN', padelPro: 'VIBRA' };
function ovalPoints(cx, cy, rx, ry, n, flatBottom = 0) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    // Super-ellipse : tête un peu plus « carrée » qu'une ellipse, comme les tamis modernes.
    const c = Math.cos(a), sn = Math.sin(a);
    let x = Math.sign(c) * Math.pow(Math.abs(c), 0.86) * rx, y = Math.sign(sn) * Math.pow(Math.abs(sn), 0.92) * ry;
    if (flatBottom && y < -ry + flatBottom) y = -ry + flatBottom;
    pts.push(new THREE.Vector2(cx + x, cy + y));
  }
  return pts;
}
function tennisFrameGeometry() {
  return shared.tennisFrame ??= (() => {
    const cy = 0.505, rx = 0.132, ry = 0.168, th = 0.0085;
    // Contour extérieur : tête puis gorge qui se resserre jusqu'au manche.
    const outer = new THREE.Shape();
    const head = ovalPoints(0, cy, rx, ry, 72);
    const start = head.findIndex(p => p.y < cy - ry * 0.55 && p.x > 0);
    // On parcourt la tête du côté droit bas, par le haut, jusqu'au côté gauche bas, puis on descend la gorge.
    const ring = [];
    for (let k = 0; k < head.length; k++) ring.push(head[(start + k) % head.length]);
    const keep = ring.filter(p => !(p.y < cy - ry * 0.55));
    outer.moveTo(0.015, 0.18);
    outer.bezierCurveTo(0.03, 0.25, 0.085, 0.29, keep[0].x + 0.001, keep[0].y - 0.006);
    for (const p of keep) outer.lineTo(p.x, p.y);
    const last = keep[keep.length - 1];
    outer.bezierCurveTo(-0.085, 0.29, -0.03, 0.25, -0.015, 0.18);
    outer.lineTo(0.015, 0.18);
    // Ouverture du tamis (fond aplati par le pont).
    const hole = new THREE.Path(ovalPoints(0, cy, rx - th, ry - th, 64, 0.03).reverse());
    // Cœur ouvert entre le pont et la gorge.
    const heart = new THREE.Path();
    // Bras de la gorge incurvés vers l'extérieur, pont fin.
    const yb = cy - ry + 0.03 - 0.01;
    heart.moveTo(0, 0.228); heart.bezierCurveTo(0.012, 0.26, 0.062, 0.29, 0.082, yb);
    heart.lineTo(-0.082, yb); heart.bezierCurveTo(-0.062, 0.29, -0.012, 0.26, 0, 0.228);
    outer.holes.push(hole, heart);
    const g = new THREE.ExtrudeGeometry(outer, { depth: 0.017, bevelEnabled: true, bevelThickness: 0.0035, bevelSize: 0.0028, bevelSegments: 2, curveSegments: 6 });
    g.translate(0, 0, -0.0085);
    g.computeVertexNormals();
    return g;
  })();
}
function gripTexture() {
  return shared.gripTex ??= (() => {
    const c = document.createElement('canvas'); c.width = 64; c.height = 256;
    const x = c.getContext('2d');
    x.fillStyle = '#1c1d1f'; x.fillRect(0, 0, 64, 256);
    // Bande de surgrip enroulée en spirale.
    for (let y = -64; y < 320; y += 22) {
      x.fillStyle = 'rgba(255,255,255,0.08)'; x.beginPath(); x.moveTo(0, y); x.lineTo(64, y + 16); x.lineTo(64, y + 20); x.lineTo(0, y + 4); x.fill();
      x.fillStyle = 'rgba(0,0,0,0.5)'; x.beginPath(); x.moveTo(0, y + 18); x.lineTo(64, y + 34); x.lineTo(64, y + 36); x.lineTo(0, y + 20); x.fill();
    }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
  })();
}
function decalTexture(text, bg, fg) {
  const key = 'decal' + text + bg + fg;
  return shared[key] ??= (() => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 48;
    const x = c.getContext('2d');
    x.fillStyle = bg; x.fillRect(0, 0, 256, 48);
    x.fillStyle = fg; x.font = 'italic 800 34px Outfit, Arial'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillText(text, 128, 26);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
}

export function racketMesh(padel = false, color = null, key = null) {
  const g = new THREE.Group();
  const brand = BRAND_NAMES[key] ?? (padel ? 'KRAKEN' : 'VOLTA');
  const paint = color != null ? (shared['paint' + color] ??= new THREE.MeshStandardMaterial({ color, roughness: 0.28, metalness: 0.35 })) : (shared.paintDefault ??= new THREE.MeshStandardMaterial({ color: 0x2f6fe0, roughness: 0.28, metalness: 0.35 }));
  const black = shared.carbon ??= new THREE.MeshStandardMaterial({ color: 0x141518, roughness: 0.35, metalness: 0.4 });
  const gripMat = shared.gripMat2 ??= new THREE.MeshStandardMaterial({ map: gripTexture(), roughness: 0.9 });
  if (padel) {
    // Tête en goutte d'eau, percée, avec cadre protecteur et décor sur les deux faces.
    const shapeKey = 'padelGeo';
    const geo = shared[shapeKey] ??= (() => {
      const sh = new THREE.Shape();
      const pts = [];
      for (let i = 0; i <= 48; i++) {
        const a = Math.PI * 1.5 + (i / 48) * Math.PI * 2;
        const r = 0.13, y = Math.sin(a), x = Math.cos(a);
        pts.push(new THREE.Vector2(x * r * (y < 0 ? 0.88 + y * 0.12 : 1), 0.31 + y * 0.15 * (y < 0 ? 1.25 : 1)));
      }
      sh.setFromPoints(pts);
      for (let i = -3; i <= 3; i++) for (let j = -3; j <= 3; j++) {
        const hx = i * 0.033 + (j % 2 ? 0.0165 : 0), hy = 0.33 + j * 0.03;
        if (Math.hypot(hx / 0.1, (hy - 0.33) / 0.11) > 1) continue;
        const h = new THREE.Path(); h.absarc(hx, hy, 0.0065, 0, Math.PI * 2, true); sh.holes.push(h);
      }
      const eg = new THREE.ExtrudeGeometry(sh, { depth: 0.032, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 2, curveSegments: 24 });
      eg.translate(0, 0, -0.016);
      // UV des faces : décor centré sur la tête.
      const pos = eg.attributes.position, uv = eg.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) + 0.14) / 0.28, (pos.getY(i) - 0.11) / 0.38);
      return eg;
    })();
    const face = shared['padelFace' + brand + color] ??= new THREE.MeshStandardMaterial({ map: padelFaceTexture(brand, color ?? 0x7a4fd6), roughness: 0.4, metalness: 0.15 });
    const head = new THREE.Mesh(geo, [face, black]);
    g.add(head);
    const rim = new THREE.Mesh(shared.padelRim ??= new THREE.TorusGeometry(0.135, 0.006, 6, 48).scale(1, 1.18, 1.5).translate(0, 0.315, 0), black);
    g.add(rim);
    const handle = new THREE.Mesh(shared.padelHandle2 ??= new THREE.CylinderGeometry(0.016, 0.018, 0.15, 8).translate(0, 0.075, 0), gripMat);
    const cap = new THREE.Mesh(shared.padelCap ??= new THREE.CylinderGeometry(0.02, 0.02, 0.012, 12), black);
    const strap = new THREE.Mesh(shared.strap ??= new THREE.TorusGeometry(0.03, 0.003, 4, 16).translate(0, -0.03, 0), black);
    g.add(handle, cap, strap);
  } else {
    const frame = new THREE.Mesh(tennisFrameGeometry(), paint);
    g.add(frame);
    // Bande noire sur le haut du tamis (protection) et sur la gorge.
    const bumper = new THREE.Mesh(shared.bumper ??= new THREE.TorusGeometry(0.135, 0.0055, 6, 40, Math.PI * 0.55).rotateZ(Math.PI * 0.225).scale(1, 1.24, 1.9).translate(0, 0.505, 0), black);
    g.add(bumper);
    // Cordage : grille 16 x 19 dans l'ouverture du tamis.
    const strings = new THREE.Mesh(shared.stringBed ??= (() => {
      const sh = new THREE.Shape(ovalPoints(0, 0.505, 0.121, 0.157, 64, 0.03));
      const sg = new THREE.ShapeGeometry(sh, 24);
      const pos = sg.attributes.position, uv = sg.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) + 0.121) / 0.242 * 16, (pos.getY(i) - 0.348) / 0.314 * 19);
      return sg;
    })(), shared.stringMat2 ??= new THREE.MeshStandardMaterial({ map: stringTexture(), transparent: false, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.6, color: 0xf2f0e6 }));
    g.add(strings);
    // Logo de la marque sur le cordage (pochoir), et décor sur la gorge.
    const logo = new THREE.Mesh(shared.logoPlane ??= new THREE.PlaneGeometry(0.11, 0.02), new THREE.MeshStandardMaterial({ map: decalTexture(brand, 'rgba(0,0,0,0)', '#' + new THREE.Color(color ?? 0x2f6fe0).getHexString()), transparent: true, depthWrite: false }));
    logo.position.set(0, 0.505, 0.002);
    g.add(logo);
    // Manche octogonal avec grip, bouchon.
    const shaft = new THREE.Mesh(shared.shaft ??= new THREE.CylinderGeometry(0.0125, 0.0135, 0.05, 8).translate(0, 0.205, 0), paint);
    const handle = new THREE.Mesh(shared.handle2 ??= new THREE.CylinderGeometry(0.0145, 0.0155, 0.19, 8).translate(0, 0.095, 0), gripMat);
    const cap = new THREE.Mesh(shared.buttCap ??= new THREE.CylinderGeometry(0.0172, 0.0165, 0.014, 8).translate(0, 0.004, 0), black);
    g.add(shaft, handle, cap);
  }
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return g;
}

function padelFaceTexture(brand, color) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 320;
  const x = c.getContext('2d');
  const col = '#' + new THREE.Color(color).getHexString();
  x.fillStyle = '#15171a'; x.fillRect(0, 0, 256, 320);
  // Motif graphique : vague de la couleur de la marque, effet carbone.
  for (let i = 0; i < 320; i += 4) { x.fillStyle = i % 8 ? '#191b1f' : '#121316'; x.fillRect(0, i, 256, 2); }
  x.fillStyle = col; x.beginPath(); x.moveTo(0, 210); x.bezierCurveTo(80, 150, 170, 300, 256, 170); x.lineTo(256, 320); x.lineTo(0, 320); x.fill();
  x.fillStyle = 'rgba(255,255,255,0.85)'; x.beginPath(); x.moveTo(0, 225); x.bezierCurveTo(80, 165, 170, 315, 256, 185); x.lineTo(256, 192); x.bezierCurveTo(170, 322, 80, 172, 0, 232); x.fill();
  x.fillStyle = '#ffffff'; x.font = 'italic 800 40px Outfit, Arial'; x.textAlign = 'center';
  x.fillText(brand, 128, 70);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function stringTexture() {
  return shared.stringTex ??= (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d');
    x.clearRect(0, 0, 64, 64);
    x.fillStyle = 'rgba(245,243,232,1)';
    x.fillRect(30, 0, 5, 64); x.fillRect(0, 30, 64, 5);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
  })();
}

// Balle de tennis : feutre jaune fluo, couture blanche en double courbe.
export function ballTexture(color) {
  const key = 'ballTex' + color;
  return shared[key] ??= (() => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 128;
    const x = c.getContext('2d');
    x.fillStyle = color; x.fillRect(0, 0, 256, 128);
    for (let i = 0; i < 5000; i++) { x.fillStyle = Math.random() < 0.5 ? 'rgba(255,255,255,0.08)' : 'rgba(80,90,0,0.08)'; x.fillRect(Math.random() * 256, Math.random() * 128, 1.5, 1.5); }
    x.strokeStyle = 'rgba(250,250,240,0.95)'; x.lineWidth = 5;
    x.beginPath();
    for (let u = 0; u <= 256; u += 2) { const v = 64 + Math.sin(u / 256 * Math.PI * 4) * 30; u ? x.lineTo(u, v) : x.moveTo(u, v); }
    x.stroke();
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
}

function roundedBox(w, h, d, r) {
  const shape = new THREE.Shape();
  const x = -w / 2, y = -d / 2;
  shape.moveTo(x + r, y); shape.lineTo(x + w - r, y); shape.quadraticCurveTo(x + w, y, x + w, y + r);
  shape.lineTo(x + w, y + d - r); shape.quadraticCurveTo(x + w, y + d, x + w - r, y + d);
  shape.lineTo(x + r, y + d); shape.quadraticCurveTo(x, y + d, x, y + d - r);
  shape.lineTo(x, y + r); shape.quadraticCurveTo(x, y, x + r, y);
  return new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false }).rotateX(-Math.PI / 2).translate(0, -h / 2, 0);
}

const templates = {};
export function productMesh(product) {
  templates[product] ??= build(product);
  return templates[product].clone();
}

// Carton de livraison.
export function boxMesh(product) {
  const [w, h, d] = BOX_SIZE[product];
  const tex = boxTexture(product);
  // Relief et rugosité du carton photographié (si disponible), étiquette dessinée par-dessus.
  const relief = pbr('Cardboard002', { repeat: [1, 1] });
  const side = shared['boxMat-' + product] ??= new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85, normalMap: relief?.normalMap ?? null, normalScale: new THREE.Vector2(0.6, 0.6) });
  const plain = shared.boxPlain ??= relief ? Object.assign(relief, { color: new THREE.Color(0xe0c9a8) }) : new THREE.MeshStandardMaterial({ color: 0xc9a26b, roughness: 0.85 });
  const geo = shared['boxGeo-' + product] ??= new RoundedBoxGeometry(w, h, d, 2, 0.008);
  const mesh = new THREE.Mesh(geo, [side, side, plain, plain, side, side]);
  mesh.castShadow = true; mesh.receiveShadow = true;
  // Ruban sur le dessus.
  const tape = new THREE.Mesh(new THREE.PlaneGeometry(0.07, d + 0.002), shared.tape ??= new THREE.MeshStandardMaterial({ color: 0xd8c39a, roughness: 0.4 }));
  tape.rotation.x = -Math.PI / 2; tape.position.y = h / 2 + 0.002;
  mesh.add(tape);
  mesh.userData.size = [w, h, d];
  return mesh;
}
