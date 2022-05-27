import {GroundEnchant} from "./groundEnchant";

/**
 * 下地の一覧インターフェース
 */
export interface Ground {
    /** ランク */
    rank: string;
    /** ランクに紐づくエンチャントの一覧 */
    enchant_list: Array<GroundEnchant>;
}