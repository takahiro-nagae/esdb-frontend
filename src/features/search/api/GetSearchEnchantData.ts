import { getApi } from "../../../api/ApiBase";
import { EnchantData } from "../common/interface/enchantData";

type SearchInfo = {
    enchantList: Array<EnchantData>;
    effectName: string;
}

export const getSearchEnchantData = async(path: string, requestParams: URLSearchParams) => {
    const response: SearchInfo = {
        enchantList: [],
        effectName: '',
    };
    await getApi(path + '?' + requestParams)
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