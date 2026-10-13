// Affichage permanent : argent, niveau, licenciés, satisfaction, heure ; viseur et aides contextuelles ;
// notifications ; panneau de caisse ; objectifs de prise en main.
import { fmtMoney, fmtClock } from '../core/util.js';
import { PRODUCTS } from '../game/data.js';
import { ICON } from './icons.js';

const $ = id => document.getElementById(id);

export const OBJECTIVES = [
  { id: 'order', text: 'Ouvre l\'ordinateur de l\'accueil (E) et commande des tubes de balles' },
  { id: 'pick', text: 'Récupère le carton livré devant le club (E)' },
  { id: 'shelf', text: 'Range les balles sur une étagère de la boutique (clic gauche)' },
  { id: 'open', text: 'Retourne la pancarte de l\'entrée sur OUVERT (E)' },
  { id: 'serve', text: 'Encaisse ton premier client au comptoir' },
  { id: 'clean', text: 'Brosse le court quand il est usé (maintiens E)' },
];

export function createHud() {
  let lastKey = '';
  const toasts = $('toasts');

  function stars(n) {
    let s = '';
    for (let i = 1; i <= 5; i++) {
      const fill = Math.max(0, Math.min(1, n - (i - 1)));
      s += `<span class="star" style="--fill:${(fill * 100).toFixed(0)}%">${ICON.star}</span>`;
    }
    return s;
  }

  return {
    update(club, ui) {
      const s = club.s;
      const key = [Math.round(s.money * 100), s.level, Math.floor(club.xpProgress() * 100), s.licences, Math.round(s.satisfaction * 50), Math.floor(s.minute), s.open, s.day, club.capacity].join('|');
      if (key !== lastKey) {
        lastKey = key;
        $('hud-money').textContent = fmtMoney(s.money);
        $('hud-level').textContent = s.level;
        $('hud-xp').style.width = `${(club.xpProgress() * 100).toFixed(1)}%`;
        $('hud-licences').textContent = `${s.licences} / ${club.capacity}`;
        $('hud-stars').innerHTML = stars(s.satisfaction * 5);
        $('hud-day').textContent = `Jour ${s.day}`;
        $('hud-clock').textContent = fmtClock(s.minute);
        const st = $('hud-status');
        st.textContent = s.open ? 'Ouvert' : 'Fermé';
        st.className = 'status ' + (s.open ? 'open' : 'closed');
      }
      // Aide contextuelle sous le viseur.
      const hint = $('hint');
      if (ui.hint) { hint.innerHTML = ui.hint; hint.hidden = false; } else hint.hidden = true;
      $('crosshair').classList.toggle('active', !!ui.target);
      // Progression du brossage.
      const ring = $('progress');
      if (ui.progress > 0) { ring.hidden = false; ring.style.setProperty('--p', `${(ui.progress * 100).toFixed(1)}%`); } else ring.hidden = true;
      // Carton en main.
      const held = $('held');
      if (ui.held) {
        held.hidden = false;
        held.innerHTML = `<b>${PRODUCTS[ui.held.product].name}</b><span>${ui.held.qty} / ${PRODUCTS[ui.held.product].box}</span><small>G : poser le carton</small>`;
      } else held.hidden = true;
    },

    checkout(counter) {
      const panel = $('checkout');
      if (!counter.cust) { panel.hidden = true; return; }
      panel.hidden = false;
      const lines = counter.items.map(i => `<li class="${i.scanned ? 'done' : ''}"><span>${i.label}</span><b>${i.scanned ? fmtMoney(i.price) : '—'}</b></li>`).join('');
      let step;
      if (counter.phase === 'scan') step = 'Clique sur chaque article posé sur le comptoir pour le scanner';
      else if (counter.method === 'card') step = 'Paiement par carte : clique sur le terminal de paiement';
      else step = `Espèces : le client donne ${fmtMoney(counter.given)}. Clique sur le tiroir-caisse pour rendre la monnaie`;
      panel.innerHTML = `<header><span>Client au comptoir</span><b>${fmtMoney(counter.total)}</b></header><ul>${lines}</ul><p>${step}</p>`;
    },

    notify(text, kind = 'info') {
      const el = document.createElement('div');
      el.className = `toast ${kind}`;
      el.textContent = text;
      toasts.prepend(el);
      setTimeout(() => el.classList.add('out'), 4200);
      setTimeout(() => el.remove(), 4700);
      while (toasts.children.length > 5) toasts.lastChild.remove();
    },

    objectives(done) {
      const panel = $('objectives');
      const next = OBJECTIVES.filter(o => !done.includes(o.id));
      if (!next.length) { panel.hidden = true; return; }
      panel.hidden = false;
      panel.innerHTML = `<h3>Prise en main</h3><ol>${OBJECTIVES.map(o => `<li class="${done.includes(o.id) ? 'done' : o === next[0] ? 'current' : ''}">${o.text}</li>`).join('')}</ol>`;
    },
  };
}
