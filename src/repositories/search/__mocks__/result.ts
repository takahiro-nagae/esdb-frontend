import { GetEnchantDetailsQuery } from '@/repositories/generated/graphql';

export const ENCHANT_DATA_MOCK: GetEnchantDetailsQuery['details']['enchants'][number] =
  {
    id: '1',
    name: 'hoge/fuga',
    nameEn: 'piyo',
    position: '1',
    positionName: '接頭(prefix)',
    rank: 'F',
    rankSeq: 1,
    isInvalidTarget: false,
    invalidTargetName: '全て',
    effect: [
      {
        type: 'increase',
        name: '何かしら増加',
      },
    ],
    route: ['どこかで手に入る', '場所は知らん'],
    target: '全て',
    value: 0,
  };
