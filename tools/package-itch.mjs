// Fabrique le zip à envoyer sur itch.io : le même lanceur que l'application Windows (desktop/loader.html),
// qui charge la dernière version du jeu publiée sur GitHub, plus une copie du jeu pour le cas où GitHub
// ne répond pas. Lancer : npm run itch   (résultat : dist/jeu-itch.zip)
import { execSync } from 'node:child_process';
import { cpSync, mkdirSync, rmSync } from 'node:fs';

const stage = 'dist/itch';
rmSync(stage, { recursive: true, force: true });
rmSync('dist/jeu-itch.zip', { force: true });
mkdirSync(`${stage}/game`, { recursive: true });
cpSync('desktop/loader.html', `${stage}/index.html`);
for (const f of ['index.html', 'style.css', 'jeu.js']) cpSync(f, `${stage}/game/${f}`);
cpSync('assets', `${stage}/game/assets`, { recursive: true });
execSync('zip -qr -9 ../jeu-itch.zip .', { cwd: stage });
console.log('Zip itch.io créé : dist/jeu-itch.zip');
