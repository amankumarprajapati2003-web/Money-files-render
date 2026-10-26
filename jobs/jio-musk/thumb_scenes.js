import { makeKit } from './kit.js';
export default function (A) {
  const { ctx, scene, HEAD, SANS } = A; const K = makeKit(A);
  const { RED, YEL, INK, SK, rr, cir, fillPath, T, grad, space, earth, india, person, tag, satellite, bigX, stroke, panel } = K;
  const V = new URLSearchParams(location.search).get('variant') || 'a';
  const ELON = (o = {}) => ({ shirt: '#1c1f26', pants: '#2a2e38', skin: SK[0], hair: 'elon', hairCol: '#3a2a20', ...o });
  const AMB = (o = {}) => ({ shirt: '#f4f1ea', pants: '#d9d2c3', skin: SK[2], hair: 'amb', kurta: true, build: 1.15, ...o });
  scene(0, 10, (t) => {
    if (V === 'a') {
      grad('#ff9a3c', '#ff5e3a'); const at = india(1380, 560, 900, '#ffd29a');
      for (let k = 0; k < 7; k++) rr(880, 120 + k * 130, 70, 120, 6, k % 2 ? '#e8343f' : '#fff');
      rr(860, 100, 110, 22, 6, '#333'); rr(860, 1000, 110, 22, 6, '#333');
      person(450, 1180, 1.75, ELON({ mood: 'angry', arms: [12, 150], sweat: true }), 0.3);
      person(1450, 1180, 1.6, AMB({ mood: 'smug', crown: true, arms: [70, 14], flip: true }), 0.3);
      T('BLOCKED', 960, 150, 230, YEL, HEAD, 'center', { outline: 22, shadow: true, rot: -0.04 });
      tag(450, 1010, 'MUSK', 64, INK, '#fff'); tag(1450, 1010, 'AMBANI', 64, INK, '#fff');
    } else {
      space(0.4); earth(960, 1500, 900, 0.3);
      satellite(560, 380, 1.1, -0.3); bigX(560, 380, 150, 1);
      person(1420, 1150, 1.6, AMB({ mood: 'smug', crown: true, arms: [14, 160] }), 0.3);
      T('ELON', 560, 120, 150, '#fff', HEAD, 'center', { outline: 16, shadow: true }); T('vs', 960, 120, 110, YEL, HEAD, 'center', { outline: 12 });
      T('INDIA', 1420, 120, 150, '#ff9f43', HEAD, 'center', { outline: 16, shadow: true });
      rr(310, 820, 500, 130, 18, RED); T('0 CUSTOMERS', 560, 890, 90, '#fff');
    }
  });
}
