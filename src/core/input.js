// Entrées : clavier (codes physiques, donc ZQSD en AZERTY = WASD en QWERTY), souris en vue libre.
// Le verrouillage du pointeur est tenté au clic ; s'il est refusé, on regarde autour en maintenant
// le clic droit (ou en glissant), et les clics gauches restent des actions.
export function createInput(canvas) {
  const keys = new Set();
  const state = {
    keys, lookX: 0, lookY: 0, locked: false, fallback: false,
    uiOpen: false,          // une interface (ordinateur, caisse...) est affichée : pas de déplacement
    onKey: null, onClick: null, onLockChange: null,
  };

  addEventListener('keydown', e => {
    if (state.uiOpen && e.code !== 'Escape' && e.code !== 'Tab') return;
    if (['Space', 'Tab', 'ArrowUp', 'ArrowDown'].includes(e.code)) e.preventDefault();
    if (!e.repeat) state.onKey?.(e.code, e);
    keys.add(e.code);
  });
  addEventListener('keyup', e => keys.delete(e.code));
  addEventListener('blur', () => keys.clear());

  // Si le navigateur refuse ou ignore le verrouillage, on passe en mode "glisser pour regarder".
  // Un échec isolé est normal (Chrome refuse un nouveau verrouillage juste après Échap) : on ne bascule
  // qu'après deux échecs consécutifs.
  // Si la capture a déjà fonctionné une fois, le navigateur la permet : un refus n'est que passager
  // (Chrome refuse pendant environ une seconde après Échap). On ne bascule en mode "glisser" que si
  // la capture n'a jamais marché.
  let lockTimer = null, failures = 0, everLocked = false;
  const toFallback = () => {
    if (state.locked || state.fallback) return;
    failures++;
    if (!everLocked && failures >= 2) state.fallback = true;
    state.onLockChange?.(false, 'fail');
  };
  const requestLock = () => {
    if (state.locked || state.uiOpen || state.fallback) return;
    // Une même tentative ne compte qu'une fois (refus explicite ou absence de réponse).
    let settled = false;
    const fail = () => { if (settled || state.locked) return; settled = true; clearTimeout(lockTimer); toFallback(); };
    try {
      if (!canvas.requestPointerLock) return fail();
      clearTimeout(lockTimer);
      lockTimer = setTimeout(fail, 700);
      const r = canvas.requestPointerLock();
      if (r && r.catch) r.catch(fail);
    } catch { fail(); }
  };
  state.requestLock = requestLock;
  state.exitLock = () => { try { if (document.pointerLockElement) document.exitPointerLock(); } catch { /* rien */ } };

  document.addEventListener('pointerlockchange', () => {
    const was = state.locked;
    state.locked = document.pointerLockElement === canvas;
    if (state.locked) { clearTimeout(lockTimer); failures = 0; everLocked = true; state.fallback = false; }
    // 'exit' : le joueur a quitté la capture (Échap) ; on proposera la pause.
    state.onLockChange?.(state.locked, was && !state.locked ? 'exit' : 'change');
  });
  document.addEventListener('pointerlockerror', toFallback);

  let drag = null;
  canvas.addEventListener('mousedown', e => {
    if (state.uiOpen) return;
    if (state.locked) { state.onClick?.(e.button === 2 ? 'secondary' : 'primary', 'down'); return; }
    if (!state.fallback) { requestLock(); return; }
    drag = { x: e.clientX, y: e.clientY, moved: 0, button: e.button };
  });
  addEventListener('mouseup', e => {
    if (state.locked) { state.onClick?.(e.button === 2 ? 'secondary' : 'primary', 'up'); return; }
    if (drag && drag.moved < 6 && !state.uiOpen) state.onClick?.(drag.button === 2 ? 'secondary' : 'primary', 'down');
    drag = null;
  });
  addEventListener('mousemove', e => {
    if (state.uiOpen) return;
    if (state.locked) {
      // Chrome (surtout sous Windows) envoie parfois des sauts énormes et isolés : on les ignore.
      if (Math.abs(e.movementX) > 250 || Math.abs(e.movementY) > 250) return;
      state.lookX += e.movementX; state.lookY += e.movementY;
      return;
    }
    if (drag) {
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      drag.moved += Math.abs(dx) + Math.abs(dy);
      drag.x = e.clientX; drag.y = e.clientY;
      if (drag.moved >= 6) { state.lookX += dx * 1.6; state.lookY += dy * 1.6; }
    }
  });
  canvas.addEventListener('contextmenu', e => e.preventDefault());

  state.down = (...codes) => codes.some(c => keys.has(c));
  state.consumeLook = () => { const r = [state.lookX, state.lookY]; state.lookX = state.lookY = 0; return r; };
  return state;
}
