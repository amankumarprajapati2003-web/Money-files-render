import { makeKit } from './kit.js';
export default function (A) {
  const { ctx, scene, HEAD } = A; const K = makeKit(A);
  const { vial, priceTag, pharmacy, arrow, RED, YEL, INK, SK, rr, T, grad, person, coin } = K;
  const V = new URLSearchParams(location.search).get('variant') || 'a';
  scene(0, 10, (t) => {
    if (V === 'a') {
      grad('#1b2a4a', '#0f1a33'); vial(560, 600, 2.3);
      priceTag(1250, 640, 1.55, '$275', RED, -0.08, 1);
      person(1640, 1250, 1.45, { shirt: '#4a7bd1', pants: '#2c3346', skin: SK[0], hair: 'short', hairCol: '#5a3a22', mood: 'shock', sweat: true, gaze: [-1, 0] }, 0.3);
      T('WHY?!', 1180, 210, 240, YEL, HEAD, 'center', { outline: 22, shadow: true, rot: -0.04 });
    } else {
      grad('#ffe08a', '#ffb347'); rr(955, 0, 10, 1080, 0, INK);
      person(480, 1220, 1.5, { shirt: '#f4f1ea', jacket: '#5a4632', tie: '#7a1f1f', pants: '#4a3b2c', skin: SK[0], hair: 'side', hairCol: '#3a2a1e', mood: 'smile', arms: [12, 60] }, 0.3);
      person(1440, 1220, 1.5, { shirt: '#4a7bd1', pants: '#2c3346', skin: SK[0], hair: 'short', hairCol: '#5a3a22', mood: 'sad', sweat: true }, 0.3);
      priceTag(480, 260, 1.2, 'PATENT: $1', '#2ecc71', -0.06, 1); priceTag(1440, 260, 1.2, '$1,300/MO', RED, 0.05, 1);
      T('SAME MEDICINE', 960, 1000, 120, '#fff', HEAD, 'center', { outline: 16, shadow: true });
    }
  });
}
