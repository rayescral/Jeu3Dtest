# Jeu3Dtest

Maquette d'un petit jeu 3D dans le navigateur, faite avec [Three.js](https://threejs.org/).

Tu diriges une boule rouge dans une arène et tu dois ramasser les 10 pièces d'or le plus vite possible, en évitant les caisses.

## Lancer le jeu

Il faut un petit serveur local, car le navigateur bloque les modules JavaScript ouverts directement depuis le disque :

```bash
python3 -m http.server 8000
```

Ensuite, ouvre http://localhost:8000.

## Commandes

| Touche | Action |
| --- | --- |
| ZQSD / WASD / flèches | Se déplacer |
| Espace | Sauter (on peut monter sur les caisses) |
| R | Rejouer |

Sur téléphone ou tablette, des boutons apparaissent à l'écran (flèches + saut). Touche l'écran pour rejouer.
