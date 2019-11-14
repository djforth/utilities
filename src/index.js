import Curry from './curry';

export const isElement = d => d instanceof Element;

export const checkElements = (...elms) =>
  elms.reduce((check, elm) => {
    if (!check) return check;
    return isElement(elm);
  }, true);

export const curry = Curry;

export const parseBoolean = value => {
  if (!/true|false/.test(value)) return null;

  return value === 'true';
};

export const parseNumber = value => {
  if (!/^-?\d*\.?\d+$/.test(value)) return null;

  return parseFloat(value, 10);
};
