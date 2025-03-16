import { Effect, GetFormQuery, Target } from '@/repositories/generated/graphql';

export const EFFECT_MOCK: Effect[] = [
  {
    id: '1',
    name: 'test',
  },
];

export const RANK_MOCK = [
  {
    rank: 'F',
  },
];

export const TARGET_MOCK: Target[] = [
  {
    id: '001',
    name: 'test',
  },
];

export const FORM_RESULT_MOCK: GetFormQuery = {
  form: {
    effects: EFFECT_MOCK,
    ranks: RANK_MOCK,
    targets: TARGET_MOCK,
    positions: [],
  },
};
