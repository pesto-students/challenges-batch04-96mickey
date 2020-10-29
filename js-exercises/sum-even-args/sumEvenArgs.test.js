import { sumEvenArgs } from './sumEvenArgs';

describe('sumEvenArgs', () => {
  test('returns the sum of even arguments passed to the function', () => {
    expect(sumEvenArgs(10, 12, 3, 4, 5)).toBe(26);
    expect(sumEvenArgs(1, 2, 3, 4, 5, 6)).toBe(12);
    expect(sumEvenArgs(1, 3, 5, 7, 9)).toBe(0);
    expect(sumEvenArgs()).toBe(0);
  });

  test('to throw error on non numeric input', () => {
    expect(() => sumEvenArgs(1, 3, 5, 'm', 9)).toThrow();
  })
});
