import { add, dec, inc } from './math';

test('Add numbers', () => {
  const result = add(3, 7);
  const expected = 10;

  expect(result).toBe(expected)  
});

test('Decrease the number by one', () => {
  const result = dec(10);
  const expected = 9;

  expect(result).toBe(expected)  
});

test('Increase the number by one', () => {
  const result = inc(10);
  const expected = 11;

  expect(result).toBe(expected)  
});