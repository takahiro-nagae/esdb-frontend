import { GetEnchantDetailQuery } from '@/repositories/generated/graphql';

export const FlamingoData: GetEnchantDetailQuery['detail'] = {
  id: '00000001',
  name: 'フラミンゴスレイヤー',
  nameEn: "Flamingo Slayer's",
  position: '1',
  rank: 'F',
  route: [
    '■フラミンゴスレイヤー ソルジャー ブレスレット<br>　- レッドスケルトン(鎧)',
    '■ES<br>　- コッカースパニエルミニのアイテム収集',
  ],
  target: '0',
  effect: [{ name: '最大負傷率2~4%減少', type: 'decrease' }],
  isImp: true,
  impName: '接頭(prefix)',
  positionName: '',
};

export const BeginnerData: GetEnchantDetailQuery['detail'] = {
  id: '00000005',
  name: '初歩の/ビギナー',
  nameEn: "Beginner's",
  position: '1',
  target: '0',
  rank: 'F',
  effect: [
    { name: 'レベルが5以下の場合、Str 1減少', type: 'decrease' },
    { name: 'レベルが5以下の場合、最大生命力3増加', type: 'increase' },
  ],
  route: [
    '■ビギナー ショートボウ<br>　- お化け白アリ',
    '■初歩の 木の棒<br>　- コウモリ/巨大コウモリ',
    '■ES<br>　- 巨大ボス：イフリート',
    '■ビギナー モンゴスマートキャップ/ストライプキャップ<br>　- 地下トンネル 宝箱',
    '■ビギナー マンドリン<br>　- ブリアナが販売 (23,000G)',
  ],
  isImp: true,
  impName: '',
  positionName: '接頭(prefix)',
};
