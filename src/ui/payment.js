// Encaissement : terminal de carte (taper le montant) et tiroir-caisse (rendre la monnaie).
import { fmtMoney } from '../core/util.js';

const $ = id => document.getElementById(id);
const NOTES = [50, 20, 10, 5];
const COINS = [2, 1, 0.5, 0.2, 0.1];

export function createPayment(club, { sound, onClose, notify, onPaid }) {
  const root = $('payment');
  let mode = null, typed = '', given = [];

  const sum = () => Math.round(given.reduce((a, b) => a + b, 0) * 100) / 100;

  function cardView() {
    const shown = typed ? `${typed.replace('.', ',')} €` : '0,00 €';
    return `<div class="terminal">
      <div class="term-screen"><small>Montant à débiter</small><b>${shown}</b></div>
      <div class="keypad">
        ${['1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '0', '⌫'].map(k => `<button data-key="${k}">${k}</button>`).join('')}
        <button class="red" data-key="esc">Annuler</button><button class="green wide" data-key="ok">Valider</button>
      </div>
      <p class="muted small">Le total s'affiche sur l'écran de la caisse : ${fmtMoney(club.counter.total)}. Clavier : chiffres, virgule, Entrée.</p>
    </div>`;
  }

  function cashView() {
    const c = club.counter, due = Math.round((c.given - c.total) * 100) / 100, s = sum();
    const state = Math.abs(s - due) < 0.001 ? 'good' : s > due ? 'over' : 'short';
    return `<div class="drawer">
      <div class="drawer-head">
        <div><span>Total</span><b>${fmtMoney(c.total)}</b></div>
        <div><span>Reçu</span><b>${fmtMoney(c.given)}</b></div>
        <div class="due"><span>À rendre</span><b>${fmtMoney(due)}</b></div>
      </div>
      <div class="tray">
        ${NOTES.map(v => `<button class="note n${v}" data-v="${v}"><span>${v} €</span></button>`).join('')}
        ${COINS.map(v => `<button class="coin c${String(v).replace('.', '')}" data-v="${v}"><span>${v >= 1 ? v + ' €' : Math.round(v * 100) + ' c'}</span></button>`).join('')}
      </div>
      <div class="given">
        <div class="chips">${given.map((v, i) => `<button class="chip" data-i="${i}" title="Reprendre">${fmtMoney(v)}</button>`).join('') || '<span class="muted">Clique sur les billets et les pièces à rendre</span>'}</div>
        <div class="given-total ${state}"><span>Rendu</span><b>${fmtMoney(s)}</b></div>
      </div>
      <div class="drawer-actions"><button class="ghost" data-act="clear">Tout reprendre</button><button class="green" data-act="ok">Rendre la monnaie</button></div>
    </div>`;
  }

  function render() {
    root.innerHTML = `<div class="pay-card"><header><h2>${mode === 'card' ? 'Terminal de paiement' : 'Tiroir-caisse'}</h2>
      <button class="close" data-act="close" aria-label="Fermer">×</button></header>${mode === 'card' ? cardView() : cashView()}</div>`;
  }

  function press(k) {
    if (k === 'esc') return close();
    if (k === 'ok') return submitCard();
    if (k === '⌫') typed = typed.slice(0, -1);
    else if (k === ',' || k === '.') { if (!typed.includes('.')) typed = (typed || '0') + '.'; }
    else if (/^\d$/.test(k)) {
      const [, dec] = typed.split('.');
      if (dec !== undefined && dec.length >= 2) return;
      if (typed.replace('.', '').length >= 6) return;
      typed = typed === '0' ? k : typed + k;
    }
    sound.click();
    render();
  }

  function submitCard() {
    const v = parseFloat(typed || '0');
    if (club.payCard(v)) { sound.card(); finish(); }
    else { sound.error(); notify('Montant incorrect : vérifie le total affiché en caisse', 'bad'); typed = ''; render(); }
  }

  function submitCash() {
    const r = club.payCash(sum());
    if (r === 'ok') notify('Monnaie exacte, merci !', 'good');
    else if (r === 'short') notify('Il manquait de la monnaie : le client est mécontent', 'bad');
    else if (r === 'over') notify('Tu as rendu trop de monnaie', 'bad');
    finish();
  }

  function finish() { close(); onPaid?.(); }
  function close() { root.hidden = true; mode = null; onClose(); }

  root.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.act === 'close') return close();
    if (mode === 'card' && b.dataset.key) return press(b.dataset.key);
    if (mode === 'cash') {
      if (b.dataset.v) { given.push(parseFloat(b.dataset.v)); b.dataset.v >= 5 ? sound.note() : sound.coin(); render(); }
      else if (b.dataset.i) { given.splice(+b.dataset.i, 1); sound.click(); render(); }
      else if (b.dataset.act === 'clear') { given = []; render(); }
      else if (b.dataset.act === 'ok') submitCash();
    }
  });
  addEventListener('keydown', e => {
    if (root.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); return close(); }
    if (mode === 'card') {
      if (/^\d$/.test(e.key)) press(e.key);
      else if (e.key === ',' || e.key === '.') press(',');
      else if (e.key === 'Backspace') press('⌫');
      else if (e.key === 'Enter') submitCard();
    } else if (mode === 'cash' && e.key === 'Enter') submitCash();
  });

  return {
    open(m) {
      mode = m; typed = ''; given = [];
      render();
      root.hidden = false;
    },
    close,
    get isOpen() { return !root.hidden; },
  };
}
