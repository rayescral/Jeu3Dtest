# Tennis Club Simulator

Jeu de gestion en 3D, à la première personne, dans l'esprit de *Supermarket Simulator* : au lieu d'une épicerie, tu reprends un petit club de tennis et tu le fais grandir.

Au départ, le club des Platanes a un seul court en terre battue, deux étagères vides et douze licenciés. Tu commandes le matériel sur l'ordinateur de l'accueil, tu ranges les cartons livrés dans la boutique, tu encaisses les joueurs au comptoir (carte ou espèces, avec la monnaie à rendre), tu brosses les terrains usés, puis tu investis : nouveaux courts en résine, terrains de padel, étagères, vestiaires, éclairage, personnel.

## Lancer le jeu

Le plus simple : **double-clique sur le lanceur** de ton système, dans le dossier du jeu.

- Windows : `Lancer le jeu (Windows).bat`
- Mac : `Lancer le jeu (Mac).command` (la première fois : clic droit → Ouvrir, pour passer l'avertissement de sécurité)
- Linux : `lancer-le-jeu-linux.sh`

Le lanceur démarre un petit serveur local et ouvre le jeu dans le navigateur (http://localhost:8000). Laisse la fenêtre ouverte pendant la partie. Il faut Python ; s'il manque, le lanceur ouvre la page de téléchargement.

À la main, cela revient à taper dans le dossier du jeu (le navigateur bloque les modules JavaScript ouverts directement depuis le disque) :

```bash
npm start            # ou : python3 -m http.server 8000
```

Ensuite, ouvre http://localhost:8000.

## Commandes

| Touche | Action |
| --- | --- |
| Z Q S D (W A S D en QWERTY) | Se déplacer |
| Souris | Regarder (clic pour capturer la souris) |
| Maj | Courir |
| E | Prendre un carton, utiliser l'ordinateur, retourner la pancarte ; maintenir pour brosser un terrain |
| Clic gauche | Ranger un article, scanner un article, ouvrir le terminal ou le tiroir-caisse |
| Clic droit | Reprendre un article de l'étagère dans le carton, retirer une étiquette vide |
| G | Poser le carton |
| Tab | Ordinateur du club |
| Échap | Pause (sauvegarde, son, qualité graphique) |

Si le navigateur refuse de capturer la souris, le jeu passe tout seul en mode « maintenir le clic droit et glisser pour regarder ».

## Déroulement

- **Une journée** dure environ 7 minutes, de 8 h à 21 h (23 h avec l'éclairage des courts). Les clients arrivent quand la pancarte est sur OUVERT.
- **Les clients** viennent réserver un court (2 joueurs au tennis, 4 au padel), acheter en boutique ou prendre leur licence. Ils repartent mécontents s'ils attendent trop, si un produit manque, si c'est trop cher ou si le terrain est mal entretenu.
- **La caisse** : clique sur chaque article posé sur le comptoir pour le scanner. En carte, tape le total sur le terminal. En espèces, rends la monnaie avec les billets et les pièces du tiroir.
- **Les terrains s'usent** à chaque partie (la terre battue plus vite que la résine). Maintiens E en visant le sol pour les brosser, ou embauche un agent d'entretien.
- **La progression** : chaque vente rapporte de l'expérience. Les niveaux débloquent de nouveaux produits, des courts, le padel, le personnel et des aménagements. Le nombre de licenciés suit la satisfaction du club.
- **Le bilan** s'affiche à la fin de chaque journée et la partie est sauvegardée dans le navigateur.

## Organisation du code

| Dossier / fichier | Rôle |
| --- | --- |
| `src/game/` | Simulation pure, sans rendu : `data.js` (catalogue), `layout.js` (plan du club, trajets, collisions), `club.js` (clients, caisse, stock, terrains, personnel, journée, économie) |
| `src/render/` | Rendu Three.js : environnement et cycle du jour, club-house, étagères, terrains et échanges de balle, personnages, produits, textures dessinées |
| `src/core/` | Joueur à la première personne, entrées clavier et souris, sons synthétisés |
| `src/ui/` | Interface : HUD, ordinateur « ClubOS », terminal de paiement et tiroir-caisse |
| `src/main.js` | Relie le tout : interactions, écrans, sauvegarde |
| `tests/` | Tests automatiques (`npm test`) |

## Tests

```bash
npm test
```

- `tests/simulation.test.mjs` joue 8 journées complètes avec un joueur automatique : commandes, rangement, encaissements en carte et en espèces, entretien, constructions, embauches. Il vérifie qu'aucun client ne reste bloqué, que le stock, l'argent et les réservations restent cohérents, et que la sauvegarde se recharge.
- `tests/paths.test.mjs` vérifie qu'aucun trajet de personnage ne traverse un mur, un grillage, un filet, le comptoir ou une étagère.

Pour tester dans la console du navigateur : `__club.club` donne accès à l'état de la partie (par exemple `__club.club.s.money = 50000`).
