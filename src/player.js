// Le héros : un petit chevalier fait de cubes, animé par code (marche, course, saut, coup d'épée).
import * as THREE from 'three';
import { clamp, damp, dampAngle, lerp } from './util.js';
import { heightAt } from './world.js';

const WALK = 5.5, RUN = 9, GRAVITY = 30, JUMP = 11;
const ATTACK_TIME = 0.38, ATTACK_HIT = 0.16, ATTACK_RANGE = 2.6;
export const MAX_HP = 6;

function box(w, h, d, color, y = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(0, y, 0);
  const mesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.7 }));
  mesh.castShadow = true;
  return mesh;
}

// Construit le modèle. Les membres sont des pivots placés aux articulations.
function buildKnight() {
  const root = new THREE.Group();
  const body = new THREE.Group();          // tout sauf la racine : on peut le faire rebondir
  root.add(body);

  const tunic = 0x2f5fb3, skin = 0xf2c9a0, metal = 0xc7ccd6, boots = 0x4a3426;

  const hips = new THREE.Group(); hips.position.y = 0.95; body.add(hips);
  const torso = box(0.72, 0.8, 0.42, tunic, 0.4); hips.add(torso);
  const belt = box(0.76, 0.12, 0.46, 0x5b3a1e, 0.06); hips.add(belt);
  const buckle = box(0.14, 0.12, 0.05, 0xf2c94c, 0.06); buckle.position.z = 0.24; hips.add(buckle);
  const chest = box(0.5, 0.36, 0.06, metal, 0.55); chest.position.z = 0.22; hips.add(chest);

  const neck = new THREE.Group(); neck.position.y = 0.82; hips.add(neck);
  const head = box(0.48, 0.48, 0.46, skin, 0.26); neck.add(head);
  const helmet = box(0.54, 0.24, 0.52, metal, 0.48); neck.add(helmet);
  const crest = box(0.08, 0.2, 0.4, 0xd64545, 0.66); neck.add(crest);
  for (const sx of [-1, 1]) {
    const eye = box(0.07, 0.09, 0.02, 0x1d1d2b, 0.28); eye.position.set(0.11 * sx, 0, 0.235); neck.add(eye);
  }

  const cape = box(0.66, 0.9, 0.05, 0xc23b3b, -0.45);
  const capePivot = new THREE.Group(); capePivot.position.set(0, 0.78, -0.24); capePivot.add(cape);
  hips.add(capePivot);

  const limbs = {};
  for (const [name, sx] of [['L', 1], ['R', -1]]) {
    const leg = new THREE.Group(); leg.position.set(0.18 * sx, 0.95, 0); body.add(leg);
    leg.add(box(0.26, 0.6, 0.28, 0x3b3f58, -0.3));
    const boot = box(0.28, 0.32, 0.36, boots, -0.79); boot.position.z = 0.04; leg.add(boot);
    limbs['leg' + name] = leg;

    const arm = new THREE.Group(); arm.position.set(0.47 * sx, 0.72, 0); hips.add(arm);
    arm.add(box(0.22, 0.42, 0.24, tunic, -0.2));
    arm.add(box(0.2, 0.3, 0.22, skin, -0.55));
    limbs['arm' + name] = arm;
  }

  // Épée dans la main droite : la lame pointe vers l'avant (+z) quand le bras pend.
  const sword = new THREE.Group(); sword.position.set(0, -0.68, 0.05); limbs.armR.add(sword);
  const grip = box(0.07, 0.07, 0.3, 0x5b3a1e); sword.add(grip);
  const guard = box(0.36, 0.08, 0.08, 0xf2c94c); guard.position.z = 0.17; sword.add(guard);
  const blade = box(0.1, 0.03, 1.05, 0xe8edf5); blade.position.z = 0.72; sword.add(blade);
  blade.material.metalness = 0.6; blade.material.roughness = 0.25;

  // Bouclier dans la main gauche.
  const shield = box(0.08, 0.62, 0.5, 0x8a5a2b, 0); shield.position.set(0.14, -0.45, 0.08); limbs.armL.add(shield);
  const boss = box(0.04, 0.22, 0.2, 0xf2c94c, 0); boss.position.set(0.19, -0.45, 0.08); limbs.armL.add(boss);

  // Traînée de l'épée pendant le coup.
  const trail = new THREE.Mesh(
    new THREE.RingGeometry(1.0, 2.3, 24, 1, -Math.PI * 0.45, Math.PI * 0.9),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }),
  );
  trail.rotation.x = -Math.PI / 2;
  trail.rotation.z = -Math.PI / 2;   // arc centré devant le héros (+z)
  trail.position.y = 1.2;
  root.add(trail);

  const materials = [];
  root.traverse(o => { if (o.material && o !== trail) materials.push(o.material); });
  return { root, body, hips, neck, capePivot, trail, materials, ...limbs };
}

export class Player {
  constructor(scene) {
    this.model = buildKnight();
    scene.add(this.model.root);
    this.pos = this.model.root.position;
    this.vel = new THREE.Vector3();
    this.reset(new THREE.Vector3(0, 0, 16));
  }

  reset(at) {
    this.pos.copy(at); this.pos.y = heightAt(at.x, at.z);
    this.vel.set(0, 0, 0);
    this.facing = Math.PI;          // regarde vers le centre de l'île
    this.hp = MAX_HP;
    this.onGround = true;
    this.walkPhase = 0;
    this.speedNorm = 0;
    this.attackT = -1;              // -1 : pas d'attaque en cours
    this.attackQueued = false;
    this.hitDone = false;
    this.invuln = 0;
    this.dead = false;
    this.deathT = 0;
    this.model.root.rotation.set(0, this.facing, 0);
    this.model.root.visible = true;
  }

  get alive() { return !this.dead; }

  hurt(amount, from, game) {
    if (this.invuln > 0 || this.dead) return false;
    this.hp = Math.max(0, this.hp - amount);
    this.invuln = 1.0;
    const away = new THREE.Vector3(this.pos.x - from.x, 0, this.pos.z - from.z).normalize();
    this.vel.x = away.x * 12; this.vel.z = away.z * 12; this.vel.y = 6; this.onGround = false;
    game.onPlayerHurt();
    if (this.hp <= 0) { this.dead = true; this.deathT = 0; }
    return true;
  }

  heal(n) { this.hp = Math.min(MAX_HP, this.hp + n); }

  update(dt, input, camYaw, world, game) {
    const m = this.model;
    this.invuln = Math.max(0, this.invuln - dt);

    if (this.dead) {
      // Chute en arrière puis immobile.
      this.deathT += dt;
      m.root.rotation.x = damp(m.root.rotation.x, -Math.PI / 2, 6, dt);
      this.pos.y = damp(this.pos.y, heightAt(this.pos.x, this.pos.z) + 0.3, 6, dt);
      return;
    }

    // --- Déplacement relatif à la caméra ---------------------------------------------
    const fx = -Math.sin(camYaw), fz = -Math.cos(camYaw);   // vers l'avant de la caméra
    const rx = Math.cos(camYaw), rz = -Math.sin(camYaw);    // vers la droite
    let wx = fx * input.moveY + rx * input.moveX;
    let wz = fz * input.moveY + rz * input.moveX;
    const amount = Math.min(1, Math.hypot(wx, wz));
    const attacking = this.attackT >= 0;
    const speed = (input.sprint ? RUN : WALK) * amount * (attacking ? 0.35 : 1);
    if (amount > 0.05) {
      const len = Math.hypot(wx, wz);
      wx /= len; wz /= len;
      if (!attacking) this.facing = dampAngle(this.facing, Math.atan2(wx, wz), 14, dt);
    }
    const accel = this.onGround ? 14 : 4;
    this.vel.x = damp(this.vel.x, wx * speed, accel, dt);
    this.vel.z = damp(this.vel.z, wz * speed, accel, dt);

    // --- Saut et gravité ---------------------------------------------------------------
    if (input.jump && this.onGround) {
      this.vel.y = JUMP; this.onGround = false; game.audio.jump();
    }
    this.vel.y -= GRAVITY * dt;
    this.pos.addScaledVector(this.vel, dt);
    world.resolve(this.pos, 0.45);
    const gy = heightAt(this.pos.x, this.pos.z);
    if (this.pos.y <= gy) {
      if (!this.onGround && this.vel.y < -12) game.dust(this.pos, 8);
      this.pos.y = gy; this.vel.y = 0; this.onGround = true;
    } else if (this.pos.y > gy + 0.15) {
      this.onGround = false;
    } else if (this.vel.y <= 0) {
      this.pos.y = gy; this.vel.y = 0; this.onGround = true;   // colle aux pentes en descente
    }

    // --- Attaque -----------------------------------------------------------------------
    // Un clic pendant la fin d'un coup est mémorisé pour enchaîner.
    if (input.attack) this.attackQueued = !attacking || this.attackT > ATTACK_TIME * 0.5;
    if (this.attackQueued && this.attackT < 0) {
      this.attackQueued = false;
      this.attackT = 0; this.hitDone = false; game.audio.swing();
    }
    if (this.attackT >= 0) {
      this.attackT += dt;
      if (!this.hitDone && this.attackT >= ATTACK_HIT) {
        this.hitDone = true;
        game.playerStrike(this.pos, this.facing, ATTACK_RANGE);
      }
      if (this.attackT >= ATTACK_TIME) this.attackT = -1;
    }

    this.animate(dt);
  }

  animate(dt) {
    const m = this.model;
    const hSpeed = Math.hypot(this.vel.x, this.vel.z);
    this.speedNorm = damp(this.speedNorm, clamp(hSpeed / RUN, 0, 1), 10, dt);
    this.walkPhase += hSpeed * dt * 1.6;
    const s = Math.sin(this.walkPhase), sw = clamp(hSpeed / WALK, 0, 1.3);

    m.root.rotation.y = this.facing;
    m.root.rotation.x = 0;

    let legL = s * 0.8 * sw, legR = -s * 0.8 * sw;
    let armL = -s * 0.6 * sw, armR = s * 0.6 * sw;
    let bob = Math.abs(Math.cos(this.walkPhase)) * 0.08 * sw;
    let lean = this.speedNorm * 0.18;
    let twist = 0;

    if (!this.onGround) {
      legL = -0.6; legR = 0.3; armL = -0.4; armR = -0.4; bob = 0; lean = 0.05;
    } else if (hSpeed < 0.3) {
      bob = Math.sin(performance.now() / 500) * 0.02;   // respiration
    }

    if (this.attackT >= 0) {
      const t = this.attackT / ATTACK_TIME;
      // Armé au-dessus de la tête puis taillade vers l'avant.
      if (t < 0.35) { armR = lerp(0, -2.7, t / 0.35); twist = lerp(0, 0.4, t / 0.35); }
      else { const u = (t - 0.35) / 0.65, e = 1 - Math.pow(1 - u, 3); armR = lerp(-2.7, -0.2, e); twist = lerp(0.4, -0.5, e); }
      armL = -0.5;
      const flash = t > 0.35 && t < 0.8 ? 1 - Math.abs((t - 0.55) / 0.25) : 0;
      m.trail.material.opacity = clamp(flash, 0, 1) * 0.55;
    } else {
      m.trail.material.opacity = 0;
    }

    m.legL.rotation.x = damp(m.legL.rotation.x, legL, 18, dt);
    m.legR.rotation.x = damp(m.legR.rotation.x, legR, 18, dt);
    m.armL.rotation.x = damp(m.armL.rotation.x, armL, 18, dt);
    m.armR.rotation.x = this.attackT >= 0 ? armR : damp(m.armR.rotation.x, armR, 18, dt);
    m.hips.rotation.y = damp(m.hips.rotation.y, twist, 20, dt);
    m.hips.rotation.x = damp(m.hips.rotation.x, lean, 8, dt);
    m.body.position.y = bob;
    m.capePivot.rotation.x = damp(m.capePivot.rotation.x, 0.15 + this.speedNorm * 0.9 + (this.onGround ? 0 : 0.5), 6, dt);

    // Clignote quand il est invulnérable après un coup.
    const blink = this.invuln > 0 && Math.floor(this.invuln * 14) % 2 === 0;
    for (const mat of m.materials) mat.emissive?.setRGB(blink ? 0.6 : 0, 0, 0);
  }
}
