import { describe, expect, test } from 'vitest';
import { positionName } from './positionFunction';

describe('positionName', () => {
  test('接頭', () => {
    expect(positionName('1')).toBe('接頭(prefix)');
  });

  test('接尾', () => {
    expect(positionName('2')).toBe('接尾(suffix)');
  });

  test('デフォルト', () => {
    expect(positionName('3')).toBe('');
  });

  test('空文字', () => {
    expect(positionName('')).toBe('');
  });
});
