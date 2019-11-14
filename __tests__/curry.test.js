import { curry } from '../src';

const adder = (a, b) => a + b;

describe('curry', () => {
  let add2;
  beforeAll(() => {
    add2 = curry(adder, 2);
  });

  test('should return a function', () => {
    expect(add2).toBeFunction();
  });

  test('should add 2 to any number', () => {
    expect(add2(2)).toEqual(4);
    expect(add2(8)).toEqual(10);
  });
});
