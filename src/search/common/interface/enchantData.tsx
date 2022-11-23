/**
 * エンチャント検索結果インターフェース
 */
export interface EnchantData {
    /** エンチャントID */
    enchant_id: string;
    /** エンチャント名 */
    enchant_name: string;
    /** エンチャント別名 */
    enchant_name_2: string;
    /** エンチャント英名 */
    enchant_name_en: string;
    /** 位置(名称) */
    position: string;
    /** 位置ID */
    position_id: string;
    /**ランク  */
    rank: string;
    /** ランクの並び順 */
    rank_seq: number;
    /** 対象名 */
    target_name: string;
    /** 効果区分 */
    effect_kbn: string;
    /** 効果名 */
    effect_name: string;
    /** 入手先 */
    route_name: string;
    /** 実装フラグ */
    imp_flg: string;
    /** 貼付フラグ */
    invalid_target_flg: string;
    /** 表示値 */
    disp_val: string;
}