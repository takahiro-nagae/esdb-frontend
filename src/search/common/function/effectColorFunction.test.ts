import effectColorFunction from "./effectColorFunction";

describe('createEnchantName', () => {

    test('increase', () => {
        expect(effectColorFunction('increase').styles).toBe('color:#7070ff;margin:2px;');
    });

    test('decrease', () => {
        expect(effectColorFunction('decrease').styles).toBe('color:#ff3b3b;margin:2px;');
    });

    test('not-relevant', () => {
        expect(effectColorFunction('not-relevant').styles).toBe('color:#11D612;margin:2px;');
    });

    test('designated', () => {
        expect(effectColorFunction('designated').styles).toBe('color:#f0f;margin:2px;');
    });

    test('default', () => {
        expect(effectColorFunction('').styles).toBe('color:#f461f4;margin:2px;');
    });
});