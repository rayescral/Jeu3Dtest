// L'ordinateur de l'accueil ("ClubOS") : commandes, prix, terrains, aménagements, personnel, bilan.
import { PRODUCTS, PRODUCT_IDS, COURTS, COURT_TYPES, SERVICES, UPGRADES, STAFF, SHELF_PRICE, LEVELS, FACILITIES, EVENTS, ZONE_LABEL } from '../game/data.js';
import { challengeText } from '../game/club.js';
import { SHELF_SLOTS } from '../game/layout.js';
import { fmtMoney, fmtMoney0, round10, clamp } from '../core/util.js';
import { PRODUCT_ICONS, ICON } from './icons.js';

const $ = id => document.getElementById(id);
const TABS = [
  ['shop', 'Commandes', ICON.cart],
  ['prices', 'Prix', ICON.tag],
  ['courts', 'Terrains', ICON.court],
  ['club', 'Club', ICON.club],
  ['report', 'Bilan', ICON.stats],
];

export function createComputer(club, { onClose, onEndDay, sound }) {
  const root = $('computer');
  let tab = 'shop';
  const cart = {};

  function pendingHtml() {
    const items = club.s.orders.map(o => `<li>${o.boxes} × ${PRODUCTS[o.product].short} <span class="muted">livraison dans ${Math.ceil(o.eta)} s</span></li>`).join('');
    return items ? `<h3>En cours de livraison</h3><ul class="pending">${items}</ul>` : '';
  }
  function money() { return `<span class="pc-money">${fmtMoney(club.s.money)}</span>`; }

  const boxCost = id => club.unitCost(id) * PRODUCTS[id].box;
  function shopView() {
    const cartTotal = Object.entries(cart).reduce((a, [id, n]) => a + boxCost(id) * n, 0);
    const promo = club.s.event?.id === 'promo' ? club.s.event.product : null;
    const card = id => {
      const P = PRODUCTS[id], n = cart[id] || 0;
      const needs = P.zone === 'bar' && !club.built('buvette') ? 'Construis la buvette' : P.zone === 'snack' && !club.built('snack') ? 'Construis le snack' : null;
      const locked = club.s.level < P.level || needs;
      return `<article class="card ${locked ? 'locked' : ''}">
        <div class="thumb">${PRODUCT_ICONS[id]}</div>
        <div class="info"><h4>${P.name}</h4><p>Carton de ${P.box} · ${fmtMoney(boxCost(id))}${promo === id ? ' <span class="promo">−40 % aujourd\'hui</span>' : ''}</p>
          <p class="muted">Prix conseillé ${fmtMoney(P.market)} / unité</p></div>
        ${club.s.level < P.level ? `<span class="lock">Niveau ${P.level}</span>` : needs ? `<span class="lock">${needs}</span>` : `
        <div class="stepper"><button data-act="dec" data-id="${id}" aria-label="Retirer un carton">−</button><span>${n}</span><button data-act="inc" data-id="${id}" aria-label="Ajouter un carton">+</button></div>`}
      </article>`;
    };
    const cards = ['shop', 'bar', 'snack'].map(z => `<h3 class="zone-title">${ZONE_LABEL[z]}</h3>` + PRODUCT_IDS.filter(id => PRODUCTS[id].zone === z).map(card).join('')).join('');
    const pending = pendingHtml();
    return `<div class="pc-split"><section class="grid">${cards}</section>
      <aside class="cart"><h3>Panier</h3>
        ${Object.keys(cart).filter(k => cart[k] > 0).map(id => `<div class="cart-line"><span>${cart[id]} × ${PRODUCTS[id].short}</span><b>${fmtMoney(boxCost(id) * cart[id])}</b></div>`).join('') || '<p class="muted">Ajoute des cartons avec +</p>'}
        <div class="cart-total"><span>Total</span><b>${fmtMoney(cartTotal)}</b></div>
        <button class="primary" data-act="buy" ${cartTotal <= 0 || cartTotal > club.s.money ? 'disabled' : ''}>Commander</button>
        ${cartTotal > club.s.money ? '<p class="warn">Fonds insuffisants</p>' : ''}
        <p class="muted small">Les cartons sont livrés sur la palette devant l'entrée. Boissons de la buvette et plats du snack se rangent dans leur bâtiment.</p>
        <div id="pc-pending">${pending}</div>
      </aside></div>`;
  }

  function priceRow(key, name, cost, market, icon = '') {
    const price = club.s.prices[key];
    const margin = cost ? ((price - cost) / price) * 100 : null;
    const ratio = price / market;
    const verdict = ratio > 1.3 ? ['bad', 'Trop cher : les clients refusent'] : ratio > 1.12 ? ['mid', 'Un peu cher'] : ratio < 0.85 ? ['mid', 'Bon marché'] : ['good', 'Prix juste'];
    return `<tr><td class="pname">${icon}<span>${name}</span></td>
      <td>${cost ? fmtMoney(cost) : '—'}</td><td>${fmtMoney(market)}</td>
      <td><div class="stepper price"><button data-act="p-" data-key="${key}" aria-label="Baisser">−</button><input data-key="${key}" value="${price.toFixed(2).replace('.', ',')}" inputmode="decimal" aria-label="Prix de ${name}"><button data-act="p+" data-key="${key}" aria-label="Augmenter">+</button></div></td>
      <td>${margin === null ? '—' : `${margin.toFixed(0)} %`}</td><td><span class="pill ${verdict[0]}">${verdict[1]}</span></td></tr>`;
  }
  function pricesView() {
    const zoneRows = z => PRODUCT_IDS.filter(id => PRODUCTS[id].zone === z && club.productAvailable(id))
      .map(id => priceRow(id, PRODUCTS[id].name, club.unitCost(id), PRODUCTS[id].market, `<i class="mini">${PRODUCT_ICONS[id]}</i>`)).join('');
    const sections = ['shop', 'bar', 'snack'].map(z => { const r = zoneRows(z); return r ? `<tr class="sep"><td colspan="6">${ZONE_LABEL[z]}</td></tr>${r}` : ''; }).join('');
    const services = Object.keys(SERVICES).filter(k => (k !== 'padel' || club.builtSports().includes('padel')) && (k !== 'parking' || club.built('parking')))
      .map(k => priceRow(k, SERVICES[k].name, 0, SERVICES[k].market)).join('');
    return `<table class="prices"><thead><tr><th>Article</th><th>Coût</th><th>Conseillé</th><th>Ton prix</th><th>Marge</th><th></th></tr></thead>
      <tbody>${sections}<tr class="sep"><td colspan="6">Prestations</td></tr>${services}</tbody></table>
      <p class="muted small">Au-delà de 30 % au-dessus du prix conseillé, les clients n'achètent plus. Les étiquettes en rayon se mettent à jour toutes seules.</p>`;
  }

  function courtsView() {
    return `<section class="grid courts">${COURTS.map(c => {
      const st = club.s.courts[c.id], rt = club.court[c.id], T = COURT_TYPES[c.surface];
      const locked = club.s.level < c.level;
      let status;
      if (st.built) status = rt.playing ? '<span class="pill mid">Partie en cours</span>' : rt.reservedBy ? '<span class="pill mid">Réservé</span>' : '<span class="pill good">Libre</span>';
      else status = locked ? `<span class="lock">Niveau ${c.level}</span>` : '<span class="pill">À construire</span>';
      const wear = st.built ? `<div class="wear"><span>Usure</span><div class="bar"><i style="width:${(st.wear * 100).toFixed(0)}%" class="${st.wear > 0.6 ? 'bad' : st.wear > 0.35 ? 'mid' : ''}"></i></div></div>` : '';
      return `<article class="card court ${c.surface}">
        <div class="court-swatch"></div>
        <div class="info"><h4>${c.label}</h4><p>${T.name}${T.sport === 'padel' ? '' : ' · tennis'}</p>${wear}</div>
        <div class="actions">${status}${!st.built && !locked ? `<button class="primary" data-act="build" data-id="${c.id}" ${club.s.money < c.price ? 'disabled' : ''}>Construire · ${fmtMoney0(c.price)}</button>` : ''}</div>
      </article>`;
    }).join('')}</section>
    <p class="muted small">Un terrain usé fait fuir les joueurs. Brosse-le en maintenant E dessus, ou embauche un agent d'entretien.</p>`;
  }

  function clubView() {
    const shop = club.s.shelves.filter((s, i) => SHELF_SLOTS[i].zone === 'shop');
    const built = shop.filter(s => s.built).length, total = shop.length;
    const ups = Object.entries(UPGRADES).map(([k, u]) => {
      const has = club.s.upgrades[k], locked = club.s.level < u.level;
      return `<article class="row-card"><div><h4>${u.name}</h4><p class="muted">${u.desc}</p></div>
        ${has ? '<span class="pill good">Installé</span>' : locked ? `<span class="lock">Niveau ${u.level}</span>` : `<button class="primary" data-act="upgrade" data-id="${k}" ${club.s.money < u.price ? 'disabled' : ''}>${fmtMoney0(u.price)}</button>`}</article>`;
    }).join('');
    const staff = Object.entries(STAFF).map(([k, st]) => {
      const has = club.s.staff[k], locked = club.s.level < st.level;
      const needs = st.needs && !club.built(st.needs) ? `Il faut ${st.needs === 'buvette' ? 'la buvette' : 'le snack'}` : null;
      return `<article class="row-card"><div><h4>${st.name}</h4><p class="muted">${st.desc} · ${fmtMoney0(st.salary)} par jour</p></div>
        ${locked ? `<span class="lock">Niveau ${st.level}</span>` : needs && !has ? `<span class="lock">${needs}</span>` : `<button class="${has ? 'ghost' : 'primary'}" data-act="staff" data-id="${k}">${has ? 'Licencier' : 'Embaucher'}</button>`}</article>`;
    }).join('');
    const facilities = Object.entries(FACILITIES).map(([k, F]) => {
      const f = club.s.facilities[k], locked = club.s.level < F.level;
      let action;
      if (f.built) action = '<span class="pill good">Construit</span>';
      else if (f.building) action = `<span class="pill mid">Chantier ${Math.floor(f.progress * 100)} %</span>`;
      else if (locked) action = `<span class="lock">Niveau ${F.level}</span>`;
      else action = `<button class="primary" data-act="facility" data-id="${k}" ${club.s.money < F.price ? 'disabled' : ''}>Construire · ${fmtMoney0(F.price)}</button>`;
      return `<article class="row-card"><div><h4>${F.name}</h4><p class="muted">${F.desc}</p>${f.building ? `<div class="progress-bar"><i style="width:${(f.progress * 100).toFixed(0)}%"></i></div>` : ''}</div>${action}</article>`;
    }).join('');
    return `<h3>Boutique</h3>
      <article class="row-card"><div><h4>Étagères</h4><p class="muted">${built} sur ${total} installées</p></div>
        ${built < total ? `<button class="primary" data-act="shelf" ${club.s.money < SHELF_PRICE ? 'disabled' : ''}>Ajouter · ${fmtMoney0(SHELF_PRICE)}</button>` : '<span class="pill good">Complet</span>'}</article>
      <h3>Constructions</h3>${facilities}<h3>Aménagements</h3>${ups}<h3>Personnel</h3>${staff}`;
  }

  function reportView() {
    const s = club.s, st = s.stats;
    const income = st.courts + st.shop + st.licenceFees + st.bar + st.snack + st.parking + st.tips + st.bonus, spent = st.orders + st.build;
    const ev = EVENTS[s.event?.id] ?? EVENTS.calm;
    const next = LEVELS[s.level] ? `${s.xp} / ${LEVELS[s.level]} XP` : `${s.xp} XP`;
    const canEnd = club.canEndDay();
    return `<div class="kpis">
        <div><span>Recettes du jour</span><b>${fmtMoney(income)}</b></div>
        <div><span>Dépenses du jour</span><b>${fmtMoney(spent)}</b></div>
        <div><span>Licenciés</span><b>${s.licences} / ${club.capacity}</b></div>
        <div><span>Niveau ${s.level}</span><b>${next}</b></div>
      </div>
      <p class="muted"><b>${ev.name}</b> · ${ev.desc}${s.challenge ? `<br>Défi du jour : ${challengeText(s.challenge)} (${s.challenge.done ? 'réussi' : `${s.challenge.reward} € à gagner`})` : ''}</p>
      <table class="report"><tbody>
        <tr><td>Locations de terrains</td><td>${fmtMoney(st.courts)}</td></tr>
        <tr><td>Boutique</td><td>${fmtMoney(st.shop)}</td></tr>
        <tr><td>Licences</td><td>${fmtMoney(st.licenceFees)}</td></tr>
        <tr><td>Buvette</td><td>${fmtMoney(st.bar)}</td></tr>
        <tr><td>Snack</td><td>${fmtMoney(st.snack)}</td></tr>
        <tr><td>Parking</td><td>${fmtMoney(st.parking)}</td></tr>
        <tr><td>Pourboires, primes et défis</td><td>${fmtMoney(st.tips + st.bonus)}</td></tr>
        <tr><td>Commandes</td><td>−${fmtMoney(st.orders)}</td></tr>
        <tr><td>Travaux et équipements</td><td>−${fmtMoney(st.build)}</td></tr>
        <tr><td>Clients servis aujourd'hui</td><td>${st.customers}</td></tr>
        <tr><td>Parties jouées</td><td>${st.sessions}</td></tr>
      </tbody></table>
      <div class="end-day">
        <p class="muted">${canEnd ? 'Le club est fermé et vide : tu peux terminer la journée.' : s.open ? 'Retourne la pancarte sur FERMÉ et attends le départ des derniers clients pour terminer la journée plus tôt.' : 'Attends le départ des derniers clients.'}</p>
        <button class="primary" data-act="endday" ${canEnd ? '' : 'disabled'}>Terminer la journée</button>
      </div>`;
  }

  function render() {
    const views = { shop: shopView, prices: pricesView, courts: courtsView, club: clubView, report: reportView };
    root.innerHTML = `<div class="laptop"><div class="pc">
      <nav>${TABS.map(([k, label, icon]) => `<button class="${k === tab ? 'on' : ''}" data-tab="${k}">${icon}<span>${label}</span></button>`).join('')}</nav>
      <main><header><h2>${TABS.find(t => t[0] === tab)[1]}</h2>${money()}<button class="close" data-act="close" aria-label="Fermer l'ordinateur">${ICON.close}</button></header>
      <div class="pc-body">${views[tab]()}</div></main></div></div>`;
  }

  function setPriceFromInput(input) {
    const v = parseFloat(String(input.value).replace(',', '.'));
    if (Number.isFinite(v) && v > 0) club.setPrice(input.dataset.key, clamp(v, 0.1, 9999));
    render();
  }

  root.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    sound.click();
    if (b.dataset.tab) { tab = b.dataset.tab; render(); return; }
    const act = b.dataset.act, id = b.dataset.id, key = b.dataset.key;
    if (act === 'close') return onClose();
    if (act === 'inc') cart[id] = Math.min(20, (cart[id] || 0) + 1);
    if (act === 'dec') cart[id] = Math.max(0, (cart[id] || 0) - 1);
    if (act === 'buy') {
      let ok = true;
      for (const [pid, n] of Object.entries(cart)) if (n > 0) ok = club.order(pid, n) && ok;
      for (const k of Object.keys(cart)) delete cart[k];
      if (!ok) sound.error();
    }
    if (act === 'p-' || act === 'p+') club.setPrice(key, round10(club.s.prices[key] + (act === 'p+' ? 0.1 : -0.1) * (e.shiftKey ? 10 : 1)));
    if (act === 'build') { if (club.buildCourt(id)) sound.build(); else sound.error(); }
    if (act === 'shelf') { if (!club.buyShelf()) sound.error(); else sound.build(); }
    if (act === 'upgrade') { if (!club.buyUpgrade(id)) sound.error(); else sound.build(); }
    if (act === 'facility') { if (!club.buyFacility(id)) sound.error(); }
    if (act === 'staff') club.setStaff(id, !club.s.staff[id]);
    if (act === 'endday') { onEndDay(); return; }
    render();
  });
  root.addEventListener('change', e => { if (e.target.matches('input[data-key]')) setPriceFromInput(e.target); });
  root.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.matches('input[data-key]')) setPriceFromInput(e.target); });

  let refreshTimer = null;
  return {
    open(t) {
      if (t) tab = t;
      render();
      root.hidden = false;
      // Pendant que l'écran est ouvert, on ne met à jour que les éléments qui changent seuls
      // (un rendu complet pourrait avaler un clic en cours).
      clearInterval(refreshTimer);
      let canEnd = club.canEndDay();
      refreshTimer = setInterval(() => {
        if (root.hidden) return;
        const m = root.querySelector('.pc-money');
        if (m) m.textContent = fmtMoney(club.s.money);
        const p = root.querySelector('#pc-pending');
        if (p) p.innerHTML = pendingHtml();
        if (tab === 'report' && club.canEndDay() !== canEnd) { canEnd = club.canEndDay(); render(); }
        // Avancement des chantiers.
        if (tab === 'club') root.querySelectorAll('.progress-bar i').forEach((bar, i) => {
          const f = Object.values(club.s.facilities).filter(x => x.building)[i];
          if (f) bar.style.width = `${(f.progress * 100).toFixed(0)}%`;
        });
      }, 500);
    },
    close() { root.hidden = true; clearInterval(refreshTimer); },
    get isOpen() { return !root.hidden; },
    render,
  };
}
