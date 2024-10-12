import { internalApiClient } from "../../../../../../repositories/_client";
import { searchRank } from "../data/searchRank";
import { SearchRankImpl } from "../data/searchRankImpl";

export const getRankData = async (rank: string) => {
    let response: searchRank = new SearchRankImpl();
    await internalApiClient('rank/' + rank)
        .then(res => {
            if (res.data) {
                response = res.data;
            }
        }).catch(error => {
            console.log(error);
        });

    return response;
};