import { FormInit } from './responseDefinition/formInit';
import { RankInterFace } from '../features/form/common/interface/rankInterFace';
import { TargetInterFace } from '../features/form/common/interface/targetInterFace';
import { SearchInfo } from './responseDefinition/searchInfo';
import { getApi } from './ApiBase';
import { EffectInterface } from '../features/form/common/interface/effectInterface';

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
    const response = await getApi('detail/' + enchantId)
        .then(res => {
            if (res.data) {
                return res.data;
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