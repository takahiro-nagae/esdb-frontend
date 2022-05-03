import {EnchantData} from "../interface/enchantData";

/**
 * 詳細のエンチャントデータ実装クラス
 * 全ての値を空文字列で実装するために作成(undefined対策)
 */
export class EnchantDataImpl implements EnchantData {
    /** エンチャント名 */
    enchant_name: string;
    /** エンチャント別名 */
    enchant_name_2: string;
    /** エンチャント英名 */
    enchant_name_en: string;
    /** 位置ID */
    position_id: string;
    /** ランク */
    rank: string;

    constructor() {
        this.enchant_name = '';
        this.enchant_name_2 = '';
        this.enchant_name_en = '';
        this.position_id = '';
        this.rank = '';
    }
}