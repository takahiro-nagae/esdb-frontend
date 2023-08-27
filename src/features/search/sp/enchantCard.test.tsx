import renderComponent from "../../../tesetLib/render";
import { EnchantCard } from "./enchantCard";
import { EnchantData } from "../common/interface/enchantData";
import {
    dispTestId,
    dispTestIdExpectText,
    notExistTestForTestId,
    notExistTestForText
} from "../../../tesetLib/commonTesting";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EnchantDataTestImpl } from "../common/interface/EnchantDataTestImpl";

const rendering = (enchant: EnchantData) => {
    renderComponent(<EnchantCard enchant={enchant}/>);
};

/**
 * 値の詳細に関しては他のテストクラスにて担保するため、
 * このクラスでは表示がされる or されないを主眼にテストを実施する
 */
describe('enchantCard', () => {
    let enchantData: EnchantData;

    beforeEach(() => {
        enchantData = new EnchantDataTestImpl();
    });

    const enchantNameId = 'enchantName';
    const enchantNameEnId = 'enchantNameEn';
    const impText = '未実装';
    const invalidText = '貼付不可';
    const positionId = 'position';
    const dispValId = 'dispVal';
    const KeyboardArrowDownIcon = 'KeyboardArrowDownIcon';
    const KeyboardArrowUpIcon = 'KeyboardArrowUpIcon';

    test('何もデータがないエンチャント', () => {
        rendering(enchantData);
        dispTestIdExpectText(enchantNameId, '');
        notExistTestForText(invalidText);
        notExistTestForText(impText);
        dispTestIdExpectText(enchantNameEnId, '');
        dispTestIdExpectText(positionId, '');
        notExistTestForTestId(dispValId);
    });

    test('アコーディオンの挙動確認', async () => {
        rendering(enchantData);

        // 初期状態の確認
        dispTestId(KeyboardArrowDownIcon);
        notExistTestForTestId(KeyboardArrowUpIcon);

        await userEvent.click(screen.getByTestId(KeyboardArrowDownIcon));

        // アコーディオンを開いた後の確認
        notExistTestForTestId(KeyboardArrowDownIcon);
        dispTestId(KeyboardArrowUpIcon);

        await userEvent.click(screen.getByTestId(KeyboardArrowUpIcon));

        // アコーディオンを閉じた時の確認
        dispTestId(KeyboardArrowDownIcon);
        notExistTestForTestId(KeyboardArrowUpIcon);
    });

    test('値ありの確認', () => {
        enchantData.disp_val = '1';
        rendering(enchantData);

        dispTestIdExpectText(dispValId, '1');
    });
});
