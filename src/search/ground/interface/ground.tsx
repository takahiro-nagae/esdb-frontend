import {GroundEnchant} from "./groundEnchant";

/**
 * 下地の一覧インターフェース
 */
export interface Ground {
    rank: string;
    enchant_list: Array<GroundEnchant>;
}