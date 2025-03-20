import { gql } from '@apollo/client';

export const GET_DETAIL = gql`
  query GetDetail($id: String!) {
    detail(id: $id) {
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
      route
      target
    }
  }
`;
