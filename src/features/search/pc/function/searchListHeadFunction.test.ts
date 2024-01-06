import { isDisplayCell } from "./searchListHeadFunction";

describe('isDisplayCell', () => {
    test('cellIdがdisp_valではなく、isDispValがfalseであればtrue', () => {
        expect(isDisplayCell('enchant_name', false)).toBe(true);
    });

    test('cellIdがdisp_valで、isDispValがfalseであればfalse', () => {
        expect(isDisplayCell('disp_val', false)).toBe(false);
    });

    test('cellIdがdisp_valではなく、isDispValがtrueであればtrue', () => {
        expect(isDisplayCell('enchant_name', true)).toBe(true);
    });

    test('cellIdがdisp_valで、isDispValがtrueであればtrue', () => {
        expect(isDisplayCell('disp_val', true)).toBe(true);
    });
});