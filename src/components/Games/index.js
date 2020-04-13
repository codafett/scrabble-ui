import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { GameList, GameItem, PlayerList, GameTitle, GameDate } from './styles';
import { GET_GAMES_QUERY } from './queries';
import LoadingPanel from '../LoadingPanel';
import dayjs from 'dayjs';
import ButtonBar from '../ButtonBar';
import Button from '../Button';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const tiles = [];

for(let i = 0; i < 255; i++) {
  tiles.push({
    letter: 'w',
    value: 10,
  });
}

const Games = ({
  history,
}) => {
  const { data: gamesData, loading } = useQuery(
    GET_GAMES_QUERY,
  );

  if (loading) {
    return (
      <LoadingPanel isLoading message="Loading games..." />
    )
  }

  function handleGameClick(gameId) {
    history.push(`game/${gameId}`);
  }

  function handleNewGameClick() {
    history.push(`newgame`);
  }

  return (
    <React.Fragment>
      <GameList>
        <GameTitle>
          Current Games
        </GameTitle>
        <ButtonBar
          location={ButtonBar.locationCodes.bottom}
        >
          <Button
            text="New Game"
            icon={faPlusSquare}
            onClick={handleNewGameClick}
          >
            New Game
          </Button>
        </ButtonBar>
        {gamesData.games.map(
          game => (
            <GameItem
              onClick={() => handleGameClick(game._id)}
            >
              <PlayerList>
              {
                game.players.map(
                  player => (
                    <div>
                      {`${player.firstName} ${player.lastName}`}
                    </div>
                  )
                )
              }
              </PlayerList>
              <GameDate>
                {dayjs(game.createdAt).format('DD/MM/YY HH:mm')}
              </GameDate>
            </GameItem>
          )
        )}
      </GameList>
    </React.Fragment>
  );
};

export default withRouter(Games);
