import { GetEnchantDetailsQuery } from '@/repositories/generated/graphql';

export const Dummy1: GetEnchantDetailsQuery['details']['enchants'][number] = {
  id: '1',
  name: 'りんご',
  nameEn: 'Apple',
  isInvalidTarget: false,
  invalidTargetName: '',
  position: '1',
  positionName: '接頭(prefix)',
  rank: 'F',
  rankSeq: 0,
  target: 'すりおろし',
  effect: [
    {
      type: 'test',
      name: '赤い',
    },
  ],
  route: ['青森'],
  value: 2,
};

export const Dummy1NotDispVal: GetEnchantDetailsQuery['details']['enchants'][number] =
  {
    id: '1',
    name: 'りんご',
    nameEn: 'Apple',
    isInvalidTarget: false,
    invalidTargetName: '',
    position: '1',
    positionName: '接頭(prefix)',
    rank: 'F',
    rankSeq: 0,
    target: 'すりおろし',
    effect: [
      {
        type: 'test',
        name: '赤い',
      },
    ],
    route: ['青森'],
    value: 2,
  };

export const Dummy2: GetEnchantDetailsQuery['details']['enchants'][number] = {
  id: '2',
  name: 'れもん',
  nameEn: 'Ramen',
  isInvalidTarget: false,
  invalidTargetName: '',
  position: '2',
  positionName: '接尾(suffix)',
  rank: 'F',
  rankSeq: 0,
  target: 'からあげ',
  effect: [
    {
      type: 'test',
      name: '黄色い',
    },
  ],
  route: ['広島'],
  value: 3,
};

export const Dummy2NotDispVal: GetEnchantDetailsQuery['details']['enchants'][number] =
  {
    id: '2',
    name: 'れもん',
    nameEn: 'Ramen',
    isInvalidTarget: false,
    invalidTargetName: '',
    position: '2',
    positionName: '接尾(suffix)',
    rank: 'F',
    rankSeq: 0,
    target: 'からあげ',
    effect: [
      {
        type: 'test',
        name: '黄色い',
      },
    ],
    route: ['広島'],
    value: 3,
  };
