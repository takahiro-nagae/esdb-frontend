import { gql } from '@apollo/client';

export const GET_SEARCH_ENCHANT_DATA = gql`
  query GetSearchEnchantData($keyword: String!) {
    search(keyword: $keyword) {
      id
      name
      nameEn
      isImp
      impName
      effect {
        type
        name
      }
      position
      positionName
      rank
      rankSeq
      route
      target
    }
  }
`;
