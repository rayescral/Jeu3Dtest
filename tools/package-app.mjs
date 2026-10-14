// Fabrique la version « application » Windows du jeu (dossier avec Tennis Club Simulator.exe).
// Lancer : npm run app   (le résultat est dans dist/, à zipper et à distribuer)
import { packager } from '@electron/packager';
import { cpSync, mkdirSync, rmSync } from 'node:fs';

const stage = 'dist/app-src';
rmSync('dist', { recursive: true, force: true });
mkdirSync(stage, { recursive: true });
for (const f of ['index.html', 'style.css', 'jeu.js']) cpSync(f, `${stage}/${f}`);
for (const f of ['main.cjs', 'package.json', 'icon.png']) cpSync(`desktop/${f}`, `${stage}/${f}`);

const platform = process.argv[2] || 'win32';
const paths = await packager({
  dir: stage, out: 'dist', name: 'Tennis Club Simulator', platform, arch: 'x64',
  electronVersion: '33.4.11', overwrite: true, asar: true,
  appCopyright: 'Tennis Club Simulator',
});
console.log('Application créée :', paths.join(', '));
