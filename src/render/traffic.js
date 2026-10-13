// Voitures du parking : arrivée depuis la route jusqu'à une place libre, stationnement, départ en marche
// arrière puis vers la sortie. Les trajets viennent de layout.js (mêmes durées que la simulation).
import * as THREE from 'three';
import { PARKING_SPOTS, RESERVED_SPOTS, PARKING_ROAD, carRoute, routePose } from '../game/layout.js';
import { car as carMesh } from './environment.js';

const COLORS = [0xd0d4d9, 0x1d2a3a, 0x8a1c1c, 0xf2f2f2, 0x2f5d9e, 0x3a3f45, 0x2e6b3a, 0xe0a020];

export function createTraffic(scene) {
  const cars = new Map();       // id → { mesh, route, t, state }
  // Voitures du personnel, toujours garées.
  for (const i of RESERVED_SPOTS) {
    const s = PARKING_SPOTS[i];
    const m = carMesh(s.x, s.z, COLORS[i % COLORS.length], 0);
    place(m, { x: s.x, z: s.z, heading: s.row > 0 ? Math.PI : 0 });
    scene.add(m);
  }

  function place(m, pose) {
    m.position.set(pose.x, 0, pose.z);
    m.rotation.set(0, pose.heading - Math.PI / 2, 0);
  }

  return {
    arrive(car) {
      const m = carMesh(0, 0, COLORS[car.color % COLORS.length], 0);
      scene.add(m);
      const route = carRoute(PARKING_SPOTS[car.spot], false);
      place(m, routePose(route, 0));
      cars.set(car.id, { mesh: m, route, t: 0, state: 'arriving', car });
    },
    parked(car) {
      const c = cars.get(car.id);
      if (!c) return;
      c.state = 'parked';
      place(c.mesh, routePose(c.route, 1e9));
    },
    leave(car) {
      const c = cars.get(car.id);
      if (!c) return;
      c.route = carRoute(PARKING_SPOTS[car.spot], true);
      c.t = 0; c.state = 'leaving';
    },
    remove(car) {
      const c = cars.get(car.id);
      if (!c) return;
      scene.remove(c.mesh);
      cars.delete(car.id);
    },
    clear() { for (const c of cars.values()) scene.remove(c.mesh); cars.clear(); },
    // Avance les voitures ; renvoie vrai si une voiture approche de la barrière (pour la lever).
    update(dt) {
      let nearBarrier = false;
      for (const c of cars.values()) {
        if (c.state === 'parked') continue;
        c.t += dt;
        const pose = routePose(c.route, c.t);
        if (pose) place(c.mesh, pose);
        if (c.state === 'arriving' && pose && pose.x > PARKING_ROAD.barrierX - 14 && pose.x < PARKING_ROAD.barrierX + 4) nearBarrier = true;
      }
      return nearBarrier;
    },
  };
}
