// Personnages : corps lisses et stylisés, tenues variées, animations (marche, jeu, coup droit,
// regard vers les rayons, brossage) et bulles de pensée au-dessus de la tête.
import * as THREE from 'three';
import { racketMesh } from './products.js';
import { damp, dampAngle, clamp } from '../core/util.js';
import { realisticBody } from './humans.js';

const SKIN = [0xf3d2b3, 0xe8b894, 0xc98e66, 0x9c6644, 0x6e4630, 0xf7dcc5];
const HAIR = [0x2b1d14, 0x5a3a22, 0x8c6239, 0xd8b26a, 0x1a1a1a, 0xa0522d, 0xc9c9c9];
const TOPS = [0xffffff, 0x1f6b4a, 0x2f6fe0, 0xe04a4a, 0xf2c94c, 0x7a4fd6, 0x15171a, 0xff8a3d, 0x3fb7a6, 0xf4a3b8];
const BOTTOMS = [0xffffff, 0x1b2a44, 0x15171a, 0x3a4048, 0x2a4f7a];

const geo = {};
// Position de la caméra (mise à jour par la boucle de jeu) : les personnages lointains sont simplifiés.
const viewer = new THREE.Vector3();
export const setViewer = v => viewer.copy(v);
const mats = new Map();
const mat = (color, rough = 0.7) => {
  const k = color + ':' + rough;
  if (!mats.has(k)) mats.set(k, new THREE.MeshStandardMaterial({ color, roughness: rough }));
  return mats.get(k);
};

function limb(len, r, material) {
  geo['cap' + len + r] ??= new THREE.CapsuleGeometry(r, len, 6, 14).translate(0, -len / 2 - r * 0.3, 0);
  const m = new THREE.Mesh(geo['cap' + len + r], material);
  m.castShadow = true;
  return m;
}

export function createPersonView(person) {
  const rnd = mulberry(Math.floor(person.seed * 1e9));
  const real = realisticBody(person, mulberry(Math.floor(person.seed * 1e9) + 7));
  if (real) return makeView(person, rnd, real);
  const pick = arr => arr[Math.floor(rnd() * arr.length)];
  // Personnel : tenue de travail selon le poste (ouvriers de chantier compris).
  const UNIFORM = { reception: 0x1f6b4a, keeper: 0x6b7a3a, security: 0x15171a, barman: 0xf2f2f0, cook: 0xffffff, worker: 0xff8c1a };
  const staff = person.role in UNIFORM;
  const vip = !!person.cust?.vip;
  const skin = mat(pick(SKIN), 0.6);
  const hair = mat(pick(HAIR), 0.8);
  const top = mat(staff ? UNIFORM[person.role] : vip ? 0xd4af37 : pick(TOPS), 0.75);
  const bottom = mat(staff ? (person.role === 'worker' ? 0x2f4a6b : 0x1b2a44) : pick(BOTTOMS), 0.75);
  const shoe = mat(staff ? 0x2a2a2a : 0xf4f4f0, 0.5);
  const female = rnd() < 0.48;
  const scale = 0.92 + rnd() * 0.16;

  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  // Bassin (pivot du haut du corps).
  const hips = new THREE.Group(); hips.position.y = 0.92; body.add(hips);
  const pelvis = new THREE.Mesh(geo.pelvis ??= new THREE.CapsuleGeometry(0.15, 0.08, 6, 14).rotateZ(Math.PI / 2), bottom);
  pelvis.scale.set(1, 1, 0.75); pelvis.castShadow = true;
  hips.add(pelvis);
  const torso = new THREE.Mesh(geo.torso ??= new THREE.CapsuleGeometry(0.16, 0.34, 8, 16).translate(0, 0.3, 0), top);
  torso.scale.set(1.05, 1, female ? 0.68 : 0.72); torso.castShadow = true;
  hips.add(torso);
  if (female && !staff && rnd() < 0.6) {
    // Jupe de tennis plissée.
    const skirt = new THREE.Mesh(geo.skirt ??= new THREE.CylinderGeometry(0.16, 0.25, 0.26, 18, 1, true).translate(0, -0.08, 0), mat(bottom.color.getHex(), 0.75));
    skirt.material.side = THREE.DoubleSide;
    skirt.castShadow = true;
    hips.add(skirt);
  }

  const neck = new THREE.Group(); neck.position.y = 0.66; hips.add(neck);
  const neckM = new THREE.Mesh(geo.neck ??= new THREE.CylinderGeometry(0.05, 0.055, 0.1, 10).translate(0, 0.04, 0), skin);
  neck.add(neckM);
  const head = new THREE.Mesh(geo.head ??= new THREE.SphereGeometry(0.115, 24, 18), skin);
  head.scale.set(0.92, 1.08, 1); head.position.y = 0.2; head.castShadow = true;
  neck.add(head);
  // Cheveux : calotte, plus une queue de cheval pour certains.
  const hairCap = new THREE.Mesh(geo.hair ??= new THREE.SphereGeometry(0.122, 24, 14, 0, Math.PI * 2, 0, Math.PI * 0.55), hair);
  hairCap.scale.set(0.95, 1.08, 1.04); hairCap.position.set(0, 0.215, -0.012); hairCap.rotation.x = -0.25;
  neck.add(hairCap);
  if (female && rnd() < 0.7) {
    const tail = new THREE.Mesh(geo.tail ??= new THREE.CapsuleGeometry(0.035, 0.14, 4, 8), hair);
    tail.position.set(0, 0.18, -0.13); tail.rotation.x = 0.5;
    neck.add(tail);
  }
  if (person.role === 'worker' || person.role === 'cook') {
    // Casque de chantier ou toque.
    const helmet = new THREE.Mesh(person.role === 'worker' ? (geo.helmet ??= new THREE.SphereGeometry(0.13, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2)) : (geo.toque ??= new THREE.CylinderGeometry(0.11, 0.1, 0.16, 16)),
      mat(person.role === 'worker' ? 0xffd21a : 0xffffff, 0.5));
    helmet.position.y = person.role === 'worker' ? 0.24 : 0.36;
    helmet.castShadow = true;
    neck.add(helmet);
  } else if (person.role === 'security') {
    // Brassard « Sécurité » : bande jaune sur le bras, oreillette.
    const cap = new THREE.Mesh(geo.secCap ??= new THREE.SphereGeometry(0.122, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x15171a, 0.7));
    cap.position.y = 0.23; cap.scale.set(1, 0.8, 1.05);
    neck.add(cap);
  } else if (vip) {
    // Lunettes de soleil des clients VIP.
    const glasses = new THREE.Mesh(geo.glasses ??= new THREE.BoxGeometry(0.17, 0.035, 0.02), mat(0x111111, 0.2));
    glasses.position.set(0, 0.215, 0.105);
    neck.add(glasses);
  } else if (!staff && rnd() < 0.3) {
    // Casquette ou bandeau.
    const band = new THREE.Mesh(geo.band ??= new THREE.TorusGeometry(0.112, 0.016, 8, 24), mat(0xffffff, 0.8));
    band.rotation.x = Math.PI / 2 - 0.15; band.position.y = 0.25;
    neck.add(band);
  }
  // Yeux discrets.
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(geo.eye ??= new THREE.SphereGeometry(0.012, 8, 6), mat(0x1b1b1b, 0.3));
    eye.position.set(s * 0.04, 0.215, 0.103);
    neck.add(eye);
  }

  const limbs = {};
  for (const [side, sx] of [['L', 1], ['R', -1]]) {
    const shoulder = new THREE.Group(); shoulder.position.set(0.215 * sx, 0.55, 0); hips.add(shoulder);
    const upper = limb(0.2, 0.05, top); shoulder.add(upper);
    const elbow = new THREE.Group(); elbow.position.y = -0.27; shoulder.add(elbow);
    const fore = limb(0.19, 0.042, skin); elbow.add(fore);
    const hand = new THREE.Group(); hand.position.y = -0.27; elbow.add(hand);
    hand.add(new THREE.Mesh(geo.hand ??= new THREE.SphereGeometry(0.045, 12, 10), skin));
    limbs['shoulder' + side] = shoulder; limbs['elbow' + side] = elbow; limbs['hand' + side] = hand;

    const hip = new THREE.Group(); hip.position.set(0.095 * sx, 0.9, 0); body.add(hip);
    const thigh = limb(0.3, 0.07, female && !staff ? skin : bottom); hip.add(thigh);
    const knee = new THREE.Group(); knee.position.y = -0.42; hip.add(knee);
    const shin = limb(0.3, 0.055, staff ? bottom : skin); knee.add(shin);
    const foot = new THREE.Mesh(geo.foot ??= new THREE.CapsuleGeometry(0.05, 0.12, 4, 10).rotateX(Math.PI / 2).translate(0, -0.42, 0.04), shoe);
    foot.castShadow = true;
    knee.add(foot);
    limbs['hip' + side] = hip; limbs['knee' + side] = knee;
  }

  root.scale.setScalar(scale);
  root.traverse(o => { if (o.isMesh) o.receiveShadow = false; });
  root.remove(body);
  const L = limbs;
  return makeView(person, rnd, {
    body, hand: limbs.handR, scale,
    setPose(a) {
      L.hipL.rotation.x = a.hipL; L.hipR.rotation.x = a.hipR;
      L.kneeL.rotation.x = a.kneeL; L.kneeR.rotation.x = a.kneeR;
      L.shoulderL.rotation.x = a.shL; L.shoulderR.rotation.x = a.shR;
      L.shoulderL.rotation.z = a.shLz; L.shoulderR.rotation.z = a.shRz;
      L.elbowL.rotation.x = a.elL; L.elbowR.rotation.x = a.elR;
      hips.rotation.y = a.twist; hips.rotation.x = a.lean;
      neck.rotation.x = a.neckX;
    },
  });
}

// Partie commune aux deux rendus (réaliste ou simplifié) : déplacement, animations, accessoires, bulles.
// rig : { body (groupe du corps), hand (repère de la main droite), setPose(angles), scale? }
function makeView(person, rnd, rig) {
  const pick = arr => arr[Math.floor(rnd() * arr.length)];
  const root = new THREE.Group();
  root.add(rig.body);
  if (!rig.scale) root.scale.setScalar(0.95 + rnd() * 0.1);
  else root.scale.setScalar(rig.scale);

  // Raquette dans la main droite (visible sur les courts et à l'arrivée des joueurs).
  let racket = null;
  if (person.holdsRacket) {
    const padel = person.cust?.sport === 'padel';
    racket = racketMesh(padel, pick(padel ? [0xc8f04a, 0x7a4fd6, 0xff8a3d] : [0x2f6fe0, 0xe8a21a, 0xd63a3a, 0x18191c, 0xff5fa2]));
    racket.rotation.x = Math.PI / 2;
    racket.position.set(0, -0.02, 0.02);
    rig.hand.add(racket);
  }
  // Brosse de l'agent d'entretien.
  if (person.role === 'keeper') {
    const broom = new THREE.Group();
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.4, 8), mat(0x9b7a4a, 0.6));
    stick.position.y = -0.5;
    const brush = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.14), mat(0x3a3a3a, 0.9));
    brush.position.y = -1.2;
    broom.add(stick, brush);
    broom.rotation.x = 0.5;
    rig.hand.add(broom);
  }

  // Angles courants (lissés) de chaque articulation.
  const a = { hipL: 0, hipR: 0, kneeL: 0, kneeR: 0, shL: 0, shR: 0, shLz: 0.06, shRz: -0.06, elL: -0.25, elR: -0.25, twist: 0, lean: 0, neckX: 0 };
  const view = {
    root, racket, phase: rnd() * 10, speed: 0,
    swingT: -1, lastX: person.x, lastZ: person.z, offsetX: 0, offsetZ: 0, lookYaw: 0,
    bubble: null, bubbleT: 0, breath: rnd() * 6,
    swing() { this.swingT = 0; },
    update(dt, p) {
      // Vitesse mesurée à partir du déplacement réel.
      const vx = (p.x - this.lastX) / Math.max(dt, 1e-4), vz = (p.z - this.lastZ) / Math.max(dt, 1e-4);
      this.lastX = p.x; this.lastZ = p.z;
      root.visible = !p.hidden;
      if (p.hidden) return;
      const sp = Math.min(3, Math.hypot(vx, vz));
      this.speed = damp(this.speed, sp, 10, dt);
      root.position.set(p.x + this.offsetX, 0, p.z + this.offsetZ);
      // Niveau de détail : yeux, sourcils, cils et ombre seulement de près.
      const d2 = (root.position.x - viewer.x) ** 2 + (root.position.z - viewer.z) ** 2;
      const lod = d2 < 14 * 14 ? 0 : d2 < 30 * 30 ? 1 : 2;
      if (lod !== this.lod) { this.lod = lod; rig.setDetail?.(lod); }
      let targetRot = p.rot;
      if (p.look && p.action === 'browse') targetRot = Math.atan2(p.look.x - p.x, p.look.z - p.z);
      root.rotation.y = dampAngle(root.rotation.y, targetRot, 10, dt);

      const walk = clamp(this.speed / 1.4, 0, 1.4);
      this.phase += dt * (2.2 + this.speed * 3.2);
      this.breath += dt * 1.6;
      const s = Math.sin(this.phase);
      let hipL = s * 0.55 * walk, hipR = -s * 0.55 * walk;
      let kneeL = Math.max(0, -Math.cos(this.phase)) * 0.8 * walk, kneeR = Math.max(0, Math.cos(this.phase)) * 0.8 * walk;
      let shL = -s * 0.45 * walk, shR = s * 0.45 * walk, elL = -0.25 - walk * 0.15, elR = -0.25 - walk * 0.15;
      let shLz = 0.06, shRz = -0.06;
      let bob = Math.abs(Math.cos(this.phase)) * 0.035 * walk;
      let twist = -s * 0.08 * walk, lean = 0.03 * walk + Math.sin(this.breath) * 0.012 * (1 - walk);
      let neckX = 0;

      if (p.action === 'play') {
        // Position d'attente : genoux fléchis, raquette devant.
        const ready = 1 - Math.min(1, walk);
        kneeL += 0.35 * ready; kneeR += 0.35 * ready; hipL -= 0.2 * ready; hipR -= 0.2 * ready;
        lean += 0.18 * ready; bob -= 0.06 * ready;
        shR = -0.7; elR = -0.9; shL = -0.4; elL = -0.8;
        // Petit sautillement.
        bob += Math.abs(Math.sin(this.phase * 1.8)) * 0.025 * ready;
      } else if (p.action === 'browse') {
        shR = -1.0 + Math.sin(this.phase * 0.7) * 0.15; elR = -0.4;
        neckX = 0.15;
      } else if (p.action === 'clean') {
        const b = Math.sin(this.phase * 1.4);
        shR = -0.6 + b * 0.35; shL = -0.6 + b * 0.35; elR = -0.5; elL = -0.5; lean += 0.2;
      } else if (p.action === 'serve') {
        // Service au comptoir : bras tendus, petit mouvement.
        const b = Math.sin(this.phase * 1.3);
        shR = -0.9 + b * 0.2; elR = -0.6; shL = -0.4; elL = -1.0;
      } else if (p.action === 'hammer') {
        const b = Math.sin(this.phase * 3.2);
        shR = -1.6 + Math.max(0, b) * 1.2; elR = -0.4; shL = -0.6; elL = -0.6; lean += 0.15;
      } else if (p.role === 'reception' || p.role === 'barman' || p.role === 'cook') {
        shR = -0.35; shL = -0.35; elR = -1.2; elL = -1.2;
      } else if (p.role === 'security') {
        // Mains jointes devant soi.
        shR = -0.25; shL = -0.25; elR = -1.0; elL = -1.0; shLz = -0.25; shRz = 0.25;
      } else if (person.holdsRacket && walk < 0.2) {
        // Raquette tenue le long du corps, coude un peu plié.
        elR = -0.5;
      }

      // Coup droit : armé puis frappe de droite à gauche.
      if (this.swingT >= 0) {
        this.swingT += dt;
        const t = this.swingT / 0.55;
        if (t >= 1) this.swingT = -1;
        else {
          twist = t < 0.4 ? -0.9 * (t / 0.4) : -0.9 + 1.8 * Math.min(1, (t - 0.4) / 0.35);
          shR = -1.2; elR = -0.3; shRz = t < 0.4 ? -0.9 : 0.4;
        }
      }

      a.hipL = damp(a.hipL, -hipL, 14, dt); a.hipR = damp(a.hipR, -hipR, 14, dt);
      a.kneeL = damp(a.kneeL, kneeL, 14, dt); a.kneeR = damp(a.kneeR, kneeR, 14, dt);
      a.shL = damp(a.shL, shL, 12, dt); a.shR = damp(a.shR, shR, 16, dt);
      a.shLz = damp(a.shLz, shLz, 12, dt); a.shRz = damp(a.shRz, shRz, 16, dt);
      a.elL = damp(a.elL, elL, 12, dt); a.elR = damp(a.elR, elR, 12, dt);
      a.twist = damp(a.twist, twist, 16, dt); a.lean = damp(a.lean, lean, 8, dt);
      a.neckX = damp(a.neckX, neckX, 6, dt);
      rig.setPose(a);
      rig.body.position.y = bob;

      if (this.bubble) {
        this.bubbleT -= dt;
        this.bubble.material.opacity = clamp(this.bubbleT / 0.4, 0, 1);
        this.bubble.position.y = 2.15 + (1 - clamp(this.bubbleT / 3, 0, 1)) * 0.15;
        if (this.bubbleT <= 0) { root.remove(this.bubble); this.bubble.material.map.dispose(); this.bubble.material.dispose(); this.bubble = null; }
      }
    },
    say(text, kind) {
      if (this.bubble) { root.remove(this.bubble); this.bubble.material.map.dispose(); this.bubble.material.dispose(); }
      const tex = bubbleTexture(text, kind);
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
      const aspect = tex.image.width / tex.image.height;
      sp.scale.set(0.42 * aspect, 0.42, 1);
      sp.position.y = 2.15;
      sp.renderOrder = 10;
      root.add(sp);
      this.bubble = sp; this.bubbleT = 3.2;
    },
  };
  return view;
}

function bubbleTexture(text, kind) {
  const c = document.createElement('canvas');
  const g = c.getContext('2d');
  g.font = '600 34px Outfit, Arial, sans-serif';
  const w = Math.ceil(g.measureText(text).width) + 56, h = 76;
  c.width = w; c.height = h + 16;
  const ctx = c.getContext('2d');
  ctx.font = '600 34px Outfit, Arial, sans-serif';
  const bg = kind === 'good' ? '#e9f8ee' : kind === 'info' ? '#ffffff' : '#fff1ec';
  const edge = kind === 'good' ? '#2e9c5d' : kind === 'info' ? '#9aa5a0' : '#d9673a';
  ctx.fillStyle = bg; ctx.strokeStyle = edge; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.roundRect(2, 2, w - 4, h - 4, 30); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w / 2 - 12, h - 3); ctx.lineTo(w / 2, h + 12); ctx.lineTo(w / 2 + 12, h - 3); ctx.fill();
  ctx.fillStyle = '#1b2420'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, w / 2, h / 2);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function mulberry(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
