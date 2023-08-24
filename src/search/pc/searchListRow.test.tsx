import { EnchantData } from "../common/interface/enchantData";
import renderComponent from "../../tesetLib/render";
import React from "react";
import { SearchListRow } from "./searchListRow";
import { EnchantDataTestImpl } from "../common/interface/EnchantDataTestImpl";
import { dispTestIdExpectText, notExistTestForTestId, notExistTestForText } from "../../tesetLib/commonTesting";

const rendering = (enchant: EnchantData) => {
    renderComponent(<SearchListRow enchant={enchant}/>);
};

/**
 * 値の詳細に関しては他のテストクラスにて担保するため、
 * このクラスでは表示がされる or されないを主眼にテストを実施する
 */
describe('searchListRow', () => {
    let enchantData: EnchantData;

    beforeEach(() => {
        enchantData = new EnchantDataTestImpl();
    });

    const enchantNameId = 'enchantName';
    const enchantNameEnId = 'enchantNameEn';
    const impText = '未実装';
    const invalidText = '貼付不可';
    const dispValId = 'dispVal';

    test('何もデータがないエンチャント', () => {
        rendering(enchantData);
        dispTestIdExpectText(enchantNameId, '');
        notExistTestForText(invalidText);
        notExistTestForText(impText);
        dispTestIdExpectText(enchantNameEnId, '');
        notExistTestForTestId(dispValId);
    });

    test('値ありの確認', () => {
        enchantData.disp_val = '1';
        rendering(enchantData);

        dispTestIdExpectText(dispValId, '1');
    });

});