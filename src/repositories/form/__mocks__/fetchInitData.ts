import { FormEffectType } from '../_types';
import { fetchInitData as originalFn } from '../fetchInitData';

export const EFFECT_MOCK: FormEffectType[] = [
  {
    effect_id: '1',
    effect: 'test',
  },
];

export const fetchInitData: typeof originalFn = () => {
  return Promise.resolve({
    effect: EFFECT_MOCK,
    rank: [],
    target: [],
  });
};
