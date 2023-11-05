export function statistics(numbers: number[]) {
  if (numbers.length === 0) {
    throw new Error('Array should not be empty');
  }

  const total = numbers.reduce((acc, val) => acc + val, 0);
  const avg = total / numbers.length;
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return {
    total,
    avg,
    max,
    min
  };
}
