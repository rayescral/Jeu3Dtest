// Personnages : corps humain animé en capture de mouvement (X Bot, Mixamo), habillé par zones
// (polo, short ou jupe, chaussettes, chaussures, peau), cheveux et visage, raquette dans la main droite.
// Animations : repos, marche, course (capture), plus postures de jeu, coup droit, regard vers les rayons
// et brossage, ajoutés par-dessus. Bulles de pensée au-dessus de la tête.
import * as THREE from 'three';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { racketMesh } from './products.js';
import { damp, dampAngle, clamp } from '../core/util.js';

const SKIN = [0xf1c9a5, 0xe0ac87, 0xc68863, 0x9a6440, 0x6b432a, 0xf6d8bf];
const HAIR = [0x2a1c12, 0x4b3020, 0x7a5232, 0xc9a25a, 0x161616, 0x8a3c1c, 0xb9b4ac];
const TOPS = [0xffffff, 0x1f6b4a, 0x2f6fe0, 0xd94545, 0xf2c94c, 0x7a4fd6, 0x1c1f24, 0xff8a3d, 0x3fb7a6, 0xf4a3b8, 0x9ad0ff];
const BOTTOMS = [0xffffff, 0x1b2a44, 0x16181c, 0x3a4048, 0x2a4f7a, 0xf2f2f2];
const SHOES = [0xf4f4f0, 0xf4f4f0, 0xe8e8e8, 0x1c1f24, 0x2f6fe0];

const CURL = 1;
let BASE = null;   // { scene, clips, height, cuts }

// Position de chaque sommet dans la pose de repos (en T, en mètres) : sert à découper les vêtements
// par des lignes nettes (manches, col, taille, short, chaussettes) calculées dans le fragment shader.
function bindAttribute(mesh) {
  const pos = mesh.geometry.attributes.position;
  const out = new Float32Array(pos.count * 3), v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    mesh.applyBoneTransform(i, v);
    v.applyMatrix4(mesh.matrixWorld);
    v.toArray(out, i * 3);
  }
  mesh.geometry.setAttribute('aBind', new THREE.BufferAttribute(out, 3));
}

// Matériau habillé : un seul programme partagé, des couleurs et coupes propres à chaque personne.
// Couleurs : 0 peau, 1 haut, 2 bas, 3 chaussettes, 4 chaussures.
function outfitMaterial(colors, cut) {
  const m = new THREE.MeshStandardMaterial({ roughness: 0.62, metalness: 0 });
  const uniforms = {
    uColors: { value: colors.map(c => new THREE.Color(c)) },
    uCutA: { value: new THREE.Vector4(cut.neck, cut.sleeve, cut.waist, cut.shorts) },
    uCutB: { value: new THREE.Vector4(cut.sock, cut.shoe, cut.wrist, 0) },
  };
  m.userData.uniforms = uniforms;
  m.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec3 aBind;\nvarying vec3 vBind;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBind = aBind;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 uColors[5];\nuniform vec4 uCutA;\nuniform vec4 uCutB;\nvarying vec3 vBind;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        float by = vBind.y, bx = abs(vBind.x);
        int zone = 0;
        if (bx > uCutB.z) zone = 0;
        else if (by > uCutA.x) zone = 0;
        else if (bx > uCutA.y) zone = 0;
        else if (by > uCutA.z) zone = 1;
        else if (by > uCutA.w) zone = 2;
        else if (by > uCutB.x) zone = 0;
        else if (by > uCutB.y) zone = 3;
        else zone = 4;
        vec3 rc = zone == 0 ? uColors[0] : zone == 1 ? uColors[1] : zone == 2 ? uColors[2] : zone == 3 ? uColors[3] : uColors[4];
                diffuseColor.rgb *= rc;`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = zone == 4 ? 0.38 : zone == 0 ? 0.5 : 0.82;`);
  };
  m.customProgramCacheKey = () => 'outfit2';
  return m;
}

export function initPeople(assets) {
  const gltf = assets.xbot;
  const scene = gltf.scene;
  scene.updateMatrixWorld(true);
  // Repères de la pose de repos, en mètres.
  const P = n => scene.getObjectByName('mixamorig' + n).getWorldPosition(new THREE.Vector3());
  const hips = P('Hips'), spine = P('Spine1'), neck = P('Neck'), head = P('Head'), top = P('HeadTop_End');
  const knee = P('LeftLeg'), ankle = P('LeftFoot'), arm = P('LeftArm'), fore = P('LeftForeArm'), hand = P('LeftHand');
  scene.traverse(o => { if (o.isSkinnedMesh) { bindAttribute(o); o.frustumCulled = false; } });
  // Volume de la tête et largeur des hanches, mesurés sur le maillage.
  const headBox = new THREE.Box3(), v = new THREE.Vector3();
  let hipW = 0;
  const bind = scene.getObjectByName('Beta_Surface').geometry.attributes.aBind;
  const headFrom = neck.y + (head.y - neck.y) * 0.6;
  for (let i = 0; i < bind.count; i++) {
    v.fromBufferAttribute(bind, i);
    if (v.y > headFrom) headBox.expandByPoint(v);
    if (Math.abs(v.y - hips.y) < 0.04 && Math.abs(v.x) < 0.3) hipW = Math.max(hipW, Math.abs(v.x));
  }
  BASE = {
    headBox, hipW,
    scene, clips: Object.fromEntries(gltf.animations.map(c => [c.name, c])), height: top.y,
    marks: { hips, spine, neck, head, knee, ankle, arm, fore, hand },
  };
}

// Coupes de vêtements, en mètres dans la pose de repos.
function cutsFor(look) {
  const m = BASE.marks;
  const shorts = look.pants ? m.ankle.y + 0.06 : look.skirt ? m.knee.y + (m.hips.y - m.knee.y) * 0.5 : m.knee.y + (m.hips.y - m.knee.y) * 0.32;
  return {
    neck: m.neck.y + (m.head.y - m.neck.y) * 0.15,
    sleeve: look.longSleeve ? Math.abs(m.hand.x) - 0.03 : Math.abs(m.arm.x) + (Math.abs(m.fore.x) - Math.abs(m.arm.x)) * 0.42,
    wrist: Math.abs(m.hand.x) - 0.02,
    waist: m.hips.y + (m.spine.y - m.hips.y) * 0.15,
    shorts,
    sock: look.pants ? m.ankle.y + 0.059 : m.ankle.y + (m.knee.y - m.ankle.y) * 0.24,
    shoe: m.ankle.y + 0.025,
  };
}

const geo = {};
const matCache = new Map();
const mat = (color, rough = 0.7) => {
  const k = color + ':' + rough;
  if (!matCache.has(k)) matCache.set(k, new THREE.MeshStandardMaterial({ color, roughness: rough }));
  return matCache.get(k);
};

// Cheveux, yeux, sourcils et éventuellement casquette ou bandeau, construits dans le repère du corps
// (y vers le haut, z vers l'avant), centrés sur la tête mesurée, puis accrochés à l'os de la tête.
function dressHead(look) {
  const g = new THREE.Group();
  const size = BASE.headBox.getSize(new THREE.Vector3());
  const rx = size.x / 2, ry = size.y / 2, rz = size.z / 2;
  const hair = mat(look.hair, 0.85);
  // Calotte : demi-sphère un peu plus grande que le crâne, basculée vers l'arrière.
  const cap = new THREE.Mesh(geo.hairCap ??= new THREE.SphereGeometry(1, 32, 18, 0, Math.PI * 2, 0, Math.PI * 0.5), hair);
  cap.scale.set(rx * 1.07, ry * 1.04, rz * 1.08);
  cap.position.set(0, ry * 0.02, -rz * 0.05);
  cap.rotation.x = -0.22;
  cap.castShadow = true;
  g.add(cap);
  if (look.long) {
    const back = new THREE.Mesh(geo.hairBack ??= new THREE.SphereGeometry(1, 24, 16), hair);
    back.scale.set(rx * 1.02, ry * 1.05, rz * 0.55);
    back.position.set(0, -ry * 0.35, -rz * 0.55);
    back.castShadow = true;
    g.add(back);
  }
  if (look.ponytail) {
    const tail = new THREE.Mesh(geo.tail ??= new THREE.CapsuleGeometry(0.03, 0.13, 4, 10), hair);
    tail.position.set(0, -ry * 0.1, -rz * 1.2); tail.rotation.x = 0.5;
    tail.castShadow = true;
    g.add(tail);
  }
  // Yeux et sourcils sur l'avant du visage.
  const eyeMat = mat(0x1a1a1a, 0.25), whiteMat = mat(0xf4f4f0, 0.3);
  for (const sd of [-1, 1]) {
    const ex = sd * rx * 0.36, ey = -ry * 0.12, ez = rz * 0.88;
    const white = new THREE.Mesh(geo.eyeW ??= new THREE.SphereGeometry(1, 14, 10), whiteMat);
    white.scale.set(0.014, 0.0095, 0.006); white.position.set(ex, ey, ez);
    const pupil = new THREE.Mesh(geo.eyeP ??= new THREE.SphereGeometry(1, 12, 8), eyeMat);
    pupil.scale.set(0.007, 0.007, 0.004); pupil.position.set(ex, ey, ez + 0.004);
    const brow = new THREE.Mesh(geo.brow ??= new THREE.BoxGeometry(0.032, 0.0055, 0.008), hair);
    brow.position.set(ex, ey + 0.026, ez - 0.004); brow.rotation.z = sd * -0.12;
    g.add(white, pupil, brow);
  }
  if (look.headwear === 'cap') {
    const capMat = mat(look.capColor, 0.75);
    const crown = new THREE.Mesh(geo.capCrown ??= new THREE.SphereGeometry(1, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2), capMat);
    crown.scale.set(rx * 1.14, ry * 0.85, rz * 1.14); crown.position.set(0, ry * 0.12, -rz * 0.04);
    const visor = new THREE.Mesh(geo.visor ??= new THREE.CylinderGeometry(1, 1, 0.008, 24, 1, false, -Math.PI / 2, Math.PI), capMat);
    visor.scale.set(rx * 0.95, 1, rz * 0.8); visor.position.set(0, ry * 0.14, rz * 0.75); visor.rotation.x = 0.14;
    crown.castShadow = visor.castShadow = true;
    g.add(crown, visor);
  } else if (look.headwear === 'band') {
    const band = new THREE.Mesh(geo.band ??= new THREE.TorusGeometry(1, 0.11, 8, 32), mat(0xffffff, 0.8));
    band.scale.set(rx * 1.03, rz * 1.06, rx); band.rotation.x = Math.PI / 2 - 0.2; band.position.set(0, ry * 0.3, 0);
    g.add(band);
  }
  return g;
}

export function createPersonView(person) {
  const rnd = mulberry(Math.floor(person.seed * 1e9));
  const pick = arr => arr[Math.floor(rnd() * arr.length)];
  const staff = person.role === 'reception' || person.role === 'keeper';
  const female = rnd() < 0.5;
  const skin = pick(SKIN);
  const top = staff ? (person.role === 'reception' ? 0x1f6b4a : 0x55603a) : pick(TOPS);
  const bottom = staff ? 0x1b2a44 : pick(BOTTOMS);
  const look = {
    hair: pick(HAIR), long: female && rnd() < 0.55, ponytail: female && rnd() < 0.5,
    headwear: !staff && rnd() < 0.18 ? 'cap' : !staff && rnd() < 0.12 ? 'band' : null, capColor: pick(TOPS),
    pants: staff || rnd() < 0.12, longSleeve: person.role === 'keeper' || rnd() < 0.08,
  };
  look.skirt = female && !staff && !look.pants && rnd() < 0.55;

  const root = new THREE.Group();
  const body = cloneSkinned(BASE.scene);
  root.add(body);
  // Taille et carrure variées.
  const height = (female ? 1.62 : 1.76) + (rnd() - 0.5) * 0.14;
  const s = height / BASE.height;
  body.scale.setScalar(s);

  const colors = [skin, top, bottom, staff ? 0x1b2a44 : 0xf4f4f0, staff ? 0x2a2a2a : pick(SHOES)];
  const material = outfitMaterial(colors, cutsFor(look));
  body.traverse(o => { if (o.isSkinnedMesh) { o.material = material; o.castShadow = true; o.receiveShadow = false; } });

  const bone = n => body.getObjectByName('mixamorig' + n);
  const bones = {
    hips: bone('Hips'), spine: bone('Spine'), spine1: bone('Spine1'), spine2: bone('Spine2'), neck: bone('Neck'), head: bone('Head'),
    armR: bone('RightArm'), foreR: bone('RightForeArm'), handR: bone('RightHand'),
    armL: bone('LeftArm'), foreL: bone('LeftForeArm'), handL: bone('LeftHand'),
    upLegL: bone('LeftUpLeg'), upLegR: bone('RightUpLeg'), legL: bone('LeftLeg'), legR: bone('RightLeg'),
  };
  // Accessoires : placés dans la pose de repos (repère du corps, en mètres du modèle de base),
  // puis rattachés à l'os sans changer leur position (ils suivent alors l'animation).
  body.updateMatrixWorld(true);
  const attach = (b, obj, pos) => {
    obj.position.copy(pos).multiplyScalar(s);
    obj.scale.multiplyScalar(s);
    obj.updateMatrixWorld(true);
    b.attach(obj);
  };
  attach(bones.head, dressHead(look), BASE.headBox.getCenter(new THREE.Vector3()));

  // Jupe pour une partie des joueuses.
  if (look.skirt) {
    const w = BASE.hipW;
    const skirt = new THREE.Mesh(geo.skirt ??= new THREE.CylinderGeometry(1, 1.45, 1, 24, 1, true),
      new THREE.MeshStandardMaterial({ color: bottom, roughness: 0.75, side: THREE.DoubleSide }));
    skirt.scale.set(w * 1.02, 0.24, w * 0.78);
    skirt.castShadow = true;
    const holder = new THREE.Group(); holder.add(skirt);
    const hp = BASE.marks.hips;
    attach(bones.hips, holder, new THREE.Vector3(hp.x, hp.y - 0.1, hp.z));
  }

  // Raquette tenue dans la main droite : le manche traverse la paume (de l'auriculaire vers l'index),
  // le tamis dans le prolongement de la paume (prise « eastern »), les doigts refermés sur le manche.
  const handR = BASE.marks.hand.clone(); handR.x = -handR.x;
  const curl = [];
  if (person.holdsRacket) {
    const wp = n => bone(n).getWorldPosition(new THREE.Vector3());
    const wrist = wp('RightHand'), mid = wp('RightHandMiddle1'), idx = wp('RightHandIndex1'), pinky = wp('RightHandPinky1');
    const fingers = mid.clone().sub(wrist).normalize();
    const axis = idx.clone().sub(pinky).normalize();
    const yR = axis.clone().addScaledVector(fingers, 0.25).normalize();        // manche → tamis
    const zR = new THREE.Vector3().crossVectors(fingers, yR).normalize();       // normale de la paume
    const xR = new THREE.Vector3().crossVectors(yR, zR);
    const racket = new THREE.Group();
    const r = racketMesh(person.cust?.sport === 'padel');
    r.position.y = -0.06;
    racket.add(r);
    racket.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(xR, yR, zR));
    const grip = wrist.clone().lerp(mid, 0.75).divideScalar(s);
    racket.position.set(0, 0, 0);
    attach(bones.handR, racket, grip);
    // Doigts refermés : rotation autour de l'axe index → auriculaire, exprimée dans le repère de chaque phalange.
    const wq = new THREE.Quaternion();
    for (const f of ['Index', 'Middle', 'Ring', 'Pinky', 'Thumb']) for (const k of [1, 2, 3]) {
      const b = bone('RightHand' + f + k);
      if (!b) continue;
      b.getWorldQuaternion(wq);
      const local = axis.clone().applyQuaternion(wq.invert());
      const ang = f === 'Thumb' ? (k === 1 ? 0 : 0.5) : [0, 1.25, 1.35, 0.9][k];
      curl.push([b, local, ang]);
    }
    // Avant-bras tourné pour présenter le tamis vers l'avant.
    bones.handR.getWorldQuaternion(wq);
    curl.push([bones.foreR, fingers.clone().applyQuaternion(bones.foreR.getWorldQuaternion(new THREE.Quaternion()).invert()), 1.3]);
  }
  // Brosse de l'agent d'entretien.
  if (person.role === 'keeper') {
    const broom = new THREE.Group();
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.4, 8), mat(0x9b7a4a, 0.6));
    stick.position.y = -0.55;
    const brush = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.14), mat(0x3a3a3a, 0.9));
    brush.position.y = -1.25;
    broom.add(stick, brush);
    broom.rotation.z = -Math.PI / 2;
    attach(bones.handR, broom, handR.clone().add(new THREE.Vector3(-0.075, -0.03, 0)));
  }

  // Animations capturées.
  const mixer = new THREE.AnimationMixer(body);
  const actions = {};
  for (const name of ['idle', 'walk', 'run']) {
    actions[name] = mixer.clipAction(BASE.clips[name]);
    actions[name].play();
    actions[name].setEffectiveWeight(name === 'idle' ? 1 : 0);
  }
  mixer.update(rnd() * 2);
  const weights = { idle: 1, walk: 0, run: 0 };
  const q = new THREE.Quaternion(), e = new THREE.Euler();
  const addRot = (b, x, y, z) => { if (!b || (!x && !y && !z)) return; q.setFromEuler(e.set(x, y, z)); b.quaternion.multiply(q); };

  const view = {
    root, phase: rnd() * 10, speed: 0, swingT: -1, lastX: person.x, lastZ: person.z, offsetX: 0, offsetZ: 0,
    bubble: null, bubbleT: 0, stance: 0, browse: 0, clean: 0, desk: 0,
    swing() { this.swingT = 0; },
    update(dt, p) {
      const vx = (p.x + this.offsetX - this.lastX) / Math.max(dt, 1e-4), vz = (p.z + this.offsetZ - this.lastZ) / Math.max(dt, 1e-4);
      this.lastX = p.x + this.offsetX; this.lastZ = p.z + this.offsetZ;
      this.speed = damp(this.speed, Math.min(4, Math.hypot(vx, vz)), 8, dt);
      root.position.set(p.x + this.offsetX, 0, p.z + this.offsetZ);
      let targetRot = p.rot;
      if (p.look && p.action === 'browse') targetRot = Math.atan2(p.look.x - p.x, p.look.z - p.z);
      root.rotation.y = dampAngle(root.rotation.y, targetRot, 10, dt);

      // Mélange repos / marche / course selon la vitesse réelle.
      const sp = this.speed;
      const wWalk = clamp(sp / 0.6, 0, 1) * (1 - clamp((sp - 2.2) / 1.2, 0, 1));
      const wRun = clamp((sp - 2.2) / 1.2, 0, 1);
      const wIdle = 1 - Math.max(wWalk, wRun);
      for (const [k, w] of [['idle', wIdle], ['walk', wWalk], ['run', wRun]]) {
        weights[k] = damp(weights[k], w, 10, dt);
        actions[k].setEffectiveWeight(weights[k]);
      }
      actions.walk.timeScale = clamp(sp / 1.35, 0.6, 1.6);
      actions.run.timeScale = clamp(sp / 3.4, 0.8, 1.4);
      mixer.update(dt);

      // Postures ajoutées par-dessus la capture de mouvement.
      this.stance = damp(this.stance, p.action === 'play' ? 1 : 0, 6, dt);
      this.browse = damp(this.browse, p.action === 'browse' ? 1 : 0, 6, dt);
      this.clean = damp(this.clean, p.action === 'clean' ? 1 : 0, 6, dt);
      this.desk = damp(this.desk, p.role === 'reception' ? 1 : 0, 6, dt);
      const st = this.stance * (1 - clamp(sp / 1.5, 0, 1));
      if (st > 0.01) {
        // Attente de la balle : buste penché, genoux fléchis, raquette devant.
        addRot(bones.spine, 0.28 * st, 0, 0);
        addRot(bones.upLegL, -0.45 * st, 0, 0); addRot(bones.upLegR, -0.45 * st, 0, 0);
        addRot(bones.legL, 0.6 * st, 0, 0); addRot(bones.legR, 0.6 * st, 0, 0);
        addRot(bones.armR, 0.9 * st, 0, 0.35 * st); addRot(bones.foreR, 0, 0, -0.6 * st);
        addRot(bones.armL, 0.6 * st, 0, -0.3 * st); addRot(bones.foreL, 0, 0, 0.7 * st);
        bones.hips.position.y -= 6 * st;
      }
      if (this.browse > 0.01) {
        addRot(bones.armR, 1.0 * this.browse, 0, 0.2 * this.browse);
        addRot(bones.neck, 0.15 * this.browse, 0, 0);
      }
      if (this.clean > 0.01) {
        const b = Math.sin(performance.now() / 260);
        addRot(bones.spine, 0.35 * this.clean, 0, 0);
        addRot(bones.armR, (0.9 + b * 0.35) * this.clean, 0, 0);
        addRot(bones.armL, (0.9 + b * 0.35) * this.clean, 0, 0);
      }
      if (this.desk > 0.01) {
        addRot(bones.armR, 0.7 * this.desk, 0, 0); addRot(bones.foreR, 0, 0, -0.9 * this.desk);
        addRot(bones.armL, 0.7 * this.desk, 0, 0); addRot(bones.foreL, 0, 0, 0.9 * this.desk);
      }
      // Coup droit : armé (bras en arrière, buste tourné) puis frappe vers l'avant.
      if (this.swingT >= 0) {
        this.swingT += dt;
        const t = this.swingT / 0.6;
        if (t >= 1) this.swingT = -1;
        else {
          const prep = t < 0.4 ? t / 0.4 : 1 - (t - 0.4) / 0.6;
          const hit = t < 0.4 ? 0 : Math.sin(((t - 0.4) / 0.6) * Math.PI);
          addRot(bones.spine1, 0, -0.7 * prep + 0.6 * hit, 0);
          addRot(bones.armR, 0.4 * hit, 0, -0.9 * prep + 0.5 * hit);
          addRot(bones.foreR, 0, 0, -0.3 * prep);
        }
      }

      for (const [b, ax, ang] of curl) b.quaternion.multiply(q.setFromAxisAngle(ax, ang * CURL));

      if (this.bubble) {
        this.bubbleT -= dt;
        this.bubble.material.opacity = clamp(this.bubbleT / 0.4, 0, 1);
        this.bubble.position.y = height + 0.38 + (1 - clamp(this.bubbleT / 3, 0, 1)) * 0.15;
        if (this.bubbleT <= 0) { root.remove(this.bubble); this.bubble.material.map.dispose(); this.bubble.material.dispose(); this.bubble = null; }
      }
    },
    say(text, kind) {
      if (this.bubble) { root.remove(this.bubble); this.bubble.material.map.dispose(); this.bubble.material.dispose(); }
      const tex = bubbleTexture(text, kind);
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
      sp.scale.set(0.42 * tex.image.width / tex.image.height, 0.42, 1);
      sp.position.y = height + 0.38;
      sp.renderOrder = 10;
      root.add(sp);
      this.bubble = sp; this.bubbleT = 3.2;
    },
    dispose() { mixer.stopAllAction(); material.dispose(); },
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
