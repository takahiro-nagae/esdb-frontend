import { EffectInterface } from '../form/common/interface/effectInterface';
import { FormInit } from './responseDefinition/formInit';
import { RankInterFace } from '../form/common/interface/rankInterFace';
import { TargetInterFace } from '../form/common/interface/targetInterFace';
import { EnchantDataImpl } from '../features/search/detail/impl/enchantDataImpl';
import { EnchantDetail } from './responseDefinition/enchantDetail';
import { searchRank } from '../features/search/rank/interface/searchRank';
import { SearchRankImpl } from '../features/search/rank/impl/searchRankImpl';
import { SearchInfo } from './responseDefinition/searchInfo';
import { getApi } from './ApiBase';

export const getInitData = async () => {
    const response: FormInit = {
        effect: new Array<EffectInterface>(),
        rank: new Array<RankInterFace>(),
        target: new Array<TargetInterFace>(),
    };

    await getApi('')
        .then(res => {
            if (res) {
                response.effect = res.data.effect;
                response.rank = res.data.rank;
                response.target = res.data.target;
            }
        }).catch(error => {
            console.log(error);
        });

    return response;
};

export const getEnchantDetailData = async (enchantId: string) => {
    const response: EnchantDetail = {
        enchantData: new EnchantDataImpl(),
        effectKbn: '',
        effectName: '',
        routeName: '',
    };

    await getApi('detail/' + enchantId)
        .then(res => {
            if (res.data) {
                response.enchantData = res.data;
                response.effectKbn = res.data.effect_kbn;
                response.effectName = res.data.effect_name;
                response.routeName = res.data.route_name;
            }
        }).catch(error => {
            console.log(error);
        });

    return response;
};

export const getRankData = async (rank: string) => {
    let response: searchRank = new SearchRankImpl();
    await getApi('rank/' + rank)
        .then(res => {
            if (res.data) {
                response = res.data;
            }
        }).catch(error => {
            console.log(error);
        });

    return response;
};

export async function getSearchEnchantData(path: string, requestParams: string) {
    const response: SearchInfo = {
        enchantList: [],
        effectName: '',
    };
    await getApi(path + requestParams)
        .then(res => {
            if (res.data) {
                response.enchantList = res.data.enchant_list;
                if (res.data.effect_name) {
                    response.effectName = res.data.effect_name.effect;
                }
            }
        }).catch(error => {
            console.log(error);
        });

    return response;
};