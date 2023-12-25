import { searchRank } from "./searchRank";

export class SearchRankMock implements searchRank {
    rank: string;
    normal_rate: string;
    elite_rate: string;
    elf_rate: string;
    ancient_rate: string;
    rare_holy_rate: string;
    normal_rate_thu: string;
    elite_rate_thu: string;
    elf_rate_thu: string;
    ancient_rate_thu: string;
    rare_holy_rate_thu: string;

    constructor() {
        this.rank = '3';
        this.normal_rate = '16';
        this.elite_rate = '17';
        this.elf_rate = '17';
        this.ancient_rate = '22';
        this.rare_holy_rate = '23';
        this.normal_rate_thu = '17';
        this.elite_rate_thu = '18';
        this.elf_rate_thu = '18';
        this.ancient_rate_thu = '23';
        this.rare_holy_rate_thu = '24';
    }
}