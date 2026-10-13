// L'ordinateur de l'accueil ("ClubOS") : commandes, prix, terrains, aménagements, personnel, bilan.
import { PRODUCTS, PRODUCT_IDS, COURTS, COURT_TYPES, SERVICES, UPGRADES, STAFF, SHELF_PRICE, LEVELS } from '../game/data.js';
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

  function shopView() {
    const cartTotal = Object.entries(cart).reduce((a, [id, n]) => a + PRODUCTS[id].cost * PRODUCTS[id].box * n, 0);
    const cards = PRODUCT_IDS.map(id => {
      const P = PRODUCTS[id], locked = club.s.level < P.level, n = cart[id] || 0;
      const boxPrice = P.cost * P.box;
      return `<article class="card ${locked ? 'locked' : ''}">
        <div class="thumb">${PRODUCT_ICONS[id]}</div>
        <div class="info"><h4>${P.name}</h4><p>Carton de ${P.box} · ${fmtMoney(boxPrice)}</p>
          <p class="muted">Prix conseillé ${fmtMoney(P.market)} / unité</p></div>
        ${locked ? `<span class="lock">Niveau ${P.level}</span>` : `
        <div class="stepper"><button data-act="dec" data-id="${id}" aria-label="Retirer un carton">−</button><span>${n}</span><button data-act="inc" data-id="${id}" aria-label="Ajouter un carton">+</button></div>`}
      </article>`;
    }).join('');
    const pending = pendingHtml();
    return `<div class="pc-split"><section class="grid">${cards}</section>
      <aside class="cart"><h3>Panier</h3>
        ${Object.keys(cart).filter(k => cart[k] > 0).map(id => `<div class="cart-line"><span>${cart[id]} × ${PRODUCTS[id].short}</span><b>${fmtMoney(PRODUCTS[id].cost * PRODUCTS[id].box * cart[id])}</b></div>`).join('') || '<p class="muted">Ajoute des cartons avec +</p>'}
        <div class="cart-total"><span>Total</span><b>${fmtMoney(cartTotal)}</b></div>
        <button class="primary" data-act="buy" ${cartTotal <= 0 || cartTotal > club.s.money ? 'disabled' : ''}>Commander</button>
        ${cartTotal > club.s.money ? '<p class="warn">Fonds insuffisants</p>' : ''}
        <p class="muted small">Les cartons sont livrés sur la palette devant l'entrée.</p>
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
    const rows = PRODUCT_IDS.filter(id => club.s.level >= PRODUCTS[id].level)
      .map(id => priceRow(id, PRODUCTS[id].name, PRODUCTS[id].cost, PRODUCTS[id].market, `<i class="mini">${PRODUCT_ICONS[id]}</i>`)).join('');
    const services = Object.keys(SERVICES).filter(k => k !== 'padel' || club.builtSports().includes('padel'))
      .map(k => priceRow(k, SERVICES[k].name, 0, SERVICES[k].market)).join('');
    return `<table class="prices"><thead><tr><th>Article</th><th>Coût</th><th>Conseillé</th><th>Ton prix</th><th>Marge</th><th></th></tr></thead>
      <tbody>${rows}<tr class="sep"><td colspan="6">Prestations</td></tr>${services}</tbody></table>
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
    const built = club.s.shelves.filter(s => s.built).length, total = club.s.shelves.length;
    const ups = Object.entries(UPGRADES).map(([k, u]) => {
      const has = club.s.upgrades[k], locked = club.s.level < u.level;
      return `<article class="row-card"><div><h4>${u.name}</h4><p class="muted">${u.desc}</p></div>
        ${has ? '<span class="pill good">Installé</span>' : locked ? `<span class="lock">Niveau ${u.level}</span>` : `<button class="primary" data-act="upgrade" data-id="${k}" ${club.s.money < u.price ? 'disabled' : ''}>${fmtMoney0(u.price)}</button>`}</article>`;
    }).join('');
    const staff = Object.entries(STAFF).map(([k, st]) => {
      const has = club.s.staff[k], locked = club.s.level < st.level;
      return `<article class="row-card"><div><h4>${st.name}</h4><p class="muted">${st.desc} · ${fmtMoney0(st.salary)} par jour</p></div>
        ${locked ? `<span class="lock">Niveau ${st.level}</span>` : `<button class="${has ? 'ghost' : 'primary'}" data-act="staff" data-id="${k}">${has ? 'Licencier' : 'Embaucher'}</button>`}</article>`;
    }).join('');
    return `<h3>Boutique</h3>
      <article class="row-card"><div><h4>Étagères</h4><p class="muted">${built} sur ${total} installées</p></div>
        ${built < total ? `<button class="primary" data-act="shelf" ${club.s.money < SHELF_PRICE ? 'disabled' : ''}>Ajouter · ${fmtMoney0(SHELF_PRICE)}</button>` : '<span class="pill good">Complet</span>'}</article>
      <h3>Aménagements</h3>${ups}<h3>Personnel</h3>${staff}`;
  }

  function reportView() {
    const s = club.s, st = s.stats;
    const income = st.courts + st.shop + st.licenceFees, spent = st.orders + st.build;
    const next = LEVELS[s.level] ? `${s.xp} / ${LEVELS[s.level]} XP` : `${s.xp} XP`;
    const canEnd = club.canEndDay();
    return `<div class="kpis">
        <div><span>Recettes du jour</span><b>${fmtMoney(income)}</b></div>
        <div><span>Dépenses du jour</span><b>${fmtMoney(spent)}</b></div>
        <div><span>Licenciés</span><b>${s.licences} / ${club.capacity}</b></div>
        <div><span>Niveau ${s.level}</span><b>${next}</b></div>
      </div>
      <table class="report"><tbody>
        <tr><td>Locations de terrains</td><td>${fmtMoney(st.courts)}</td></tr>
        <tr><td>Boutique</td><td>${fmtMoney(st.shop)}</td></tr>
        <tr><td>Licences</td><td>${fmtMoney(st.licenceFees)}</td></tr>
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
      }, 500);
    },
    close() { root.hidden = true; clearInterval(refreshTimer); },
    get isOpen() { return !root.hidden; },
    render,
  };
}
