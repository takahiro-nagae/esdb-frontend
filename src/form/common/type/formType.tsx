/**
 * エンチャントフォームの型定義
 */
export type FormType = {
    /** エンチャント名 */
    enchantName: string,
    /** 効果 */
    effect: string,
    /** 効果の値 */
    effectVal: string,
    /** 効果の範囲 */
    range: string,
    /** 位置 */
    position: string,
    /** ランク */
    rank: string,
    /** 効果範囲 */
    rankRange: string,
    /** 対象 */
    target: string
}