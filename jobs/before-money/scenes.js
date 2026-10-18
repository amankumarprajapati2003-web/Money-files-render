// The Money Files — Video 5: What Did Ancient Humans Use Before Money? (ink stick-figure style)
export default function (A) {
  const { ctx, DUR, line_, atp, scene, cue, clamp, ease, smooth, pop, hash, poly, circ, ell, rect, rrect, line, text, stamp, usMap, MARK, HEAD, SANS, TYPE, INK } = A;
  const S = sub => line_(sub).start, P = (sub, ph) => atp(sub, ph);
  const RED = '#e0262f', YEL = '#ffd400', FUR = '#8b5a2b', FUR2 = '#6e4420';
  const sc = (a, b, fn) => { scene(a, b, fn); cue(a + 0.02, 'whoosh'); };
  // ---------- ink stick figures ----------
  function stick(x, y, s, o = {}, t = 0) {
    ctx.save(); ctx.translate(x, y); ctx.scale(o.flip ? -s : s, s);
    const bob = Math.sin(t * 2.4 + x) * 2, walk = o.walk ? Math.sin(t * 7 + x) : 0; ctx.translate(0, bob * 0.4);
    const LW = 8;
    if (o.sit) { line(0, 0, 60, 10, LW); line(60, 10, 70, 120, LW); line(0, 0, 45, 25, LW); line(45, 25, 40, 125, LW); }
    else { line(0, 0, -26 + walk * 26, 150, LW); line(0, 0, 26 - walk * 26, 150, LW); }
    if (o.cave) { poly([[-34, -150], [34, -150], [44, -70], [38, -8], [26, 6], [14, -6], [0, 8], [-14, -6], [-26, 6], [-38, -8], [-44, -70]], FUR, true, 6); for (let k = 0; k < 6; k++) line(-26 + k * 10, -120 + (k % 2) * 30, -20 + k * 10, -96 + (k % 2) * 30, 4, FUR2); }
    else if (o.tunic) poly([[-30, -150], [30, -150], [46, 10], [-46, 10]], o.tunic, true, 6);
    else line(0, 0, 0, -150, LW);
    const hd = o.hands || [[-60, -50], [60, -50]];
    for (const [k, [hx, hy]] of hd.entries()) { const sx = k ? 14 : -14, ex = (sx + hx) / 2 + (k ? 18 : -18), ey = (-140 + hy) / 2 + 10; poly([[sx, -140], [ex, ey], [hx, hy]], null, false, LW); circ(hx, hy, 9, '#fff', 5, 12); }
    if (o.hold) { ctx.save(); ctx.translate(hd[1][0], hd[1][1]); o.hold(); ctx.restore(); }
    const hy = -212; if (o.hair === 'long') poly([[-60, hy - 10], [-70, hy + 70], [-40, hy + 60], [40, hy + 60], [70, hy + 70], [60, hy - 10]], o.hairCol || '#5a3a1e', true, 5);
    circ(0, hy, 62, '#ffffff', 7, 30);
    if (o.hair === 'cave') { const pts = []; for (let k = 0; k <= 14; k++) { const a = Math.PI + k / 14 * Math.PI, r = 66 + (k % 2) * 22; pts.push([Math.cos(a) * r, hy + Math.sin(a) * r * 0.9]); } pts.push([60, hy - 10], [30, hy - 30], [0, hy - 20], [-30, hy - 34], [-60, hy - 10]); poly(pts, o.hairCol || '#6b3e1f', true, 5); }
    if (o.hair === 'short' || o.hair === 'long') poly([[-62, hy - 6], [-55, hy - 42], [-20, hy - 64], [25, hy - 62], [58, hy - 36], [62, hy - 6], [35, hy - 32], [0, hy - 36], [-35, hy - 30]], o.hairCol || '#3a2a1e', true, 5);
    if (o.helmet) { poly([[-66, hy - 6], [-60, hy - 50], [0, hy - 72], [60, hy - 50], [66, hy - 6]], '#c9a23a', true, 6); poly([[-8, hy - 72], [0, hy - 110], [8, hy - 72]], RED, true, 5); }
    if (o.crown) poly([[-44, hy - 50], [-44, hy - 96], [-22, hy - 70], [0, hy - 104], [22, hy - 70], [44, hy - 96], [44, hy - 50]], YEL, true, 6);
    const e = o.eyes || 'open', g = o.gaze || [0, 0], blink = hash(Math.floor(t * 3), Math.floor(x)) < 0.05;
    for (const ex of [-22, 22]) {
      if (e === 'closed' || blink) poly([[ex - 12, hy - 6], [ex, hy + 2], [ex + 12, hy - 6]], null, false, 6);
      else if (e === 'happy') poly([[ex - 12, hy], [ex, hy - 12], [ex + 12, hy]], null, false, 6);
      else if (e === 'wide') { circ(ex, hy - 6, 15, '#fff', 5, 14); circ(ex + g[0] * 5, hy - 6 + g[1] * 5, 6, INK, 0, 10); }
      else circ(ex + g[0] * 4, hy - 6 + g[1] * 4, 6.5, INK, 0, 10);
    }
    if (e === 'angry') { line(-36, hy - 30, -10, hy - 20, 6); line(36, hy - 30, 10, hy - 20, 6); }
    if (o.worried) { line(-34, hy - 22, -12, hy - 30, 5); line(34, hy - 22, 12, hy - 30, 5); }
    const m = o.mouth || 'smile', my = hy + 28;
    if (m === 'smile') poly([[-22, my - 4], [0, my + 10], [22, my - 4]], null, false, 6);
    else if (m === 'grin') poly([[-26, my - 6], [26, my - 6], [14, my + 14], [-14, my + 14]], '#fff', true, 6);
    else if (m === 'frown') poly([[-20, my + 8], [0, my - 4], [20, my + 8]], null, false, 6);
    else if (m === 'o') circ(0, my + 2, 9, '#5a1a1a', 5, 12);
    else if (m === 'open') poly([[-18, my - 4], [18, my - 4], [10, my + 16], [-10, my + 16]], '#5a1a1a', true, 6);
    else line(-14, my, 14, my, 6);
    if (o.blush) { circ(-40, hy + 10, 10, 'rgba(255,120,120,0.5)', 0, 10); circ(40, hy + 10, 10, 'rgba(255,120,120,0.5)', 0, 10); }
    if (o.beard) poly([[-40, hy + 20], [40, hy + 20], [20, hy + 70], [-20, hy + 70]], o.beardCol || '#6b3e1f', true, 5);
    if (o.sweat) { const sy = (t * 60) % 40; poly([[60, hy - 30 + sy], [66, hy - 14 + sy], [54, hy - 14 + sy]], '#7fd0ff', true, 4); }
    if (o.q) text('?', 90, hy - 90 + Math.sin(t * 4) * 6, 110, '#111', MARK, 'center', 0);
    ctx.restore();
  }
  const CAVE = (o = {}) => ({ cave: true, hair: 'cave', ...o });
  // ---------- painted backgrounds ----------
  const sky = (top = '#5fb8f2', bot = '#d9f0ff') => { const g = ctx.createLinearGradient(0, 0, 0, 1080); g.addColorStop(0, top); g.addColorStop(0.62, bot); g.addColorStop(1, bot); ctx.fillStyle = g; ctx.fillRect(-200, -200, 2320, 1480); };
  const cloud = (x, y, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); for (const [cx, cy, r] of [[-60, 0, 40], [-10, -20, 55], [50, -5, 45], [90, 10, 32], [-100, 12, 28]]) circ(cx, cy, r, '#ffffff', 0, 20); ctx.restore(); };
  const sun = (x, y, r = 60) => { const g = ctx.createRadialGradient(x, y, r * 0.5, x, y, r * 4); g.addColorStop(0, 'rgba(255,240,170,0.9)'); g.addColorStop(1, 'rgba(255,240,170,0)'); ctx.fillStyle = g; ctx.fillRect(x - r * 4, y - r * 4, r * 8, r * 8); circ(x, y, r, '#ffe27a', 5, 26); };
  const acacia = (x, y, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); poly([[-10, 0], [-6, -150], [-60, -230], [-50, -236], [0, -170], [40, -240], [52, -232], [8, -150], [12, 0]], '#7a5232', true, 5); ell(0, -250, 210, 48, '#5f9e3a', 6); ell(-60, -270, 120, 32, '#6fb046', 0); ctx.restore(); };
  const rock = (x, y, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); poly([[-90, 0], [-70, -60], [-10, -85], [60, -60], [95, 0]], '#9aa3ad', true, 6); poly([[-50, -40], [0, -62], [40, -45]], null, false, 4, '#7c858f'); ctx.restore(); };
  const grassTufts = (y0, n = 30) => { for (let k = 0; k < n; k++) { const x = hash(k, 9) * 1920, y = y0 + hash(k, 5) * 280; poly([[x - 12, y], [x - 4, y - 34], [x, y], [x + 6, y - 40], [x + 12, y]], null, false, 4, '#3f7d2a'); } };
  const savanna = () => { sky(); sun(1380, 260); cloud(260, 170, 1.1); cloud(1650, 120, 0.9); poly([[-50, 640], [400, 580], [900, 620], [1400, 570], [1970, 610], [1970, 700], [-50, 700]], '#9cc46a', true, 0); rect(-50, 660, 2020, 500, '#b8d977', 0); grassTufts(700); };
  const night = () => { const g = ctx.createLinearGradient(0, 0, 0, 1080); g.addColorStop(0, '#0f1a3a'); g.addColorStop(1, '#3a2a52'); ctx.fillStyle = g; ctx.fillRect(-200, -200, 2320, 1480); for (let k = 0; k < 40; k++) circ(hash(k) * 1920, hash(k, 2) * 500, 3, '#fff', 0, 6); circ(1600, 160, 60, '#fff6d0', 5, 24); rect(-50, 760, 2020, 400, '#2c3a2a', 0); };
  const fire = (x, y, s, t) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); const g = ctx.createRadialGradient(0, -40, 10, 0, -40, 300); g.addColorStop(0, 'rgba(255,170,60,0.55)'); g.addColorStop(1, 'rgba(255,170,60,0)'); ctx.fillStyle = g; ctx.fillRect(-300, -340, 600, 600);
    line(-60, 10, 60, -10, 14, '#6b4423'); line(-60, -10, 60, 10, 14, '#6b4423'); const f = Math.sin(t * 12) * 8; poly([[-45, 0], [-30, -70 - f], [-10, -40], [0, -110 + f], [15, -45], [32, -80 - f], [45, 0]], '#ff9a1f', true, 5); poly([[-22, 0], [-8, -50 + f], [6, -24], [18, -55 - f], [24, 0]], '#ffe14d', true, 0); ctx.restore(); };
  const room = () => { const g = ctx.createLinearGradient(0, 0, 0, 1080); g.addColorStop(0, '#fbf3e4'); g.addColorStop(1, '#f1e2c6'); ctx.fillStyle = g; ctx.fillRect(-200, -200, 2320, 1480); rect(-50, 820, 2020, 300, '#d9b98a', 0); line(-50, 820, 1970, 820, 7); };
  const sea = (t, y0 = 640) => { sky('#4fb4ee', '#d6f2ff'); rect(-50, y0, 2020, 600, '#2f8fd1', 0); for (let k = 0; k < 18; k++) { const x = (k * 140 + t * 30) % 2100 - 100; poly([[x, y0 + 40 + (k % 3) * 60], [x + 30, y0 + 28 + (k % 3) * 60], [x + 60, y0 + 40 + (k % 3) * 60]], null, false, 4, '#cdeeff'); } };
  const desert = () => { sky('#7cc6f0', '#fde9c4'); sun(1500, 200); rect(-50, 640, 2020, 500, '#e9c98a', 0); poly([[-50, 660], [500, 610], [1000, 650], [1500, 600], [1970, 640], [1970, 700], [-50, 700]], '#dcb874', true, 0); };
  // ---------- props ----------
  const tag = (x, y, s, size = 54, fill = YEL, col = '#111', rot = 0, p = 1) => { if (p <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(p, p); ctx.font = `${size}px ${HEAD}`; const w = ctx.measureText(s).width + size * 0.8; rrect(-w / 2, -size * 0.66, w, size * 1.32, 14, fill, 6); text(s, 0, 2, size, col, HEAD, 'center', 0); ctx.restore(); };
  const ptag = (t, t0, x, y, s, size, fill, col, rot) => { if (t >= t0) tag(x, y, s, size, fill, col, rot, pop(t, t0, 0.3)); };
  const big = (t, t0, s, x = 960, y = 140, size = 110, col = YEL) => { if (t >= t0) { const p = pop(t, t0, 0.35); ctx.save(); ctx.translate(x, y); ctx.scale(p, p); text(s, 0, 0, size, col, MARK, 'center', 16); ctx.restore(); } };
  const bigX = (x, y, s, p) => { if (p <= 0) return; const q = clamp(p); poly([[x - s, y - s], [x - s + 2 * s * Math.min(1, q * 2), y - s + 2 * s * Math.min(1, q * 2)]], null, false, 24, RED); if (q > 0.5) poly([[x + s, y - s], [x + s - 2 * s * (q - 0.5) * 2, y - s + 2 * s * (q - 0.5) * 2]], null, false, 24, RED); };
  const phone = (x, y, s, bal, t, o = {}) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); rrect(-200, -380, 400, 760, 54, '#1b1b1f'); rrect(-176, -352, 352, 704, 32, o.screen || '#f4f6fb', 4); text('My Bank', 0, -280, 36, '#3a4a6a', SANS, 'center', 0); text('Available balance', 0, -190, 30, '#6a7a90', SANS, 'center', 0); text(bal, 0, -110, 76, '#111', HEAD, 'center', 0); for (let k = 0; k < 4; k++) { rrect(-150, -20 + k * 90, 300, 70, 14, '#e6ebf3', 0); text(['Rent', 'Groceries', 'Gas', 'Phone bill'][k], -120, 15 + k * 90, 28, '#333', SANS, 'left', 0); text(['-$1,450', '-$212', '-$64', '-$85'][k], 120, 15 + k * 90, 28, RED, SANS, 'right', 0); } ctx.restore(); };
  const fish = (x, y, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ell(0, 0, 60, 26, '#6fb3d9', 5); poly([[55, 0], [90, -24], [90, 24]], '#6fb3d9', true, 5); circ(-34, -6, 5, INK, 0, 8); ctx.restore(); };
  const spear = (len = 220) => { line(0, 60, 0, -len, 7, '#7a5232'); poly([[-12, -len], [0, -len - 46], [12, -len]], '#9aa3ad', true, 5); };
  const meat = (x, y, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ell(0, 0, 60, 40, '#c0573a', 6); ell(-8, -6, 30, 18, '#e08a6a', 0); line(50, 10, 100, 30, 12, '#f4ead8'); circ(104, 24, 12, '#f4ead8', 5, 10); circ(104, 40, 12, '#f4ead8', 5, 10); ctx.restore(); };
  const furPelt = (x, y, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); poly([[-70, -40], [-30, -60], [30, -60], [70, -40], [60, 40], [20, 60], [-20, 60], [-60, 40]], FUR, true, 6); ctx.restore(); };
  const thought = (x, y, w, h, draw) => { circ(x - w * 0.3, y + h * 0.7, 10, '#fff', 4, 12); circ(x - w * 0.2, y + h * 0.55, 16, '#fff', 4, 14); ell(x, y, w / 2, h / 2, '#fff', 6); ctx.save(); ctx.translate(x, y); draw(); ctx.restore(); };
  const shells = (x, y, n, s = 1) => { for (let k = 0; k < n; k++) { const a = k / n * Math.PI * 1.2 + 0.9; ctx.save(); ctx.translate(x + Math.cos(a) * 160 * s, y + Math.sin(a) * 80 * s); ctx.scale(s, s); ell(0, 0, 16, 22, '#f3e3c8', 4); circ(0, -6, 4, INK, 0, 8); ctx.restore(); } poly(Array.from({ length: 21 }, (_, k) => { const a = 0.9 + k / 20 * Math.PI * 1.2; return [x + Math.cos(a) * 160 * s, y + Math.sin(a) * 80 * s]; }), null, false, 3, '#7a5232'); };
  const tablet = (x, y, rot, s, marks, p = 1) => { if (p <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s * p, s * p); rrect(-150, -190, 300, 380, 40, '#c99a64'); for (let r = 0; r < marks; r++) for (let c = 0; c < 5; c++) { const xx = -100 + c * 50, yy = -140 + r * 55; poly([[xx, yy], [xx + 22, yy + 8], [xx, yy + 16]], '#8a5f33', true, 3); } ctx.restore(); };
  const cow = (x, y, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); for (const lx of [-70, -30, 40, 80]) rect(lx - 10, 30, 20, 90, '#fff', 5); ell(0, 0, 130, 70, '#ffffff'); ell(-30, -10, 40, 26, '#333', 0); ell(50, 20, 30, 20, '#333', 0); ell(-150, -30, 50, 40, '#fff'); ell(-170, -10, 30, 20, '#f6b8c4', 5); poly([[-140, -66], [-120, -96], [-118, -64]], '#e8dcc0', true, 4); poly([[-170, -66], [-190, -96], [-178, -62]], '#e8dcc0', true, 4); circ(-150, -40, 5, INK, 0, 8); ctx.restore(); };
  const raiStone = (x, y, s = 1, col = '#c9c3b6') => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); circ(0, 0, 200, col, 8, 40); circ(0, 0, 50, '#7aa8c8', 7, 20); for (let k = 0; k < 6; k++) line(-150 + k * 40, -100 + (k % 3) * 60, -120 + k * 40, -80 + (k % 3) * 60, 4, '#a39d90'); ctx.restore(); };
  const palm = (x, y, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); poly([[-10, 0], [0, -150], [20, -300], [30, -300], [14, -150], [10, 0]], '#9b6b3a', true, 5); for (let k = 0; k < 6; k++) { const a = -Math.PI + k * Math.PI / 5; poly([[25, -300], [25 + Math.cos(a) * 150, -300 + Math.sin(a) * 60 + 50]], null, false, 22, '#3f9a4a'); } ctx.restore(); };
  const coinL = (x, y, r = 60) => { circ(x, y, r, '#e8c34a', 6, 22); ell(x, y, r * 0.55, r * 0.4, '#d4a92e', 4); text('🦁', x, y + 6, r * 0.8, '#000', SANS, 'center', 0); };
  const ziggurat = (x, y, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); for (let k = 0; k < 4; k++) rect(-220 + k * 50, -k * 90 - 90, 440 - k * 100, 90, ['#d9a866', '#cf9c58', '#c4904c', '#b98440'][k], 6); rect(-30, -90, 60, 90, '#8a5f33', 5); ctx.restore(); };
  const parliament = (x, y, s, burning, t) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); rect(-500, -260, 1000, 260, '#e3cf9c'); for (let k = 0; k < 9; k++) { rect(-470 + k * 110, -230, 40, 80, '#7d8fa8', 4); poly([[-470 + k * 110, -230], [-450 + k * 110, -260], [-430 + k * 110, -230]], '#e3cf9c', true, 4); }
    rect(380, -520, 120, 520, '#d8c28c'); poly([[380, -520], [440, -600], [500, -520]], '#5a6b7a', true, 6); circ(440, -460, 34, '#fff', 5, 18); rect(-500, -420, 110, 420, '#d8c28c');
    if (burning) for (let k = 0; k < 9; k++) { const f = Math.sin(t * 10 + k) * 14; ctx.save(); ctx.translate(-420 + k * 110, -260); poly([[-50, 0], [-30, -110 - f], [-8, -60], [6, -160 + f], [24, -70], [44, -120 - f], [56, 0]], '#ff8a1f', true, 5); poly([[-24, 0], [-8, -70 + f], [8, -40], [20, -80 - f], [28, 0]], '#ffe14d', true, 0); ctx.restore(); }
    ctx.restore(); };
  const chapter = (t0, t1, n, title) => sc(t0, t1, (t) => {
    savanna(); const p = ease((t - t0) / 0.45); ctx.save(); ctx.translate(0, (1 - p) * 700);
    rrect(420, 260, 1080, 520, 30, '#f7ecd2'); circ(420, 520, 40, '#e4d3ac', 6, 18); circ(1500, 520, 40, '#e4d3ac', 6, 18);
    text(`CHAPTER ${n}`, 960, 380, 74, '#7a5232', HEAD, 'center', 0); ctx.font = `110px ${MARK}`; const fs = Math.min(110, 110 * 960 / ctx.measureText(title).width); text(title, 960, 540, fs, '#141414', MARK, 'center', 0); ctx.restore();
    stick(1640, 900, 1.25, CAVE({ eyes: 'happy', mouth: 'grin', hands: [[-60, -40], [110, -220]] }), t); });
  // ======================= HOOK =======================
  sc(0, S('But for almost all') - 0.15, (t) => {
    room(); const ck = S('You check it.'), wo = S('You worry about it.'), fo = S('You work forty');
    stick(520, 760, 1.6, { tunic: '#4a7bd1', hair: 'short', eyes: t > wo ? 'wide' : 'open', worried: t > wo, sweat: t > wo, mouth: t > wo ? 'frown' : 'flat', gaze: [1, 0], hands: [[-60, -40], [70, -110]], hold: () => { rrect(-18, -40, 36, 64, 6, '#222', 4); } }, t);
    phone(1250, 520, 0.95, '$214.37', t);
    if (t > fo) { const p = pop(t, fo, 0.35); ctx.save(); ctx.translate(1650, 230); ctx.scale(p, p); circ(0, 0, 110, '#fff', 8, 30); const a = t * 3; line(0, 0, Math.cos(a) * 80, Math.sin(a) * 80, 8); line(0, 0, Math.cos(a / 12) * 50, Math.sin(a / 12) * 50, 10); ctx.restore(); ptag(t, fo + 0.3, 1650, 400, '40 HOURS A WEEK', 50); }
  });
  cue(S('You worry about it.'), 'pop', 0.5);
  sc(S('But for almost all') - 0.15, S('So how did they get anything?') - 0.15, (t) => {
    savanna(); acacia(1500, 690, 1.1); rock(380, 760, 1.2); fire(900, 760, 0.8, t);
    stick(400, 790, 1.4, CAVE({ sit: true, eyes: 'closed', mouth: 'smile', hands: [[-40, -230], [40, -230]] }), t);
    stick(1150, 880, 1.0, CAVE({ eyes: 'happy', mouth: 'grin', hands: [[-60, -40], [70, -60]], hold: () => spear(180) }), t); stick(1350, 880, 0.9, CAVE({ hair: 'long', hairCol: '#4a2a12', eyes: 'happy', mouth: 'smile' }), t + 1);
    const nn = P('No coins.', 'No coins'); ptag(t, S('No coins.'), 520, 170, 'NO COINS', 64, '#fff'); ptag(t, S('No banks.'), 960, 170, 'NO BANKS', 64, '#fff'); ptag(t, S('No bills.'), 1400, 170, 'NO BILLS', 64, '#fff');
    if (t > S('For hundreds of thousands')) big(t, S('For hundreds of thousands') + 1.2, 'NO MONEY AT ALL', 960, 330, 100);
  });
  ['No coins.', 'No banks.', 'No bills.'].forEach(s => cue(S(s), 'pop', 0.6));
  sc(S('So how did they get anything?') - 0.15, S('You probably learned') - 0.15, (t) => {
    savanna(); stick(960, 880, 1.9, CAVE({ q: true, eyes: 'wide', mouth: 'o', gaze: [0, -1], hands: [[-40, -250], [70, -40]] }), t); big(t, S('So how did they get') + 0.3, 'HOW DID THEY GET ANYTHING?', 960, 150, 90, '#fff');
  });
  const board = (t, lines, myth) => { room(); rrect(300, 120, 1320, 560, 20, '#2f5a43'); rect(300, 680, 1320, 24, '#9b6b3a'); lines.forEach(([t0, s], k) => { if (t > t0) text(s, 960, 240 + k * 110, 76, '#f4f4ec', MARK, 'center', 0); }); if (myth) stamp('MYTH', 1360, 520, 150, -0.2, myth); };
  sc(S('You probably learned') - 0.15, S("It's a great story.") - 0.15, (t) => {
    board(t, [[S('They bartered.'), 'BARTER'], [S("I'll give you three fish"), '3 FISH = 1 SPEAR'], [S('Then barter got annoying'), '→ MONEY INVENTED']]);
    const t0 = S("I'll give you three fish"); stick(500, 1000, 0.95, CAVE({ eyes: 'happy', mouth: 'grin', hands: [[-60, -40], [80, -60]], hold: () => fish(30, 0, 0.6) }), t); stick(1420, 1000, 0.95, CAVE({ flip: true, eyes: 'open', mouth: 'smile', hands: [[-60, -40], [70, -60]], hold: () => spear(160) }), t);
  });
  sc(S("It's a great story.") - 0.15, S('Chapter one.') - 0.1, (t) => {
    board(t, [[0, 'BARTER'], [0, '3 FISH = 1 SPEAR'], [0, '→ MONEY INVENTED']], (t - S('It almost certainly never')) / 0.18);
    stick(1650, 1000, 1.1, CAVE({ eyes: 'angry', mouth: 'frown', hands: [[-120, -160], [60, -40]] }), t);
  });
  cue(S('It almost certainly never'), 'hit', 1.0);
  // ======================= CHAPTER 1 =======================
  chapter(S('Chapter one.') - 0.1, S("Here's a test.") - 0.15, 1, 'THE BARTER MYTH'); cue(S('Chapter one.') + 0.6, 'hit', 0.8);
  sc(S("Here's a test.") - 0.15, S('In the barter story') - 0.15, (t) => {
    savanna(); const want = S('The first one wants'), nh = S("But the second one isn't hungry."), fur = S('He wants a warm fur.'), wh = S('So... what happens?');
    stick(560, 900, 1.35, CAVE({ eyes: 'open', mouth: 'smile', gaze: [1, 0], hands: [[-60, -40], [70, -70]], hold: () => meat(40, 0, 0.6) }), t);
    stick(1360, 900, 1.35, CAVE({ flip: true, eyes: 'open', mouth: 'flat', gaze: [1, 0], hands: [[-60, -40], [70, -70]], hold: () => spear(180) }), t);
    if (t > want) thought(620, 330, 300, 190, () => { ctx.rotate(-0.4); spear(80); });
    if (t > nh) bigX(1360, 520, 40, 0); if (t > fur) thought(1300, 330, 300, 190, () => furPelt(0, 0, 0.9));
    if (t > nh && t < fur) thought(1300, 330, 300, 190, () => { meat(0, 0, 0.7); bigX(0, 0, 60, (t - nh) / 0.4); });
    if (t > wh) text('???', 960, 650, 120, RED, MARK, 'center', 12);
  });
  cue(S('He wants a warm fur.'), 'pop', 0.6);
  sc(S('In the barter story') - 0.15, S('The story comes from Adam Smith') - 0.15, (t) => {
    savanna(); const u = clamp((t - S('No deal.')) / 2); stick(560 - 300 * u, 900, 1.35, CAVE({ walk: u > 0 && u < 1, eyes: 'angry', mouth: 'frown', hands: [[-60, -40], [70, -70]], hold: () => meat(40, 0, 0.6) }), t);
    stick(1360 + 300 * u, 900, 1.35, CAVE({ flip: true, walk: u > 0 && u < 1, eyes: 'angry', mouth: 'frown', hands: [[-60, -40], [70, -70]], hold: () => spear(180) }), t);
    big(t, S('No deal.'), 'NO DEAL', 960, 180, 120, RED); ptag(t, S('Economists even have'), 960, 360, 'THE "DOUBLE COINCIDENCE OF WANTS"', 52);
  });
  cue(S('No deal.'), 'hit', 0.8);
  sc(S('The story comes from Adam Smith') - 0.15, S('Anthropologists went looking') - 0.15, (t) => {
    room(); ctx.save(); ctx.translate(380, 460); ctx.rotate(-0.06); rrect(-180, -240, 360, 480, 12, '#8a2a2a'); text('THE', 0, -150, 44, '#f3d27a', TYPE, 'center', 0); text('WEALTH', 0, -80, 64, '#f3d27a', HEAD, 'center', 0); text('OF NATIONS', 0, -10, 56, '#f3d27a', HEAD, 'center', 0); text('ADAM SMITH', 0, 110, 40, '#f3d27a', TYPE, 'center', 0); text('1776', 0, 180, 44, '#f3d27a', HEAD, 'center', 0); ctx.restore();
    stick(1000, 920, 1.25, { tunic: '#f3f3f3', hair: 'short', eyes: 'open', mouth: 'smile', hands: [[-60, -40], [70, -80]], hold: () => { ell(10, 0, 60, 30, '#d9a35a', 5); } }, t); text('BAKER', 1000, 1040, 44, '#111', HEAD, 'center', 0);
    stick(1500, 920, 1.25, { flip: true, tunic: '#c94c4c', hair: 'short', beard: true, eyes: 'open', mouth: 'flat', hands: [[-60, -40], [70, -80]], hold: () => meat(20, 0, 0.5) }, t); text('BUTCHER', 1500, 1040, 44, '#111', HEAD, 'center', 0);
    if (t > S('So no exchange')) { bigX(1250, 560, 120, (t - S('So no exchange')) / 0.5); text('NO EXCHANGE', 1250, 250, 90, RED, MARK, 'center', 12); }
  });
  cue(S('So no exchange'), 'hit', 0.8);
  sc(S('Anthropologists went looking') - 0.15, S('In nineteen eighty-five') - 0.15, (t) => {
    sky(); ctx.save(); ctx.translate(960, 760); ctx.rotate(t * 0.15); circ(0, 0, 330, '#4fa3e0', 8, 40); poly([[-200, -120], [-60, -200], [40, -120], [-40, 0], [-150, 40]], '#7cc36a', true, 6); poly([[60, 60], [200, 20], [240, 140], [120, 220]], '#7cc36a', true, 6); ctx.restore();
    stick(960, 430, 1.0, { tunic: '#c9a26b', hair: 'short', eyes: 'open', mouth: 'flat', walk: true, gaze: [1, 0.5], hands: [[-60, -40], [90, -140]], hold: () => { line(0, 0, 30, -40, 8); circ(48, -64, 30, 'rgba(200,235,255,0.6)', 7, 18); } }, t);
    ptag(t, P('Anthropologists went looking', 'barter'), 960, 120, 'SEARCHING FOR A BARTER ECONOMY', 52); ptag(t, S('For more than a century.'), 960, 240, '100+ YEARS', 64, '#fff');
  });
  sc(S('In nineteen eighty-five') - 0.15, S('Not one.') - 0.15, (t) => {
    room(); rrect(220, 200, 1480, 560, 20, '#fffaf0'); text('“', 320, 330, 260, RED, SANS, 'center', 0);
    const q = S('No example of a barter'); if (t > q) { const words = 'No example of a barter economy, pure and simple, has ever been described.'.split(' '); const n = Math.ceil(words.length * clamp((t - q) / 3.2)); const l1 = words.slice(0, Math.min(n, 6)).join(' '), l2 = words.slice(6, n).join(' '); text(l1, 980, 400, 76, '#111', MARK, 'center', 0); text(l2, 980, 520, 76, '#111', MARK, 'center', 0); }
    text('— CAROLINE HUMPHREY, CAMBRIDGE ANTHROPOLOGIST, 1985', 960, 680, 40, '#7a5232', HEAD, 'center', 0);
  });
  sc(S('Not one.') - 0.15, S('Chapter two.') - 0.1, (t) => {
    savanna(); text('0', 960, 430, 420, RED, MARK, 'center', 20); text('BARTER ECONOMIES FOUND', 960, 700, 74, '#111', HEAD, 'center', 0);
    if (t > S('So if they didn')) stick(1550, 920, 1.3, CAVE({ q: true, eyes: 'wide', mouth: 'o', gaze: [-1, -0.5], hands: [[-40, -250], [70, -40]] }), t);
  });
  cue(S('Not one.'), 'hit', 0.9);
  // ======================= CHAPTER 2 =======================
  chapter(S('Chapter two.') - 0.1, S('Picture a camp in the Kalahari') - 0.15, 2, 'THE GIFT'); cue(S('Chapter two.') + 0.6, 'hit', 0.8);
  sc(S('Picture a camp in the Kalahari') - 0.15, S("He doesn't sell it.") - 0.15, (t) => {
    const g = ctx.createLinearGradient(0, 0, 0, 1080); g.addColorStop(0, '#ff9a5a'); g.addColorStop(0.6, '#ffd59a'); ctx.fillStyle = g; ctx.fillRect(-200, -200, 2320, 1480); sun(1500, 520, 90); rect(-50, 660, 2020, 500, '#d9b56a', 0); acacia(300, 700, 1.0);
    for (let k = 0; k < 3; k++) { ctx.save(); ctx.translate(900 + k * 260, 720); poly([[-90, 0], [0, -150], [90, 0]], '#b07a3a', true, 6); ctx.restore(); }
    text('KALAHARI · THOUSANDS OF YEARS AGO', 960, 130, 60, '#fff', HEAD, 'center', 10);
    const u = clamp((t - S('A hunter comes home')) / 2.5); stick(-100 + 900 * ease(u), 900, 1.3, CAVE({ walk: u < 1, eyes: 'happy', mouth: 'grin', hands: [[-40, -230], [40, -230]] }), t);
    if (t > S('A hunter comes home')) { ctx.save(); ctx.translate(-100 + 900 * ease(u), 600); ell(0, 0, 130, 50, '#b98a4a', 6); poly([[100, -20], [150, -60], [140, -10]], '#b98a4a', true, 5); line(-60, 40, -70, 90, 6); line(60, 40, 70, 90, 6); ctx.restore(); }
  });
  sc(S("He doesn't sell it.") - 0.15, S('Why would anyone give') - 0.15, (t) => {
    savanna(); fire(960, 780, 0.9, t); const sh = S('He shares it.');
    stick(960, 900, 1.3, CAVE({ eyes: 'happy', mouth: 'grin', hands: [[-110, -80], [110, -80]] }), t);
    bigX(960, 300, 70, (t - S("He doesn't sell it.")) / 0.4); if (t < sh) text('SELL?', 960, 300, 70, '#111', HEAD, 'center', 0);
    if (t > sh) for (let k = 0; k < 6; k++) { const ang = Math.PI + k / 5 * Math.PI, x = 960 + Math.cos(ang) * 700, y = 900 + Math.sin(ang) * 120 + 40; stick(x, y, 0.85, CAVE({ hair: k % 2 ? 'long' : 'cave', hairCol: ['#4a2a12', '#6b3e1f'][k % 2], eyes: 'happy', mouth: 'smile' }), t + k); const u = clamp((t - sh - k * 0.15) / 0.6); if (u < 1) meat(960 + (x - 960) * u, 780 + (y - 260 - 780) * u - Math.sin(u * Math.PI) * 150, 0.4); else meat(x + 60, y - 120, 0.35); }
    big(t, S('With everyone.'), 'SHARED WITH EVERYONE', 960, 160, 90, '#fff');
  });
  cue(S('He shares it.'), 'pop', 0.7);
  sc(S('Why would anyone give') - 0.15, P('Among the Zhu', 'Among') - 0.15, (t) => {
    savanna(); const nx = S('Because next week'), ot = S('And then someone else shares');
    stick(700, 900, 1.4, CAVE({ eyes: t > nx ? 'wide' : 'open', worried: t > nx, mouth: t > nx ? 'frown' : 'flat', hands: [[-80, -20], [80, -20]] }), t);
    if (t > nx) ptag(t, nx, 700, 230, 'NEXT WEEK: NOTHING', 60, '#fff', RED);
    if (t > ot) { stick(1300, 900, 1.3, CAVE({ flip: true, hair: 'long', hairCol: '#4a2a12', eyes: 'happy', mouth: 'grin', hands: [[-60, -40], [110, -100]], hold: () => meat(20, 0, 0.5) }), t); ctx.save(); ctx.translate(1000, 400); ctx.rotate(t); poly(Array.from({ length: 30 }, (_, k) => { const a = k / 29 * Math.PI * 1.7; return [Math.cos(a) * 120, Math.sin(a) * 120]; }), null, false, 10, '#2fa35a'); ctx.restore(); text('IT COMES BACK AROUND', 1000, 230, 64, '#2f7a3a', HEAD, 'center', 0); }
  });
  sc(P('Among the Zhu', 'Among') - 0.15, S("That wasn't generosity.") - 0.15, (t) => {
    desert(); const t0 = P('Among the Zhu', 'Among'), gv = S('People gave beads'), wt = S('Sometimes they waited');
    ptag(t, t0 + 0.3, 960, 120, 'POLLY WIESSNER · THE "HXARO" GIFT SYSTEM', 50);
    for (const [x, k] of [[260, 0], [1660, 1]]) { ctx.save(); ctx.translate(x, 720); poly([[-110, 0], [0, -170], [110, 0]], '#b07a3a', true, 6); ctx.restore(); stick(x + (k ? -180 : 180), 930, 1.0, CAVE({ flip: !!k, hair: k ? 'long' : 'cave', hairCol: '#4a2a12', eyes: 'happy', mouth: 'smile', hands: [[-60, -40], [80, -90]] }), t + k); }
    line(440, 560, 1480, 560, 6, '#7a5232'); for (let k = 0; k < 14; k++) circ(470 + k * 75, 560, 6, '#7a5232', 0, 8);
    if (t > gv) { const u = ((t - gv) * 0.35) % 1; ctx.save(); ctx.translate(440 + 1040 * u, 520 - Math.sin(u * Math.PI) * 80); shells(0, 0, 8, 0.35); ctx.restore(); ptag(t, gv, 960, 330, 'BEADS · ARROWS · TOOLS', 50, '#fff'); }
    if (t > wt) { ctx.save(); ctx.translate(960, 780); rrect(-150, -100, 300, 200, 16, '#fff'); rect(-150, -100, 300, 60, RED); text('WAIT', 0, -68, 40, '#fff', HEAD, 'center', 0); text(['MONTHS', 'YEARS'][Math.floor(t) % 2], 0, 30, 70, '#111', HEAD, 'center', 0); ctx.restore(); }
  });
  cue(S('People gave beads'), 'pop', 0.5);
  sc(S("That wasn't generosity.") - 0.15, P('So the first', 'So') - 0.15, (t) => {
    const ins = S('It was insurance.'), dr = S('If drought hit');
    if (t < dr) { savanna(); stamp('INSURANCE', 960, 420, 170, -0.1, (t - ins) / 0.18); }
    else { desert(); for (let k = 0; k < 12; k++) poly([[100 + k * 160, 760], [140 + k * 160, 820], [120 + k * 160, 900]], null, false, 5, '#a8814a'); sun(400, 220, 90);
      const u = clamp((t - dr - 0.8) / 2.5); stick(200 + 900 * ease(u), 920, 1.1, CAVE({ walk: u < 1, eyes: u < 1 ? 'open' : 'happy', worried: u < 1, mouth: u < 1 ? 'frown' : 'smile' }), t);
      ctx.save(); ctx.translate(1500, 740); poly([[-110, 0], [0, -170], [110, 0]], '#b07a3a', true, 6); ctx.restore(); stick(1600, 930, 1.05, CAVE({ flip: true, hair: 'long', hairCol: '#4a2a12', eyes: 'happy', mouth: 'grin', hands: [[-60, -40], [110, -170]] }), t);
      if (u >= 1) big(t, dr + 3.3, 'THEY HAD TO TAKE YOU IN', 960, 170, 84, '#fff'); }
  });
  cue(S('It was insurance.'), 'hit', 0.9);
  sc(P('So the first', 'So') - 0.15, S('Chapter three.') - 0.1, (t) => {
    savanna(); fire(960, 800, 0.8, t); stick(700, 900, 1.3, CAVE({ eyes: 'happy', mouth: 'grin', hands: [[-60, -40], [150, -100]] }), t); stick(1220, 900, 1.3, CAVE({ flip: true, hair: 'long', hairCol: '#4a2a12', eyes: 'happy', mouth: 'grin', hands: [[-60, -40], [150, -100]] }), t);
    circ(960, 560, 26, '#ffffff', 6, 14); poly([[930, 420], [960, 450], [990, 420], [990, 395], [975, 380], [960, 392], [945, 380], [930, 395]], RED, true, 6);
    big(t, S('It was a relationship.'), 'A RELATIONSHIP', 960, 160, 100, '#fff'); ptag(t, S('A promise.'), 960, 280, 'A PROMISE', 64); ptag(t, S("I'll remember what you did"), 960, 370, '"I\'LL REMEMBER WHAT YOU DID FOR ME"', 44, '#fff');
  });
  // ======================= CHAPTER 3 =======================
  chapter(S('Chapter three.') - 0.1, S('In a cave on the coast') - 0.15, 3, 'THE BEADS'); cue(S('Chapter three.') + 0.6, 'hit', 0.8);
  sc(S('In a cave on the coast') - 0.15, S("They're some of the oldest jewelry") - 0.15, (t) => {
    sea(t, 700); poly([[-50, 700], [-50, 150], [300, 80], [700, 200], [800, 700]], '#8a7d6e', true, 7); ell(420, 560, 170, 140, '#2a2420', 6); text('BLOMBOS CAVE · SOUTH AFRICA', 1300, 130, 60, '#fff', HEAD, 'center', 10);
    stick(560, 880, 1.15, { tunic: '#c9a26b', hair: 'short', eyes: 'open', mouth: 'o', gaze: [1, 0.3], hands: [[-60, -40], [100, -70]] }, t);
    if (t > S('Tiny sea shells')) { const p = pop(t, S('Tiny sea shells'), 0.4); ctx.save(); ctx.translate(1250, 520); ctx.scale(p, p); circ(0, 0, 260, '#fff', 8, 40); shells(0, -20, 10, 1.0); ctx.restore(); }
    big(t, S('Seventy-five thousand'), '75,000 YEARS OLD', 1250, 880, 100, YEL);
  });
  cue(S('Seventy-five thousand'), 'hit', 0.8);
  sc(S("They're some of the oldest jewelry") - 0.15, S('Beads like these') - 0.15, (t) => {
    savanna(); stick(960, 900, 1.6, CAVE({ hair: 'long', hairCol: '#4a2a12', eyes: 'happy', mouth: 'grin', blush: true, hands: [[-80, -60], [80, -60]] }), t); shells(960, -120 + 900 - 260, 9, 0.55);
    const items = [[S("You can't eat it."), 380, 'CAN\'T EAT IT'], [S("You can't hunt with it."), 380, 'CAN\'T HUNT WITH IT'], [S('But everyone wants it.'), 1540, 'EVERYONE WANTS IT']];
    items.forEach(([t0, x, s2], k) => ptag(t, t0, x, 300 + k * 140, s2, 56, k === 2 ? '#2fa35a' : '#fff', k === 2 ? '#fff' : RED));
  });
  ["You can't eat it.", "You can't hunt with it.", 'But everyone wants it.'].forEach(s => cue(S(s), 'pop', 0.6));
  sc(S('Beads like these') - 0.15, S('Chapter four.') - 0.1, (t) => {
    savanna(); const cols = ['#e57373', '#64b5f6', '#ffd54f'];
    for (let k = 0; k < 3; k++) { stick(560 + k * 400, 920, 1.15, CAVE({ hair: k === 1 ? 'long' : 'cave', hairCol: '#4a2a12', eyes: 'happy', mouth: 'smile' }), t + k); for (let j = 0; j < 7; j++) circ(560 + k * 400 - 60 + j * 20, 920 - 300 + Math.sin(j / 6 * Math.PI) * 30, 9, cols[k], 4, 10); }
    ptag(t, S('Beads like these could show'), 960, 140, 'WHO YOU WERE · WHO YOU BELONGED TO', 50, '#fff'); ptag(t, P('Beads like these could show', 'who owed'), 960, 250, '...AND WHO OWED YOU', 60, YEL);
    big(t, S('Some researchers think'), "HUMANITY'S FIRST STORE OF WEALTH?", 960, 400, 74, '#fff');
  });
  // ======================= CHAPTER 4 =======================
  chapter(S('Chapter four.') - 0.1, S('Now jump forward') - 0.15, 4, 'THE CLAY'); cue(S('Chapter four.') + 0.6, 'hit', 0.8);
  sc(S('Now jump forward') - 0.15, S('People have started farming.') - 0.15, (t) => {
    desert(); ziggurat(1300, 660, 1.3); poly([[-50, 820], [600, 760], [1200, 860], [1970, 800], [1970, 880], [-50, 900]], '#3f8fd1', true, 0); text('MESOPOTAMIA (TODAY: IRAQ)', 600, 200, 70, '#fff', HEAD, 'center', 10); big(t, S('About five thousand'), '5,000 YEARS AGO', 600, 340, 90, YEL);
  });
  sc(S('People have started farming.') - 0.15, S('So people pressed') - 0.15, (t) => {
    desert(); ziggurat(1500, 660, 1.0); for (let k = 0; k < 4; k++) { ctx.save(); ctx.translate(300 + k * 170, 660); rrect(-70, -200, 140, 200, 20, '#d4b06a'); for (let j = 0; j < 5; j++) poly([[-40 + j * 20, -150], [-30 + j * 20, -110]], null, false, 5, '#b8862a'); ctx.restore(); }
    text('BARLEY STOREHOUSES', 550, 330, 50, '#111', HEAD, 'center', 0);
    stick(1050, 960, 1.15, { tunic: '#e6d2a0', hair: 'short', beard: true, beardCol: '#222', eyes: 'wide', mouth: 'o', q: t > S('And now there') }, t);
    big(t, S('Who gave what?'), 'WHO GAVE WHAT?', 1050, 160, 80, '#fff'); big(t, S('Who owes what?'), 'WHO OWES WHAT?', 1050, 260, 80, YEL);
  });
  sc(S('So people pressed') - 0.15, S("Here's the amazing part.") - 0.15, (t) => {
    room(); const t0 = S('So people pressed'); tablet(760, 520, -0.05, 1.3, Math.min(6, Math.floor((t - t0) * 2.5)));
    const sx = 760 + Math.sin(t * 6) * 80; line(sx + 40, 420, sx + 200, 260, 14, '#7a5232');
    const icons = [[S('Sheep.'), '🐑 SHEEP'], [S('Barley.'), '🌾 BARLEY'], [S('Oil.'), '🫙 OIL'], [S('Debts.'), '📜 DEBTS']];
    icons.forEach(([t1, s2], k) => ptag(t, t1, 1450, 260 + k * 150, s2, 60, k === 3 ? RED : '#fff', k === 3 ? '#fff' : '#111'));
  });
  ['Sheep.', 'Barley.', 'Oil.', 'Debts.'].forEach(s => cue(S(s), 'pop', 0.6));
  sc(S("Here's the amazing part.") - 0.15, S('Money had a unit now.') - 0.15, (t) => {
    room(); tablet(600, 540, -0.08, 1.2, 6); const os = S('Some of the oldest writing');
    if (t > os) { bigX(1300, 360, 90, (t - P('Some of the oldest writing', 'poetry')) / 0.4); text('POETRY? PRAYERS?', 1300, 230, 60, '#111', HEAD, 'center', 0); }
    big(t, S("It's accounting."), "IT'S ACCOUNTING", 1380, 560, 96, RED); ptag(t, S('Receipts.'), 1150, 760, 'RECEIPTS', 60, '#fff'); ptag(t, S('I-O-Us.'), 1500, 760, 'I.O.U.s', 60, YEL);
  });
  cue(S("It's accounting."), 'hit', 0.9);
  sc(S('Money had a unit now.') - 0.15, S('And just like today') - 0.15, (t) => {
    room(); const sh = S('A shekel of silver'), tab = S('They ran a tab.');
    if (t > sh) { const p = pop(t, sh, 0.4); ctx.save(); ctx.translate(500, 450); ctx.scale(p, p); ell(0, 0, 150, 90, '#c9ced6', 8); ell(-30, -20, 60, 30, '#e8ecf2', 0); ctx.restore(); text('1 SHEKEL ≈ 8 g OF SILVER', 500, 650, 60, '#111', HEAD, 'center', 0); }
    if (t > tab) { ctx.save(); ctx.translate(1350, 480); rrect(-280, -300, 560, 600, 20, '#fff'); text('THE TAB', 0, -230, 64, RED, HEAD, 'center', 0); ['Enlil — 3 sheep', 'Ninsun — 40 qa barley', 'Ur-Nanshe — 2 jars oil', 'Lugal — 1 shekel'].forEach((s2, k) => { if (t > tab + k * 0.4) text(s2, -230, -120 + k * 100, 40, '#333', TYPE, 'left', 0); }); ctx.restore(); }
    big(t, S('The tab was the money.'), 'THE TAB WAS THE MONEY', 960, 140, 90, YEL);
  });
  cue(S('The tab was the money.'), 'hit', 0.8);
  sc(S('And just like today') - 0.15, S('And when too many farmers') - 0.15, (t) => {
    desert(); ctx.save(); ctx.translate(560, 560); rrect(-170, -380, 340, 760, 160, '#3a3f4a'); text('HAMMURABI', 0, -260, 48, '#d9c38a', HEAD, 'center', 0); for (let k = 0; k < 9; k++) line(-110, -170 + k * 50, 110, -170 + k * 50, 4, '#6a7080'); ctx.restore(); text('~1750 BC', 560, 1000, 56, '#111', HEAD, 'center', 0);
    ptag(t, S('Around seventeen fifty'), 1300, 220, 'INTEREST CAPPED BY LAW', 60, '#fff');
    const s20 = P('Twenty percent', 'Twenty'), b33 = S('Thirty-three percent'); if (t > s20) { ctx.save(); ctx.translate(1150, 540); ctx.scale(pop(t, s20, 0.35), pop(t, s20, 0.35)); ell(0, 0, 110, 70, '#c9ced6', 7); text('20%', 0, 180, 110, '#111', HEAD, 'center', 0); text('SILVER', 0, 270, 50, '#555', HEAD, 'center', 0); ctx.restore(); }
    if (t > b33) { ctx.save(); ctx.translate(1550, 540); ctx.scale(pop(t, b33, 0.35), pop(t, b33, 0.35)); for (let j = 0; j < 5; j++) poly([[-40 + j * 20, 60], [-30 + j * 20, -60]], null, false, 8, '#c7a03a'); text('33%', 0, 180, 110, '#111', HEAD, 'center', 0); text('BARLEY', 0, 270, 50, '#555', HEAD, 'center', 0); ctx.restore(); }
  });
  cue(P('Twenty percent', 'Twenty'), 'pop', 0.6); cue(S('Thirty-three percent'), 'pop', 0.6);
  sc(S('And when too many farmers') - 0.15, S('Chapter five.') - 0.1, (t) => {
    desert(); const cs = S('They declared a clean slate.'), er = S('Certain debts...');
    for (let k = 0; k < 3; k++) stick(300 + k * 220, 940, 1.0, { tunic: '#e6d2a0', hair: 'short', eyes: t > er ? 'happy' : 'open', worried: t < er, mouth: t > er ? 'grin' : 'frown' }, t + k);
    stick(1450, 940, 1.35, { tunic: '#7a3aa0', crown: true, beard: true, beardCol: '#222', eyes: 'open', mouth: 'smile', hands: [[-60, -40], [120, -230]] }, t);
    if (t < er + 0.4) tablet(1000, 520, 0.05, 0.9, 6); else { const u = clamp((t - er - 0.4) / 0.6); for (let k = 0; k < 6; k++) { ctx.save(); ctx.translate(1000 + (hash(k) - 0.5) * 500 * u, 520 + (hash(k, 3) - 0.3) * 400 * u + 300 * u * u); ctx.rotate(u * 3 * (hash(k, 2) - 0.5)); rrect(-50, -60, 100, 120, 14, '#c99a64'); ctx.restore(); } }
    if (t > cs) stamp('CLEAN SLATE', 1000, 200, 120, -0.08, (t - cs) / 0.18);
  });
  cue(S('Certain debts...') + 0.4, 'boom', 0.8);
  // ======================= CHAPTER 5 =======================
  chapter(S('Chapter five.') - 0.1, S('Around the world, people found') - 0.15, 5, 'COWS, SHELLS & SALT'); cue(S('Chapter five.') + 0.6, 'hit', 0.8);
  sc(S('Around the world, people found') - 0.15, S('In ancient China') - 0.15, (t) => {
    savanna(); const ct = S('Cattle were so important'); cow(700, 760, 1.4);
    stick(1250, 920, 1.2, { tunic: '#b33', hair: 'short', eyes: 'happy', mouth: 'grin', hands: [[-60, -40], [120, -200]] }, t);
    if (t > ct) { text('PECUS', 1350, 300, 110, '#111', MARK, 'center', 0); text('= CATTLE', 1350, 400, 54, '#555', HEAD, 'center', 0); }
    if (t > P('Cattle were so important', 'pecunia')) { text('→ PECUNIA', 1350, 520, 100, RED, MARK, 'center', 0); text('= MONEY (LATIN)', 1350, 610, 50, '#555', HEAD, 'center', 0); }
  });
  sc(S('In ancient China') - 0.15, S('And salt?') - 0.15, (t) => {
    room(); for (let k = 0; k < 26; k++) { const x = 360 + (k % 7) * 70 + (Math.floor(k / 7) % 2) * 35, y = 760 - Math.floor(k / 7) * 50; ell(x, y, 26, 34, '#f3e3c8', 5); line(x, y - 20, x, y + 20, 4); }
    text('COWRIE SHELLS', 560, 330, 80, '#111', MARK, 'center', 0); ptag(t, P('In ancient China', 'Small'), 560, 450, 'SMALL · SHINY · HARD TO FAKE', 46, '#fff');
    if (t > S('The Chinese character')) { rrect(1150, 260, 520, 520, 26, '#fff'); ctx.save(); ctx.font = `360px "Noto Serif CJK SC", "Noto Sans CJK SC", serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = RED; ctx.fillText('貝', 1410, 530); ctx.restore(); text('"SHELL" — INSIDE THE WORDS FOR MONEY', 1410, 860, 44, '#111', HEAD, 'center', 0); }
  });
  cue(S('The Chinese character'), 'pop', 0.7);
  sc(S('And salt?') - 0.15, S('Chapter six.') - 0.1, (t) => {
    savanna(); stick(700, 920, 1.5, { tunic: '#b3262f', helmet: true, eyes: 'open', mouth: 'smile', hands: [[-60, -40], [100, -80]], hold: () => { rrect(-50, -60, 100, 120, 20, '#f2efe6'); text('SALT', 0, 4, 34, '#111', HEAD, 'center', 0); } }, t);
    text('SALT → "SALARY"?', 1300, 300, 100, '#111', MARK, 'center', 0); if (t > S('Historians say')) stamp('MYTH', 1300, 560, 170, -0.15, (t - S('Historians say') - 0.8) / 0.18);
  });
  cue(S('Historians say') + 0.8, 'hit', 1.0);
  // ======================= CHAPTER 6 =======================
  chapter(S('Chapter six.') - 0.1, S('Now for the strangest') - 0.15, 6, 'THE STONES OF YAP'); cue(S('Chapter six.') + 0.6, 'hit', 0.8);
  const island = (t) => { sea(t, 700); ell(960, 760, 900, 90, '#f2d99a', 6); palm(300, 760, 1.1); palm(1650, 760, 1.0); };
  sc(S('Now for the strangest') - 0.15, S('They were carved') - 0.15, (t) => {
    island(t); const rs = S("They're called rai.");
    if (t > P('On the tiny Pacific', 'Yap')) text('YAP · PACIFIC OCEAN', 960, 120, 70, '#fff', HEAD, 'center', 10);
    if (t > rs - 0.5) { const p = pop(t, rs - 0.5, 0.45); ctx.save(); ctx.translate(960, 560); ctx.scale(p, p); raiStone(0, 0, 1.1); ctx.restore(); }
    ptag(t, rs, 960, 260, 'RAI ("RYE")', 70, YEL); stick(1350, 900, 0.9, { tunic: '#e9a23b', hair: 'short', hairCol: '#111', eyes: 'happy', mouth: 'grin', hands: [[-60, -40], [-150, -160]] }, t);
    if (t > S('The biggest is about')) { ptag(t, S('The biggest is about'), 420, 400, '12 FT WIDE', 60, '#fff'); ptag(t, P('The biggest is about', 'four tons'), 420, 520, '~4 TONS', 60, RED, '#fff'); }
  });
  sc(S('They were carved') - 0.15, S("You can't put a four-ton") - 0.15, (t) => {
    sea(t, 560); ell(300, 600, 220, 50, '#f2d99a', 6); palm(300, 600, 0.6); text('PALAU', 300, 470, 54, '#111', HEAD, 'center', 0); ell(1650, 600, 220, 50, '#f2d99a', 6); palm(1650, 600, 0.6); text('YAP', 1650, 470, 54, '#111', HEAD, 'center', 0);
    poly(Array.from({ length: 30 }, (_, k) => [500 + k * 33, 640 + Math.sin(k * 0.6) * 10]), null, false, 5, '#fff'); text('HUNDREDS OF MILES', 960, 780, 60, '#fff', HEAD, 'center', 8);
    const u = clamp((t - P('They were carved', 'brought')) / 3); ctx.save(); ctx.translate(500 + 1000 * u, 640 + Math.sin(t * 2) * 8); poly([[-160, 0], [160, 0], [120, 40], [-120, 40]], '#8a5a2b', true, 6); raiStone(0, -90, 0.42); for (let k = 0; k < 2; k++) stick(-120 + k * 240, -10, 0.45, { tunic: '#e9a23b', hair: 'short', hairCol: '#111', eyes: 'open', mouth: 'flat' }, t + k); ctx.restore();
  });
  sc(S("You can't put a four-ton") - 0.15, S("And here's the best part.") - 0.15, (t) => {
    island(t); raiStone(960, 560, 1.0); const strain = t < S('So the stones almost never moved.');
    stick(560, 900, 1.2, { tunic: '#e9a23b', hair: 'short', hairCol: '#111', eyes: strain ? 'closed' : 'open', mouth: strain ? 'open' : 'smile', sweat: strain, hands: [[160, -160], [200, -100]] }, t);
    const nw = S('When one was used'); if (t > nw) { const owner = t > nw + 2 ? 'B' : 'A'; ctx.save(); ctx.translate(960, 250); rrect(-260, -60, 520, 120, 16, '#fff'); text(`OWNER: FAMILY ${owner}`, 0, 4, 60, owner === 'B' ? '#2f7a3a' : '#111', HEAD, 'center', 0); ctx.restore(); text('THE STONE NEVER MOVED', 960, 1010, 54, '#fff', HEAD, 'center', 8); }
  });
  sc(S("And here's the best part.") - 0.15, S('But everyone agreed') - 0.15, (t) => {
    const fall = S('One giant stone fell'), u = clamp((t - fall - 0.6) / 2.0);
    sea(t, 520); const g = ctx.createLinearGradient(0, 520, 0, 1080); g.addColorStop(0, 'rgba(10,60,120,0)'); g.addColorStop(1, 'rgba(10,40,90,0.7)'); ctx.fillStyle = g; ctx.fillRect(0, 520, 1920, 560);
    ctx.save(); ctx.translate(960, 560 + Math.sin(t * 2) * 6); ctx.rotate(t > fall ? -0.2 * Math.sin(Math.min(1, (t - fall) * 2) * Math.PI) : 0); poly([[-200, 0], [200, 0], [150, 50], [-150, 50]], '#8a5a2b', true, 6); for (let k = 0; k < 2; k++) stick(-150 + k * 300, -10, 0.55, { tunic: '#e9a23b', hair: 'short', hairCol: '#111', eyes: t > fall ? 'wide' : 'open', mouth: t > fall ? 'o' : 'flat' }, t + k); ctx.restore();
    raiStone(960 + 40 * u, 470 + 520 * ease(u), 0.5); for (let k = 0; k < 5; k++) if (u > 0 && u < 1) circ(950 + Math.sin(t * 5 + k) * 30, 900 - ((t * 120 + k * 60) % 400), 8, 'rgba(255,255,255,0.7)', 3, 10);
    if (t > S('Nobody ever saw it again.')) text('NEVER SEEN AGAIN', 960, 140, 90, '#fff', MARK, 'center', 14);
  });
  cue(S('One giant stone fell') + 0.6, 'boom', 0.8);
  sc(S('But everyone agreed') - 0.15, S('Chapter seven.') - 0.1, (t) => {
    sea(t, 520); const g = ctx.createLinearGradient(0, 520, 0, 1080); g.addColorStop(0, 'rgba(10,60,120,0)'); g.addColorStop(1, 'rgba(10,40,90,0.75)'); ctx.fillStyle = g; ctx.fillRect(0, 520, 1920, 560); raiStone(1000, 990, 0.5);
    ell(320, 540, 300, 50, '#f2d99a', 6); for (let k = 0; k < 3; k++) stick(200 + k * 130, 520, 0.7, { tunic: '#e9a23b', hair: 'short', hairCol: '#111', eyes: 'happy', mouth: 'grin', hands: [[-60, -40], [140, -40]] }, t + k);
    ptag(t, S('So it kept being used'), 1300, 300, 'STILL MONEY ✓', 80, '#2fa35a', '#fff'); big(t, S('A fortune that nobody could see'), 'NOBODY COULD SEE IT. EVERYONE BELIEVED IT.', 960, 140, 64, '#fff');
  });
  cue(S('So it kept being used'), 'pop', 0.8);
  // ======================= CHAPTER 7 =======================
  chapter(S('Chapter seven.') - 0.1, S('Coins finally arrive') - 0.15, 7, 'THE FIRST COINS'); cue(S('Chapter seven.') + 0.6, 'hit', 0.8);
  sc(S('Coins finally arrive') - 0.15, S('Why then?') - 0.15, (t) => {
    desert(); text('LYDIA (MODERN-DAY TURKEY)', 960, 130, 70, '#fff', HEAD, 'center', 10); big(t, P('Coins finally arrive', 'two thousand'), '~2,600 YEARS AGO', 960, 250, 84, YEL);
    if (t > S('Little lumps of electrum')) { for (let k = 0; k < 3; k++) { const p = pop(t, S('Little lumps of electrum') + k * 0.3, 0.35); ctx.save(); ctx.translate(560 + k * 400, 600); ctx.scale(p, p); coinL(0, 0, 120); ctx.restore(); } text('ELECTRUM = GOLD + SILVER · STAMPED WITH A LION', 960, 860, 50, '#111', HEAD, 'center', 0); }
  });
  cue(S('Little lumps of electrum'), 'pop', 0.6);
  sc(S('Why then?') - 0.15, S('Coins spread fast.') - 0.15, (t) => {
    desert(); big(t, S('Armies.'), 'ARMIES', 960, 140, 120, RED);
    for (let k = 0; k < 5; k++) stick(700 + k * 230, 930, 0.95, { tunic: '#b3262f', helmet: true, eyes: 'open', mouth: t > S('Kings needed') + 1 ? 'grin' : 'flat', hands: [[-60, -40], [70, -80]], hold: () => spear(160) }, t + k);
    stick(380, 930, 1.3, { tunic: '#7a3aa0', crown: true, beard: true, beardCol: '#222', eyes: 'open', mouth: 'smile', hands: [[-60, -40], [140, -120]] }, t);
    if (t > S('Kings needed')) for (let k = 0; k < 6; k++) { const u = ((t - S('Kings needed')) * 0.9 + k / 6) % 1; coinL(520 + 1000 * u, 740 - Math.sin(u * Math.PI) * 200, 28); }
  });
  sc(S('Coins spread fast.') - 0.15, S('In England, for more') - 0.15, (t) => {
    room(); for (let k = 0; k < 18; k++) { const u = clamp((t - S('Coins spread fast.') - k * 0.08) / 0.5); if (u > 0) coinL(300 + (k % 6) * 260, 300 + Math.floor(k / 6) * 220, 50 * ease(u)); }
    if (t > S('But the old idea')) { ctx.fillStyle = 'rgba(255,250,240,0.85)'; ctx.fillRect(0, 380, 1920, 320); text('BUT MONEY AS A RECORD NEVER WENT AWAY', 960, 540, 80, '#111', MARK, 'center', 0); }
  });
  sc(S('In England, for more') - 0.15, S('In eighteen thirty-four') - 0.15, (t) => {
    room(); text('ENGLAND · 600+ YEARS OF TALLY STICKS', 960, 130, 64, '#111', HEAD, 'center', 0);
    const sp = S('The stick was split in half.'), d = ease((t - sp - 0.2) / 0.6) * 90;
    ctx.save(); ctx.translate(960, 500); rect(-600, -40 - d, 1200, 40, '#c49a5a'); rect(-500, 0 + d, 1100, 40, '#b88a4a'); for (let k = 0; k < 9; k++) { const x = -520 + k * 120; poly([[x, -40 - d], [x + 20, -10 - d], [x + 40, -40 - d]], '#7a5232', true, 4); } ctx.restore();
    if (t > S('You kept one half.')) stick(500, 980, 1.0, { tunic: '#2f5aa0', hair: 'short', eyes: 'happy', mouth: 'smile', hands: [[-60, -40], [80, -120]] }, t);
    if (t > S('The government kept')) stick(1420, 980, 1.0, { flip: true, tunic: '#5a3a1e', crown: true, eyes: 'open', mouth: 'smile', hands: [[-60, -40], [80, -120]] }, t);
  });
  cue(S('The stick was split in half.') + 0.2, 'hit', 0.6);
  sc(S('In eighteen thirty-four') - 0.15, S('Chapter eight.') - 0.1, (t) => {
    const fire1 = S('The fire got out'), burn = S('And it burned down');
    if (t < fire1) { room(); rrect(660, 360, 600, 460, 30, '#5a5f6a'); rrect(760, 520, 400, 240, 20, '#1d1d1d'); fire(960, 740, 1.2, t); for (let k = 0; k < 6; k++) { ctx.save(); ctx.translate(820 + k * 50, 700); ctx.rotate(-0.5 + k * 0.2); rect(-10, -80, 20, 160, '#c49a5a', 4); ctx.restore(); } text('1834 · BURNING THE OLD STICKS', 960, 180, 64, '#111', HEAD, 'center', 0); }
    else { const g = ctx.createLinearGradient(0, 0, 0, 1080); g.addColorStop(0, '#2a0f0a'); g.addColorStop(1, '#a8421a'); ctx.fillStyle = g; ctx.fillRect(-200, -200, 2320, 1480); parliament(960, 900, 1.3, true, t); poly([[-50, 900], [1970, 900], [1970, 1100], [-50, 1100]], '#3a2a2a', true, 0);
      for (let k = 0; k < 3; k++) stick(300 + k * 150, 1040, 0.7, { tunic: '#222', hair: 'short', eyes: 'wide', mouth: 'o', hands: [[-60, -200], [60, -200]] }, t + k);
      if (t > burn) big(t, burn, 'THE HOUSES OF PARLIAMENT BURNED DOWN', 960, 140, 76, '#fff'); }
  });
  cue(S('The fire got out'), 'boom', 0.9); cue(S('And it burned down'), 'hit', 1.0);
  // ======================= CHAPTER 8 =======================
  chapter(S('Chapter eight.') - 0.1, S('So what did ancient humans use') - 0.15, 8, 'YOUR STONE AT THE BOTTOM OF THE SEA'); cue(S('Chapter eight.') + 0.6, 'hit', 0.8);
  sc(S('So what did ancient humans use') - 0.15, S('Now look at your phone again.') - 0.15, (t) => {
    savanna(); const words = [['Friendship.', '🤝 FRIENDSHIP'], ['Gifts.', '🎁 GIFTS'], ['Shells.', '🐚 SHELLS'], ['Clay.', '🧱 CLAY'], ['Cows.', '🐄 COWS'], ['Giant stones.', '🪨 GIANT STONES'], ['And promises.', '🤞 PROMISES']];
    words.forEach(([s2, lab], k) => ptag(t, S(s2), 380 + (k % 4) * 390, 340 + Math.floor(k / 4) * 200, lab, 58, k === 6 ? YEL : '#fff'));
    stick(960, 1000, 0.9, CAVE({ eyes: 'happy', mouth: 'grin' }), t);
  });
  ['Friendship.', 'Gifts.', 'Shells.', 'Clay.', 'Cows.', 'Giant stones.', 'And promises.'].forEach(s => cue(S(s), 'pop', 0.55));
  sc(S('Now look at your phone again.') - 0.15, S('Just like the stone') - 0.15, (t) => {
    room(); phone(1300, 520, 0.95, '$214.37', t); const ng = S("There's no gold behind it."), cm = S("It's a number in someone's computer.");
    stick(520, 760, 1.6, { tunic: '#4a7bd1', hair: 'short', eyes: 'wide', mouth: 'o', gaze: [1, 0], hands: [[-60, -40], [70, -110]], hold: () => rrect(-18, -40, 36, 64, 6, '#222', 4) }, t);
    if (t > ng) ptag(t, ng, 520, 160, 'NO GOLD BEHIND IT', 60, '#fff', RED); if (t > cm) ptag(t, cm, 520, 280, "A NUMBER IN SOMEONE'S COMPUTER", 46, '#fff');
    if (t > S('A promise that everyone')) big(t, S('A promise that everyone'), 'A PROMISE WE ALL BELIEVE IN', 960, 960, 76, YEL);
  });
  sc(S('Just like the stone') - 0.15, S('The people of Yap would') - 0.15, (t) => {
    sea(t, 380); const g = ctx.createLinearGradient(0, 380, 0, 1080); g.addColorStop(0, 'rgba(10,60,120,0)'); g.addColorStop(1, 'rgba(10,40,90,0.8)'); ctx.fillStyle = g; ctx.fillRect(0, 380, 1920, 700);
    raiStone(700, 960, 0.6); const u = clamp((t - S('Just like the stone')) / 2.5); phone(1250, 420 + 520 * ease(u), 0.45, '$214.37', t);
    text('YOUR BALANCE = THE STONE AT THE BOTTOM OF THE SEA', 960, 150, 58, '#fff', MARK, 'center', 12);
  });
  sc(S('The people of Yap would') - 0.15, S('Maybe that') - 0.15, (t) => {
    const kal = S('Your ancestors in the Kalahari');
    if (t < kal) { sea(t, 700); ell(960, 760, 900, 90, '#f2d99a', 6); palm(300, 760, 1.0); raiStone(1400, 640, 0.5); stick(900, 920, 1.3, { tunic: '#e9a23b', hair: 'short', hairCol: '#111', eyes: 'happy', mouth: 'grin', hands: [[-60, -40], [100, -200]] }, t); phone(560, 520, 0.45, '$214.37', t); ptag(t, S('The people of Yap would') + 0.5, 960, 160, 'MAKES SENSE TO US', 60, '#fff'); }
    else { night(); fire(960, 800, 1.1, t); for (let k = 0; k < 6; k++) { const a = Math.PI + k / 5 * Math.PI; stick(960 + Math.cos(a) * 520, 920 + Math.sin(a) * 80 + 60, 0.9, CAVE({ sit: k % 2 === 0, hair: k % 2 ? 'long' : 'cave', hairCol: '#4a2a12', eyes: 'happy', mouth: 'grin' }), t + k); }
      if (t > S('They kept their wealth')) big(t, S('They kept their wealth'), 'WEALTH IN PEOPLE, NOT NUMBERS', 960, 160, 84, '#fff'); }
  });
  sc(S('Maybe that') - 0.15, S('If you enjoyed') - 0.15, (t) => {
    night(); fire(960, 800, 1.2, t); for (let k = 0; k < 6; k++) { const a = Math.PI + k / 5 * Math.PI; stick(960 + Math.cos(a) * 520, 920 + Math.sin(a) * 80 + 60, 0.9, CAVE({ sit: k % 2 === 0, hair: k % 2 ? 'long' : 'cave', hairCol: '#4a2a12', eyes: 'happy', mouth: 'grin' }), t + k); }
    big(t, S('Maybe that') + 0.3, 'THE OLDEST MONEY OF ALL', 960, 200, 100, YEL);
  });
  sc(S('If you enjoyed') - 0.15, DUR + 2, (t) => {
    savanna(); const t0 = S('If you enjoyed'), clk = t0 + 1.4, cl = t > clk; text('THE MONEY FILES', 960, 150, 84, '#fff', MARK, 'center', 14);
    const p = pop(t, t0, 0.4); ctx.save(); ctx.translate(960, 420); ctx.scale(p, p); rrect(-400, -100, 800, 200, 100, cl ? '#666' : RED); text(cl ? 'SUBSCRIBED ✓' : 'SUBSCRIBE', 0, 6, 110, '#fff', HEAD, 'center', 0); ctx.restore();
    stick(1500, 950, 1.2, CAVE({ eyes: 'happy', mouth: 'grin', hands: [[-60, -40], [-260, -480 + (cl ? 10 : 0)]] }), t);
    if (t > S('Next time:')) { rrect(360, 640, 1200, 220, 20, '#f7ecd2'); text('NEXT FILE', 960, 690, 44, '#7a5232', HEAD, 'center', 0); text('WHAT DID A MEDIEVAL PEASANT ACTUALLY EARN?', 960, 790, 58, '#111', MARK, 'center', 0); }
  });
  cue(S('If you enjoyed') + 1.4, 'pop', 0.8);
}
