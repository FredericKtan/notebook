// @flow strict

export const add = (a: number, b: number): number => a + b;

export const dec = (a: number): number => a - 1;

export const inc = (a: number): number => a + 1;

export const random = (max: number): number =>
  Math.floor(Math.random() * Math.floor(max));

export default {
  add,
  dec,
  inc,
  random
};
