// Particules (éclats, poussière, étincelles) et ondes de choc.
import * as THREE from 'three';

const cubeGeo = new THREE.BoxGeometry(1, 1, 1);
const ringGeo = new THREE.RingGeometry(0.85, 1, 40);

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.parts = [];
    this.rings = [];
  }

  burst(pos, { color = 0xffffff, count = 12, speed = 6, size = 0.18, up = 4, life = 0.8, gravity = 18, glow = false } = {}) {
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshStandardMaterial({ color, emissive: glow ? color : 0x000000, emissiveIntensity: glow ? 0.8 : 0, transparent: true });
      const m = new THREE.Mesh(cubeGeo, mat);
      m.position.copy(pos);
      m.scale.setScalar(size * (0.6 + Math.random() * 0.8));
      m.rotation.set(Math.random() * 3, Math.random() * 3, 0);
      const a = Math.random() * Math.PI * 2, s = speed * (0.4 + Math.random() * 0.6);
      this.scene.add(m);
      this.parts.push({
        m, life, max: life, gravity,
        v: new THREE.Vector3(Math.cos(a) * s, up * (0.5 + Math.random()), Math.sin(a) * s),
        spin: (Math.random() - 0.5) * 10, base: m.scale.x,
      });
    }
  }

  ring(pos, { color = 0xffffff, radius = 5, life = 0.5 } = {}) {
    const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color, transparent: true, side: THREE.DoubleSide, depthWrite: false }));
    m.rotation.x = -Math.PI / 2;
    m.position.copy(pos).add(new THREE.Vector3(0, 0.15, 0));
    this.scene.add(m);
    this.rings.push({ m, life, max: life, radius });
  }

  update(dt) {
    for (let i = this.parts.length - 1; i >= 0; i--) {
      const p = this.parts[i];
      p.life -= dt;
      p.v.y -= p.gravity * dt;
      p.m.position.addScaledVector(p.v, dt);
      p.m.rotation.x += p.spin * dt;
      const k = Math.max(0, p.life / p.max);
      p.m.scale.setScalar(p.base * k);
      if (p.life <= 0) { this.scene.remove(p.m); p.m.material.dispose(); this.parts.splice(i, 1); }
    }
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.life -= dt;
      const k = 1 - r.life / r.max;
      r.m.scale.setScalar(0.3 + k * r.radius);
      r.m.material.opacity = 1 - k;
      if (r.life <= 0) { this.scene.remove(r.m); r.m.material.dispose(); this.rings.splice(i, 1); }
    }
  }

  clear() {
    for (const p of this.parts) { this.scene.remove(p.m); p.m.material.dispose(); }
    for (const r of this.rings) { this.scene.remove(r.m); r.m.material.dispose(); }
    this.parts.length = 0; this.rings.length = 0;
  }
}
