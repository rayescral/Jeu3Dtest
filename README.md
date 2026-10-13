# Le Gardien des Cristaux

Petit jeu d'aventure en 3D dans le navigateur, fait avec [Three.js](https://threejs.org/).

Tu incarnes un chevalier échoué sur une île. Les cinq cristaux qui alimentent le portail de l'île sont gardés par des slimes. Récupère-les, affronte le Roi Slime qui se réveille au centre de l'île, puis franchis le portail pour gagner.

## Lancer le jeu

Il faut un petit serveur local, car le navigateur bloque les modules JavaScript ouverts directement depuis le disque :

```bash
python3 -m http.server 8000
```

Ensuite, ouvre http://localhost:8000.

## Commandes

| Touche | Action |
| --- | --- |
| ZQSD / WASD / flèches | Se déplacer (par rapport à la caméra) |
| Maj | Courir |
| Espace | Sauter |
| Clic / J / F | Coup d'épée |
| Souris (glisser ou pointeur verrouillé) | Tourner la caméra |
| Molette | Zoomer |

Sur téléphone : joystick virtuel à gauche, glisse à droite de l'écran pour tourner la caméra, boutons ⚔ (attaque) et ⤒ (saut).

## Règles

- 6 cœurs de vie. Un slime qui te touche retire 1 cœur, le Roi Slime en retire 2.
- Les slimes vaincus laissent parfois un cœur qui rend 1 point de vie.
- Les 5 cristaux réveillent le Roi Slime. Son saut crée une onde de choc : saute pour l'éviter.
- Une fois le roi vaincu, le portail s'allume : entre dedans pour gagner.

## Organisation du code

| Fichier | Rôle |
| --- | --- |
| `index.html`, `style.css` | Page, menus et interface (vies, cristaux, carte, barre du boss) |
| `src/main.js` | Boucle de jeu, caméra, règles de la partie, mini-carte |
| `src/world.js` | L'île : relief, eau, ciel, arbres, rochers, ruines, portail, collisions |
| `src/player.js` | Le chevalier : modèle, déplacements, saut, attaque, animations |
| `src/enemies.js` | Les slimes et le Roi Slime |
| `src/input.js` | Clavier, souris et commandes tactiles |
| `src/effects.js` | Particules et ondes de choc |
| `src/audio.js` | Bruitages générés avec la Web Audio API |

Pour tester, la console du navigateur donne accès à `__jeu` (par exemple `__jeu.player.hp = 99`).
