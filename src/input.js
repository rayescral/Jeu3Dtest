// Commandes : clavier (manche + aérofreins), souris (regarder autour) et tactile (joystick virtuel).
import { clamp } from './util.js';

export function createInput(canvas) {
  const keys = {};
  const state = {
    pitch: 0, roll: 0, brake: false,
    lookX: 0, lookY: 0, looking: false,
    enabled: false,
    onKey: null,          // touches "ponctuelles" (caméra, pause...) transmises au jeu
  };

  addEventListener('keydown', e => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
    if (!e.repeat) state.onKey?.(e.code);
    keys[e.code] = true;
  });
  addEventListener('keyup', e => { keys[e.code] = false; });
  addEventListener('blur', () => { for (const k in keys) keys[k] = false; });

  // Glisser à la souris pour regarder autour ; le regard revient seul quand on relâche.
  let drag = null;
  canvas.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse') return;
    drag = { x: e.clientX, y: e.clientY };
    state.looking = true;
  });
  addEventListener('pointermove', e => {
    if (!drag || e.pointerType !== 'mouse') return;
    state.lookX = clamp(state.lookX + (e.clientX - drag.x) * 0.006, -Math.PI, Math.PI);
    state.lookY = clamp(state.lookY + (e.clientY - drag.y) * 0.004, -0.9, 0.9);
    drag.x = e.clientX; drag.y = e.clientY;
  });
  addEventListener('pointerup', () => { drag = null; state.looking = false; });
  canvas.addEventListener('contextmenu', e => e.preventDefault());

  // Tactile : joystick à gauche (manche), glisser à droite pour regarder.
  const stick = document.getElementById('stick'), knob = document.getElementById('knob');
  const touch = { x: 0, y: 0 };
  let stickT = null, lookT = null;
  canvas.addEventListener('touchstart', e => {
    for (const t of e.changedTouches) {
      if (t.clientX < innerWidth * 0.5 && !stickT) {
        stickT = { id: t.identifier, ox: t.clientX, oy: t.clientY };
        stick.style.left = `${t.clientX - 60}px`; stick.style.top = `${t.clientY - 60}px`;
        stick.hidden = false;
      } else if (!lookT) {
        lookT = { id: t.identifier, x: t.clientX, y: t.clientY };
        state.looking = true;
      }
    }
    e.preventDefault();
  }, { passive: false });
  canvas.addEventListener('touchmove', e => {
    for (const t of e.changedTouches) {
      if (stickT && t.identifier === stickT.id) {
        let dx = t.clientX - stickT.ox, dy = t.clientY - stickT.oy;
        const d = Math.hypot(dx, dy), max = 50;
        if (d > max) { dx *= max / d; dy *= max / d; }
        touch.x = dx / max; touch.y = dy / max;
        knob.style.transform = `translate(${dx}px, ${dy}px)`;
      } else if (lookT && t.identifier === lookT.id) {
        state.lookX = clamp(state.lookX + (t.clientX - lookT.x) * 0.008, -Math.PI, Math.PI);
        state.lookY = clamp(state.lookY + (t.clientY - lookT.y) * 0.006, -0.9, 0.9);
        lookT.x = t.clientX; lookT.y = t.clientY;
      }
    }
    e.preventDefault();
  }, { passive: false });
  const end = e => {
    for (const t of e.changedTouches) {
      if (stickT && t.identifier === stickT.id) { stickT = null; touch.x = touch.y = 0; stick.hidden = true; knob.style.transform = ''; }
      if (lookT && t.identifier === lookT.id) { lookT = null; state.looking = false; }
    }
  };
  canvas.addEventListener('touchend', end);
  canvas.addEventListener('touchcancel', end);
  const brakeBtn = document.getElementById('btn-brake');
  let touchBrake = false;
  brakeBtn.addEventListener('pointerdown', e => { e.preventDefault(); touchBrake = true; });
  for (const ev of ['pointerup', 'pointercancel', 'pointerleave']) brakeBtn.addEventListener(ev, () => { touchBrake = false; });
  document.getElementById('btn-cam').addEventListener('pointerdown', e => { e.preventDefault(); state.onKey?.('KeyC'); });

  state.poll = dt => {
    const k = (...c) => c.some(x => keys[x]);
    // Convention de pilotage : flèche haut = pousser le manche (piquer), flèche bas = tirer (cabrer).
    const pitch = (k('ArrowDown', 'KeyS') ? 1 : 0) - (k('ArrowUp', 'KeyW', 'KeyZ') ? 1 : 0) + touch.y;
    const roll = (k('ArrowRight', 'KeyD') ? 1 : 0) - (k('ArrowLeft', 'KeyA', 'KeyQ') ? 1 : 0) + touch.x;
    state.pitch = state.enabled ? clamp(pitch, -1, 1) : 0;
    state.roll = state.enabled ? clamp(roll, -1, 1) : 0;
    state.brake = state.enabled && (k('Space') || touchBrake);
    if (!state.looking) {
      state.lookX *= Math.exp(-3 * dt);
      state.lookY *= Math.exp(-3 * dt);
    }
  };
  state.releaseAll = () => { for (const kk in keys) keys[kk] = false; touch.x = touch.y = 0; touchBrake = false; };
  return state;
}
