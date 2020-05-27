import React from 'react';
import { withRouter } from 'react-router';
import { useState } from 'react';
import { faRandom, faPlay, faTrash, faSadCry } from '@fortawesome/free-solid-svg-icons';


import { GET_GAME_QUERY } from './queries';
import { useQuery, useMutation } from '@apollo/client';
import LoadingPanel from '../LoadingPanel';
import Tile from '../Tile';
import {
  TileRack,
  GameWrapper,
  TileWrapper,
  TilePlayed,
  PlayedTileWrapper,
  SectionContent,
  FormControl,
  Section,
  SectionTitle,
  SectionInfo,
  LeaderBoard,
  Player,
  PlayerIndicator,
} from './styles';

import arrayHelper from '../../helpers/arrayHelper';
import Button from '../Button';
import { PLAY_MUTATION } from './mutations';
import { toast } from 'react-toastify';
import colours from '../../styles/colours';
import messageHelper from '../../helpers/messageHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Games = ({
  match,
}) => {
  const [gameId] = useState(match.params.id);
  const [myTiles, setMyTiles] = useState([]);
  const [playedTiles, setPlayedTiles] = useState([]);
  const [score, setScore] = useState();
  const [lastTurn, setLastTurn] = useState();
  const [loaded, setLoaded] = useState();

  const { data: gameData, loading, refetch, startPolling } = useQuery(
    GET_GAME_QUERY,
    {
      variables: {
        gameId,
      },
      fetchPolicy: 'no-cache',
      onCompleted: (gameData) => {
        console.log(gameData.game.currentPlayer);
        setMyTiles(gameData.game.myTiles);
        setLastTurn(gameData.game.lastTurn);
        setLoaded(true);
      }
    },
  );

  const [play] = useMutation(
    PLAY_MUTATION,
    {
      onCompleted: (result) => {
        toast.success('Play Saved!')
        setMyTiles(
          result.play.tiles,
        );
        setLastTurn(result.play.lastTurn);
        setPlayedTiles([]);
        setScore(0);
        refetch();
      },
      onError: error => messageHelper.renderGraphQlError(error),
    }
  );

  if (loading || !loaded) {
    return (
      <LoadingPanel isLoading message="Loading Game..." />
    );
  }

  startPolling(1000);

  function handleTileClick(tile) {
    const playedTile = playedTiles.find(
      pt => pt._id === tile._id,
    );
    if (!playedTile) {
      setPlayedTiles([
        ...playedTiles,
        tile,
      ]);
    }
  }

  function shuffleMyTile() {
    setMyTiles(
      arrayHelper.shuffle(myTiles),
    );
  }

  function unPlayTile(tile) {
    const index = playedTiles.indexOf(tile);
    if (index >= 0) {
      playedTiles.splice(index, 1);
      setPlayedTiles([
        ...playedTiles,
      ]);
    }
  }

  function handlePlay() {
    play({
      variables: {
        gameId,
        tileIds: playedTiles.map(t => t._id),
        score: parseInt(score),
      },
    })
  }

  function handleCantPlay() {
    play({
      variables: {
        gameId,
        tileIds: [],
        score: 0,
      },
    })
  }

  function handleTilesSelected() {
    setPlayedTiles([]);
  }

  function renderLastTurn() {
    return lastTurn ? (
      <Section>
        <SectionTitle>
          Last Turn You Played...
        </SectionTitle>
        <TileRack
          backgroundColour={colours.SECONDARY.LIGHTEST}
          borderColour={colours.SECONDARY.DARKER}
        >{lastTurn.tiles.map(t => (
          <TileWrapper
            key={t._id}
          >
            <Tile
              letter={t.letter}
              score={t.value}
            />
          </TileWrapper>
        ))}</TileRack>
        <SectionInfo>
          You Scored: {lastTurn.score}
        </SectionInfo>
      </Section>
    )
    : null;
  }

  function renderPlayerIndicatorIcon(
    currentPlayer
  ) {
    return currentPlayer
      ? (
        <FontAwesomeIcon
          icon={faPlay}
        />
      )
      : null;
  }

  function renderLeaderBoard() {
    return gameData.game.players.map(
      (player) => {
        const currentPlayer = player._id === gameData.game.currentPlayer._id;
        return (
          <Player
            key={player._id}
            currentPlayer={!!currentPlayer}
          >
            <div>
              <PlayerIndicator
                currentPlayer={!!currentPlayer}
              >
                {renderPlayerIndicatorIcon(currentPlayer)}
              </PlayerIndicator>
              <div>
                {`${player.firstName} ${player.lastName}`}
              </div>
            </div>
            <div>
              {player.score}
            </div>
          </Player>
        );
      }
    )
  }

  return (
    <GameWrapper>
      <Section>
        <SectionTitle>
          Players:
        </SectionTitle>
        <LeaderBoard>
          {renderLeaderBoard()}
        </LeaderBoard>
      </Section>
      {renderLastTurn()}
      <Section>
        <SectionTitle>
          These Are Your Tiles...
          <Button
            onClick={shuffleMyTile}
            icon={faRandom}
          />
        </SectionTitle>
        <TileRack
          backgroundColour={colours.QUARTARY.LIGHTER}
          borderColour={colours.QUARTARY.DARKER}
        >{myTiles.map(t => (
          <TileWrapper
            key={t._id}
            onClick={() => handleTileClick(t)}
          >
            <TilePlayed
              played={playedTiles.find(pt => pt._id === t._id)}
            />
            <Tile
              letter={t.letter}
              score={t.value}
            />
          </TileWrapper>
        ))}</TileRack>
      </Section>
      <Section>
        <SectionTitle>
          Make Your Word...
          <Button
            onClick={handleTilesSelected}
            icon={faTrash}
            disabled={!playedTiles.length}
          />
        </SectionTitle>
        <TileRack
          backgroundColour={colours.PRIMARY.LIGHTEST}
          borderColour={colours.PRIMARY.DARKER}
        >{playedTiles.map(t => (
          <PlayedTileWrapper
            key={t._id}
            onClick={() => unPlayTile(t)}
          >
            <Tile
              letter={t.letter}
              score={t.value}
            />
          </PlayedTileWrapper>
        ))}</TileRack>
      </Section>
      <Section>
        <SectionContent>
          <SectionTitle>
            What's your score...
          </SectionTitle>
          <FormControl>
            <input
              onChange={e => setScore(e.target.value)}
              type="number"
              value={score}
            />
          </FormControl>
        </SectionContent>
      </Section>
      <Section>
        <SectionContent>
          <SectionTitle>
            Let's Play!
          </SectionTitle>
          <Button
            onClick={handleCantPlay}
            icon={faSadCry}
            text="Can't Play"
            />
          <Button
            onClick={handlePlay}
            icon={faPlay}
            text="Play"
            disabled={
              !playedTiles.length
              || (
                !score
                && score !== 0
              )}
            />
      </SectionContent>
      </Section>
</GameWrapper>
  );
};

export default withRouter(Games);
