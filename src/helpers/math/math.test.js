// @flow strict
import math from "./math";

jest.mock("./math", () => {
  const original = jest.requireActual("./math");

  return {
    ...original,
    random: jest.fn((max: number): number => max - 1)
  };
});

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
  const result = math.random(1000);
  const expected = 999;

  expect(result).toBe(expected);
  expect(math.random).toHaveBeenCalledTimes(1);
  expect(math.random).toHaveBeenCalledWith(1000);
});
