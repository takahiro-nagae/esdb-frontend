import renderComponent from "../../tesetLib/render";
import React from "react";
import { EnchantCard } from "./enchantCard";
import { EnchantData } from "../common/interface/enchantData";

const rendering = (enchant: EnchantData, valFlag: boolean) => {
    renderComponent(<EnchantCard enchant={enchant} valFlag={valFlag}/>);
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

    test('何もデータがないエンチャント', () => {
        rendering(enchantData, false);
    });

});
