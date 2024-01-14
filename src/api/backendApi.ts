import { FormInit } from './responseDefinition/formInit';
import { RankInterFace } from '../features/form/common/interface/rankInterFace';
import { TargetInterFace } from '../features/form/common/interface/targetInterFace';
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