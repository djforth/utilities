import { checkElements, isElement } from '../src';

describe('Checking elements', () => {
  describe('isElement', () => {
    beforeAll(() => {
      document.body.innerHTML = '<div id="el"></div>';
    });

    test('should return false if not element', () => {
      expect(isElement('foo')).toBeFalse();
    });

    test('should return true if element', () => {
      const el = document.getElementById('el');
      expect(isElement(el)).toBeTrue();
    });
  });

  describe('checkElements', () => {
    let li;
    beforeAll(() => {
      document.body.innerHTML = '<ul><li>foo</li><li>bar</li></ul>';
      li = document.querySelectorAll('li');
    });

    test('should return false if not all elements', () => {
      expect(checkElements('foo', ...li)).toBeFalse();
    });

    test('should return true if all elements', () => {
      expect(checkElements(...li)).toBeTrue();
    });
  });
});
