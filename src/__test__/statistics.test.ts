// statistics.test.ts

import { statistics } from '../statistics';

describe('Statistics Tests', () => {
  test('Calculates correct statistics for a given array', () => {
    const result = statistics([1, 2, 3, 4, 5]);
    expect(result).toEqual({
      total: 15,
      avg: 3,
      max: 5,
      min: 1
    });
  });

  test('Throws an error for empty array', () => {
    expect(() => statistics([])).toThrow('Array should not be empty');
  });

  test('Correctly identifies maximum', () => {
    const { max } = statistics([5, 7, 3, 8, 4]);
    expect(max).toBe(8);
  });

  test('Correctly identifies minimum', () => {
    const { min } = statistics([5, 7, 3, 8, 4]);
    expect(min).toBe(3);
  });
});
