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
  racket: [0.36, 0.2, 0.78], padelballs: [0.5, 0.32, 0.36], padelracket: [0.5, 0.2, 0.6], cap: [0.5, 0.28, 0.4],
};

// Encombrement d'un article sur l'étagère (largeur, profondeur) pour l'agencement.
export const ITEM_FOOTPRINT = {
  balls: [0.11, 0.11], water: [0.085, 0.085], iso: [0.085, 0.085], grip: [0.1, 0.06],
  racket: [0.36, 0.08], padelballs: [0.11, 0.11], padelracket: [0.4, 0.08], cap: [0.24, 0.24],
};

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
    case 'racket':
    case 'padelracket':
      g.add(racketMesh(product === 'padelracket'));
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
export function racketMesh(padel = false) {
  const g = new THREE.Group();
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
    const stripe = new THREE.Mesh(shared.padelStripe ??= new THREE.TorusGeometry(0.14, 0.008, 8, 40), shared.lime ??= std(0xc8f04a, { roughness: 0.4 }));
    stripe.scale.set(0.93, 1.07, 1); stripe.position.set(0, 0.36, 0.0);
    const handle = new THREE.Mesh(shared.padelHandle ??= new THREE.CylinderGeometry(0.017, 0.019, 0.16, 12), shared.gripMat ??= std(0x222222, { roughness: 0.9 }));
    handle.position.y = 0.11;
    g.add(head, stripe, handle);
  } else {
    const frame = new THREE.Mesh(shared.frame ??= new THREE.TorusGeometry(0.13, 0.011, 10, 48), shared.frameMat ??= new THREE.MeshStandardMaterial({ color: 0x2f6fe0, roughness: 0.3 }));
    frame.scale.set(0.8, 1.05, 1); frame.position.y = 0.47;
    const strings = new THREE.Mesh(shared.strings ??= new THREE.CircleGeometry(0.128, 32), shared.stringMat ??= new THREE.MeshStandardMaterial({
      map: stringTexture(), transparent: true, side: THREE.DoubleSide, roughness: 0.6, depthWrite: false,
    }));
    strings.scale.set(0.8, 1.05, 1); strings.position.y = 0.47;
    const throatGeo = shared.throat ??= new THREE.CylinderGeometry(0.008, 0.01, 0.17, 8);
    for (const s of [-1, 1]) {
      const t = new THREE.Mesh(throatGeo, shared.frameMat);
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
