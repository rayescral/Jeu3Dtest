// Le planeur : modèle lisse (fuselage tourné, ailes à profil d'aile réel) et mécanique de vol simplifiée.
// Repère : le nez pointe vers -z, l'aile droite vers +x, le dessus vers +y. Unités : mètres, secondes.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { clamp, damp } from './util.js';
import { WIND } from './air.js';

const G = 9.81;
// Polaire : traînée = C0·v² + C1·n²/v². Finesse max ≈ 40 vers 95 km/h.
const V_BEST = 26.5, FINESSE = 40;
const C0 = G / (2 * FINESSE * V_BEST * V_BEST);
const C1 = C0 * V_BEST ** 4;
export const V_STALL = 19;      // ≈ 68 km/h
export const V_NE = 72;         // ≈ 260 km/h, vitesse à ne jamais dépasser

// --- Géométrie ----------------------------------------------------------------------------

// Épaisseur d'un profil NACA 00xx (u de 0 au bord d'attaque à 1 au bord de fuite).
const naca = (u, t) => 5 * t * (0.2969 * Math.sqrt(u) - 0.126 * u - 0.3516 * u * u + 0.2843 * u ** 3 - 0.1036 * u ** 4);

// Aile lissée : on extrude un profil le long de l'envergure (+x) en réduisant corde et épaisseur.
function wingGeometry({ span, rootChord, tipChord, thick, dihedral = 0, sweep = 0, camber = 0.02, tipColor = null, stations = 28, prof = 24 }) {
  const ring = [];
  for (let i = 0; i <= prof; i++) { const a = (i / prof) * Math.PI; ring.push((1 - Math.cos(a)) / 2); }  // espacement en cosinus
  const loop = [];   // bord de fuite → extrados → bord d'attaque → intrados → bord de fuite
  for (let i = prof; i >= 0; i--) loop.push([ring[i], 1]);
  for (let i = 1; i < prof; i++) loop.push([ring[i], -1]);
  const L = loop.length;
  const pos = [], col = [], idx = [];
  const white = new THREE.Color(0xf4f4f1), tip = new THREE.Color(tipColor ?? 0xf4f4f1);
  for (let s = 0; s <= stations; s++) {
    const f = s / stations;
    const fe = f < 0.94 ? f : 0.94 + (f - 0.94) * 0.5;               // saumon arrondi
    const tipRound = f < 0.94 ? 1 : Math.sqrt(Math.max(0, 1 - ((f - 0.94) / 0.06) ** 2));
    const chord = (rootChord + (tipChord - rootChord) * Math.pow(fe, 1.15)) * (0.05 + 0.95 * tipRound);
    const x = span * fe;
    const yOff = x * Math.tan(dihedral) + 0.004 * span * f * f * 6;   // dièdre + légère flexion
    const zLE = -chord * 0.3 + x * Math.tan(sweep);
    const c = f > 0.86 && tipColor ? tip : white;
    for (const [u, side] of loop) {
      const yt = naca(u, thick) * chord * (side > 0 ? 1 : 0.75);
      const yc = camber * chord * 4 * u * (1 - u);
      pos.push(x, yOff + yc + side * yt, zLE + u * chord);
      col.push(c.r, c.g, c.b);
    }
  }
  for (let s = 0; s < stations; s++) for (let i = 0; i < L; i++) {
    const a = s * L + i, b = s * L + ((i + 1) % L), c2 = a + L, d = b + L;
    idx.push(a, c2, b, b, c2, d);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// Copie miroir (aile gauche) en gardant des faces orientées vers l'extérieur.
function mirrorX(geo) {
  const m = geo.clone();
  m.scale(-1, 1, 1);
  const i = m.index.array;
  for (let k = 0; k < i.length; k += 3) { const t = i[k + 1]; i[k + 1] = i[k + 2]; i[k + 2] = t; }
  m.computeVertexNormals();
  return m;
}

function bothSides(geo) { return mergeGeometries([geo, mirrorX(geo)]); }

function fuselageGeometry() {
  // Profil de révolution, de la queue (y = 0) au nez (y = 7).
  const pts = [];
  const len = 7;
  for (let i = 0; i <= 60; i++) {
    const t = i / 60;                       // 0 = queue, 1 = nez
    let r;
    if (t > 0.72) { const k = (t - 0.72) / 0.28; r = 0.37 * Math.sqrt(Math.max(0, 1 - k * k)) ; }   // nez arrondi
    else if (t > 0.5) r = 0.27 + 0.1 * Math.sin(((t - 0.5) / 0.22) * Math.PI / 2);                // cabine
    else r = 0.08 + 0.19 * Math.pow(t / 0.5, 1.6);                                             // poutre arrière
    pts.push(new THREE.Vector2(Math.max(r, 0.001), t * len));
  }
  const g = new THREE.LatheGeometry(pts, 40);
  g.rotateX(-Math.PI / 2);            // axe de révolution vers -z : le nez est devant
  g.scale(0.92, 1, 1);
  g.translate(0, 0, 3.7);             // nez à z = -3.3, queue à z = +3.7
  return g;
}

function registrationTexture(text) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 128;
  const g = c.getContext('2d');
  g.font = 'bold 92px "Barlow Condensed", Arial Narrow, sans-serif';
  g.fillStyle = '#1b2633';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 256, 68);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function buildGliderModel() {
  const root = new THREE.Group();
  const paint = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, vertexColors: true, roughness: 0.28, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.08,
  });
  const white = new THREE.MeshPhysicalMaterial({ color: 0xf4f4f1, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.08 });

  const fus = new THREE.Mesh(fuselageGeometry(), white);
  root.add(fus);

  // Ailes : 15 m d'envergure, saumons rouges comme sur les planeurs de compétition.
  const wing = new THREE.Mesh(bothSides(wingGeometry({
    span: 7.5, rootChord: 0.95, tipChord: 0.38, thick: 0.15, dihedral: THREE.MathUtils.degToRad(2.5), tipColor: 0xd42a2a,
  })), paint);
  wing.position.set(0, 0.18, -0.15);
  root.add(wing);

  // Empennage en T : dérive verticale + stabilisateur au sommet.
  const finGeo = wingGeometry({ span: 1.25, rootChord: 1.0, tipChord: 0.62, thick: 0.12, sweep: THREE.MathUtils.degToRad(22), camber: 0, stations: 10 });
  finGeo.rotateZ(Math.PI / 2);
  const fin = new THREE.Mesh(finGeo, white);
  fin.position.set(0, 0.05, 3.2);
  root.add(fin);
  const stab = new THREE.Mesh(bothSides(wingGeometry({ span: 1.35, rootChord: 0.62, tipChord: 0.36, thick: 0.1, camber: 0, stations: 10, tipColor: 0xd42a2a })), paint);
  stab.position.set(0, 1.3, 3.6);
  root.add(stab);

  // Verrière teintée.
  const canopy = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 24, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshPhysicalMaterial({
    color: 0x0b141c, roughness: 0.04, metalness: 0.2, clearcoat: 1, transparent: true, opacity: 0.72,
  }));
  canopy.scale.set(0.3, 0.3, 1.0);
  canopy.position.set(0, 0.2, -2.1);
  root.add(canopy);

  // Le pilote, visible à travers la verrière.
  const pilot = new THREE.Group();
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.13, 20, 16), new THREE.MeshStandardMaterial({ color: 0x2a3b55, roughness: 0.5 }));
  helmet.position.set(0, 0.3, -1.85);
  pilot.add(helmet);
  root.add(pilot);

  // Roue de train.
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.06, 12, 24), new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 }));
  wheel.rotation.y = Math.PI / 2;
  wheel.position.set(0, -0.36, -0.6);
  root.add(wheel);

  // Immatriculation sur la dérive.
  const reg = registrationTexture('F-CJ3D');
  for (const side of [-1, 1]) {
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.25), new THREE.MeshBasicMaterial({ map: reg, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
    plate.position.set(side * 0.075, 0.55, 3.55);
    plate.rotation.y = side * Math.PI / 2;
    root.add(plate);
  }

  root.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return { root, pilot };
}

// --- Mécanique de vol -----------------------------------------------------------------------
export class Glider {
  constructor(scene) {
    const m = buildGliderModel();
    this.model = m.root;
    this.pilot = m.pilot;
    scene.add(this.model);
    this.pos = this.model.position;
    this.quat = this.model.quaternion;
    this.place(0, 1000, 0, 0);
  }

  // heading : 0 = nord (-z), sens horaire.
  place(x, y, z, heading) {
    this.pos.set(x, y, z);
    this.psi = heading; this.theta = -0.03; this.phi = 0;
    this.speed = 30; this.vario = 0; this.lift = 0;
    this.ail = 0; this.elev = 0; this.brake = 0; this.stalled = false;
    this.syncQuat();
  }

  // Attitude (cap, assiette, inclinaison) → orientation du modèle.
  syncQuat() { this.model.rotation.set(this.theta, -this.psi, -this.phi, 'YXZ'); }

  get forward() { return new THREE.Vector3(0, 0, -1).applyQuaternion(this.quat); }
  get bank() { return this.phi; }          // > 0 : incliné à droite
  get pitch() { return this.theta; }
  get heading() { return this.psi; }

  update(dt, input, airLift) {
    const ctrl = clamp(this.speed / 26, 0.3, 1.5);   // les gouvernes sont plus efficaces à grande vitesse
    this.ail = damp(this.ail, input.roll, 5, dt);
    this.elev = damp(this.elev, input.pitch, 4, dt);
    this.brake = damp(this.brake, input.brake ? 1 : 0, 4, dt);
    // La vitesse de décrochage augmente en virage (facteur de charge).
    this.stalled = this.speed < V_STALL * Math.sqrt(1 / Math.max(0.25, Math.cos(this.phi)));

    // Roulis : manche latéral, et l'inclinaison se résorbe doucement quand on lâche le manche.
    let phiRate = this.ail * 0.9 * ctrl;
    if (Math.abs(input.roll) < 0.1) phiRate -= this.phi * 0.12;
    this.t = (this.t || 0) + dt;
    if (this.stalled) phiRate += Math.sin(this.t * 6) * 0.6;   // l'aile décroche, ça secoue

    // Tangage : le planeur cherche l'assiette qui correspond à sa vitesse de compensation (≈ 95 km/h).
    // Tirer le manche relève cette assiette ; en virage serré, le nez tombe si l'on ne tire pas.
    let thetaT = -0.025 + (this.speed - V_BEST) * 0.012 + this.elev * 0.45 - (1 - Math.cos(this.phi)) * 0.5;
    if (this.stalled) thetaT = -0.5;
    thetaT = clamp(thetaT, -1.1, 0.6);
    const thetaRate = (thetaT - this.theta) * 1.6 * Math.min(1, ctrl);

    this.phi = clamp(this.phi + phiRate * dt, -1.35, 1.35);
    this.theta = clamp(this.theta + thetaRate * dt, -1.4, 1.2);
    // Virage coordonné : l'inclinaison fait tourner la trajectoire.
    this.psi += (G * Math.tan(this.phi) / Math.max(this.speed, 10)) * dt;
    this.syncQuat();

    // Énergie : l'assiette transforme l'altitude en vitesse, la traînée la consomme.
    const n = 1 / Math.max(0.25, Math.cos(this.phi));   // facteur de charge en virage
    const drag = C0 * this.speed ** 2 * (1 + this.brake * 3) + C1 * n * n / (this.speed ** 2);
    this.speed = Math.max(10, this.speed + (-G * Math.sin(this.theta) - drag) * dt);

    const fwd = this.forward;
    const y0 = this.pos.y;
    this.pos.addScaledVector(fwd, this.speed * dt);
    this.pos.x += WIND.x * dt;
    this.pos.z += WIND.z * dt;
    this.pos.y += airLift * dt;
    this.lift = airLift;
    this.vario = damp(this.vario, (this.pos.y - y0) / dt, 2.5, dt);   // le variomètre a un peu de retard
  }
}
