import axios from "axios";
import { EffectInterface } from "../form/common/interface/effectInterface";
import { FormInit } from "./responseDefinition/formInit";
import { RankInterFace } from "../form/common/interface/rankInterFace";
import { TargetInterFace } from "../form/common/interface/targetInterFace";
import { EnchantDataImpl } from "../search/detail/impl/enchantDataImpl";
import { EnchantDetail } from "./responseDefinition/enchantDetail";
import { searchRank } from "../search/rank/interface/searchRank";
import { SearchRankImpl } from "../search/rank/impl/searchRankImpl";
import { SearchInfo } from "./responseDefinition/searchInfo";

const END_POINT = 'https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Prod/';

export async function getInitData() {
    let response: FormInit = {
        effect: new Array<EffectInterface>(),
        rank: new Array<RankInterFace>(),
        target: new Array<TargetInterFace>(),
    };

    await axios.get(END_POINT).then((res) => {
        if ( res ) {
            response.effect = res.data.effect;
            response.rank = res.data.rank;
            response.target = res.data.target;
        }
    }).catch((error) => {
        console.log(error);
    });

    return response;
}

export async function getEnchantDetailData(enchantId: string) {
    let response: EnchantDetail = {
        enchantData: new EnchantDataImpl(),
        effectKbn: '',
        effectName: '',
        routeName: '',
    };

    await axios.get(END_POINT + 'detail/' + enchantId)
        .then((res) => {
            if ( res.data ) {
                response.enchantData = res.data;
                response.effectKbn = res.data.effect_kbn;
                response.effectName = res.data.effect_name;
                response.routeName = res.data.route_name;
            }
        }).catch((error) => {
            console.log(error)
        });

    return response;
}

export async function getRankData(rank: string) {
    let response: searchRank = new SearchRankImpl();
    await axios.get(END_POINT + 'rank/' + rank)
        .then((res) => {
            if ( res.data ) {
                response = res.data;
            }
        }).catch((error) => {
            console.log(error)
        });

    return response;
}

export async function getSearchEnchantData(path: string, requestParams: string) {
    let response: SearchInfo = {
        enchantList: [],
        effectName: '',
    };
    await axios.get(END_POINT + path + requestParams)
        .then((res) => {
            if ( res.data ) {
                response.enchantList = res.data.enchant_list;
                if ( res.data.effect_name ) {
                    response.effectName = res.data.effect_name.effect;
                }
            }
        }).catch((error) => {
            console.log(error)
        });
    return response;
}
