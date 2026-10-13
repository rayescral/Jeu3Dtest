// Les slimes : ils errent, repèrent le héros et lui sautent dessus. Le Roi Slime est un slime géant.
import * as THREE from 'three';
import { damp, dampAngle } from './util.js';
import { heightAt } from './world.js';

const GRAVITY = 26;
const bodyGeo = new THREE.SphereGeometry(1, 16, 12);
const eyeGeo = new THREE.SphereGeometry(1, 10, 8);
const eyeWhite = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
const eyeBlack = new THREE.MeshStandardMaterial({ color: 0x111111 });

export class Slime {
  constructor(scene, x, z, { boss = false } = {}) {
    this.boss = boss;
    this.size = boss ? 2.6 : 0.75;
    this.maxHp = boss ? 16 : 3;
    this.hp = this.maxHp;
    this.damage = boss ? 2 : 1;
    this.aggroRange = boss ? 60 : 15;

    const color = boss ? 0x8e44ec : [0x5ad85a, 0x47c7b8, 0x9bd84a][Math.floor(Math.random() * 3)];
    this.mat = new THREE.MeshStandardMaterial({ color, roughness: 0.25, transparent: true, opacity: 0.88 });
    this.group = new THREE.Group();
    this.blob = new THREE.Mesh(bodyGeo, this.mat);
    this.blob.castShadow = true;
    this.blob.position.y = 1;
    this.group.add(this.blob);
    for (const sx of [-1, 1]) {
      const w = new THREE.Mesh(eyeGeo, eyeWhite); w.scale.setScalar(0.2); w.position.set(0.32 * sx, 0.25, 0.85);
      const p = new THREE.Mesh(eyeGeo, eyeBlack); p.scale.setScalar(0.1); p.position.set(0.32 * sx, 0.25, 1.0);
      this.blob.add(w, p);
    }
    if (boss) {
      const crown = new THREE.Group();
      const gold = new THREE.MeshStandardMaterial({ color: 0xf2c94c, metalness: 0.8, roughness: 0.25, flatShading: true });
      crown.add(new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.5, 0.25, 10, 1, true), gold));
      for (let i = 0; i < 5; i++) {
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.3, 4), gold);
        const a = (i / 5) * Math.PI * 2;
        spike.position.set(Math.cos(a) * 0.45, 0.25, Math.sin(a) * 0.45);
        crown.add(spike);
      }
      crown.position.y = 0.95;
      this.blob.add(crown);
    }
    this.group.scale.setScalar(this.size);
    scene.add(this.group);
    this.scene = scene;

    this.pos = this.group.position;
    this.pos.set(x, heightAt(x, z), z);
    this.vel = new THREE.Vector3();
    this.onGround = true;
    this.hopTimer = Math.random() * 1.5;
    this.facing = Math.random() * Math.PI * 2;
    this.squash = 0;
    this.flash = 0;
    this.dead = false;
    this.aggro = false;
    this.hops = 0;
  }

  get radius() { return this.size * 0.95; }

  hit(dmg, from) {
    if (this.dead) return;
    this.hp -= dmg;
    this.flash = 0.15;
    const away = new THREE.Vector3(this.pos.x - from.x, 0, this.pos.z - from.z).normalize();
    const kb = this.boss ? 3 : 9;
    this.vel.set(away.x * kb, this.boss ? 2 : 6, away.z * kb);
    this.onGround = false;
    this.hopTimer = 0.6;
    this.aggro = true;
    if (this.hp <= 0) this.dead = true;
  }

  update(dt, player, world, game) {
    const dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    if (player.alive && dist < this.aggroRange) this.aggro = true;
    if (!player.alive) this.aggro = false;

    if (this.onGround) {
      this.hopTimer -= dt;
      if (this.hopTimer <= 0) {
        let dir;
        if (this.aggro) dir = Math.atan2(dx, dz) + (Math.random() - 0.5) * 0.3;
        else dir = this.facing + (Math.random() - 0.5) * 2;
        this.facing = dir;
        const enraged = this.boss && this.hp <= this.maxHp / 2;
        const hs = this.aggro ? (this.boss ? 7 : 5.5) : 2;
        this.vel.set(Math.sin(dir) * hs, this.boss ? 11 : 7.5, Math.cos(dir) * hs);
        this.onGround = false;
        this.hopTimer = this.aggro ? (this.boss ? (enraged ? 0.5 : 0.9) : 0.35 + Math.random() * 0.4) : 1 + Math.random() * 2;
        this.squash = -0.35;
      }
    } else {
      this.vel.y -= GRAVITY * dt;
      this.pos.addScaledVector(this.vel, dt);
      world.resolve(this.pos, this.radius * 0.8);
      const gy = heightAt(this.pos.x, this.pos.z);
      if (this.pos.y <= gy) {
        this.pos.y = gy;
        this.onGround = true;
        this.vel.set(0, 0, 0);
        this.squash = 0.45;
        this.hops++;
        if (this.boss) game.bossLanded(this);
      }
    }
    if (this.onGround) this.pos.y = heightAt(this.pos.x, this.pos.z);

    // Contact avec le héros.
    if (player.alive && dist < this.radius * 0.85 + 0.45 && Math.abs(player.pos.y + 0.9 - (this.pos.y + this.size)) < this.size + 1) {
      player.hurt(this.damage, this.pos, game);
    }

    // Apparence : écrasement à l'atterrissage, étirement en l'air, regard vers le héros.
    this.squash = damp(this.squash, 0, 8, dt);
    const air = this.onGround ? 0 : Math.min(0.25, Math.abs(this.vel.y) * 0.02);
    this.blob.scale.set(1 + this.squash * 0.6 - air * 0.5, 0.8 - this.squash + air, 1 + this.squash * 0.6 - air * 0.5);
    this.blob.position.y = this.blob.scale.y;
    this.group.rotation.y = dampAngle(this.group.rotation.y, this.aggro ? Math.atan2(dx, dz) : this.facing, 8, dt);
    this.flash = Math.max(0, this.flash - dt);
    this.mat.emissive.setScalar(this.flash > 0 ? 0.8 : 0);
  }

  dispose() {
    this.scene.remove(this.group);
    this.mat.dispose();
  }
}
