import { describe, expect, test } from 'vitest';

import { displayAmongAd, displayLastAd } from './displayAd';

describe('displayAmongAds', () => {
  test('indexが0の時false', () => {
    expect(displayAmongAd(0)).toBe(false);
  });
  test('indexが4の時false', () => {
    expect(displayAmongAd(4)).toBe(false);
  });
  test('indexが5の時true', () => {
    expect(displayAmongAd(5)).toBe(true);
  });
  test('indexが6の時false', () => {
    expect(displayAmongAd(6)).toBe(false);
  });
  test('indexが10の時true', () => {
    expect(displayAmongAd(10)).toBe(true);
  });
});

describe('displayLastAd', () => {
  test('lengthがindexと同じならfalse', () => {
    expect(displayLastAd(1, 1)).toBe(false);
  });

  test('lengthがindexより1大きいならtrue', () => {
    expect(displayLastAd(1, 2)).toBe(true);
  });

  test('lengthがindexより1小さいならfalse', () => {
    expect(displayLastAd(1, 0)).toBe(false);
  });
});
