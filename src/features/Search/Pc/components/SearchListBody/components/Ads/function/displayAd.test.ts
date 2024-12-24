import { describe, expect, test } from 'vitest';

import { displayAmongAd } from './displayAd';

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
