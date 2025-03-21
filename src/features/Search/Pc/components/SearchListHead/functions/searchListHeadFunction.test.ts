import { describe, expect, test } from 'vitest';

import { isDisplayCell } from './searchListHeadFunction';

describe('isDisplayCell', () => {
  test('cellIdがdisp_valではなく、isDispValがfalseであればtrue', () => {
    expect(isDisplayCell('name', false)).toBe(true);
  });

  test('cellIdがdisp_valで、isDispValがfalseであればfalse', () => {
    expect(isDisplayCell('value', false)).toBe(false);
  });

  test('cellIdがdisp_valではなく、isDispValがtrueであればtrue', () => {
    expect(isDisplayCell('name', true)).toBe(true);
  });

  test('cellIdがdisp_valで、isDispValがtrueであればtrue', () => {
    expect(isDisplayCell('value', true)).toBe(true);
  });
});
