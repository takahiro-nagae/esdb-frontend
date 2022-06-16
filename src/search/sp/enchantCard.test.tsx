import renderComponent from "../../tesetLib/render";
import React from "react";
import { EnchantCard } from "./enchantCard";
import { EnchantData } from "../common/interface/enchantData";
import {
    dispTestId,
    dispTestIdExpectText,
    notExistTestForTestId,
    notExistTestForText
} from "../../tesetLib/commonTesting";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const rendering = (enchant: EnchantData) => {
    renderComponent(<EnchantCard enchant={enchant}/>);
}

/**
 * 値の詳細に関しては他のテストクラスにて担保するため、
 * このクラスでは表示がされる or されないを主眼にテストを実施する
 */
describe('enchantCard', () => {
    let enchantData: EnchantData = {
        enchant_id: '',
        enchant_name: '',
        enchant_name_2: '',
        enchant_name_en: '',
        position: '',
        position_id: '',
        rank: '',
        rank_seq: 0,
        target_name: '',
        effect_kbn: '',
        effect_name: '',
        route_name: '',
        imp_flg: '',
        invalid_target_flg: '',
        rank_ignore_flg: '',
        disp_val: ''
    }

    afterEach(() => {
        enchantData.enchant_id = '';
        enchantData.enchant_name = '';
        enchantData.enchant_name_2 = '';
        enchantData.enchant_name_en = '';
        enchantData.position = '';
        enchantData.position_id = '';
        enchantData.rank = '';
        enchantData.rank_seq = 0;
        enchantData.target_name = '';
        enchantData.effect_kbn = '';
        enchantData.effect_name = '';
        enchantData.route_name = '';
        enchantData.imp_flg = '';
        enchantData.invalid_target_flg = '';
        enchantData.rank_ignore_flg = '';
        enchantData.disp_val = '';
    });

    const enchantNameId = 'enchantName';
    const enchantNameEnId = 'enchantNameEn';
    const impText = '未実装';
    const invalidText = '貼付不可';
    const positionId = 'position';
    const groundId = 'ground';
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
        notExistTestForTestId(groundId);
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
