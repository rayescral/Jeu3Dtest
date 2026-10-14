// Ciel photographique (Poly Haven) : trois ciels réels (jour, coucher de soleil, nuit) fondus selon l'heure
// et tournés pour que leur soleil coïncide avec celui du jeu. Le même ciel éclaire la scène (IBL).
import * as THREE from 'three';
import { assets, skyImage } from './assets.js';

const VERT = /* glsl */`
  varying vec3 vDir;
  void main() {
    vDir = normalize((modelMatrix * vec4(position, 0.0)).xyz);
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww;
  }`;
const FRAG = /* glsl */`
  uniform sampler2D uDay, uSunset, uNight;
  uniform vec3 uWeights, uOffsets, uSunDir, uSunColor, uGround;
  uniform float uSunSize, uExposure;
  varying vec3 vDir;
  vec3 sampleSky(sampler2D t, vec3 d, float off) {
    float u = atan(d.z, d.x) / 6.2831853 + 0.5 + off;
    float v = asin(clamp(d.y, -1.0, 1.0)) / 3.1415927 + 0.5;
    return texture2D(t, vec2(u, v)).rgb;
  }
  void main() {
    vec3 d = normalize(vDir);
    // Sous l'horizon, on garde la couleur de l'horizon (le sol du jeu recouvre le reste).
    vec3 dd = vec3(d.x, max(d.y, 0.012), d.z);
    vec3 col = vec3(0.0);
    if (uWeights.x > 0.001) col += uWeights.x * sampleSky(uDay, dd, uOffsets.x);
    if (uWeights.y > 0.001) col += uWeights.y * sampleSky(uSunset, dd, uOffsets.y);
    if (uWeights.z > 0.001) col += uWeights.z * sampleSky(uNight, dd, uOffsets.z);
    // Disque et halo du soleil.
    float s = max(dot(d, normalize(uSunDir)), 0.0);
    col += uSunColor * (smoothstep(1.0 - uSunSize, 1.0 - uSunSize * 0.4, s) * 3.0 + pow(s, 64.0) * 0.25);
    col = mix(col, uGround, smoothstep(0.0, -0.08, d.y));
    gl_FragColor = vec4(col * uExposure, 1.0);
    #include <colorspace_fragment>
  }`;

export function createSky(scene, renderer) {
  const tex = key => {
    const img = skyImage(key);
    if (!img) return null;
    const t = new THREE.Texture(img);
    t.flipY = false; t.colorSpace = THREE.SRGBColorSpace;
    t.wrapS = THREE.RepeatWrapping; t.minFilter = THREE.LinearFilter; t.generateMipmaps = false;
    t.needsUpdate = true;
    return t;
  };
  const day = tex('day'), sunset = tex('sunset'), night = tex('night');
  if (!day || !sunset || !night || !assets.sky) return null;
  const meta = assets.sky;
  const uniforms = {
    uDay: { value: day }, uSunset: { value: sunset }, uNight: { value: night },
    uWeights: { value: new THREE.Vector3(1, 0, 0) }, uOffsets: { value: new THREE.Vector3() },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uSunColor: { value: new THREE.Color() },
    uGround: { value: new THREE.Color(0x6f7468) }, uSunSize: { value: 0.0006 }, uExposure: { value: 1 },
  };
  const material = new THREE.ShaderMaterial({ uniforms, vertexShader: VERT, fragmentShader: FRAG, side: THREE.BackSide, depthWrite: false, toneMapped: false });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(450, 48, 24), material);
  dome.frustumCulled = false;
  dome.renderOrder = -1;
  scene.add(dome);

  // Éclairage d'ambiance tiré du ciel : rendu du dôme seul dans une petite scène, converti en carte
  // d'environnement filtrée (PMREM). Recalculé quand l'heure a sensiblement changé.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  const envDome = new THREE.Mesh(new THREE.SphereGeometry(40, 32, 16), material);
  envScene.add(envDome);
  let envRT = null, lastKey = '';

  const horizon = k => new THREE.Color(meta[k].horizon);
  const fogColor = new THREE.Color();
  return {
    // hour : heure du jeu ; sunDir : direction du soleil (normalisée).
    update(hour, sunDir, sunColor) {
      // Poids des trois ciels : nuit, lever (ciel du soir), jour, coucher, nuit.
      const k = (a, b) => THREE.MathUtils.smoothstep(hour, a, b);
      const wNightMorning = 1 - k(5.2, 6.4);
      const wNightEvening = k(21.0, 22.2);
      const wNight = Math.max(wNightMorning, wNightEvening);
      const wSunsetMorning = k(5.2, 6.4) * (1 - k(7.2, 8.6));
      const wSunsetEvening = k(18.2, 19.8) * (1 - k(21.0, 22.2));
      const wSunset = Math.max(wSunsetMorning, wSunsetEvening);
      const wDay = Math.max(0, 1 - wNight - wSunset);
      uniforms.uWeights.value.set(wDay, wSunset, wNight);
      // Rotation de chaque ciel pour aligner son soleil (ou sa lune) avec le soleil du jeu.
      const phi = Math.atan2(sunDir.z, sunDir.x) / (Math.PI * 2) + 0.5;
      const moonPhi = Math.atan2(-sunDir.z, -sunDir.x) / (Math.PI * 2) + 0.5;
      uniforms.uOffsets.value.set(meta.day.sunU - phi, meta.sunset.sunU - phi, meta.night.sunU - moonPhi);
      uniforms.uSunDir.value.copy(sunDir);
      uniforms.uSunColor.value.copy(sunColor).multiplyScalar(THREE.MathUtils.clamp(sunDir.y * 8, 0, 1) * (1 - wNight));
      fogColor.setRGB(0, 0, 0).add(horizon('day').multiplyScalar(wDay)).add(horizon('sunset').multiplyScalar(wSunset)).add(horizon('night').multiplyScalar(wNight));
      uniforms.uGround.value.copy(fogColor).multiplyScalar(0.7);
      // Éclairage d'ambiance recalculé rarement (pas de 0,25 sur les mélanges de ciels, 30° de rotation du soleil) :
      // chaque recalcul coûte un petit à-coup.
      const key = [wDay, wSunset, wNight].map(v => Math.round(v * 4)).join('|') + '|' + Math.round(phi * 12);
      if (key !== lastKey) {
        lastKey = key;
        const old = envRT;
        envRT = pmrem.fromScene(envScene, 0, 0.1, 100);
        scene.environment = envRT.texture;
        old?.dispose();
      }
      return { fogColor, night: wNight };
    },
    dome,
  };
}
