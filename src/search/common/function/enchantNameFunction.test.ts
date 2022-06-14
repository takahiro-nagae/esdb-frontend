import { createEnchantName, createEnchantNameEn } from "./enchantNameFunction";


describe('createEnchantName', () => {
    const enchantName = 'テスト'
    const enchantName2 = '別名';

    test('別名あり', () => {
        expect(createEnchantName(enchantName, enchantName2)).toBe(`${enchantName} / ${enchantName2}`);
    });

    test('別名なし', () => {
        expect(createEnchantName(enchantName, '')).toBe(enchantName);
    });
});

describe('createEnchantNameEn', () => {
    const enchantNameEn = 'テスト'

    test('別名あり', () => {
        expect(createEnchantNameEn(enchantNameEn, '1')).toBe(enchantNameEn);
    });

    test('別名なし', () => {
        expect(createEnchantNameEn(enchantNameEn, '2')).toBe(`Of ${enchantNameEn}`);
    });

    test('デフォルト', () => {
        expect(createEnchantNameEn(enchantNameEn, '3')).toBe(enchantNameEn);
    });

    test('空文字', () => {
        expect(createEnchantNameEn(enchantNameEn, '')).toBe(enchantNameEn);
    });
});