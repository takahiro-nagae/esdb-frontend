import { positionColor, positionName } from "./positionFunction";

describe('positionColor', () => {
    test('接頭', () => {
        expect(positionColor('1').styles).toBe('color:#71a0ff!important;');
    });

    test('接尾', () => {
        expect(positionColor('2').styles).toBe('color:#ff7575!important;');
    });

    test('デフォルト', () => {
        expect(positionColor('3').styles).toBe('color:#fff;');
    });

    test('空文字', () => {
        expect(positionColor('').styles).toBe('color:#fff;');
    });
});

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