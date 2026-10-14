// Fabrique la version « application » Windows du jeu : un seul fichier « Tennis Club Simulator.exe »
// (quelques Mo). Il utilise le moteur web déjà présent dans Windows 10 et 11 (WebView2), grâce à
// Neutralinojs. Lancer : npm run app   (résultat dans dist/)
import { execSync } from 'node:child_process';
import { cpSync, mkdirSync, rmSync, existsSync, writeFileSync, renameSync, readdirSync } from 'node:fs';

const VERSION = '6.3.0';
const stage = 'dist/neu';
rmSync('dist', { recursive: true, force: true });
mkdirSync(`${stage}/app`, { recursive: true });
mkdirSync(`${stage}/bin`, { recursive: true });
for (const f of ['index.html', 'style.css', 'jeu.js']) cpSync(f, `${stage}/app/${f}`);
cpSync('desktop/icon.png', `${stage}/app/icon.png`);
cpSync('desktop/neutralino.config.json', `${stage}/neutralino.config.json`);

// Moteur Neutralino (téléchargé une fois, gardé dans node_modules/.cache).
const cache = 'node_modules/.cache/neutralino-' + VERSION;
if (!existsSync(`${cache}/neutralino-win_x64.exe`)) {
  mkdirSync(cache, { recursive: true });
  const res = await fetch(`https://github.com/neutralinojs/neutralinojs/releases/download/v${VERSION}/neutralinojs-v${VERSION}.zip`);
  if (!res.ok) throw new Error('Téléchargement de Neutralino impossible : ' + res.status);
  writeFileSync(`${cache}/neutralino.zip`, Buffer.from(await res.arrayBuffer()));
  execSync(`unzip -oq neutralino.zip`, { cwd: cache });
}
for (const f of readdirSync(cache)) if (f.startsWith('neutralino-')) cpSync(`${cache}/${f}`, `${stage}/bin/${f}`);
// Le client JavaScript de Neutralino n'est pas utilisé (le jeu n'a besoin d'aucune fonction système).
execSync('npx neu build --embed-resources', { cwd: stage, stdio: 'inherit' });

const out = `${stage}/dist/TennisClubSimulator`;
mkdirSync('dist/Tennis Club Simulator', { recursive: true });
renameSync(`${out}/TennisClubSimulator-win_x64.exe`, 'dist/Tennis Club Simulator/Tennis Club Simulator.exe');
if (existsSync(`${out}/TennisClubSimulator-linux_x64`)) renameSync(`${out}/TennisClubSimulator-linux_x64`, 'dist/tennis-club-simulator-linux');
console.log('Application créée : dist/Tennis Club Simulator/Tennis Club Simulator.exe');
