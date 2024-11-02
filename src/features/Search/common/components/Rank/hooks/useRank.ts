import { useEffect, useState } from 'react';

import { RankData } from '@/repositories/search/_types';
import { fetchRankData } from '@/repositories/search/fetchRankData';

type rankData = {
  rank: string;
  data: Array<{ label: string; values: Array<string> }>;
};

export const useRank = (rank: string) => {
  const [rankData, setRankData] = useState<RankData>();

  useEffect(() => {
    const res = async () => fetchRankData(rank);
    res().then(res => setRankData(res));
  }, []);

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
