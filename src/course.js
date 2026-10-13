// Le circuit : trois points de virage à contourner, matérialisés par des colonnes de lumière,
// puis retour se poser sur le terrain.
import * as THREE from 'three';
import { heightAt } from './heightmap.js';

export const TURNPOINTS = [
  { name: 'Pic de l\'Aigle', x: 3000, z: 1200 },
  { name: 'Lac du Miroir', x: -1031, z: -2600 },
  { name: 'Col des Brumes', x: -3300, z: 1500 },
];
export const TP_RADIUS = 400;

const beamMaterial = color => new THREE.ShaderMaterial({
  uniforms: { uColor: { value: new THREE.Color(color) }, uOpacity: { value: 0.8 }, uTime: { value: 0 } },
  vertexShader: /* glsl */`
    varying vec3 vN; varying vec3 vV; varying float vY;
    void main() {
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vN = normalize(mat3(modelMatrix) * normal);
      vV = normalize(cameraPosition - wp.xyz);
      vY = uv.y;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }`,
  fragmentShader: /* glsl */`
    uniform vec3 uColor; uniform float uOpacity; uniform float uTime;
    varying vec3 vN; varying vec3 vV; varying float vY;
    void main() {
      float rim = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.5);
      float fade = smoothstep(0.0, 0.04, vY) * (1.0 - smoothstep(0.35, 1.0, vY));
      float bands = 0.75 + 0.25 * sin(vY * 120.0 - uTime * 2.0);
      gl_FragColor = vec4(uColor, (0.04 + rim * 0.7) * fade * bands * uOpacity);
    }`,
  transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
});

export function createCourse(scene) {
  const beams = TURNPOINTS.map(tp => {
    const ground = heightAt(tp.x, tp.z);
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(TP_RADIUS, TP_RADIUS, 3600, 64, 1, true), beamMaterial(0xffa640));
    mesh.position.set(tp.x, ground - 100 + 1800, tp.z);
    mesh.renderOrder = 2;
    scene.add(mesh);
    return mesh;
  });

  const state = { next: 0, done: [false, false, false] };

  function refresh() {
    beams.forEach((b, i) => {
      const u = b.material.uniforms;
      if (state.done[i]) { u.uColor.value.set(0x5fe08a); u.uOpacity.value = 0.25; }
      else if (i === state.next) { u.uColor.value.set(0xffa640); u.uOpacity.value = 1; }
      else { u.uColor.value.set(0xd8e4f0); u.uOpacity.value = 0.3; }
    });
  }
  refresh();

  return {
    state,
    get complete() { return state.next >= TURNPOINTS.length; },
    get target() { return TURNPOINTS[state.next] ?? null; },
    reset() { state.next = 0; state.done = [false, false, false]; refresh(); },
    // Renvoie le point validé quand le planeur entre dans le cylindre du prochain point.
    animate(t) { for (const b of beams) b.material.uniforms.uTime.value = t; },
    update(p) {
      const tp = TURNPOINTS[state.next];
      if (!tp) return null;
      if (Math.hypot(p.x - tp.x, p.z - tp.z) < TP_RADIUS) {
        state.done[state.next] = true;
        state.next++;
        refresh();
        return tp;
      }
      return null;
    },
  };
}
