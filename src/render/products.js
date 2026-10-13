// Modèles 3D des produits de la boutique et des cartons de livraison.
// Géométries et matériaux sont partagés : chaque article ne coûte qu'un objet léger.
import * as THREE from 'three';
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
      const lbl = productLabel(product);
      const body = new THREE.Mesh(shared.tube ??= new THREE.CylinderGeometry(0.038, 0.038, 0.24, 20, 1, true),
        new THREE.MeshStandardMaterial({ map: lbl, roughness: 0.3, side: THREE.DoubleSide }));
      body.position.y = 0.12;
      const cap = new THREE.Mesh(shared.tubeCap ??= new THREE.CylinderGeometry(0.041, 0.041, 0.025, 20), shared.white ??= std(0xf5f5f2, { roughness: 0.4 }));
      cap.position.y = 0.245;
      const bottom = new THREE.Mesh(shared.tubeBottom ??= new THREE.CylinderGeometry(0.039, 0.039, 0.01, 20), shared.metal ??= shine(std(0xb8bcc2, { metalness: 0.8, roughness: 0.3 })));
      bottom.position.y = 0.005;
      g.add(body, cap, bottom);
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

// Raquette : cadre ovale, cœur, manche et cordage. Debout, tête vers le haut.
// color : couleur de la marque ; key : modèle (pour partager les matériaux).
export function racketMesh(padel = false, color = null, key = null) {
  const g = new THREE.Group();
  const accent = color != null ? (shared['acc' + color] ??= new THREE.MeshStandardMaterial({ color, roughness: 0.3 })) : null;
  if (padel) {
    const shape = new THREE.Shape();
    shape.absellipse(0, 0, 0.13, 0.15, 0, Math.PI * 2);
    const holes = [];
    for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
      if (i * i + j * j > 6) continue;
      const h = new THREE.Path(); h.absarc(i * 0.045, j * 0.05, 0.009, 0, Math.PI * 2, true); holes.push(h);
    }
    shape.holes = holes;
    const head = new THREE.Mesh(shared.padelHead ??= new THREE.ExtrudeGeometry(shape, { depth: 0.035, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 3, curveSegments: 24 }),
      shared.padelMat ??= new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.3 }));
    head.position.set(0, 0.36, -0.017);
    const stripe = new THREE.Mesh(shared.padelStripe ??= new THREE.TorusGeometry(0.14, 0.008, 8, 40), key === 'padelracket' || !accent ? (shared.lime ??= std(0xc8f04a, { roughness: 0.4 })) : accent);
    stripe.scale.set(0.93, 1.07, 1); stripe.position.set(0, 0.36, 0.0);
    const handle = new THREE.Mesh(shared.padelHandle ??= new THREE.CylinderGeometry(0.017, 0.019, 0.16, 12), shared.gripMat ??= std(0x222222, { roughness: 0.9 }));
    handle.position.y = 0.11;
    g.add(head, stripe, handle);
  } else {
    const frameMat = accent ?? (shared.frameMat ??= new THREE.MeshStandardMaterial({ color: 0x2f6fe0, roughness: 0.3 }));
    const frame = new THREE.Mesh(shared.frame ??= new THREE.TorusGeometry(0.13, 0.011, 10, 48), frameMat);
    frame.scale.set(0.8, 1.05, 1); frame.position.y = 0.47;
    const strings = new THREE.Mesh(shared.strings ??= new THREE.CircleGeometry(0.128, 32), shared.stringMat ??= new THREE.MeshStandardMaterial({
      map: stringTexture(), transparent: true, side: THREE.DoubleSide, roughness: 0.6, depthWrite: false,
    }));
    strings.scale.set(0.8, 1.05, 1); strings.position.y = 0.47;
    const throatGeo = shared.throat ??= new THREE.CylinderGeometry(0.008, 0.01, 0.17, 8);
    for (const s of [-1, 1]) {
      const t = new THREE.Mesh(throatGeo, frameMat);
      t.position.set(s * 0.035, 0.27, 0); t.rotation.z = s * 0.28;
      g.add(t);
    }
    const handle = new THREE.Mesh(shared.handle ??= new THREE.CylinderGeometry(0.016, 0.018, 0.2, 8), shared.gripMat ??= std(0x222222, { roughness: 0.9 }));
    handle.position.y = 0.1;
    g.add(frame, strings, handle);
  }
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return g;
}

function stringTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d');
  x.strokeStyle = 'rgba(245,245,235,0.9)'; x.lineWidth = 1.4;
  for (let i = 4; i < 128; i += 8) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 128); x.moveTo(0, i); x.lineTo(128, i); x.stroke(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
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
  const side = shared['boxMat-' + product] ??= new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85 });
  const plain = shared.boxPlain ??= new THREE.MeshStandardMaterial({ color: 0xc9a26b, roughness: 0.85 });
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [side, side, plain, plain, side, side]);
  mesh.castShadow = true; mesh.receiveShadow = true;
  // Ruban sur le dessus.
  const tape = new THREE.Mesh(new THREE.PlaneGeometry(0.07, d + 0.002), shared.tape ??= new THREE.MeshStandardMaterial({ color: 0xd8c39a, roughness: 0.4 }));
  tape.rotation.x = -Math.PI / 2; tape.position.y = h / 2 + 0.002;
  mesh.add(tape);
  mesh.userData.size = [w, h, d];
  return mesh;
}
