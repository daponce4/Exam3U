// __tests__/utils.test.js (ESM)
import { calcWeightedGrade } from "../src/utils/calcWeightedGrade.js";
import { percentile } from "../src/utils/percentile.js";

describe("Casos de referencia que deben pasar en tests", () => {
  test("calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}]) → 86.00", () => {
    const r = calcWeightedGrade([
      { score: 80, weight: 0.4 },
      { score: 90, weight: 0.6 },
    ]);
    // Espera 86 redondeado a 2 decimales
    expect(Number(r.toFixed ? r.toFixed(2) : r)).toBe(86.00);
  });

  test("percentile(0,[1,2,3]) → 1.00", () => {
    const r = percentile(0, [1, 2, 3]);
    expect(Number(r.toFixed ? r.toFixed(2) : r)).toBe(1.00);
  });

  test("percentile(100,[1,2,3]) → 3.00", () => {
    const r = percentile(100, [1, 2, 3]);
    expect(Number(r.toFixed ? r.toFixed(2) : r)).toBe(3.00);
  });

  test("percentile(50,[1,2,3,4]) → 2.00 (nearest-rank)", () => {
    const r = percentile(50, [1, 2, 3, 4]);
    expect(Number(r.toFixed ? r.toFixed(2) : r)).toBe(2.00);
  });
});
