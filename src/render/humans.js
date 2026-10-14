// Personnages réalistes : modèles MakeHuman (CC0) générés par tools/assets/humans.py, avec un squelette.
// Les os sont tournés à la main chaque image (marche, attente, coup droit…), avec les mêmes angles que les
// anciens personnages : une rotation est exprimée dans le repère du personnage (x vers sa gauche, y vers le
// haut, z devant lui), à partir d'une pose neutre bras le long du corps.
import * as THREE from 'three';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { assets } from './assets.js';

const TOPS = [0xffffff, 0x1f6b4a, 0x2f6fe0, 0xe04a4a, 0xf2c94c, 0x7a4fd6, 0x22252a, 0xff8a3d, 0x3fb7a6, 0xf4a3b8, 0xd9e4f0, 0x9ab8d8];
const HAIR = [0x2b1d14, 0x4a3020, 0x6b4a2a, 0x1a1a1a, 0x8c6239, 0xc9a66b];
const BOTTOMS = [0xffffff, 0x1b2a44, 0x22252a, 0x3a4048, 0x2a4f7a, 0xf2f2ee];
const PLAYERS_M = ['m_player_a', 'm_player_b', 'm_player_c', 'm_player_d', 'm_player_e'];
const PLAYERS_F = ['f_player_a', 'f_player_b', 'f_player_c', 'f_player_d', 'f_player_e'];
const VISITORS = ['m_casual_a', 'm_casual_b', 'f_casual_a', 'm_player_a', 'f_player_a', 'm_player_c', 'f_player_c', 'm_player_e', 'f_player_e'];

// Tenue selon le rôle : modèle, couleur du haut, du bas (null = couleurs d'origine).
function outfit(person, pick) {
  const vip = !!person.cust?.vip;
  switch (person.role) {
    case 'security': return ['m_suit', null, null];
    case 'worker': return ['m_work', null, null];
    case 'reception': return [pick(['f_staff', 'm_staff']), 0x1f6b4a, 0x1b2a44];
    case 'keeper': return ['m_staff', 0x6b7a3a, 0x3a4048];
    case 'barman': return [pick(['m_staff', 'f_staff']), 0x22252a, 0x22252a];
    case 'cook': return ['m_staff', 0xffffff, 0x3a4048];
  }
  if (vip) return [pick(['m_suit', 'f_suit']), null, null];
  const model = person.holdsRacket ? pick(pick([PLAYERS_M, PLAYERS_F])) : pick(VISITORS);
  return [model, pick(TOPS), pick(BOTTOMS)];
}

const prepared = new Map();
// Pose neutre calculée une fois par modèle : bras ramenés le long du corps, doigts légèrement fléchis,
// point d'accroche de la raquette dans la main droite.
function prepare(name) {
  if (prepared.has(name)) return prepared.get(name);
  const tpl = assets.humans[name];
  if (!tpl) return null;
  tpl.updateMatrixWorld(true);
  const bone = n => tpl.getObjectByName(n);
  const worldQ = o => o.getWorldQuaternion(new THREE.Quaternion());
  const worldP = o => o.getWorldPosition(new THREE.Vector3());
  // Rotation q (repère du personnage) appliquée à un os, autour de son articulation : b.q = P⁻¹ · q · P · b.q
  const fix = (b, q) => {
    const P = worldQ(b.parent);
    b.quaternion.copy(P.clone().invert().multiply(q).multiply(P).multiply(b.quaternion));
    tpl.updateMatrixWorld(true);
  };
  for (const [s, sx] of [['l', 1], ['r', -1]]) {
    const up = bone('upperarm_' + s), lo = bone('lowerarm_' + s), hand = bone('hand_' + s);
    const dir = worldP(lo).sub(worldP(up)).normalize();
    fix(up, new THREE.Quaternion().setFromUnitVectors(dir, new THREE.Vector3(0.1 * sx, -1, 0.02).normalize()));
    const dir2 = worldP(hand).sub(worldP(lo)).normalize();
    fix(lo, new THREE.Quaternion().setFromUnitVectors(dir2, new THREE.Vector3(0.04 * sx, -1, 0.1).normalize()));
    // Doigts repliés en douceur (vers la paume, tournée vers le corps).
    for (const f of ['index', 'middle', 'ring', 'pinky']) for (const k of ['01', '02', '03']) {
      const b = bone(`${f}_${k}_${s}`);
      if (b) fix(b, new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), -sx * (k === '01' ? 0.25 : 0.35)));
    }
  }
  // Accroche de la raquette : repère aligné sur celui du personnage, au creux de la main droite.
  const hand = bone('hand_r');
  const grip = new THREE.Object3D();
  grip.name = 'grip_r';
  const gp = worldP(hand).add(new THREE.Vector3(-0.01, -0.085, 0.015));
  hand.add(grip);
  grip.position.copy(hand.worldToLocal(gp));
  grip.quaternion.copy(worldQ(hand).invert());
  const ws = hand.getWorldScale(new THREE.Vector3());
  grip.scale.set(1 / ws.x, 1 / ws.y, 1 / ws.z);
  // Données de chaque os animé : rotation locale neutre et orientation neutre de son parent.
  const joints = {};
  for (const n of ['pelvis', 'spine_01', 'spine_03', 'neck_01', 'thigh_l', 'thigh_r', 'calf_l', 'calf_r', 'upperarm_l', 'upperarm_r', 'lowerarm_l', 'lowerarm_r', 'hand_r', 'foot_l', 'foot_r']) {
    const b = bone(n);
    if (!b) continue;
    const P = worldQ(b.parent);
    joints[n] = { local: b.quaternion.clone(), P, Pinv: P.clone().invert() };
  }
  // Matériaux : cheveux et cils découpés (pas de tri de transparence), ombres sur les grandes pièces.
  tpl.traverse(o => {
    if (!o.isMesh) return;
    const m = o.material, n = m.name;
    if (/^(hair|brows|lashes)/.test(n)) {
      m.transparent = false; m.alphaTest = n.startsWith('hair') ? 0.4 : 0.5; m.alphaToCoverage = true;
      m.side = THREE.DoubleSide; m.depthWrite = true;
    }
    if (n.startsWith('skin')) { m.roughness = 0.62; }
    if (n.startsWith('eyes')) { m.roughness = 0.15; }
    o.castShadow = /^(skin|top|bottom|cloth|hair|shoes)/.test(n);
    o.receiveShadow = false;
    o.frustumCulled = false;
  });
  const box = new THREE.Box3().setFromObject(tpl);
  const data = { joints, height: box.max.y - box.min.y };
  prepared.set(name, data);
  return data;
}

const tinted = new Map();
function tint(mat, color) {
  const k = mat.uuid + ':' + color;
  if (!tinted.has(k)) { const m = mat.clone(); m.color.setHex(color); tinted.set(k, m); }
  return tinted.get(k);
}

// Crée la partie « corps » d'un personnage réaliste, ou null si les modèles ne sont pas chargés.
// Renvoie { body, setPose(angles), hand } ; angles en radians, mêmes conventions que l'ancien rendu.
export function realisticBody(person, rnd) {
  const pick = arr => arr[Math.floor(rnd() * arr.length)];
  const [name, top, bottom] = outfit(person, pick);
  const data = prepare(name);
  if (!data) return null;
  const body = cloneSkinned(assets.humans[name]);
  body.traverse(o => {
    if (!o.isMesh) return;
    const n = o.material.name;
    if (top != null && n.startsWith('top')) o.material = tint(o.material, top);
    if (bottom != null && n.startsWith('bottom')) o.material = tint(o.material, bottom);
    // Cheveux blancs du modèle « bob02 » : teinte au hasard (ou blanc pour les plus âgés).
    if (n.includes('bob02') && !name.endsWith('_e')) o.material = tint(o.material, pick(HAIR));
  });
  const bones = {};
  for (const n of Object.keys(data.joints)) bones[n] = body.getObjectByName(n);
  const q = new THREE.Quaternion(), qa = new THREE.Quaternion(), e = new THREE.Euler();
  const set = (n, x, y, z) => {
    const j = data.joints[n], b = bones[n];
    if (!b) return;
    // Rotation dans le repère du personnage, ordre : z (écart), puis x (avant / arrière), puis y (torsion).
    e.set(x, y, z, 'YXZ');
    qa.setFromEuler(e);
    q.copy(j.Pinv).multiply(qa).multiply(j.P).multiply(j.local);
    b.quaternion.copy(q);
  };
  return {
    body,
    hand: body.getObjectByName('grip_r'),
    height: data.height,
    setPose(a) {
      set('thigh_l', a.hipL, 0, 0.02); set('thigh_r', a.hipR, 0, -0.02);
      set('calf_l', a.kneeL, 0, 0); set('calf_r', a.kneeR, 0, 0);
      set('foot_l', -a.kneeL * 0.35 - a.hipL * 0.3, 0, 0); set('foot_r', -a.kneeR * 0.35 - a.hipR * 0.3, 0, 0);
      set('spine_01', a.lean * 0.6, a.twist * 0.5, 0); set('spine_03', a.lean * 0.4, a.twist * 0.5, 0);
      set('pelvis', 0, a.twist * 0.15, 0);
      set('upperarm_l', a.shL, 0, a.shLz); set('upperarm_r', a.shR, 0, a.shRz);
      set('lowerarm_l', a.elL, 0, 0); set('lowerarm_r', a.elR, 0, 0);
      set('neck_01', a.neckX, 0, 0);
    },
  };
}
