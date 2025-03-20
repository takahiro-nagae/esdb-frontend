import { gql } from '@apollo/client';

export const GET_RANK = gql`
  query GetRank($rank: String!) {
    rank(rank: $rank) {
      rank
      normalRate
      eliteRate
      elfRate
      ancientRate
      rareHolyRate
      normalRateThu
      eliteRateThu
      elfRateThu
      ancientRateThu
      rareHolyRateThu
    }
  }
`;
