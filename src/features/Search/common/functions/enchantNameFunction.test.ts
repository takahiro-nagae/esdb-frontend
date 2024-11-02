import { describe, expect, it } from 'vitest';

import { createEnchantName, createEnchantNameEn } from './enchantNameFunction';

describe('createEnchantName', () => {
  const enchantName = 'テスト';
  const enchantName2 = '別名';

  it('別名あり', () => {
    expect(createEnchantName(enchantName, enchantName2)).toBe(
      `${enchantName} / ${enchantName2}`,
    );
  });

  it('別名なし', () => {
    expect(createEnchantName(enchantName, '')).toBe(enchantName);
  });
});

describe('createEnchantNameEn', () => {
  const enchantNameEn = 'テスト';

  it('別名あり', () => {
    expect(createEnchantNameEn(enchantNameEn, '1')).toBe(enchantNameEn);
  });

  it('別名なし', () => {
    expect(createEnchantNameEn(enchantNameEn, '2')).toBe(`Of ${enchantNameEn}`);
  });

  it('デフォルト', () => {
    expect(createEnchantNameEn(enchantNameEn, '3')).toBe(enchantNameEn);
  });

  it('空文字', () => {
    expect(createEnchantNameEn(enchantNameEn, '')).toBe(enchantNameEn);
  });
});
