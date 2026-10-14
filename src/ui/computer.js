// L'ordinateur de l'accueil ("ClubOS") : commandes, prix, terrains, aménagements, personnel, bilan.
import { PRODUCTS, PRODUCT_IDS, COURTS, COURT_TYPES, SERVICES, UPGRADES, STAFF, LEVELS, FACILITIES, EVENTS, ZONE_LABEL, SHELF_TYPES } from '../game/data.js';
import { challengeText } from '../game/club.js';
import { SHELF_SLOTS } from '../game/layout.js';
import { fmtMoney, fmtMoney0, round10, clamp } from '../core/util.js';
import { PRODUCT_ICONS, ICON } from './icons.js';
import { L, EN } from '../core/i18n.js';

const $ = id => document.getElementById(id);
const TABS = [
  ['shop', L('Commandes', 'Orders'), ICON.cart],
  ['prices', L('Prix', 'Prices'), ICON.tag],
  ['courts', L('Terrains', 'Courts'), ICON.court],
  ['club', L('Club', 'Club'), ICON.club],
  ['report', L('Bilan', 'Report'), ICON.stats],
];

export function createComputer(club, { onClose, onEndDay, sound }) {
  const root = $('computer');
  let tab = 'shop';
  const cart = {};

  function pendingHtml() {
    const items = club.s.orders.map(o => `<li>${o.boxes} × ${PRODUCTS[o.product].short} <span class="muted">${L(`livraison dans ${Math.ceil(o.eta)} s`, `delivery in ${Math.ceil(o.eta)} s`)}</span></li>`).join('');
    return items ? `<h3>${L('En cours de livraison', 'On the way')}</h3><ul class="pending">${items}</ul>` : '';
  }
  function money() { return `<span class="pc-money">${fmtMoney(club.s.money)}</span>`; }

  const boxCost = id => club.unitCost(id) * PRODUCTS[id].box;
  function shopView() {
    const cartTotal = Object.entries(cart).reduce((a, [id, n]) => a + boxCost(id) * n, 0);
    const promo = club.s.event?.id === 'promo' ? club.s.event.product : null;
    const card = id => {
      const P = PRODUCTS[id], n = cart[id] || 0;
      const needs = P.zone === 'bar' && !club.built('buvette') ? L('Construis la buvette', 'Build the bar') : P.zone === 'snack' && !club.built('snack') ? L('Construis le snack', 'Build the snack bar') : null;
      const locked = club.s.level < P.level || needs;
      return `<article class="card ${locked ? 'locked' : ''}">
        <div class="thumb">${PRODUCT_ICONS[id]}</div>
        <div class="info"><h4>${P.name}</h4><p>${L(`Carton de ${P.box}`, `Box of ${P.box}`)} · ${fmtMoney(boxCost(id))}${promo === id ? ` <span class="promo">${L('−40 % aujourd\'hui', '−40% today')}</span>` : ''}</p>
          <p class="muted">${L(`Prix conseillé ${fmtMoney(P.market)} / unité`, `Suggested price ${fmtMoney(P.market)} / unit`)}</p></div>
        ${club.s.level < P.level ? `<span class="lock">${L('Niveau', 'Level')} ${P.level}</span>` : needs ? `<span class="lock">${needs}</span>` : `
        <div class="stepper"><button data-act="dec" data-id="${id}" aria-label="${L('Retirer un carton', 'Remove a box')}">−</button><span>${n}</span><button data-act="inc" data-id="${id}" aria-label="${L('Ajouter un carton', 'Add a box')}">+</button></div>`}
      </article>`;
    };
    const cards = ['shop', 'bar', 'snack'].map(z => `<h3 class="zone-title">${ZONE_LABEL[z]}</h3>` + PRODUCT_IDS.filter(id => PRODUCTS[id].zone === z).map(card).join('')).join('');
    const pending = pendingHtml();
    return `<div class="pc-split"><section class="grid">${cards}</section>
      <aside class="cart"><h3>${L('Panier', 'Cart')}</h3>
        ${Object.keys(cart).filter(k => cart[k] > 0).map(id => `<div class="cart-line"><span>${cart[id]} × ${PRODUCTS[id].short}</span><b>${fmtMoney(boxCost(id) * cart[id])}</b></div>`).join('') || `<p class="muted">${L('Ajoute des cartons avec +', 'Add boxes with +')}</p>`}
        <div class="cart-total"><span>${L('Total', 'Total')}</span><b>${fmtMoney(cartTotal)}</b></div>
        <button class="primary" data-act="buy" ${cartTotal <= 0 || cartTotal > club.s.money ? 'disabled' : ''}>${L('Commander', 'Order')}</button>
        ${cartTotal > club.s.money ? `<p class="warn">${L('Fonds insuffisants', 'Not enough money')}</p>` : ''}
        <p class="muted small">${L('Les cartons sont livrés sur la palette devant l\'entrée. Boissons de la buvette et plats du snack se rangent dans leur bâtiment.', 'Boxes are delivered to the pallet in front of the entrance. Bar drinks and snack bar food are stocked in their own building.')}</p>
        <div id="pc-pending">${pending}</div>
      </aside></div>`;
  }

  function priceRow(key, name, cost, market, icon = '') {
    const price = club.s.prices[key];
    const margin = cost ? ((price - cost) / price) * 100 : null;
    const ratio = price / market;
    const verdict = ratio > 1.3 ? ['bad', L('Trop cher : les clients refusent', 'Too expensive: customers refuse')] : ratio > 1.12 ? ['mid', L('Un peu cher', 'A bit expensive')] : ratio < 0.85 ? ['mid', L('Bon marché', 'Cheap')] : ['good', L('Prix juste', 'Fair price')];
    return `<tr><td class="pname">${icon}<span>${name}</span></td>
      <td>${cost ? fmtMoney(cost) : '—'}</td><td>${fmtMoney(market)}</td>
      <td><div class="stepper price"><button data-act="p-" data-key="${key}" aria-label="${L('Baisser', 'Lower')}">−</button><input data-key="${key}" value="${EN ? price.toFixed(2) : price.toFixed(2).replace('.', ',')}" inputmode="decimal" aria-label="${L('Prix de', 'Price of')} ${name}"><button data-act="p+" data-key="${key}" aria-label="${L('Augmenter', 'Raise')}">+</button></div></td>
      <td>${margin === null ? '—' : `${margin.toFixed(0)}${EN ? '' : ' '}%`}</td><td><span class="pill ${verdict[0]}">${verdict[1]}</span></td></tr>`;
  }
  function pricesView() {
    const zoneRows = z => PRODUCT_IDS.filter(id => PRODUCTS[id].zone === z && club.productAvailable(id))
      .map(id => priceRow(id, PRODUCTS[id].name, club.unitCost(id), PRODUCTS[id].market, `<i class="mini">${PRODUCT_ICONS[id]}</i>`)).join('');
    const sections = ['shop', 'bar', 'snack'].map(z => { const r = zoneRows(z); return r ? `<tr class="sep"><td colspan="6">${ZONE_LABEL[z]}</td></tr>${r}` : ''; }).join('');
    const services = Object.keys(SERVICES).filter(k => (k !== 'padel' || club.builtSports().includes('padel')) && (k !== 'parking' || club.built('parking')))
      .map(k => priceRow(k, SERVICES[k].name, 0, SERVICES[k].market)).join('');
    return `<table class="prices"><thead><tr><th>${L('Article', 'Item')}</th><th>${L('Coût', 'Cost')}</th><th>${L('Conseillé', 'Suggested')}</th><th>${L('Ton prix', 'Your price')}</th><th>${L('Marge', 'Margin')}</th><th></th></tr></thead>
      <tbody>${sections}<tr class="sep"><td colspan="6">${L('Prestations', 'Services')}</td></tr>${services}</tbody></table>
      <p class="muted small">${L('Au-delà de 30 % au-dessus du prix conseillé, les clients n\'achètent plus. Les étiquettes en rayon se mettent à jour toutes seules.', 'More than 30% above the suggested price and customers stop buying. Shelf labels update automatically.')}</p>`;
  }

  function courtsView() {
    return `<section class="grid courts">${COURTS.map(c => {
      const st = club.s.courts[c.id], rt = club.court[c.id], T = COURT_TYPES[c.surface];
      const locked = club.s.level < c.level;
      let status;
      if (st.built) status = rt.playing ? `<span class="pill mid">${L('Partie en cours', 'Match in progress')}</span>` : rt.reservedBy ? `<span class="pill mid">${L('Réservé', 'Booked')}</span>` : `<span class="pill good">${L('Libre', 'Free')}</span>`;
      else status = locked ? `<span class="lock">${L('Niveau', 'Level')} ${c.level}</span>` : `<span class="pill">${L('À construire', 'Not built')}</span>`;
      const wear = st.built ? `<div class="wear"><span>${L('Usure', 'Wear')}</span><div class="bar"><i style="width:${(st.wear * 100).toFixed(0)}%" class="${st.wear > 0.6 ? 'bad' : st.wear > 0.35 ? 'mid' : ''}"></i></div></div>` : '';
      return `<article class="card court ${c.surface}">
        <div class="court-swatch"></div>
        <div class="info"><h4>${c.label}</h4><p>${T.name}${T.sport === 'padel' ? '' : ' · tennis'}</p>${wear}</div>
        <div class="actions">${status}${!st.built && !locked ? `<button class="primary" data-act="build" data-id="${c.id}" ${club.s.money < c.price ? 'disabled' : ''}>${L('Construire', 'Build')} · ${fmtMoney0(c.price)}</button>` : ''}</div>
      </article>`;
    }).join('')}</section>
    <p class="muted small">${L('Un terrain usé fait fuir les joueurs. Brosse-le en maintenant E dessus, ou embauche un agent d\'entretien.', 'A worn court drives players away. Brush it by holding E on it, or hire a groundskeeper.')}</p>`;
  }

  function clubView() {
    const shop = club.s.shelves.filter((s, i) => SHELF_SLOTS[i].zone === 'shop');
    const built = shop.filter(s => s.built).length, total = shop.length;
    const ups = Object.entries(UPGRADES).map(([k, u]) => {
      const has = club.s.upgrades[k], locked = club.s.level < u.level;
      return `<article class="row-card"><div><h4>${u.name}</h4><p class="muted">${u.desc}</p></div>
        ${has ? `<span class="pill good">${L('Installé', 'Installed')}</span>` : locked ? `<span class="lock">${L('Niveau', 'Level')} ${u.level}</span>` : `<button class="primary" data-act="upgrade" data-id="${k}" ${club.s.money < u.price ? 'disabled' : ''}>${fmtMoney0(u.price)}</button>`}</article>`;
    }).join('');
    const staff = Object.entries(STAFF).map(([k, st]) => {
      const has = club.s.staff[k], locked = club.s.level < st.level;
      const needs = st.needs && !club.built(st.needs) ? (st.needs === 'buvette' ? L('Il faut la buvette', 'Needs the bar') : L('Il faut le snack', 'Needs the snack bar')) : null;
      return `<article class="row-card"><div><h4>${st.name}</h4><p class="muted">${st.desc} · ${fmtMoney0(st.salary)} ${L('par jour', 'per day')}</p></div>
        ${locked ? `<span class="lock">${L('Niveau', 'Level')} ${st.level}</span>` : needs && !has ? `<span class="lock">${needs}</span>` : `<button class="${has ? 'ghost' : 'primary'}" data-act="staff" data-id="${k}">${has ? L('Licencier', 'Fire') : L('Embaucher', 'Hire')}</button>`}</article>`;
    }).join('');
    const facilities = Object.entries(FACILITIES).map(([k, F]) => {
      const f = club.s.facilities[k], locked = club.s.level < F.level;
      let action;
      if (f.built) action = `<span class="pill good">${L('Construit', 'Built')}</span>`;
      else if (f.building) action = `<span class="pill mid">${L('Chantier', 'Building')} ${Math.floor(f.progress * 100)}${EN ? '' : ' '}%</span>`;
      else if (locked) action = `<span class="lock">${L('Niveau', 'Level')} ${F.level}</span>`;
      else action = `<button class="primary" data-act="facility" data-id="${k}" ${club.s.money < F.price ? 'disabled' : ''}>${L('Construire', 'Build')} · ${fmtMoney0(F.price)}</button>`;
      return `<article class="row-card"><div><h4>${F.name}</h4><p class="muted">${F.desc}</p>${f.building ? `<div class="progress-bar"><i style="width:${(f.progress * 100).toFixed(0)}%"></i></div>` : ''}</div>${action}</article>`;
    }).join('');
    // Meubles de boutique : un bouton d'achat par type, puis la liste des meubles installés (démontables à vide).
    const free = built < total;
    const types = Object.entries(SHELF_TYPES).map(([k, T]) => {
      const locked = club.s.level < T.level;
      return `<article class="row-card"><div><h4>${T.name}</h4><p class="muted">${T.desc}</p></div>
        ${locked ? `<span class="lock">${L('Niveau', 'Level')} ${T.level}</span>` : `<button class="primary" data-act="shelf" data-id="${k}" ${!free || club.s.money < T.price ? 'disabled' : ''}>${L('Installer', 'Install')} · ${fmtMoney0(T.price)}</button>`}</article>`;
    }).join('');
    const installed = club.s.shelves.map((sh, i) => ({ sh, i })).filter(({ sh, i }) => sh.built && SHELF_SLOTS[i].zone === 'shop').map(({ sh, i }, n) => {
      const T = SHELF_TYPES[sh.type ?? 'gondola'], empty = sh.levels.every(l => l.qty === 0);
      const content = sh.levels.slice(0, T.levels).filter(l => l.product && l.qty > 0).map(l => `${PRODUCTS[l.product].short} ×${l.qty}`).join(', ') || L('vide', 'empty');
      return `<div class="cart-line"><span>${n + 1}. ${T.name} · <span class="muted">${content}</span></span>${empty && built > 1 ? `<button class="ghost small" data-act="unshelf" data-id="${i}">${L('Démonter', 'Dismantle')} (+${fmtMoney0(T.price / 2)})</button>` : ''}</div>`;
    }).join('');
    return `<h3>${L('Boutique', 'Shop')} · ${L(`${built} meubles sur ${total} emplacements`, `${built} units on ${total} spots`)}</h3>
      ${types}<article class="row-card"><div style="flex:1">${installed}</div></article>
      <h3>${L('Constructions', 'Buildings')}</h3>${facilities}<h3>${L('Aménagements', 'Upgrades')}</h3>${ups}<h3>${L('Personnel', 'Staff')}</h3>${staff}`;
  }

  function reportView() {
    const s = club.s, st = s.stats;
    const income = st.courts + st.shop + st.licenceFees + st.bar + st.snack + st.parking + st.tips + st.bonus, spent = st.orders + st.build;
    const ev = EVENTS[s.event?.id] ?? EVENTS.calm;
    const next = LEVELS[s.level] ? `${s.xp} / ${LEVELS[s.level]} XP` : `${s.xp} XP`;
    const canEnd = club.canEndDay();
    return `<div class="kpis">
        <div><span>${L('Recettes du jour', 'Today\'s income')}</span><b>${fmtMoney(income)}</b></div>
        <div><span>${L('Dépenses du jour', 'Today\'s spending')}</span><b>${fmtMoney(spent)}</b></div>
        <div><span>${L('Licenciés', 'Members')}</span><b>${s.licences} / ${club.capacity}</b></div>
        <div><span>${L('Notoriété', 'Reputation')}</span><b>${Math.floor(s.fame ?? 0)} / 100</b></div>
        <div><span>${L('Niveau', 'Level')} ${s.level}</span><b>${next}</b></div>
      </div>
      <p class="muted"><b>${ev.name}</b> · ${ev.desc}${s.challenge ? `<br>${L('Défi du jour :', 'Daily challenge:')} ${challengeText(s.challenge)} (${s.challenge.done ? L('réussi', 'done') : L(`${s.challenge.reward} € à gagner`, `€${s.challenge.reward} to win`)})` : ''}</p>
      <table class="report"><tbody>
        <tr><td>${L('Locations de terrains', 'Court rentals')}</td><td>${fmtMoney(st.courts)}</td></tr>
        <tr><td>${L('Boutique', 'Shop')}</td><td>${fmtMoney(st.shop)}</td></tr>
        <tr><td>${L('Licences', 'Memberships')}</td><td>${fmtMoney(st.licenceFees)}</td></tr>
        <tr><td>${L('Buvette', 'Bar')}</td><td>${fmtMoney(st.bar)}</td></tr>
        <tr><td>${L('Snack', 'Snack bar')}</td><td>${fmtMoney(st.snack)}</td></tr>
        <tr><td>${L('Parking', 'Parking')}</td><td>${fmtMoney(st.parking)}</td></tr>
        <tr><td>${L('Pourboires, primes et défis', 'Tips, bonuses and challenges')}</td><td>${fmtMoney(st.tips + st.bonus)}</td></tr>
        <tr><td>${L('Commandes', 'Orders')}</td><td>−${fmtMoney(st.orders)}</td></tr>
        <tr><td>${L('Travaux et équipements', 'Construction and equipment')}</td><td>−${fmtMoney(st.build)}</td></tr>
        <tr><td>${L('Clients servis aujourd\'hui', 'Customers served today')}</td><td>${st.customers}</td></tr>
        <tr><td>${L('Parties jouées', 'Matches played')}</td><td>${st.sessions}</td></tr>
      </tbody></table>
      <div class="end-day">
        <p class="muted">${canEnd ? L('Le club est fermé et vide : tu peux terminer la journée.', 'The club is closed and empty: you can end the day.') : s.open ? L('Retourne la pancarte sur FERMÉ et attends le départ des derniers clients pour terminer la journée plus tôt.', 'Flip the sign to CLOSED and wait for the last customers to leave to end the day early.') : L('Attends le départ des derniers clients.', 'Wait for the last customers to leave.')}</p>
        <button class="primary" data-act="endday" ${canEnd ? '' : 'disabled'}>${L('Terminer la journée', 'End the day')}</button>
      </div>`;
  }

  function render() {
    const views = { shop: shopView, prices: pricesView, courts: courtsView, club: clubView, report: reportView };
    root.innerHTML = `<div class="laptop"><div class="pc">
      <nav>${TABS.map(([k, label, icon]) => `<button class="${k === tab ? 'on' : ''}" data-tab="${k}">${icon}<span>${label}</span></button>`).join('')}</nav>
      <main><header><h2>${TABS.find(t => t[0] === tab)[1]}</h2>${money()}<button class="close" data-act="close" aria-label="${L('Fermer l\'ordinateur', 'Close the computer')}">${ICON.close}</button></header>
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
    if (act === 'shelf') { if (!club.buyShelf(id)) sound.error(); else sound.build(); }
    if (act === 'unshelf') { if (!club.removeShelf(+id)) sound.error(); }
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
