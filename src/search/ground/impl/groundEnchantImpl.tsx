import {GroundEnchant} from "../interface/groundEnchant";

/**
 * 下地エンチャントの実装クラス
 */
export class GroundEnchantImpl implements GroundEnchant {
    /** エンチャントID */
    enchant_id: string;
    /** エンチャント名 */
    enchant_name: string;
    /** エンチャント別名 */
    enchant_name_2: string;
    /** エンチャント英名 */
    enchant_name_en: string;
    /** 位置ID */
    position_id: string;

    constructor() {
        this.enchant_id = '';
        this.enchant_name = '';
        this.enchant_name_2 = '';
        this.enchant_name_en = '';
        this.position_id = '';
    }
}