import { gql } from '@apollo/client';

export const GET_FORM = gql`
  query GetForm {
    form {
      effects {
        id
        name
      }
      ranks {
        rank
      }
      targets {
        id
        name
      }
    }
  }
`;
