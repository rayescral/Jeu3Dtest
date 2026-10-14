// Affichage permanent : argent, niveau, licenciés, satisfaction, heure ; viseur et aides contextuelles ;
// notifications ; panneau de caisse ; objectifs de prise en main.
import { fmtMoney, fmtClock } from '../core/util.js';
import { PRODUCTS, EVENTS } from '../game/data.js';
import { challengeText, CHALLENGE_STAT } from '../game/club.js';
import { ICON } from './icons.js';
import { L } from '../core/i18n.js';

const $ = id => document.getElementById(id);

export const OBJECTIVES = [
  { id: 'order', text: L('Ouvre l\'ordinateur de l\'accueil (E) et commande des tubes de balles', 'Open the reception computer (E) and order tubes of balls') },
  { id: 'pick', text: L('Récupère le carton livré devant le club (E)', 'Pick up the box delivered in front of the club (E)') },
  { id: 'shelf', text: L('Range les balles sur une étagère de la boutique (clic gauche)', 'Stock the balls on a shop shelf (left click)') },
  { id: 'open', text: L('Retourne la pancarte de l\'entrée sur OUVERT (E) : la journée commence', 'Flip the entrance sign to OPEN (E): the day begins') },
  { id: 'serve', text: L('Encaisse ton premier client au comptoir', 'Serve your first customer at the counter') },
  { id: 'clean', text: L('Brosse le court quand il est usé (maintiens E)', 'Brush the court when it gets worn (hold E)') },
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
      const key = [Math.round(s.money * 100), s.level, Math.floor(club.xpProgress() * 100), s.licences, Math.round(s.satisfaction * 50), Math.floor(s.minute), s.open, s.day, club.capacity, s.dayStarted].join('|');
      if (key !== lastKey) {
        lastKey = key;
        $('hud-money').textContent = fmtMoney(s.money);
        $('hud-level').textContent = s.level;
        $('hud-xp').style.width = `${(club.xpProgress() * 100).toFixed(1)}%`;
        $('hud-licences').textContent = `${s.licences} / ${club.capacity}`;
        $('hud-stars').innerHTML = stars(s.satisfaction * 5);
        $('hud-day').textContent = L(`Jour ${s.day}`, `Day ${s.day}`);
        $('hud-clock').textContent = fmtClock(s.minute);
        const st = $('hud-status');
        st.textContent = s.open ? L('Ouvert', 'Open') : s.dayStarted ? L('Fermé', 'Closed') : L('Préparation', 'Getting ready');
        st.className = 'status ' + (s.open ? 'open' : s.dayStarted ? 'closed' : 'prep');
        $('prep').hidden = !!s.dayStarted;
        const ev = EVENTS[s.event?.id];
        const evEl = $('hud-event');
        evEl.hidden = !ev || s.event.id === 'calm';
        if (ev) { evEl.textContent = ev.name; evEl.title = ev.desc; }
      }
      // Avancement du défi du jour.
      const ch = s.challenge;
      if (ch) {
        const n = Math.min(ch.target, s.stats[CHALLENGE_STAT[ch.id]] ?? 0);
        const ck = `${ch.id}|${n}|${ch.done}`;
        if (ck !== this.lastCh) {
          this.lastCh = ck;
          const el = $('challenge');
          el.hidden = false;
          el.classList.toggle('done', !!ch.done);
          el.innerHTML = `<span>${L('Défi du jour', 'Daily challenge')}</span><b>${challengeText(ch)}</b><div class="bar"><i style="width:${(n / ch.target * 100).toFixed(0)}%"></i></div><small>${ch.done ? L('Réussi !', 'Done!') : L(`${n} / ${ch.target} · récompense ${ch.reward} €`, `${n} / ${ch.target} · reward €${ch.reward}`)}</small>`;
        }
      }
      // Aide contextuelle sous le viseur.
      // On ne touche au DOM que si quelque chose a changé (sinon le navigateur recalcule la page à chaque image).
      const hint = $('hint');
      if (ui.hint !== this.lastHint) {
        this.lastHint = ui.hint;
        if (ui.hint) { hint.innerHTML = ui.hint; hint.hidden = false; } else hint.hidden = true;
      }
      if (!!ui.target !== this.lastTarget) { this.lastTarget = !!ui.target; $('crosshair').classList.toggle('active', this.lastTarget); }
      // Progression du brossage.
      const ring = $('progress');
      if (ui.progress > 0) { ring.hidden = false; ring.style.setProperty('--p', `${(ui.progress * 100).toFixed(1)}%`); } else if (!ring.hidden) ring.hidden = true;
      // Carton en main.
      const held = $('held'), hk = ui.held ? `${ui.held.product}|${ui.held.qty}` : '';
      if (hk !== this.lastHeld) {
        this.lastHeld = hk;
        if (ui.held) {
          held.hidden = false;
          held.innerHTML = `<b>${PRODUCTS[ui.held.product].name}</b><span>${ui.held.qty} / ${PRODUCTS[ui.held.product].box}</span><small>${L('G : poser le carton', 'G: put the box down')}</small>`;
        } else held.hidden = true;
      }
    },

    checkout(counter) {
      const panel = $('checkout');
      if (!counter.cust) { panel.hidden = true; return; }
      panel.hidden = false;
      const lines = counter.items.map(i => `<li class="${i.scanned ? 'done' : ''}"><span>${i.label}</span><b>${i.scanned ? fmtMoney(i.price) : '—'}</b></li>`).join('');
      let step;
      if (counter.phase === 'scan') step = L('Clique sur chaque article posé sur le comptoir pour le scanner', 'Click each item on the counter to scan it');
      else if (counter.method === 'card') step = L('Paiement par carte : clique sur le terminal de paiement', 'Card payment: click the payment terminal');
      else step = L(`Espèces : le client donne ${fmtMoney(counter.given)}. Clique sur le tiroir-caisse pour rendre la monnaie`, `Cash: the customer hands you ${fmtMoney(counter.given)}. Click the cash drawer to give change`);
      panel.innerHTML = `<header><span>${L('Client au comptoir', 'Customer at the counter')}</span><b>${fmtMoney(counter.total)}</b></header><ul>${lines}</ul><p>${step}</p>`;
    },

    challenge() { this.lastCh = null; },

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
      panel.innerHTML = `<h3>${L('Prise en main', 'Getting started')}</h3><ol>${OBJECTIVES.map(o => `<li class="${done.includes(o.id) ? 'done' : o === next[0] ? 'current' : ''}">${o.text}</li>`).join('')}</ol>`;
    },
  };
}
