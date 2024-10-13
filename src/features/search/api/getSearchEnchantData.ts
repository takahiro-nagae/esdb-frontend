import { internalApiClient } from '@/repositories/_client';
import { EnchantData } from '../common/interface/enchantData';

type SearchInfo = {
  enchantList: Array<EnchantData>;
  effectName: string;
};

export const getSearchEnchantData = async (
  path: string,
  requestParams: URLSearchParams,
) => {
  const response: SearchInfo = {
    enchantList: [],
    effectName: '',
  };
  const data = await internalApiClient(path + '?' + requestParams);
  response.enchantList = data.enchant_list;
  if (data.effect_name) {
    response.effectName = data.effect_name.effect;
  }
  return response;
};
