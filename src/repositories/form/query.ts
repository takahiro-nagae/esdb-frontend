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
      positions {
        id
        name
      }
      targets {
        id
        name
      }
    }
  }
`;
