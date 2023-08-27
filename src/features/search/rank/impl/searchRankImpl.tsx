import {searchRank} from "../interface/searchRank";

/**
 * 検索画面のランク実装ランク
 */
export class SearchRankImpl implements searchRank {
    /** ランク */
    rank: string;
    /** 通常：木曜以外 */
    normal_rate: string;
    /** エリート：木曜以外 */
    elite_rate: string;
    /** エルフ：木曜以外 */
    elf_rate: string;
    /** 古代：木曜以外 */
    ancient_rate: string;
    /** 稀代：木曜以外 */
    rare_holy_rate: string;
    /** 通常：木曜 */
    normal_rate_thu: string;
    /** エリート：木曜 */
    elite_rate_thu: string;
    /** エルフ：木曜 */
    elf_rate_thu: string;
    /** 古代：木曜 */
    ancient_rate_thu: string;
    /** 稀代：木曜 */
    rare_holy_rate_thu: string;

    constructor() {
        this.rank = '-';
        this.normal_rate = '-';
        this.elite_rate = '-';
        this.elf_rate = '-';
        this.ancient_rate = '-';
        this.rare_holy_rate = '-';
        this.normal_rate_thu = '-';
        this.elite_rate_thu = '-';
        this.elf_rate_thu = '-';
        this.ancient_rate_thu = '-';
        this.rare_holy_rate_thu = '-';
    }

}