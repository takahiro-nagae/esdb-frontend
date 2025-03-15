import useSWR from 'swr';

import { CACHE_TIME_24H } from '@/const/cache';
import { fetchRankData } from '@/repositories/search/fetchRankData';

type rankData = {
  rank: string;
  data: Array<{ label: string; values: Array<string> }>;
};

export const useRank = (rank: string) => {
  const { data: rankData } = useSWR(['rank', rank], () => fetchRankData(rank), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: CACHE_TIME_24H,
  });

  const rowData: rankData = {
    rank: rankData?.rank ?? '-',
    data: [
      {
        label: '木曜日以外',
        values: [
          rankData?.normal_rate ?? '-',
          rankData?.elite_rate ?? '-',
          rankData?.elf_rate ?? '-',
          rankData?.ancient_rate ?? '-',
          rankData?.rare_holy_rate ?? '-',
        ],
      },
      {
        label: '木曜日',
        values: [
          rankData?.normal_rate_thu ?? '-',
          rankData?.elite_rate_thu ?? '-',
          rankData?.elf_rate_thu ?? '-',
          rankData?.ancient_rate_thu ?? '-',
          rankData?.rare_holy_rate_thu ?? '-',
        ],
      },
    ],
  };

  return { rankData: rowData };
};
