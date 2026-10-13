# Ascendance

Jeu de vol à voile en 3D dans le navigateur, fait avec [Three.js](https://threejs.org/).

Tu pilotes un planeur de 15 m d'envergure au-dessus d'une vallée alpine. Pas de moteur : pour rester en l'air, il faut trouver l'air qui monte. Les thermiques se forment sous les cumulus, dérivent avec le vent puis s'éteignent, et le vent d'ouest fait monter l'air le long des versants exposés. Le but est de contourner les trois points de virage, puis de revenir te poser sur la piste.

## Lancer le jeu

Il faut un petit serveur local, car le navigateur bloque les modules JavaScript ouverts directement depuis le disque :

```bash
python3 -m http.server 8000
```

Ensuite, ouvre http://localhost:8000. Ajoute `#lite` à l'adresse pour une version plus légère (moins d'arbres, sans ombres) ; elle s'active d'office sur téléphone et tablette.

## Commandes

| Touche | Action |
| --- | --- |
| ↑ / Z / W | Piquer (pousser le manche) |
| ↓ / S | Cabrer (tirer le manche) |
| ← → / Q D | Incliner pour virer |
| Espace | Aérofreins |
| Souris (glisser) | Regarder autour |
| C | Vue extérieure / vue pilote |
| T | Accélérer le temps (×3) |
| P ou Échap | Pause |
| M | Couper le son |

Sur téléphone : joystick virtuel à gauche, glisse à droite pour regarder, boutons « Aérofreins » et « Caméra ».

## Comment voler

- **Le variomètre bipe quand tu montes.** Plus il bipe vite et aigu, plus ça monte. Incline à 35-45° et tire un peu pour rester dans l'ascendance.
- **Vole vers 90-100 km/h** en ligne droite : c'est la vitesse de meilleur plané (finesse d'environ 45).
- **En virage serré, la vitesse de décrochage augmente.** Sous environ 70 km/h en ligne droite, ou plus en virage, l'aile décroche et le nez tombe.
- **« Marge retour terrain »** indique l'altitude qu'il te reste au-dessus de ce qu'il faut pour rentrer en plané.
- **Pour atterrir** : moins de 140 km/h, ailes à plat, descente douce (moins de 3,5 m/s), sur un terrain plat sans arbres. Se poser ailleurs que sur la piste s'appelle « aller aux vaches ».

## Organisation du code

| Fichier | Rôle |
| --- | --- |
| `index.html`, `style.css` | Page, menus, tableau de bord |
| `src/main.js` | Boucle principale, caméras, règles (circuit, atterrissage), écrans |
| `src/heightmap.js` | Le relief : fonction d'altitude, lac, piste, forêts (sans Three.js) |
| `src/noise.js` | Bruit simplex et ses variantes fractales |
| `src/terrain.js` | Rendu du paysage : shader de matières, éclairage pré-calculé, forêts, eau, aérodrome |
| `src/sky.js` | Ciel atmosphérique, soleil, éclairage d'environnement, brume, cumulus |
| `src/air.js` | Masse d'air : vent, thermiques (cycle de vie, dérive), ascendances de pente |
| `src/glider.js` | Modèle 3D du planeur (profils d'aile réels) et mécanique de vol |
| `src/course.js` | Points de virage et colonnes de lumière |
| `src/hud.js` | Instruments (anémomètre, variomètre, altimètre) et carte |
| `src/input.js` | Clavier, souris et commandes tactiles |
| `src/audio.js` | Souffle du vent et bips du variomètre (Web Audio) |

Pour tester, la console du navigateur donne accès à `__jeu` (par exemple `__jeu.glider.pos.y = 2500`).
