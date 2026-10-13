// Fabrique « Tennis Club Simulator.html » : tout le jeu (code, Three.js, styles) dans un seul fichier
// qui s'ouvre d'un double-clic, sans serveur. Lancer : npm run build
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const js = execSync('npx -y esbuild@0.24.0 src/main.js --bundle --format=esm --minify --target=es2020 --log-level=warning', { maxBuffer: 1 << 26 }).toString();
const css = readFileSync('style.css', 'utf8');
let html = readFileSync('index.html', 'utf8');

html = html.replace('<link rel="stylesheet" href="style.css" />', () => `<style>\n${css}\n</style>`);
html = html.replace(/<script type="importmap">[\s\S]*?<\/script>\s*/, '');
// Le code est placé tel quel ; on neutralise seulement une éventuelle balise de fermeture de script.
html = html.replace('<script type="module" src="src/main.js"></script>', () => `<script type="module">\n${js.replace(/<\/script/gi, '<\\/script')}\n</script>`);
writeFileSync('Tennis Club Simulator.html', html);
console.log(`Tennis Club Simulator.html : ${(Buffer.byteLength(html) / 1024).toFixed(0)} Ko`);
