import gql from 'graphql-tag';

export const GET_GAME_QUERY = gql`
  query game ($gameId: ID){
    game (gameId: $gameId){
      players {
        _id
        firstName
        lastName
        playOrder
        score
      }
      myTiles {
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
      currentPlayer {
        _id
        firstName
        lastName
        score
      }
    }
  }
`;

