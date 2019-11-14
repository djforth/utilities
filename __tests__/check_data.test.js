import { parseBoolean, parseNumber } from '../src';

describe('Checking data', () => {
  describe('parseBoolean', () => {
    test('should return null if not a boolean', () => {
      expect(parseBoolean('foo')).toBeNull();
    });

    test('should return true if boolean and true', () => {
      expect(parseBoolean('true')).toBeTrue();
    });

    test('should return true if boolean and true', () => {
      expect(parseBoolean('false')).toBeFalse();
    });
  });

  describe('parseNumber', () => {
    let li;
    test('should return null if not a number', () => {
      expect(parseNumber('foo')).toBeNull();
    });

    test('should return null if not all number', () => {
      expect(parseNumber('foo123')).toBeNull();
      expect(parseNumber('123foo')).toBeNull();
      expect(parseNumber('foo123bar')).toBeNull();
    });

    test('should return floating number if in string', () => {
      expect(parseNumber('123.3')).toEqual(123.3);
    });

    test('should return number if in string', () => {
      expect(parseNumber('123')).toEqual(123);
    });
  });
});
