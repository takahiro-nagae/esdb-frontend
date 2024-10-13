import { FormEffectType } from '../_types';
import { fetchInitData as originalFn } from '../fetchInitData';

export const EFFECT_MOCK: FormEffectType[] = [
  {
    effect_id: '1',
    effect: 'test',
  },
];

export const RANK_MOCK = [
  {
    rank: 'F',
  },
];

export const TARGET_MOCK = [
  {
    target_code: '001',
    target_name: 'test',
  },
];

export const fetchInitData: typeof originalFn = () => {
  return Promise.resolve({
    effect: EFFECT_MOCK,
    rank: RANK_MOCK,
    target: TARGET_MOCK,
  });
};
