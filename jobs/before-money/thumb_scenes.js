// Thumbnails for Video 5 (?variant=a|b, render at t=2.5)
export default function (A) {
  const { ctx, DUR, line_, atp, scene, cue, clamp, ease, smooth, pop, hash, poly, circ, ell, rect, rrect, line, text, stamp, usMap, MARK, HEAD, SANS, TYPE, INK } = A;
  const RED = '#e0262f', YEL = '#ffd400', FUR = '#8b5a2b', FUR2 = '#6e4420'; const sc = scene;
  const V = new URLSearchParams(location.search).get('variant') || 'a';
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
  scene(0, 10, (t) => {
    if (V === 'a') {
      savanna(); acacia(1560, 700, 1.5); fire(1180, 900, 1.1, 0.4);
      stick(470, 990, 2.0, CAVE({ sit: true, eyes: 'closed', mouth: 'smile', hands: [[-70, -250], [70, -250]] }), 0.3);
      raiStone(1640, 930, 0.55);
      text('NO MONEY', 1280, 230, 220, YEL, MARK, 'center', 30);
      ctx.save(); ctx.translate(1280, 450); ctx.rotate(-0.03); rrect(-330, -60, 660, 120, 18, '#fff', 8); text('FOR 300,000 YEARS', 0, 6, 70, '#111', HEAD, 'center', 0); ctx.restore();
    } else {
      sea(0.2, 640); ell(560, 720, 620, 80, '#f2d99a', 6); palm(160, 720, 1.2);
      raiStone(620, 470, 1.25); stick(1120, 1010, 1.8, { tunic: '#e9a23b', hair: 'short', hairCol: '#111', eyes: 'wide', mouth: 'open', gaze: [-1, -0.4], hands: [[-60, -40], [-200, -260]] }, 0.2);
      text('STONE MONEY', 1300, 170, 160, YEL, MARK, 'center', 28);
      ctx.save(); ctx.translate(1560, 430); ctx.rotate(0.04); rrect(-300, -70, 600, 140, 18, RED, 8); text('4 TONS', 0, 8, 110, '#fff', HEAD, 'center', 0); ctx.restore();
    }
  });
}
