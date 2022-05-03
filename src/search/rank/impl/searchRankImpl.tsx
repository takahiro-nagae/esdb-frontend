import {searchRank} from "../interface/searchRank";

/**
 * 検索画面のランク実装ランク
 */
export class SearchRankImpl implements searchRank {
    ancient_rate: string;
    ancient_rate_thu: string;
    elf_rate: string;
    elf_rate_thu: string;
    elite_rate: string;
    elite_rate_thu: string;
    normal_rate: string;
    normal_rate_thu: string;
    rank: string;
    rare_holy_rate: string;
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