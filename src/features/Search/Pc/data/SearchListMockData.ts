import { Enchant } from '../../state/useEnchantStore';

export const Dummy1: Enchant = {
  id: '1',
  name: 'りんご',
  nameEn: 'Apple',
  isImp: true,
  isInvalidTarget: false,
  position: '1',
  positionName: '接頭(prefix)',
  rank: 'F',
  rankSeq: 0,
  target: 'すりおろし',
  effects: [
    {
      type: 'test',
      name: '赤い',
    },
  ],
  routes: ['青森'],
  value: 2,
};

export const Dummy1NotDispVal: Enchant = {
  id: '1',
  name: 'りんご',
  nameEn: 'Apple',
  isInvalidTarget: true,
  isImp: false,
  position: '1',
  positionName: '接頭(prefix)',
  rank: 'F',
  rankSeq: 0,
  target: 'すりおろし',
  effects: [
    {
      type: 'test',
      name: '赤い',
    },
  ],
  routes: ['青森'],
  value: 2,
};

export const Dummy2: Enchant = {
  id: '2',
  name: 'れもん',
  nameEn: 'Ramen',
  isInvalidTarget: false,
  isImp: true,
  position: '2',
  positionName: '接尾(suffix)',
  rank: 'F',
  rankSeq: 0,
  target: 'からあげ',
  effects: [
    {
      type: 'test',
      name: '黄色い',
    },
  ],
  routes: ['広島'],
  value: 3,
};

export const Dummy2NotDispVal: Enchant = {
  id: '2',
  name: 'れもん',
  nameEn: 'Ramen',
  isInvalidTarget: false,
  isImp: true,
  position: '2',
  positionName: '接尾(suffix)',
  rank: 'F',
  rankSeq: 0,
  target: 'からあげ',
  effects: [
    {
      type: 'test',
      name: '黄色い',
    },
  ],
  routes: ['広島'],
  value: 3,
};
