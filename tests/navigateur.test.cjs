// Test de bout en bout avec de vrais événements clavier et souris, sur index.html ouvert depuis le disque.
// Prérequis : Playwright et Chromium. Lancer : node tests/navigateur.test.cjs  (après npm run build)
// Test avec de vrais événements clavier/souris (pas d'appel direct au code du jeu pour les actions).
const { chromium } = require('playwright');
(async () => {
const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
// Rendu logiciel (sans carte graphique) : le mode économie suffit pour tester la logique.
await p.addInitScript(() => { try { localStorage.setItem('tennis-club-quality', 'low'); } catch {} });
p.setDefaultTimeout(180000);
const errs = []; p.on('pageerror', e => errs.push('PAGE ' + e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await p.route('https://fonts.googleapis.com/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
await p.goto('file://' + require('path').resolve(__dirname, '../index.html'));
await p.waitForFunction(() => window.__club && document.getElementById('loading').hidden);
await p.mouse.move(640, 360);
await p.click('#btn-new');
await p.waitForTimeout(1500);
const log = (k, v) => console.log('•', k, JSON.stringify(v));
const frames = (n = 2) => p.evaluate(n => new Promise(r => { let i = 0; const f = () => (++i >= n ? r() : requestAnimationFrame(f)); requestAnimationFrame(f); }), n);
const look = async (px, pz, tx, ty, tz) => { await p.evaluate(([px, pz, tx, ty, tz]) => { const pl = __club.player; pl.pos.set(px, 0, pz); const dx = tx - px, dz = tz - pz; pl.yaw = Math.atan2(-dx, -dz); pl.pitch = Math.atan2(ty - 1.66, Math.hypot(dx, dz)); }, [px, pz, tx, ty, tz]); await frames(3); };
const click = async (button = 'left') => { await p.mouse.down({ button }); await p.mouse.up({ button }); await frames(2); };
const target = () => p.evaluate(() => __club.ui.target && __club.ui.target.kind);
log('souris capturée', await p.evaluate(() => __club.input.locked));

// Ordinateur avec Tab, commande en cliquant.
await p.keyboard.press('Tab'); await frames(2);
await p.click('button[data-act="inc"][data-id="balls"]');
await p.click('button[data-act="buy"]');
await p.click('button[data-act="close"]'); await frames(2);
await p.evaluate(() => __club.club.s.orders.forEach(o => o.eta = 0.01)); await frames(3);
const box = await p.evaluate(() => { const b = __club.club.s.boxes[0]; return b && [b.x, b.z]; });
log('carton livré', box);
await look(box[0] - 0.3, box[1] - 1.4, box[0], 0.3, box[1]);
log('vise', await target());
await p.keyboard.press('KeyE'); await frames(2);
log('carton en main (touche E)', await p.evaluate(() => !!__club.player.held));
await look(8.0, 3.1, 9.45, 0.95, 3.1);
log('vise', await target());
for (let i = 0; i < 10; i++) await click('left');
log('rangés (clics)', await p.evaluate(() => __club.club.s.shelves[0].levels[1]));
await p.keyboard.press('KeyG'); await frames(2);
log('carton posé (touche G)', await p.evaluate(() => !__club.player.held));
await look(2.2, 12.3, 2.2, 1.7, 14);
log('vise', await target());
await p.keyboard.press('KeyE'); await frames(2);
log('club ouvert (touche E)', await p.evaluate(() => __club.club.s.open));

// Client : réservation + achat, puis scan au clic de chaque article.
await p.evaluate(() => { const c = __club.club; c.s.open = false; const cu = c.spawnCustomer('book'); cu.wants = ['balls']; for (let t = 0; t < 200 && c.counter.cust !== cu; t += 0.05) c.update(0.05, { playerAtCounter: true }); });
log('articles au comptoir', await p.evaluate(() => __club.club.counter.items.map(i => i.label)));
await frames(20);
const items = await p.evaluate(() => { const out = []; __club.scene.traverse(o => { if (o.userData.uid && o.userData.home) { const v = o.userData.home; out.push([o.userData.uid, v.x, v.y, v.z]); } }); return out; });
for (const [uid, x, y, z] of items) {
  await look(x, 5.6, x, y + 0.05, z);
  const t = await p.evaluate(() => __club.ui.target && [__club.ui.target.kind, __club.ui.target.uid]);
  await click('left');
  log(`scan article ${uid} (visé ${JSON.stringify(t)})`, await p.evaluate(uid => __club.club.counter.items.find(i => i.uid === uid)?.scanned ?? 'payé', uid));
}
const pay = await p.evaluate(() => [__club.club.counter.phase, __club.club.counter.method, __club.club.counter.total, __club.club.counter.given]);
log('paiement demandé', pay);
const m0 = await p.evaluate(() => __club.club.s.money);
if (pay[1] === 'card') {
  await look(-3.55, 5.6, -3.55, 1.05, 7.05);
  log('vise', await target());
  await click('left');
  log('terminal ouvert', await p.evaluate(() => !document.getElementById('payment').hidden));
  for (const ch of pay[2].toFixed(2).replace('.', ',')) await p.keyboard.press(ch === ',' ? 'Comma' : 'Digit' + ch);
  await p.keyboard.press('Enter');
} else {
  await look(-6.55, 5.4, -6.55, 0.9, 6.55);
  log('vise', await target());
  await click('left');
  log('tiroir ouvert', await p.evaluate(() => !document.getElementById('payment').hidden));
  let rest = Math.round((pay[3] - pay[2]) * 100);
  for (const v of [5000, 2000, 1000, 500, 200, 100, 50, 20, 10]) while (rest >= v) { rest -= v; await p.click(`#payment button[data-v="${v / 100}"]`); }
  await p.click('#payment button[data-act="ok"]');
}
await frames(3);
log('encaissé', [(await p.evaluate(() => __club.club.s.money)) - m0, await p.evaluate(() => __club.club.counter.cust === null)]);
log('souris recapturée après paiement', await p.evaluate(() => __club.input.locked));

// Échap puis Reprendre : pas de message "mode glisser".
await p.evaluate(() => document.exitPointerLock()); await frames(3); await p.waitForTimeout(300);  // équivalent d'Échap
log('pause après Échap', await p.evaluate(() => !document.getElementById('pause').hidden));
await p.mouse.move(640, 300); await p.click('#btn-resume'); await p.mouse.move(640, 360); await frames(3); await p.waitForTimeout(1200); await frames(3);
log('après Reprendre', await p.evaluate(() => ({ capturée: __club.input.locked, modeGlisser: __club.input.fallback, message: !document.getElementById('look-help').hidden, bouton: !document.getElementById('click-to-play').hidden })));
if (!(await p.evaluate(() => __club.input.locked))) { await p.mouse.click(640, 360); await frames(3); await p.waitForTimeout(500); }
log('après un clic dans le jeu', await p.evaluate(() => ({ capturée: __club.input.locked, modeGlisser: __club.input.fallback, message: !document.getElementById('look-help').hidden })));

console.log('erreurs :', errs.length ? errs : 'aucune');
await b.close();
})();
