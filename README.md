# Tennis Club Simulator

Jeu de gestion en 3D, à la première personne, dans l'esprit de *Supermarket Simulator* : au lieu d'une épicerie, tu reprends un petit club de tennis et tu le fais grandir.

Au départ, le club des Platanes a un seul court en terre battue, deux étagères vides et quatre licenciés. Tu commandes le matériel sur l'ordinateur de l'accueil, tu ranges les cartons livrés dans la boutique, tu encaisses les clients au comptoir (carte ou espèces, avec la monnaie à rendre), tu brosses les terrains usés, puis tu investis : buvette, snack, parking payant, nouveaux courts en résine, terrains de padel, étagères, vestiaires, éclairage, personnel.

## Jouer

**Double-clique sur `index.html`.** Le jeu s'ouvre dans le navigateur, sans serveur ni installation (comme Justice Deck). Il faut seulement les fichiers `index.html`, `style.css` et `jeu.js` dans le même dossier.

## Développer

Le code source est dans `src/` (modules JavaScript). `jeu.js` est généré à partir de ces sources :

```bash
npm install        # une seule fois
npm run build      # régénère jeu.js après une modification
npm test           # tests automatiques
```

`dev.html` charge directement les sources (pratique pour développer, mais il faut un serveur local : `npm start` puis http://localhost:8000/dev.html).

## Commandes

| Touche | Action |
| --- | --- |
| Z Q S D (W A S D en QWERTY) | Se déplacer |
| Souris | Regarder (clic pour capturer la souris) |
| Maj | Courir |
| Espace | Sauter |
| E | Prendre un carton, utiliser l'ordinateur, retourner la pancarte, servir au comptoir de la buvette ou du snack, faire sortir des joueurs qui dépassent leur créneau ; maintenir pour brosser un terrain |
| Clic gauche | Ranger un article, scanner un article, ouvrir le terminal ou le tiroir-caisse |
| Clic droit | Reprendre un article de l'étagère dans le carton, retirer une étiquette vide |
| G | Poser le carton |
| Tab | Ordinateur du club |
| Échap | Pause (sauvegarde, son, qualité graphique) |

Si le navigateur refuse de capturer la souris, le jeu passe tout seul en mode « maintenir le clic droit et glisser pour regarder ».

## Déroulement

- **Avant l'ouverture**, l'horloge reste à 8 h : tu peux commander, ranger et préparer le club tranquillement.
- **La journée commence quand tu retournes la pancarte sur OUVERT.** Elle dure environ 7 minutes, jusqu'à 21 h (23 h avec l'éclairage des courts).
- **Les clients** viennent réserver un court (2 joueurs au tennis, 4 au padel), acheter en boutique ou prendre leur licence. Ils repartent mécontents s'ils attendent trop, si un produit manque, si c'est trop cher ou si le terrain est mal entretenu.
- **La caisse** : clique sur chaque article posé sur le comptoir pour le scanner. En carte, tape le total sur le terminal. En espèces, rends la monnaie avec les billets et les pièces du tiroir.
- **Les terrains s'usent** à chaque partie (la terre battue plus vite que la résine). Maintiens E en visant le sol pour les brosser, ou embauche un agent d'entretien.
- **Au début, la boutique d'abord** : avec un seul court, peu de clients viennent réserver. La boutique (balles, boissons, grips, puis raquettes de marque, textile, chaussures, sacs) fait vivre le club.
- **La buvette et le snack** se construisent depuis l'ordinateur (onglet Club) : un chantier s'installe, des ouvriers travaillent et le bâtiment monte petit à petit. Ensuite, commande bières, sodas, cafés, jus, sandwichs, paninis, pizzas et cookies, range-les dans le frigo ou la vitrine du bâtiment, et sers les clients au comptoir (E). Un serveur ou un employé du snack peut le faire à ta place.
- **Le parking** : les clients arrivent en voiture et se garent. Avec le parking payant (barrière et horodateur), chaque voiture paie un ticket ; trop cher, les visiteurs se font rares.
- **Les joueurs qui débordent** : parfois, des joueurs refusent de rendre le terrain à la fin de leur créneau et bloquent ceux qui attendent. Va sur le court et appuie sur E pour les faire sortir (ils négocient parfois), ou embauche un agent de sécurité qui s'en charge.
- **Chaque journée a son événement** (tournoi interne, canicule, averses, visite d'une championne, promo fournisseur, visite de la ligue, mercredi des enfants) **et son défi** (vendre, servir, signer des licences...) récompensé par une prime.
- **Clients VIP** (lunettes noires, polo doré) : servis vite, ils laissent un pourboire.
- **La progression** : chaque vente rapporte de l'expérience. Les niveaux débloquent de nouveaux produits, des courts, le padel, le personnel et des aménagements. Le nombre de licenciés suit la satisfaction du club.
- **Le bilan** s'affiche à la fin de chaque journée et la partie est sauvegardée dans le navigateur.

## Organisation du code

| Dossier / fichier | Rôle |
| --- | --- |
| `src/game/` | Simulation pure, sans rendu : `data.js` (catalogue), `layout.js` (plan du club, trajets, collisions), `club.js` (clients, caisse, stock, terrains, personnel, journée, économie) |
| `src/render/` | Rendu Three.js : environnement et cycle du jour, club-house, buvette et snack (chantier puis bâtiment), voitures du parking, étagères, terrains et échanges de balle, personnages, produits, textures dessinées |
| `src/core/` | Joueur à la première personne, entrées clavier et souris, sons synthétisés |
| `src/ui/` | Interface : HUD, ordinateur « ClubOS », terminal de paiement et tiroir-caisse |
| `src/main.js` | Relie le tout : interactions, écrans, sauvegarde |
| `tests/` | Tests automatiques (`npm test`) |

## Tests

```bash
npm test
```

- `tests/simulation.test.mjs` joue 8 journées complètes avec un joueur automatique : commandes, rangement, encaissements en carte et en espèces, entretien, constructions, embauches. Il vérifie qu'aucun client ne reste bloqué, que le stock, l'argent et les réservations restent cohérents, et que la sauvegarde se recharge.
- `tests/navigateur.test.cjs` joue dans un vrai navigateur avec de vrais clics et touches : commande, carton, rangement, pancarte, scan, paiement, pause, service à la buvette, joueurs qu'on fait sortir du court.
- `tests/paths.test.mjs` vérifie qu'aucun trajet de personnage ne traverse un mur, un grillage, un filet, un comptoir, une étagère, une table de terrasse ou une voiture garée.

Les marques de raquettes (Volta, Hexa, Aerion, Titan, Strata, Kraken, Vibra) sont inventées.

Pour tester dans la console du navigateur : `__club.club` donne accès à l'état de la partie (par exemple `__club.club.s.money = 50000`).
