import { EnchantData } from '@/repositories/search/_types';

export const FlamingoData: EnchantData = {
  enchant_id: '00000001',
  enchant_name: 'フラミンゴスレイヤー',
  enchant_name_2: '',
  enchant_name_en: "Flamingo Slayer's",
  position_id: '1',
  rank_seq: 1,
  rank: 'F',
  target_name: '全て',
  target_code: '0',
  effect_kbn: 'decrease',
  effect_name: '最大負傷率2~4%減少',
  route_name:
    '■フラミンゴスレイヤー ソルジャー ブレスレット<br>　- レッドスケルトン(鎧)@■ES<br>　- コッカースパニエルミニのアイテム収',
  imp_flg: '1',
};

export const BeginnerData: EnchantData = {
  enchant_id: '00000005',
  enchant_name: '初歩の',
  enchant_name_2: 'ビギナー',
  enchant_name_en: "Beginner's",
  position_id: '1',
  target_code: '0',
  rank_seq: 1,
  rank: 'F',
  target_name: '全て',
  effect_kbn: 'decrease@increase',
  effect_name:
    'レベルが5以下の場合、Str 1減少@レベルが5以下の場合、最大生命力3増加',
  route_name:
    '■ビギナー ショートボウ<br>　- お化け白アリ@■初歩の 木の棒<br>　- コウモリ/巨大コウモリ@■ES<br>　- 巨大ボス：イフリート@■ビギナー モンゴスマートキャップ/ストライプキャップ<br>　- 地下トンネル 宝箱@■ビギナー マンドリン<br>　- ブリアナが販売 (23,000G)',
  imp_flg: '1',
};
