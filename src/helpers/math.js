require('../../scripts/test');

const add = (a, b) => a + b;

const dec = (a) => a - 1;

const inc = (a) => a + 1;

let result;
let expected;

test('Add numbers', () => {
  result = add(3, 7);
  expected = 10;
  expect(result).toBe(expected)  
});
test('Decrease the number by one', () => {
  result = dec(10);
  expected = 9;
  expect(result).toBe(expected)  
});
test('Increase the number by one', () => {
  result = inc(10);
  expected = 11;
  expect(result).toBe(expected)  
});

module.exports = {
  add,
  dec,
  inc
}