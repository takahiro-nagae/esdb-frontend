import { EnchantData } from "./enchantData";

export class EnchantDataTestImpl implements EnchantData {
    disp_val: string;
    effect_kbn: string;
    effect_name: string;
    enchant_id: string;
    enchant_name: string;
    enchant_name_2: string;
    enchant_name_en: string;
    imp_flg: string;
    invalid_target_flg: string;
    position: string;
    position_id: string;
    rank: string;
    rank_seq: number;
    route_name: string;
    target_name: string;

    constructor() {
        this.enchant_id = '';
        this.enchant_name = '';
        this.enchant_name_2 = '';
        this.enchant_name_en = '';
        this.position = '';
        this.position_id = '';
        this.rank = '';
        this.rank_seq = 0;
        this.target_name = '';
        this.effect_kbn = '';
        this.effect_name = '';
        this.route_name = '';
        this.imp_flg = '';
        this.invalid_target_flg = '';
        this.disp_val = '';
    }
}