import { describe, expect, test } from 'vitest';

import { Dummy1, Dummy2 } from '../../../data/SearchListMockData';

import { getComparator, stableSort } from './searchListBodyFunction';

import { GetEnchantDetailsQuery } from '@/repositories/generated/graphql';

describe('getComparator', () => {
  const mockComparator = (
    comparator: (
      a: GetEnchantDetailsQuery['details']['enchants'][number],
      b: GetEnchantDetailsQuery['details']['enchants'][number],
    ) => number,
  ) => {
    return comparator(Dummy1, Dummy2);
  };

  test('昇順', () => {
    const result = mockComparator(getComparator('asc', 'name'));

    // 昇順は反転して結果が返る
    expect(result).toBe(-1);
  });

  test('降順', () => {
    const result = mockComparator(getComparator('desc', 'name'));

    expect(result).toBe(1);
  });

  test('同値（昇順）', () => {
    const result = mockComparator(getComparator('asc', 'rank'));

    expect(result).toBe(-0);
  });

  test('同値（降順）', () => {
    const result = mockComparator(getComparator('desc', 'rank'));

    expect(result).toBe(0);
  });
});

describe('stableSort', () => {
  test('昇順', () => {
    const result = stableSort([Dummy1, Dummy2], getComparator('asc', 'name'));

    expect(result[0]).toEqual(Dummy1);
    expect(result[1]).toEqual(Dummy2);
  });

  test('降順', () => {
    const result = stableSort([Dummy1, Dummy2], getComparator('desc', 'name'));

    expect(result[0]).toEqual(Dummy2);
    expect(result[1]).toEqual(Dummy1);
  });

  test('同値（昇順）', () => {
    const result = stableSort([Dummy1, Dummy2], getComparator('asc', 'rank'));

    expect(result[0]).toEqual(Dummy1);
    expect(result[1]).toEqual(Dummy2);
  });

  test('同値（降順）', () => {
    const result = stableSort([Dummy1, Dummy2], getComparator('desc', 'rank'));

    expect(result[0]).toEqual(Dummy1);
    expect(result[1]).toEqual(Dummy2);
  });
});
