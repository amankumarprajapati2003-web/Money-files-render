// The Money Files — Video 7: Why Insulin Costs So Much in America (flat 2D character style)
import { makeKit } from './kit.js';
export default function (A) {
  const { ctx, DUR, line_, atp, scene, cue, clamp, ease, pop, hash, HEAD, SANS } = A;
  const K = makeKit(A);
  const { vial, pen, priceTag, pharmacy, hospital, bed, capitol, lab1920, candle, arrow, box, RED, YEL, NAVY, INK, SK, fillPath, rr, cir, elp, stroke, T, tw, grad, shade, office, city, india, coin, cash, chart, bigX, check, panel, caption, bigNum, store, factory, smoke, calendar, chapterCard, person, tag, bubble } = K;
  const S = sub => line_(sub).start, P = (sub, ph) => atp(sub, ph);
  const sc = (a, b, fn) => { scene(a, b, fn); cue(a + 0.02, 'whoosh'); };
  const ch = (t0, t1, n, title, c1, c2 = NAVY) => { sc(t0, t1, (t) => chapterCard(t, t0, n, title, c1, c2)); cue(t0 + 0.4, 'hit', 0.8); };
  const ALEC = (o = {}) => ({ shirt: '#4a7bd1', pants: '#2c3346', skin: SK[0], hair: 'short', hairCol: '#5a3a22', label: 'ALEC, 26', ...o });
  const MOM = (o = {}) => ({ shirt: '#c0392b', pants: '#2c3346', skin: SK[0], hair: 'long', hairCol: '#8a5a2b', label: 'NICOLE (HIS MOM)', ...o });
  const BANT = (o = {}) => ({ shirt: '#f4f1ea', jacket: '#5a4632', tie: '#7a1f1f', pants: '#4a3b2c', skin: SK[0], hair: 'side', hairCol: '#3a2a1e', label: 'FREDERICK BANTING', ...o });
  const EXEC = (lab, col, o = {}) => ({ shirt: '#fff', jacket: col, tie: '#d4af37', pants: '#2b2d42', skin: SK[(lab.length) % 3], hair: ['side', 'bald', 'short'][lab.length % 3], label: lab, ...o });
  const PBM = (o = {}) => ({ shirt: '#222', jacket: '#111', tie: '#7a0', pants: '#111', skin: SK[1], hair: 'side', glasses: true, label: 'THE MIDDLEMAN (PBM)', ...o });
  const crowdP = (k) => ({ shirt: ['#e8343f', '#3a86ff', '#2ecc71', '#ffbe0b', '#8338ec', '#ff6b35', '#06d6a0'][k % 7], pants: ['#2c3346', '#4a3b2c', '#3b4a5c'][k % 3], skin: SK[k % 5], hair: ['short', 'long', 'side', 'bun', 'short'][k % 5] });
  const night = () => { grad('#1b2238', '#2c3550'); rr(-50, 820, 2020, 300, 0, '#3a3f55'); rr(1400, 160, 320, 420, 10, '#0f1426'); for (let k = 0; k < 20; k++) cir(1410 + hash(k) * 300, 170 + hash(k, 2) * 400, 2, '#fff'); };

  // =================== HOOK ===================
  sc(0, S('On his birthday') - 0.15, (t) => {
    city('#ffd29a', '#fff1d6', '#e7b37a', '#c99a63', '#fff1c0'); calendar(1450, 380, 1.0, 'MAY 2017', '26', '#3a86ff');
    person(700, 930, 1.45, ALEC({ mood: 'smile', pose: 'wave', arms: [12, 160] }), t); tag(700, 140, 'MINNESOTA', 60, INK, '#fff', pop(t, 0.6));
  });
  sc(S('On his birthday') - 0.15, S('Alec managed a restaurant') - 0.15, (t) => {
    city('#ffd29a', '#fff1d6', '#e7b37a', '#c99a63', '#fff1c0'); person(700, 930, 1.45, ALEC({ mood: 'worried', arms: [12, 30] }), t);
    const u = clamp((t - S('On his birthday') - 0.5) / 1.2); ctx.save(); ctx.translate(1350 + 300 * u, 520); ctx.rotate(u * 0.6); ctx.globalAlpha = 1 - u * 0.8; panel(-230, -150, 460, 300, '#fff', 20); T('HEALTH INSURANCE', 0, -80, 44, INK); T('MOM\'S PLAN', 0, -20, 34, '#666', SANS); T('AGE LIMIT: 26', 0, 60, 60, RED); ctx.restore(); ctx.globalAlpha = 1;
    if (u > 0.7) tag(1350, 900, 'COVERAGE ENDED', 70, RED, '#fff', pop(t, S('On his birthday') + 1.4));
  });
  sc(S('Alec managed a restaurant') - 0.15, S('He had type one diabetes.') - 0.15, (t) => {
    office('#fbe8d0', '#b98b5e'); person(560, 930, 1.35, ALEC({ shirt: '#2b2d42', mood: 'smile', arms: [12, 60] }), t); tag(560, 140, 'RESTAURANT MANAGER', 56, INK, '#fff', 1);
    bigNum(t, S('He made about'), '$35,000 / YEAR', 1340, 320, 120, '#18a957');
    if (t > S('Too much for government')) { tag(1340, 520, 'TOO MUCH FOR GOVERNMENT HELP', 46, RED, '#fff', pop(t, S('Too much for government'))); }
    if (t > S('Not enough for a good plan.')) tag(1340, 640, 'NOT ENOUGH FOR A GOOD PLAN', 46, INK, '#fff', pop(t, S('Not enough for a good plan.')));
  });
  sc(S('He had type one diabetes.') - 0.15, S('Less than a month later') - 0.15, (t) => {
    pharmacy(); person(480, 980, 1.25, ALEC({ mood: t > S('Without insurance') + 2 ? 'shock' : 'neutral', gaze: [1, 0] }), t);
    vial(1050, 470, 1.1); pen(1450, 470, 0.9, '#2f6fdb', -0.2); tag(1250, 180, 'TYPE 1 DIABETES · NEEDS INSULIN DAILY', 50, INK, '#fff', pop(t, S('He had type one diabetes.')));
    if (t > S('Without insurance')) priceTag(1250, 840, 1.0, '$1,300 / MONTH', RED, -0.06, pop(t, P('Without insurance', 'thirteen hundred'), 0.45));
  });
  cue(P('Without insurance', 'thirteen hundred'), 'hit', 0.9);
  sc(S('Less than a month later') - 0.15, S('Here\'s the part that should') - 0.15, (t) => {
    night(); const pb = S('Three days before payday.'), rat = S('His family believes');
    candle(960, 760, 1.4, t); pen(960, 860, 0.8, '#2f6fdb', 0, true);
    if (t > S('He had died from')) tag(960, 160, 'DIABETIC KETOACIDOSIS', 62, '#fff', INK, pop(t, S('He had died from')));
    if (t > pb) { calendar(450, 470, 0.9, 'PAYDAY', 'IN 3 DAYS', RED); }
    if (t > rat) tag(1450, 470, 'EMPTY INSULIN PEN', 52, YEL, INK, pop(t, rat));
  });
  sc(S('Here\'s the part that should') - 0.15, S('So how did a one dollar') - 0.15, (t) => {
    lab1920(); person(560, 930, 1.35, BANT({ mood: 'smile', arms: [12, 60], hold: () => coin(0, 0, 40, '$1') }), t);
    bigNum(t, S('The people who discovered'), 'PATENT SOLD FOR', 1320, 260, 90, INK, { outline: 0 }); bigNum(t, P('The people who discovered', 'one dollar'), '$1', 1320, 520, 340, '#18a957');
  });
  cue(P('The people who discovered', 'one dollar'), 'hit', 1.0);
  sc(S('So how did a one dollar') - 0.15, S('Chapter one.') - 0.1, (t) => {
    grad('#14213d', '#22345e'); vial(960, 540, 1.6); priceTag(560, 300, 0.9, '$1', '#2ecc71', -0.1, pop(t, S('So how did a one dollar') + 0.2)); priceTag(1400, 780, 0.9, 'LIFE OR DEATH', RED, 0.06, pop(t, S('So how did a one dollar') + 1.6));
  });
  // =================== CH 1 ===================
  ch(S('Chapter one.') - 0.1, S('Before nineteen twenty-two') - 0.15, 1, 'THE ONE DOLLAR MIRACLE', '#2ecc71');
  sc(S('Before nineteen twenty-two') - 0.15, S('Then, in Toronto') - 0.15, (t) => {
    lab1920(); calendar(330, 300, 0.75, 'BEFORE', '1922', '#6e5235'); hospital(); bed(1000, 760, 1.1);
    person(1000, 700, 0.75, { shirt: '#e9eef5', pants: '#e9eef5', skin: SK[0], hair: 'short', mood: 'sad', build: 0.7 }, t);
    if (t > S('Doctors could only')) tag(1000, 200, 'ONLY TREATMENT: STARVATION DIETS', 54, RED, '#fff', pop(t, S('Doctors could only')));
    if (t > S('It bought them')) tag(1000, 320, 'A FEW MONTHS. MAYBE A YEAR.', 48, INK, '#fff', pop(t, S('It bought them')));
  });
  sc(S('Then, in Toronto') - 0.15, S('In January nineteen twenty-two') - 0.15, (t) => {
    lab1920(); tag(960, 120, 'TORONTO · 1921', 64, '#6e5235', '#fff', 1);
    person(620, 930, 1.35, BANT({ mood: 'smile', arms: [12, 80], hold: () => { rr(-14, -80, 28, 80, 6, 'rgba(200,230,255,0.9)'); } }), t);
    person(1180, 930, 1.15, { shirt: '#f4f1ea', jacket: '#3d405b', tie: '#2a4d8f', pants: '#3b3b46', skin: SK[0], hair: 'short', mood: 'smile', label: 'HIS TEAM' }, t);
    if (t > P('Then, in Toronto', 'extract')) tag(900, 300, 'INSULIN EXTRACTED', 64, YEL, INK, pop(t, P('Then, in Toronto', 'extract')));
  });
  sc(S('In January nineteen twenty-two') - 0.15, S('Within a year') - 0.15, (t) => {
    hospital(); bed(900, 780, 1.1); const back = S('And he came back.');
    person(900, 720, 0.8, { shirt: '#e9eef5', pants: '#e9eef5', skin: SK[0], hair: 'short', build: 0.7, mood: t > back ? 'smile' : 'sad', label: 'LEONARD, 14' }, t);
    calendar(330, 330, 0.75, 'JAN', '1922', '#6e5235');
    if (t > back) { tag(900, 200, 'HE CAME BACK', 80, '#2ecc71', '#fff', pop(t, back)); for (let k = 0; k < 8; k++) { const a = k / 8 * 6.28 + t; cir(900 + Math.cos(a) * 240, 470 + Math.sin(a) * 120, 8, YEL); } }
  });
  cue(S('And he came back.'), 'hit', 0.8);
  sc(S('Within a year') - 0.15, S('Banting could have') - 0.15, (t) => {
    city('#bfe3ff', '#eaf6ff', '#9bbad6', '#7d9cc0', '#e6f2ff'); factory(700, 820, 1.2); smoke(840, 440, t);
    for (let k = 0; k < 6; k++) vial(1200 + (k % 3) * 160, 520 + Math.floor(k / 3) * 230, 0.55 * pop(t, S('Within a year') + 0.3 + k * 0.15));
    if (t > S('Children who had been')) for (let k = 0; k < 4; k++) person(1180 + k * 150, 1000, 0.5, { ...crowdP(k), build: 0.7, mood: 'smile', walk: true }, t + k);
  });
  sc(S('Banting could have') - 0.15, S('Banting\'s reason was simple.') - 0.15, (t) => {
    lab1920(); person(560, 930, 1.35, BANT({ mood: 'smile', arms: [12, 70], hold: () => { ctx.save(); ctx.rotate(-0.2); panel(-90, -120, 180, 120, '#fff', 8); T('PATENT', 0, -60, 36, INK); ctx.restore(); } }), t);
    if (t < S('Instead, the discoverers')) { cash(1300, 560, 1.4); bigNum(t, S('Banting could have') + 0.4, 'A FORTUNE?', 1300, 300, 120, YEL); }
    else { box(1300, 420, 560, 200, 'UNIVERSITY OF TORONTO', 'buys the patent'); bigNum(t, S('For one dollar.'), 'FOR $1', 1300, 720, 160, '#18a957'); }
  });
  sc(S('Banting\'s reason was simple.') - 0.15, S('Chapter two.') - 0.1, (t) => {
    lab1920(); person(1350, 930, 1.35, BANT({ mood: 'smile', talk: true, arms: [12, 30] }), t);
    bubble(640, 380, 900, 280, ['"INSULIN DOES NOT BELONG TO ME,', 'IT BELONGS TO THE WORLD."'], 58, pop(t, S('Insulin does not belong') - 0.1), [0.6, 1]);
  });
  // =================== CH 2 ===================
  ch(S('Chapter two.') - 0.1, S('The university needed help') - 0.15, 2, 'THREE COMPANIES', '#3a86ff');
  sc(S('The university needed help') - 0.15, S('A hundred years later') - 0.15, (t) => {
    city('#bfe3ff', '#eaf6ff', '#9bbad6', '#7d9cc0', '#e6f2ff'); box(560, 420, 520, 180, 'UNIVERSITY', 'the patent'); box(1360, 420, 520, 180, 'DRUG COMPANIES', 'the factories');
    arrow(830, 420, 1090, 420, INK, 12, (t - S('So it partnered') + 0.2) / 0.6); factory(1360, 900, 0.9);
  });
  sc(S('A hundred years later') - 0.15, S('And over the decades') - 0.15, (t) => {
    office('#e3e8ef', '#8f9bb0'); const t0 = S('A hundred years later');
    // donut 90%
    const p = clamp((t - t0 - 0.5) / 1.5); ctx.save(); ctx.translate(500, 480); ctx.beginPath(); ctx.arc(0, 0, 230, 0, 6.283); ctx.fillStyle = '#d6dbe3'; ctx.fill(); ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 230, -1.57, -1.57 + 6.283 * 0.9 * p); ctx.closePath(); ctx.fillStyle = RED; ctx.fill(); cir(0, 0, 130, '#e3e8ef'); T(Math.round(90 * p) + '%', 0, 6, 110, INK); ctx.restore(); T('OF THE WORLD\'S INSULIN', 500, 790, 46, INK);
    [['ELI LILLY', '#c0392b', S('Eli Lilly.')], ['NOVO NORDISK', '#1f4e9a', S('Novo Nordisk.')], ['SANOFI', '#6b2fa0', S('And Sanofi.')]].forEach(([n, c, t1], k) => { if (t > t1) person(1050 + k * 280, 960, 0.8, EXEC(n, c, { mood: 'smug', arms: [12, 20] }), t + k); });
  });
  ['Novo Nordisk.', 'And Sanofi.'].forEach(s => cue(S(s), 'pop', 0.6));
  sc(S('And over the decades') - 0.15, S('Every improvement came') - 0.15, (t) => {
    grad('#eef4ff', '#d9e6ff'); [[S('Purer insulin.'), 'PURER'], [S('Faster insulin.'), 'FASTER'], [S('Longer-lasting insulin.'), 'LONGER-LASTING'], [S('Better pens.'), 'BETTER PENS']].forEach(([t0, s], k) => { if (t > t0) { const p = pop(t, t0); ctx.save(); ctx.translate(300 + k * 440, 520); ctx.scale(p, p); if (k < 3) vial(0, 0, 0.9, s, ['#ff8a00', '#2ecc71', '#8338ec'][k]); else pen(0, 0, 0.9); ctx.restore(); tag(300 + k * 440, 850, s, 52, INK, '#fff', p); } });
  });
  sc(S('Every improvement came') - 0.15, S('Chapter three.') - 0.1, (t) => {
    office('#f3e2c7', '#c99b6a'); for (let k = 0; k < 6; k++) { const p = pop(t, S('Every improvement came') + k * 0.35); ctx.save(); ctx.translate(380 + k * 230, 470); ctx.rotate((k % 2 ? 1 : -1) * 0.05); ctx.scale(p, p); panel(-90, -120, 180, 240, '#fff', 10); T('PATENT', 0, -70, 40, INK); T('#' + (k + 1), 0, 10, 70, RED); ctx.restore(); }
    if (t > S('And every new patent')) tag(960, 860, 'NEW PATENT = NEW PRICE', 80, YEL, INK, pop(t, S('And every new patent')));
  });
  // =================== CH 3 ===================
  ch(S('Chapter three.') - 0.1, S('In nineteen ninety-six') - 0.15, 3, 'THE PRICE CLIMB', RED);
  sc(S('In nineteen ninety-six') - 0.15, S('Same medicine.') - 0.15, (t) => {
    grad('#fff6e5', '#ffe2b3'); vial(540, 520, 1.3, 'HUMALOG'); calendar(1000, 300, 0.7, 'YEAR', '1996', '#c0392b');
    priceTag(1450, 300, 0.9, '$21', '#2ecc71', -0.06, pop(t, S('The list price was about twenty-one'))); if (t > S('By twenty nineteen')) { calendar(1000, 720, 0.7, 'YEAR', '2019', '#c0392b'); priceTag(1450, 720, 1.0, '$275', RED, 0.04, pop(t, P('By twenty nineteen', 'two hundred'))); }
  });
  cue(P('By twenty nineteen', 'two hundred'), 'hit', 0.9);
  sc(S('Same medicine.') - 0.15, S('And it wasn\'t just one drug.') - 0.15, (t) => {
    grad('#14213d', '#22345e'); [[S('Same medicine.'), 'SAME MEDICINE'], [S('Same vial.'), 'SAME VIAL']].forEach(([t0, s], k) => { if (t > t0) tag(560 + k * 800, 180, s, 64, '#fff', INK, pop(t, t0)); });
    vial(560, 600, 1.1, 'HUMALOG'); vial(1360, 600, 1.1, 'HUMALOG'); priceTag(560, 900, 0.6, '1996: $21', '#2ecc71', 0); priceTag(1360, 900, 0.6, '2019: $275', RED, 0);
    bigNum(t, S('More than thirteen times'), '13× THE PRICE', 960, 420, 150, YEL);
  });
  sc(S('And it wasn\'t just one drug.') - 0.15, S('When one company raised') - 0.15, (t) => {
    grad('#fff6e5', '#ffe2b3'); panel(300, 220, 1320, 620, '#fff', 24); T('U.S. INSULIN PRICE', 960, 280, 56, INK); chart(380, 340, 1160, 420, [100, 115, 135, 160, 190, 215], clamp((t - S('Between twenty twelve')) / 2.5), RED);
    T('2012', 380, 800, 40, '#666'); T('2016', 1540, 800, 40, '#666'); bigNum(t, P('Between twenty twelve', 'more than doubled') , '2× IN 4 YEARS', 1300, 420, 110, RED);
  });
  sc(S('When one company raised') - 0.15, S('But here\'s the strange part.') - 0.15, (t) => {
    office('#e3e8ef', '#8f9bb0'); const lk = S('Senate investigation found');
    const up = (k) => Math.min(1, Math.max(0, (t - S('When one company raised') - k * 0.4) / 1.2)) * 260;
    person(620, 960 - 0, 1.0, EXEC('NOVO NORDISK', '#1f4e9a', { mood: 'smug', arms: [12, 150] }), t); person(1300, 960, 1.0, EXEC('SANOFI', '#6b2fa0', { flip: true, mood: 'smug', arms: [12, 150] }), t);
    [620, 1300].forEach((x, k) => { const h = up(k); rr(x + (k ? -260 : 160), 760 - h, 90, h, 8, k ? '#8338ec' : '#3a86ff'); });
    if (t > lk) { capitol(960, 400, 0.45); tag(960, 120, 'SENATE: PRICES RAISED "IN LOCKSTEP"', 54, '#fff', INK, pop(t, lk)); }
    if (t > S('Sometimes within days.')) tag(960, 500, 'SOMETIMES WITHIN DAYS', 50, RED, '#fff', pop(t, S('Sometimes within days.')));
  });
  sc(S('But here\'s the strange part.') - 0.15, S('Chapter four.') - 0.1, (t) => {
    grad('#14213d', '#22345e'); person(960, 960, 1.3, EXEC('DRUG COMPANIES', '#c0392b', { mood: 'neutral', talk: true, arms: [70, 70] }), t);
    if (t > S('The companies said')) bubble(960, 250, 900, 180, '"WE DON\'T KEEP MOST OF IT."', 64, pop(t, S('The companies said')), [0, 1]);
    if (t > S('So where was it going?')) { for (let k = 0; k < 8; k++) { const u = ((t - S('So where was it going?')) * 0.8 + k / 8) % 1; coin(1100 + u * 800, 700 - Math.sin(u * 3) * 200, 34, '$'); } T('?', 1700, 380, 200, YEL, HEAD, 'center', { outline: 14 }); }
  });
  // =================== CH 4 ===================
  ch(S('Chapter four.') - 0.1, S('Between the drug company') - 0.15, 4, 'THE MIDDLEMEN', '#8338ec');
  sc(S('Between the drug company') - 0.15, S('PBMs work for') - 0.15, (t) => {
    grad('#f1eaff', '#d9ccff'); factory(260, 880, 0.6); T('DRUG COMPANY', 260, 920, 40, INK); store(1660, 880, 0.6, 'PHARMACY', '#2a9d8f');
    const p = pop(t, S('The pharmacy benefit manager.') - 0.3); ctx.save(); ctx.translate(960, 0); ctx.scale(p, 1); ctx.translate(-960, 0); person(960, 950, 1.3, PBM({ mood: 'smug', arms: [12, 30] }), t); ctx.restore();
    if (t > S('The PBM.')) tag(960, 160, 'PHARMACY BENEFIT MANAGER', 66, '#fff', INK, pop(t, S('The PBM.')));
  });
  sc(S('PBMs work for') - 0.15, S('So drug companies pay') - 0.15, (t) => {
    office('#ebe4f7', '#9c8fb8'); person(500, 950, 1.25, PBM({ mood: 'smug', arms: [12, 80] }), t);
    panel(950, 180, 640, 640, '#fff', 18); T('FORMULARY', 1270, 250, 64, INK); T('(covered drugs)', 1270, 300, 32, '#666', SANS);
    ['Drug A', 'Drug B', 'Drug C', 'Drug D', 'Drug E'].forEach((d, k) => { const ok = hash(k, 3) > 0.35; T(d, 1030, 390 + k * 80, 44, INK, SANS, 'left'); if (ok) check(1480, 380 + k * 80, 22, (t - S('They decide which') - k * 0.2) / 0.4); else bigX(1480, 390 + k * 80, 20, (t - S('They decide which') - k * 0.2) / 0.4); });
    if (t > S('And getting on it')) tag(1270, 900, 'WORTH BILLIONS', 70, YEL, INK, pop(t, S('And getting on it')));
  });
  sc(S('So drug companies pay') - 0.15, S('Here\'s the catch.') - 0.15, (t) => {
    office('#ebe4f7', '#9c8fb8'); person(500, 950, 1.2, EXEC('DRUG COMPANY', '#c0392b', { mood: 'smug', arms: [12, 90] }), t); person(1420, 950, 1.2, PBM({ flip: true, mood: 'smug', arms: [12, 90] }), t);
    const u = ((t - S('So drug companies pay')) * 0.6) % 1; ctx.save(); ctx.translate(700 + u * 520, 560 - Math.sin(u * Math.PI) * 120); fillPath([[-80, -50], [80, -50], [80, 50], [-80, 50]], '#e9d8a6'); fillPath([[-80, -50], [0, 10], [80, -50]], '#d8c48d'); ctx.restore();
    tag(960, 180, 'SECRET "REBATES"', 80, RED, '#fff', pop(t, P('So drug companies pay', 'rebates')));
  });
  sc(S('Here\'s the catch.') - 0.15, S('The Senate report found rebates') - 0.15, (t) => {
    grad('#14213d', '#22345e'); const t0 = S('The rebate is a percentage'), hi = S('So the higher the list price');
    const L = t > hi ? 300 : 100; panel(200, 260, 680, 520, '#fff', 20); T('LIST PRICE', 540, 330, 56, INK); bigNum(t, t0, '$' + L, 540, 480, 150, INK, { outline: 0 }); T('REBATE (60%)', 540, 640, 44, '#666'); T('$' + Math.round(L * 0.6), 540, 710, 80, RED);
    if (t > hi) { arrow(950, 520, 1150, 520, '#fff', 14, (t - hi) / 0.5); person(1450, 980, 1.2, PBM({ mood: 'smug', arms: [12, 150], hold: () => { ctx.translate(20, -20); cash(0, 0, 0.5); } }), t); }
    if (t > S('And the more the middleman')) tag(1450, 200, 'HIGHER PRICE = BIGGER CUT', 58, YEL, INK, pop(t, S('And the more the middleman')));
  });
  cue(S('So the higher the list price'), 'hit', 0.7);
  sc(S('The Senate report found rebates') - 0.15, S('It even found') - 0.15, (t) => {
    grad('#bfe3ff', '#eaf6ff'); capitol(960, 980, 0.9);
    panel(360, 160, 1200, 420, '#fff', 20); T('INSULIN REBATES', 960, 220, 56, INK);
    const p = clamp((t - S('The Senate report found rebates') - 0.6) / 2); rr(460, 420, 300, -60, 6, '#3a86ff'); T('2013', 610, 460, 40, '#666'); T('single digits', 610, 330, 34, INK, SANS); rr(1160, 420, 300, -260 * p, 6, RED); T('LATER', 1310, 460, 40, '#666'); if (p > 0.9) T('60%+', 1310, 130 + 60, 90, RED);
  });
  sc(S('It even found') - 0.15, S('Think about that.') - 0.15, (t) => {
    office('#e3e8ef', '#8f9bb0'); rr(360, 640, 1200, 40, 10, '#6e5235'); for (let k = 0; k < 4; k++) person(520 + k * 300, 760, 0.7, EXEC('NOVO BOARD', '#1f4e9a', { label: k === 0 ? 'NOVO NORDISK BOARD' : '', mood: 'neutral', arms: [12, k === 3 ? 160 : 12] }), t + k);
    tag(960, 160, 'PROPOSAL: CUT THE INSULIN PRICE', 60, '#fff', INK, pop(t, S('It even found') + 0.5)); if (t > P('It even found', 'voted down')) stamp2(t, P('It even found', 'voted down'));
    if (t > S('Fear of backlash')) tag(960, 300, 'WHY? FEAR OF PBM & INSURER BACKLASH', 48, RED, '#fff', pop(t, S('Fear of backlash')));
  });
  function stamp2(t, t0) { const p = clamp((t - t0) / 0.2); ctx.save(); ctx.translate(1400, 480); ctx.rotate(-0.15); ctx.scale(2 - p, 2 - p); ctx.globalAlpha = p; ctx.strokeStyle = RED; ctx.lineWidth = 10; ctx.strokeRect(-230, -70, 460, 140); T('VOTED DOWN', 0, 6, 90, RED); ctx.restore(); ctx.globalAlpha = 1; }
  cue(P('It even found', 'voted down'), 'hit', 0.9);
  sc(S('Think about that.') - 0.15, S('Chapter five.') - 0.1, (t) => {
    grad('#14213d', '#22345e'); caption(t, S('A lower price was seen'), 'A LOWER PRICE = A "BUSINESS RISK"', 540, 90, INK, YEL);
  });
  // =================== CH 5 ===================
  ch(S('Chapter five.') - 0.1, S('Now, insurance companies') - 0.15, 5, 'WHO PAYS THE STICKER PRICE?', '#ff6b35');
  sc(S('Now, insurance companies') - 0.15, S('If you\'re uninsured') - 0.15, (t) => {
    office('#e3e8ef', '#8f9bb0'); person(500, 950, 1.2, { shirt: '#fff', jacket: '#2b2d42', tie: '#2a9d8f', pants: '#2b2d42', skin: SK[0], hair: 'side', mood: 'smug', label: 'INSURANCE PLAN', arms: [12, 60], hold: () => { ctx.translate(20, -20); cash(0, 0, 0.5); } }, t);
    person(1400, 950, 1.2, { ...crowdP(2), mood: 'worried', label: 'PATIENT' }, t); if (t > S('But not everyone')) { arrow(800, 520, 1150, 520, '#999', 10, 1); bigX(975, 520, 60, (t - S('But not everyone') - 0.4) / 0.4); }
  });
  sc(S('If you\'re uninsured') - 0.15, S('And that list price is') - 0.15, (t) => {
    pharmacy(); person(560, 990, 1.25, { ...crowdP(4), mood: 'shock' }, t); vial(1100, 560, 0.9); priceTag(1450, 520, 0.9, 'FULL LIST PRICE', RED, -0.06, pop(t, S('If you\'re uninsured')));
    if (t > S('If you have a high deductible')) tag(1300, 200, 'HIGH DEDUCTIBLE? SAME PRICE', 54, '#fff', INK, pop(t, S('If you have a high deductible')));
    if (t > S('Every January')) { calendar(1500, 860, 0.6, 'JAN', '1', RED); tag(1100, 900, 'THE CLOCK RESETS', 48, YEL, INK, pop(t, S('Every January'))); }
  });
  sc(S('And that list price is') - 0.15, S('So people did what Alec did.') - 0.15, (t) => {
    grad('#fff6e5', '#ffe2b3'); panel(260, 200, 1400, 640, '#fff', 24); T('INSULIN LIST PRICE (per unit, 2022)', 960, 260, 50, INK);
    const p = clamp((t - S('A twenty twenty-four RAND') - 0.8) / 1.8); rr(420, 760, 300, -50, 6, '#3a86ff'); T('33 OTHER RICH', 570, 800, 34, '#555'); T('COUNTRIES', 570, 836, 34, '#555');
    rr(1200, 760, 300, -480 * p, 6, RED); T('USA', 1350, 800, 40, '#555'); if (p > 0.95) T('~10×', 1350, 230, 100, RED);
    T('Source: RAND, 2024 (gross prices)', 960, 900, 30, '#888', SANS);
  });
  cue(S('A twenty twenty-four RAND') + 2.6, 'hit', 0.9);
  sc(S('So people did what Alec did.') - 0.15, S('Chapter six.') - 0.1, (t) => {
    city('#c9d6e8', '#eef2f8', '#a8b8cf', '#8fa1bb', '#eef2f8'); const st = S('A Yale study');
    for (let k = 0; k < 8; k++) person(260 + k * 200, 1000, 0.6, { ...crowdP(k), mood: k % 4 === 0 ? 'worried' : 'neutral', shirt: k % 4 === 0 ? RED : '#b9c2cf' }, t + k);
    bigNum(t, st, '1 IN 4', 960, 230, 200, RED); if (t > st) tag(960, 420, 'USED LESS INSULIN BECAUSE OF COST', 52, '#fff', INK, pop(t, st + 0.6));
    [[S('They skipped doses.'), 'SKIPPED DOSES'], [S('They stretched vials.'), 'STRETCHED VIALS'], [S('Some crossed the border'), 'DROVE TO CANADA']].forEach(([t0, s], k) => { if (t > t0) tag(420 + k * 540, 560, s, 44, YEL, INK, pop(t, t0)); });
    if (t > S('And some, like Alec')) { ctx.fillStyle = 'rgba(10,15,30,0.7)'; ctx.fillRect(-200, -200, 2400, 1500); candle(960, 760, 1.4, t); }
  });
  // =================== CH 6 ===================
  ch(S('Chapter six.') - 0.1, S('Alec\'s mother') - 0.15, 6, 'THE CRACK IN THE WALL', '#2a9d8f');
  sc(S('Alec\'s mother') - 0.15, S('The pressure finally') - 0.15, (t) => {
    grad('#bfe3ff', '#eaf6ff'); capitol(960, 760, 0.9); rr(-50, 760, 2020, 400, 0, '#9ccf6a');
    person(960, 1000, 1.05, MOM({ mood: 'angry', talk: true, arms: [12, 150] }), t);
    if (t > S('Parents.')) for (let k = 0; k < 6; k++) person(200 + k * 120 + (k > 2 ? 900 : 0), 1020, 0.7, { ...crowdP(k), mood: 'angry', arms: [12, 150] }, t + k);
    if (t > S('All asking the same')) bubble(960, 200, 900, 150, 'WHY DOES THIS COST SO MUCH?', 60, pop(t, S('All asking the same')), [0, 1]);
  });
  sc(S('The pressure finally') - 0.15, S('Then, on March first') - 0.15, (t) => {
    grad('#bfe3ff', '#eaf6ff'); capitol(960, 800, 1.0);
    if (t > S('In twenty twenty-two, Congress')) { calendar(300, 300, 0.7, 'LAW', '2022', '#2a9d8f'); priceTag(1350, 300, 1.0, '$35 / MONTH', '#2ecc71', -0.05, pop(t, P('In twenty twenty-two, Congress', 'thirty-five'))); tag(1350, 470, 'CAP FOR MEDICARE PATIENTS', 50, INK, '#fff', pop(t, P('In twenty twenty-two, Congress', 'Medicare'))); }
  });
  cue(P('In twenty twenty-two, Congress', 'thirty-five'), 'hit', 0.8);
  sc(S('Then, on March first') - 0.15, S('And in January twenty twenty-six') - 0.15, (t) => {
    office('#e3e8ef', '#8f9bb0'); calendar(300, 300, 0.7, 'MAR 1', '2023', RED); person(650, 950, 1.2, EXEC('ELI LILLY', '#c0392b', { mood: 'smile', talk: true, arms: [12, 60] }), t);
    bigNum(t, P('Then, on March first', 'seventy'), '−70% LIST PRICE', 1350, 300, 110, '#18a957'); if (t > S('And cap what')) priceTag(1350, 520, 0.9, '$35 CAP', '#2ecc71', 0.04, pop(t, S('And cap what')));
    if (t > S('Within weeks')) { person(1250, 950, 0.75, EXEC('NOVO NORDISK', '#1f4e9a', { mood: 'neutral' }), t); person(1550, 950, 0.75, EXEC('SANOFI', '#6b2fa0', { mood: 'neutral' }), t); tag(1400, 690, 'FOLLOWED WITHIN WEEKS', 44, INK, '#fff', pop(t, S('Within weeks'))); }
  });
  cue(P('Then, on March first', 'seventy'), 'hit', 0.9);
  sc(S('And in January twenty twenty-six') - 0.15, S('Chapter seven.') - 0.1, (t) => {
    pharmacy(); calendar(300, 330, 0.7, 'JAN', '2026', '#2a9d8f'); tag(960, 200, 'CALIFORNIA\'S OWN INSULIN (CALRX)', 56, '#fff', INK, pop(t, S('And in January twenty twenty-six') + 0.4));
    for (let k = 0; k < 5; k++) pen(820 + k * 30, 470 + k * 60, 0.6, '#2a9d8f', -0.1); priceTag(1450, 500, 0.9, '~$11 / PEN', '#2ecc71', -0.05, pop(t, P('Generic long-acting', 'eleven')));
    if (t > S('After decades of climbing')) { const p = clamp((t - S('After decades of climbing')) / 1.2); stroke([[200, 980], [700, 760], [1200, 640], [1500, 900 * p + 640 * (1 - p)]], RED, 14); }
  });
  // =================== CH 7 ===================
  ch(S('Chapter seven.') - 0.1, S('So how much does insulin') - 0.15, 7, 'WHAT IT ACTUALLY COSTS', YEL);
  sc(S('So how much does insulin') - 0.15, S('In many countries') - 0.15, (t) => {
    grad('#14213d', '#22345e'); factory(500, 860, 1.0); vial(1350, 520, 1.1);
    if (t > S('A study in the journal')) tag(960, 140, 'BMJ GLOBAL HEALTH · PRODUCTION COST ESTIMATE', 44, '#fff', INK, pop(t, S('A study in the journal')));
    if (t > S('For most modern insulins')) { bigNum(t, S('For most modern insulins'), '$78–$133', 1350, 860, 120, '#2ecc71'); }
    if (t > S('For a whole year.')) tag(1350, 990, 'PER PERSON · PER YEAR', 52, YEL, INK, pop(t, S('For a whole year.')));
  });
  sc(S('In many countries') - 0.15, S('Same science.') - 0.15, (t) => {
    grad('#16213e', '#0f3460'); india(560, 560, 760, '#ff9f43'); if (t > S('In India, basic')) { tag(560, 140, 'GOVERNMENT PRICE CEILING', 54, '#fff', INK, pop(t, S('In India, basic'))); vial(1300, 520, 1.0, 'HUMAN INSULIN', '#ff8a00'); priceTag(1350, 860, 0.8, 'A FEW DOLLARS', '#2ecc71', -0.04, pop(t, S('A vial can cost'))); }
    else tag(960, 160, 'MANY COUNTRIES CAP THE PRICE BY LAW', 60, '#fff', INK, pop(t, S('In many countries')));
  });
  sc(S('Same science.') - 0.15, S('Chapter eight.') - 0.1, (t) => {
    grad('#fff6e5', '#ffe2b3'); india(1500, 560, 520, '#ff9f43'); fillPath([[200, 400], [420, 360], [520, 420], [500, 560], [420, 680], [300, 700], [220, 600], [180, 480]], '#7fb2e5'); T('USA', 350, 540, 60, '#fff');
    vial(700, 560, 0.8); vial(1220, 560, 0.8); [[S('Same science.'), 'SAME SCIENCE'], [S('Same hormone.'), 'SAME HORMONE']].forEach(([t0, s], k) => { if (t > t0) tag(960, 200 + k * 110, s, 60, INK, '#fff', pop(t, t0)); });
    if (t > S('Discovered by the same')) tag(960, 900, '"IT BELONGS TO THE WORLD"', 60, YEL, INK, pop(t, S('Discovered by the same')));
  });
  // =================== CH 8 ===================
  ch(S('Chapter eight.') - 0.1, S('A hundred years ago') - 0.15, 8, 'THE ONE DOLLAR PROMISE', '#2ecc71');
  sc(S('A hundred years ago') - 0.15, S('In twenty seventeen, a twenty-six') - 0.15, (t) => {
    lab1920(); person(960, 940, 1.35, BANT({ mood: 'smile', arms: [12, 70], hold: () => coin(0, 0, 40, '$1') }), t); tag(960, 160, '1923: GAVE AWAY A FORTUNE', 60, '#6e5235', '#fff', pop(t, S('A hundred years ago') + 0.4));
  });
  sc(S('In twenty seventeen, a twenty-six') - 0.15, S('Prices are finally falling.') - 0.15, (t) => {
    night(); candle(960, 760, 1.4, t); pen(960, 860, 0.8, '#2f6fdb', 0, true); tag(960, 160, '2017: ALEC SMITH, 26', 60, '#fff', INK, pop(t, S('In twenty seventeen, a twenty-six') + 0.4));
  });
  sc(S('Prices are finally falling.') - 0.15, S('If you enjoyed') - 0.15, (t) => {
    grad('#14213d', '#22345e'); vial(960, 560, 1.4); priceTag(560, 320, 0.8, '$1', '#2ecc71', -0.1, pop(t, S('The patent was sold') ));
    if (t > S('The question is who')) { priceTag(1360, 820, 0.8, '$ ???', RED, 0.06, pop(t, S('The question is who'))); caption(t, S('The question is who') + 0.6, 'WHO DECIDED WHAT IT SHOULD COST?', 140, 80, INK, YEL); }
  });
  sc(S('If you enjoyed') - 0.15, DUR + 2, (t) => {
    grad('#14213d', '#22345e'); const t0 = S('If you enjoyed'), cl = t > t0 + 1.4; T('THE MONEY FILES', 960, 160, 100, '#fff', HEAD);
    const p = pop(t, t0, 0.4); ctx.save(); ctx.translate(960, 400); ctx.scale(p, p); rr(-380, -100, 760, 200, 100, cl ? '#666' : RED); T(cl ? 'SUBSCRIBED ✓' : 'SUBSCRIBE', 0, 8, 110, '#fff'); ctx.restore();
    if (t > S('Next time:')) { panel(360, 620, 1200, 260, '#fff', 20); T('NEXT FILE', 960, 680, 46, '#d1601c'); T('THE $50 TYLENOL', 960, 790, 90, INK); }
  });
  cue(S('If you enjoyed') + 1.4, 'pop', 0.8);
}
