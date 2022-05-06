/**
 * エンチャント検索結果インターフェース
 */
export interface EnchantData {
    /** エンチャント名 */
    enchant_name: string;
    /** 位置(名称) */
    position: string;
    /** 位置ID */
    position_id: string;
    /**ランク  */
    rank: string;
    /** 対象名 */
    target_name: string;
    /** 効果名 */
    effect_name: string;
    /** 入手先 */
    route_name: string;
}