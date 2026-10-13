// Post-traitement : anticrénelage multi-échantillons, occlusion ambiante (coins et contacts assombris),
// halo léger autour des lumières vives, puis tonalité cinéma et conversion des couleurs.
// Trois niveaux : « ultra » (tout), « haute » (sans occlusion), « économie » (rendu direct, sans effets).
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

export function createPost(renderer, scene, camera) {
  let composer = null, ao = null, bloom = null, level = 'low';

  function build() {
    composer?.dispose();
    composer = null; ao = null; bloom = null;
    if (level === 'low') return;
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    const target = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4 });
    composer = new EffectComposer(renderer, target);
    composer.addPass(new RenderPass(scene, camera));
    if (level === 'ultra') {
      ao = new GTAOPass(scene, camera, size.x, size.y);
      ao.updateGtaoMaterial({ radius: 0.6, distanceExponent: 1.4, thickness: 1.2, scale: 1.0, samples: 12 });
      ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
      ao.blendIntensity = 0.85;
      composer.addPass(ao);
    }
    bloom = new UnrealBloomPass(new THREE.Vector2(size.x / 2, size.y / 2), 0.22, 0.5, 0.92);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
    composer.setPixelRatio(1);
    composer.setSize(size.x, size.y);
  }

  return {
    setLevel(l) { level = l; build(); },
    resize() {
      if (!composer) return;
      const size = renderer.getDrawingBufferSize(new THREE.Vector2());
      composer.setSize(size.x, size.y);
    },
    // Le halo s'intensifie la nuit (projecteurs, néons).
    setNight(night) { if (bloom) { bloom.strength = 0.18 + night * 0.35; bloom.threshold = 0.92 - night * 0.2; } },
    render() {
      if (composer) composer.render();
      else renderer.render(scene, camera);
    },
  };
}
