import { useQuery } from '@apollo/client';
import { useState } from 'react';

import { GetRankQuery } from '@/repositories/generated/graphql';
import { GET_RANK } from '@/repositories/rank/query';

type rankData = {
  rank: string;
  data: Array<{ label: string; values: Array<string> }>;
};

export const useRank = (rank: string) => {
  const [rankData, setRankData] = useState<rankData | null>(null);
  const { loading } = useQuery(GET_RANK, {
    variables: { rank },
    onCompleted: (data: GetRankQuery) => {
      if (!data.rank) {
        setRankData(null);
        return;
      }

      const rowData: rankData = {
        rank: data.rank.rank,
        data: [
          {
            label: '木曜日以外',
            values: [
              data.rank.normalRate,
              data.rank.eliteRate,
              data.rank.elfRate,
              data.rank.ancientRate,
              data.rank.rareHolyRate,
            ],
          },
          {
            label: '木曜日',
            values: [
              data.rank.normalRateThu,
              data.rank.eliteRateThu,
              data.rank.elfRateThu,
              data.rank.ancientRateThu,
              data.rank.rareHolyRateThu,
            ],
          },
        ],
      };
      setRankData(rowData);
    },
  });

  return { rankData, loading };
};
