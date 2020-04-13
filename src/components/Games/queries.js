import gql from 'graphql-tag';

export const GET_GAMES_QUERY = gql`
  query games{
    games {
      _id
      createdAt
      players {
        firstName
        lastName
      }
    }
  }
`;

