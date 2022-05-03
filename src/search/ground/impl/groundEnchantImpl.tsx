import {GroundEnchant} from "../interface/groundEnchant";

/**
 * 下地エンチャントの実装クラス
 */
export class GroundEnchantImpl implements GroundEnchant {
    enchant_id: string;
    enchant_name: string;
    enchant_name_2: string;
    enchant_name_en: string;
    position_id: string;

    constructor() {
        this.enchant_id = '';
        this.enchant_name = '';
        this.enchant_name_2 = '';
        this.enchant_name_en = '';
        this.position_id = '';
    }
}