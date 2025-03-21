import { describe, expect, test } from 'vitest';

import { isDisplayCell } from './searchListHeadFunction';

describe('isDisplayCell', () => {
  test('cellIdがvalueではなく、isDispValがfalseであればtrue', () => {
    expect(isDisplayCell('name', false)).toBe(true);
  });

  test('cellIdがvalueで、isDispValがfalseであればfalse', () => {
    expect(isDisplayCell('value', false)).toBe(false);
  });

  test('cellIdがvalueではなく、isDispValがtrueであればtrue', () => {
    expect(isDisplayCell('name', true)).toBe(true);
  });

  test('cellIdがvalueで、isDispValがtrueであればtrue', () => {
    expect(isDisplayCell('value', true)).toBe(true);
  });
});
