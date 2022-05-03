/**
 * 下地エンチャントインターフェース
 */
export interface GroundEnchant {
    /** エンチャントID */
    enchant_id: string;
    /** エンチャント名 */
    enchant_name: string,
    /** エンチャント別名 */
    enchant_name_2: string,
    /** エンチャント英名 */
    enchant_name_en: string,
    /** 位置ID */
    position_id: string
}