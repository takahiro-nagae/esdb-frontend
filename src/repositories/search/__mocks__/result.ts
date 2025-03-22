import { Enchant } from '@/features/Search/state/useEnchantStore';

export const ENCHANT_DATA_MOCK: Enchant = {
  id: '1',
  name: 'hoge/fuga',
  nameEn: 'piyo',
  position: '1',
  positionName: '接頭(prefix)',
  rank: 'F',
  rankSeq: 1,
  isInvalidTarget: false,
  effects: [
    {
      type: 'increase',
      name: '何かしら増加',
    },
  ],
  routes: ['どこかで手に入る', '場所は知らん'],
  target: '全て',
  value: 0,
  isImp: true,
};
