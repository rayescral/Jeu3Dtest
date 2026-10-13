# Tennis Club Simulator

Jeu de gestion en 3D, à la première personne, dans l'esprit de *Supermarket Simulator* : au lieu d'une épicerie, tu reprends un petit club de tennis et tu le fais grandir.

Au départ, le club des Platanes a un seul court en terre battue, deux étagères vides et douze licenciés. Tu commandes le matériel sur l'ordinateur de l'accueil, tu ranges les cartons livrés dans la boutique, tu encaisses les joueurs au comptoir (carte ou espèces, avec la monnaie à rendre), tu brosses les terrains usés, puis tu investis : nouveaux courts en résine, terrains de padel, étagères, vestiaires, éclairage, personnel.

## Jouer

**Double-clique sur `index.html`.** Le jeu s'ouvre dans le navigateur, sans serveur ni installation (comme Justice Deck). Il faut seulement les fichiers `index.html`, `style.css` et `jeu.js` dans le même dossier.

## Développer

Le code source est dans `src/` (modules JavaScript). `jeu.js` est généré à partir de ces sources :

```bash
npm install        # une seule fois
npm run build      # régénère jeu.js après une modification
npm test           # tests automatiques
```

Les modèles 3D et textures sont dans `assets/` (originaux dans `assets/src/`, préparés par `npm run assets`) et sont intégrés à `jeu.js` au moment du build.

## Graphismes

Dans le menu pause (Échap), le bouton « Graphismes » propose trois niveaux :

- **Ultra** : tout activé, y compris l'occlusion ambiante (coins et contacts assombris) et des ombres plus fines. Pour une bonne carte graphique.
- **Haute** (par défaut) : éclairage par le ciel, reflets, ombres douces, anticrénelage, léger halo autour des lumières.
- **Économie** : rendu simple, sans ombres ni effets. À choisir si le jeu saccade.

## Crédits

- Personnages : X Bot et animations de [Mixamo](https://www.mixamo.com) (Adobe), via les exemples de three.js.
- Parquet : textures `hardwood2` des exemples de [three.js](https://threejs.org) (licence MIT).
- Moteur 3D : [three.js](https://threejs.org) (licence MIT).

## Commandes

| Touche | Action |
| --- | --- |
| Z Q S D (W A S D en QWERTY) | Se déplacer |
| Souris | Regarder (clic pour capturer la souris) |
| Maj | Courir |
| Espace | Sauter |
| E | Prendre un carton, utiliser l'ordinateur, retourner la pancarte ; maintenir pour brosser un terrain |
| Clic gauche | Ranger un article, scanner un article, ouvrir le terminal ou le tiroir-caisse |
| Clic droit | Reprendre un article de l'étagère dans le carton, retirer une étiquette vide |
| G | Poser le carton |
| Tab | Ordinateur du club |
| Échap | Pause (sauvegarde, son, qualité graphique : ultra, haute, économie) |

Si le navigateur refuse de capturer la souris, le jeu passe tout seul en mode « maintenir le clic droit et glisser pour regarder ».

## Déroulement

- **Avant l'ouverture**, l'horloge reste à 8 h : tu peux commander, ranger et préparer le club tranquillement.
- **La journée commence quand tu retournes la pancarte sur OUVERT.** Elle dure environ 7 minutes, jusqu'à 21 h (23 h avec l'éclairage des courts).
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
- `tests/navigateur.test.cjs` joue dans un vrai navigateur avec de vrais clics et touches : commande, carton, rangement, pancarte, scan, paiement, pause.
- `tests/paths.test.mjs` vérifie qu'aucun trajet de personnage ne traverse un mur, un grillage, un filet, le comptoir ou une étagère.

Pour tester dans la console du navigateur : `__club.club` donne accès à l'état de la partie (par exemple `__club.club.s.money = 50000`).
