// Clavier, souris (caméra + attaque) et commandes tactiles réunis dans un seul état.
import { clamp } from './util.js';

export function createInput(canvas) {
  const keys = {};
  const state = {
    moveX: 0, moveY: 0,          // -1..1 (droite / avant)
    sprint: false,
    jump: false,                 // vrai pendant une image
    attack: false,               // vrai pendant une image
    lookX: 0, lookY: 0,          // déplacement de caméra accumulé depuis la dernière image
    zoom: 0,
    locked: false,
    enabled: false,
  };

  // --- Clavier -------------------------------------------------------------------
  addEventListener('keydown', e => {
    if (!state.enabled) return;
    if (e.repeat) return;
    keys[e.code] = true;
    if (e.code === 'Space') { state.jump = true; e.preventDefault(); }
    if (e.code === 'KeyJ' || e.code === 'KeyF' || e.code === 'Enter') state.attack = true;
  });
  addEventListener('keyup', e => { keys[e.code] = false; });
  addEventListener('blur', () => { for (const k in keys) keys[k] = false; });

  // --- Souris : verrouillage du pointeur si possible, sinon glisser pour tourner ---
  let drag = null;
  canvas.addEventListener('mousedown', e => {
    if (!state.enabled) return;
    if (state.locked) { if (e.button === 0) state.attack = true; return; }
    drag = { x: e.clientX, y: e.clientY, moved: 0 };
  });
  addEventListener('mousemove', e => {
    if (state.locked) { state.lookX += e.movementX; state.lookY += e.movementY; return; }
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    drag.moved += Math.abs(dx) + Math.abs(dy);
    drag.x = e.clientX; drag.y = e.clientY;
    state.lookX += dx * 1.5; state.lookY += dy * 1.5;
  });
  addEventListener('mouseup', e => {
    if (drag && drag.moved < 6 && e.button === 0 && state.enabled) {
      state.attack = true;
      // Un clic simple tente aussi de verrouiller la souris pour une caméra plus confortable.
      try { const r = canvas.requestPointerLock?.(); r?.catch?.(() => {}); } catch { /* facultatif */ }
    }
    drag = null;
  });
  document.addEventListener('pointerlockchange', () => { state.locked = document.pointerLockElement === canvas; });
  canvas.addEventListener('wheel', e => { state.zoom += Math.sign(e.deltaY); e.preventDefault(); }, { passive: false });
  canvas.addEventListener('contextmenu', e => e.preventDefault());

  // --- Tactile : joystick à gauche, glisser à droite pour la caméra, boutons ---------
  const stick = document.getElementById('stick');
  const knob = document.getElementById('knob');
  let stickTouch = null, lookTouch = null;
  const touch = { x: 0, y: 0 };
  canvas.addEventListener('touchstart', e => {
    for (const t of e.changedTouches) {
      if (t.clientX < innerWidth * 0.45 && stickTouch === null) {
        stickTouch = { id: t.identifier, ox: t.clientX, oy: t.clientY };
        stick.style.left = `${t.clientX - 60}px`; stick.style.top = `${t.clientY - 60}px`;
        stick.hidden = false;
      } else if (lookTouch === null) {
        lookTouch = { id: t.identifier, x: t.clientX, y: t.clientY };
      }
    }
    e.preventDefault();
  }, { passive: false });
  canvas.addEventListener('touchmove', e => {
    for (const t of e.changedTouches) {
      if (stickTouch && t.identifier === stickTouch.id) {
        let dx = t.clientX - stickTouch.ox, dy = t.clientY - stickTouch.oy;
        const d = Math.hypot(dx, dy), max = 50;
        if (d > max) { dx *= max / d; dy *= max / d; }
        touch.x = dx / max; touch.y = -dy / max;
        knob.style.transform = `translate(${dx}px, ${dy}px)`;
      } else if (lookTouch && t.identifier === lookTouch.id) {
        state.lookX += (t.clientX - lookTouch.x) * 2.5; state.lookY += (t.clientY - lookTouch.y) * 2.5;
        lookTouch.x = t.clientX; lookTouch.y = t.clientY;
      }
    }
    e.preventDefault();
  }, { passive: false });
  const endTouch = e => {
    for (const t of e.changedTouches) {
      if (stickTouch && t.identifier === stickTouch.id) {
        stickTouch = null; touch.x = touch.y = 0; stick.hidden = true; knob.style.transform = '';
      }
      if (lookTouch && t.identifier === lookTouch.id) lookTouch = null;
    }
  };
  canvas.addEventListener('touchend', endTouch);
  canvas.addEventListener('touchcancel', endTouch);
  const bindBtn = (id, fn) => document.getElementById(id).addEventListener('pointerdown', e => { e.preventDefault(); if (state.enabled) fn(); });
  bindBtn('btn-attack', () => { state.attack = true; });
  bindBtn('btn-jump', () => { state.jump = true; });

  // --- Lecture par image ------------------------------------------------------------
  state.poll = () => {
    const k = (...c) => c.some(x => keys[x]);
    let x = (k('KeyD', 'ArrowRight') ? 1 : 0) - (k('KeyA', 'KeyQ', 'ArrowLeft') ? 1 : 0) + touch.x;
    let y = (k('KeyW', 'KeyZ', 'ArrowUp') ? 1 : 0) - (k('KeyS', 'ArrowDown') ? 1 : 0) + touch.y;
    const len = Math.hypot(x, y);
    if (len > 1) { x /= len; y /= len; }
    state.moveX = clamp(x, -1, 1); state.moveY = clamp(y, -1, 1);
    state.sprint = k('ShiftLeft', 'ShiftRight') || Math.hypot(touch.x, touch.y) > 0.95;
  };
  // À appeler en fin d'image : efface les actions ponctuelles.
  state.consume = () => { state.jump = state.attack = false; state.lookX = state.lookY = state.zoom = 0; };
  state.releaseAll = () => { for (const kk in keys) keys[kk] = false; touch.x = touch.y = 0; };

  return state;
}
