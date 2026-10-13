// Ressources 3D embarquées dans jeu.js (le jeu reste un simple fichier à ouvrir d'un double-clic) :
// personnages animés et parquet. Les octets sont transformés en URL « blob: »,
// lisibles par les chargeurs de Three.js même quand la page est ouverte depuis le disque.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import xbotBytes from '../../assets/xbot.glb';
import woodDiffuse from '../../assets/hardwood2_diffuse.jpg';
import woodBump from '../../assets/hardwood2_bump.jpg';
import woodRough from '../../assets/hardwood2_roughness.jpg';

const blobUrl = (bytes, type) => URL.createObjectURL(new Blob([bytes], { type }));

function loadTexture(bytes, { srgb = false, repeat = [1, 1] } = {}) {
  return new Promise((resolve, reject) => {
    new THREE.TextureLoader().load(blobUrl(bytes, 'image/jpeg'), t => {
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(repeat[0], repeat[1]);
      t.anisotropy = 8;
      if (srgb) t.colorSpace = THREE.SRGBColorSpace;
      resolve(t);
    }, undefined, reject);
  });
}

function loadGltf(bytes) {
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  return loader.loadAsync(blobUrl(bytes, 'model/gltf-binary'));
}

export async function loadAssets() {
  const [xbot, map, bump, rough] = await Promise.all([
    loadGltf(xbotBytes),
    loadTexture(woodDiffuse, { srgb: true, repeat: [6, 5] }),
    loadTexture(woodBump, { repeat: [6, 5] }),
    loadTexture(woodRough, { repeat: [6, 5] }),
  ]);
  return { xbot, wood: { map, bump, rough } };
}
