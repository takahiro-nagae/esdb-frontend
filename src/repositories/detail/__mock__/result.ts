import { Enchant } from '@/features/Search/state/useEnchantStore';

export const FlamingoData: Enchant = {
  id: '00000001',
  name: 'フラミンゴスレイヤー',
  nameEn: "Flamingo Slayer's",
  position: '1',
  rank: 'F',
  routes: [
    '■フラミンゴスレイヤー ソルジャー ブレスレット<br>　- レッドスケルトン(鎧)',
    '■ES<br>　- コッカースパニエルミニのアイテム収集',
  ],
  target: '0',
  effects: [{ name: '最大負傷率2~4%減少', type: 'decrease' }],
  isImp: true,
  positionName: '接頭(prefix)',
  isInvalidTarget: false,
  rankSeq: 1,
  value: null,
};

export const BeginnerData: Enchant = {
  id: '00000005',
  name: '初歩の/ビギナー',
  nameEn: "Beginner's",
  position: '1',
  target: '0',
  rank: 'F',
  effects: [
    { name: 'レベルが5以下の場合、Str 1減少', type: 'decrease' },
    { name: 'レベルが5以下の場合、最大生命力3増加', type: 'increase' },
  ],
  routes: [
    '■ビギナー ショートボウ<br>　- お化け白アリ',
    '■初歩の 木の棒<br>　- コウモリ/巨大コウモリ',
    '■ES<br>　- 巨大ボス：イフリート',
    '■ビギナー モンゴスマートキャップ/ストライプキャップ<br>　- 地下トンネル 宝箱',
    '■ビギナー マンドリン<br>　- ブリアナが販売 (23,000G)',
  ],
  isImp: true,
  positionName: '接頭(prefix)',
  isInvalidTarget: false,
  rankSeq: 1,
  value: null,
};
