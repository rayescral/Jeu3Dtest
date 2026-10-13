// Le joueur à la première personne : déplacement avec collisions, regard, balancement de tête,
// carton tenu en main et visée au centre de l'écran.
import * as THREE from 'three';
import { clamp, damp } from './util.js';

const EYE = 1.66, RADIUS = 0.3;

export class Player {
  constructor(camera) {
    this.camera = camera;
    this.pos = new THREE.Vector3(0, 0, 18);
    this.yaw = Math.PI;      // regarde vers le club-house
    this.pitch = -0.05;
    this.vel = new THREE.Vector2();
    this.bob = 0;
    this.held = null;        // { box, mesh }
    this.ray = new THREE.Raycaster();
    this.sensitivity = 0.0022;
    camera.rotation.order = 'YXZ';
  }

  update(dt, input, colliders, bounds) {
    const [lx, ly] = input.consumeLook();
    this.yaw -= lx * this.sensitivity;
    this.pitch = clamp(this.pitch - ly * this.sensitivity, -1.45, 1.45);

    let fx = 0, fz = 0;
    if (!input.uiOpen) {
      if (input.down('KeyW', 'ArrowUp')) fz -= 1;
      if (input.down('KeyS', 'ArrowDown')) fz += 1;
      if (input.down('KeyA', 'ArrowLeft')) fx -= 1;
      if (input.down('KeyD', 'ArrowRight')) fx += 1;
    }
    const len = Math.hypot(fx, fz) || 1;
    const speed = input.down('ShiftLeft', 'ShiftRight') ? 5.6 : 3.6;
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    const wx = (fx * cos + fz * sin) / len * speed, wz = (-fx * sin + fz * cos) / len * speed;
    this.vel.x = damp(this.vel.x, fx || fz ? wx : 0, 12, dt);
    this.vel.y = damp(this.vel.y, fx || fz ? wz : 0, 12, dt);

    // Déplacement en deux temps (x puis z) pour glisser le long des murs.
    this.pos.x += this.vel.x * dt;
    this.resolve(colliders);
    this.pos.z += this.vel.y * dt;
    this.resolve(colliders);
    this.pos.x = clamp(this.pos.x, bounds.minX, bounds.maxX);
    this.pos.z = clamp(this.pos.z, bounds.minZ, bounds.maxZ);

    const moving = Math.hypot(this.vel.x, this.vel.y);
    this.bob += dt * moving * 2.2;
    const bobY = Math.sin(this.bob * 2) * 0.03 * Math.min(1, moving / 3);
    this.camera.position.set(this.pos.x, EYE + bobY, this.pos.z);
    this.camera.rotation.set(this.pitch, this.yaw, 0);
    this.stepPhase = this.bob;
  }

  // Repousse le joueur (cercle) hors des rectangles d'obstacles.
  resolve(colliders) {
    for (const b of colliders) {
      const cx = clamp(this.pos.x, b.minX, b.maxX), cz = clamp(this.pos.z, b.minZ, b.maxZ);
      const dx = this.pos.x - cx, dz = this.pos.z - cz, d = Math.hypot(dx, dz);
      if (d < RADIUS) {
        if (d > 1e-6) { this.pos.x = cx + (dx / d) * RADIUS; this.pos.z = cz + (dz / d) * RADIUS; }
        else {
          // Centre à l'intérieur : sortie par le côté le plus proche.
          const opts = [[b.minX - RADIUS - this.pos.x, 0], [b.maxX + RADIUS - this.pos.x, 0], [0, b.minZ - RADIUS - this.pos.z], [0, b.maxZ + RADIUS - this.pos.z]];
          opts.sort((a, c) => Math.hypot(...a) - Math.hypot(...c));
          this.pos.x += opts[0][0]; this.pos.z += opts[0][1];
        }
      }
    }
  }

  // Objet visé au centre de l'écran.
  aim(objects, maxDist = 3.2) {
    this.ray.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    this.ray.far = maxDist;
    const hits = this.ray.intersectObjects(objects, true);
    for (const h of hits) {
      let o = h.object;
      while (o && !o.userData.interact) o = o.parent;
      if (o) return { ...o.userData.interact, point: h.point, distance: h.distance, object: o };
    }
    return null;
  }

  // Point visé au sol (pour poser un carton).
  floorPoint(maxDist = 3) {
    this.ray.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    const dir = this.ray.ray.direction, o = this.ray.ray.origin;
    if (dir.y > -0.05) return null;
    const t = -o.y / dir.y;
    if (t > maxDist) return null;
    return new THREE.Vector3(o.x + dir.x * t, 0, o.z + dir.z * t);
  }

  hold(box, mesh) {
    this.held = { box, mesh };
    this.camera.add(mesh);
    mesh.position.set(0.0, -0.38, -0.62);
    mesh.rotation.set(0.08, 0, 0);
    mesh.traverse(o => { o.castShadow = false; });
  }
  release() {
    const h = this.held;
    if (!h) return null;
    this.camera.remove(h.mesh);
    h.mesh.traverse(o => { if (o.isMesh) o.castShadow = true; });
    this.held = null;
    return h;
  }
  animateHeld(dt) {
    if (!this.held) return;
    const m = this.held.mesh;
    m.position.y = damp(m.position.y, -0.38 + Math.sin(this.bob * 2) * 0.012, 10, dt);
  }
}
