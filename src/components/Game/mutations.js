import gql from 'graphql-tag';

export const PLAY_MUTATION = gql`
  mutation play(
    $gameId: ID,
    $tileIds: [ID],
    $score: Int
  ) {
    play(
      gameId: $gameId
      tileIds: $tileIds,
      score: $score
    ) {
      tiles {
        _id
        letter
        value
      }
      lastTurn {
        tiles {
          _id
          letter
          value
        }
        score
      }
    }
  }
  `;
