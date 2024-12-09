import { EnchantData } from '../_types';

import { fetchSearchEnchantData as originalFn } from '@/repositories/search/fetchSearchEnchantData';

export const ENCHANT_DATA_MOCK: EnchantData = {
  enchant_id: '1',
  enchant_name: 'hoge',
  enchant_name_2: 'fuga',
  enchant_name_en: 'piyo',
  position_id: '1',
  rank: 'F',
  rank_seq: 1,
  target_code: '000',
  target_name: '全て',
  effect_kbn: 'increase',
  effect_name: '何かしら増加',
  route_name: 'どこかで手に入る@場所は知らん',
  imp_flg: '1',
};

export const fetchSearchEnchantData: typeof originalFn = async () => {
  return Promise.resolve({
    enchant_list: [ENCHANT_DATA_MOCK],
    effect_name: null,
  });
};
