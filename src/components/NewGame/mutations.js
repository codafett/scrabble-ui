import gql from 'graphql-tag';

export const START_GAME_MUTATION = gql`
  mutation start($userIds: [ID]) {
    start(userIds: $userIds)
  }
`;
