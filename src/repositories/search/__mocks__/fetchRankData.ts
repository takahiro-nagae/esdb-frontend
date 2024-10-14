import { fetchRankData as originalFn } from '../fetchRankData';

const RANK_MOCK = {
  rank: 'F',
  normal_rate: '1',
  elite_rate: '2',
  elf_rate: '3',
  ancient_rate: '4',
  rare_holy_rate: '5',
  normal_rate_thu: '6',
  elite_rate_thu: '7',
  elf_rate_thu: '8',
  ancient_rate_thu: '9',
  rare_holy_rate_thu: '10',
};

export const fetchRankData: typeof originalFn = async () => {
  return Promise.resolve(RANK_MOCK);
};
