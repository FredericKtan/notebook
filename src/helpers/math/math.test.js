// @flow strict
import math from "./math";
import { random } from "./__mocks__/math";

test("Add numbers", () => {
  const result = math.add(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
});

test("Decrease the number by one", () => {
  const result = math.dec(10);
  const expected = 9;

  expect(result).toBe(expected);
});

test("Increase the number by one", () => {
  const result = math.inc(10);
  const expected = 11;

  expect(result).toBe(expected);
});

test("Generate a random number between 0 and max - 1", () => {
  const result = random(1000);
  const expected = 999;

  expect(result).toBe(expected);
  expect(random).toHaveBeenCalledTimes(1);
  expect(random).toHaveBeenCalledWith(1000);
});
