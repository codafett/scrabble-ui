import React from 'react';
import { withRouter } from 'react-router';
import { useState } from 'react';
import { faRandom, faPlay, faArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons';


import { GET_GAME_QUERY } from './queries';
import { useQuery, useMutation } from '@apollo/client';
import LoadingPanel from '../LoadingPanel';
import Tile from '../Tile';
import {
  TileRack,
  PlayedRack,
  GameWrapper,
  TileWrapper,
  TilePlayed,
  PlayedTileWrapper,
  PlayerTileSelected,
  PlayWrapper,
  FormControl,
} from './styles';
import { useEffect } from 'react';

import arrayHelper from '../../helpers/arrayHelper';
import Button from '../Button';
import { PLAY_MUTATION } from './mutations';
import ButtonBar from '../ButtonBar';
import { toast } from 'react-toastify';
import colours from '../../styles/colours';

const Game = ({
  match,
}) => {
  const [gameId] = useState(match.params.id);
  const [myTiles, setMyTiles] = useState([]);
  const [playedTiles, setPlayedTiles] = useState([]);
  const [score, setScore] = useState();
  const [lastTurn, setLastTurn] = useState();

  const { data: gameData, loading } = useQuery(
    GET_GAME_QUERY,
    {
      variables: {
        gameId,
      },
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
      },
      onError: error => console.log(error),
    }
  );

  useEffect(
    () => {
      if (gameData && gameData.game) {
        setMyTiles(gameData.game.myTiles);
        setLastTurn(gameData.game.lastTurn);
      }
    },
    [loading, gameData],
  )

  if (loading) {
    return (
      <LoadingPanel isLoading message="Loading Game..." />
    );
  }

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

  function handleTilesSelected() {
    setPlayedTiles([]);
  }

  function renderLastTurn() {
    return lastTurn ? (
      <React.Fragment>
        <h2>Last Turn You PLayed...</h2>
        <TileRack
          backgroundColour={colours.SECONDARY.LIGHTEST}
          borderColour={colours.SECONDARY.DARKER}
        >{lastTurn.tiles.map(t => (
          <TileWrapper
            onClick={() => handleTileClick(t)}
          >
            <Tile
              letter={t.letter}
              score={t.value}
            />
          </TileWrapper>
        ))}</TileRack>
        <h2>You Scored: {lastTurn.score}</h2>
      </React.Fragment>
    )
    : null;
  }

  return (
    <GameWrapper>
      {renderLastTurn()}
      <h2>These Are Your Tiles...</h2>
      <TileRack
        backgroundColour={colours.QUARTARY.LIGHTER}
        borderColour={colours.QUARTARY.DARKER}
      >{myTiles.map(t => (
        <TileWrapper
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
      <ButtonBar>
        <Button
          onClick={shuffleMyTile}
          icon={faRandom}
        />
      </ButtonBar>
      <h2>Make Your Word...</h2>
      <TileRack
        backgroundColour={colours.PRIMARY.LIGHTEST}
        borderColour={colours.PRIMARY.DARKER}
      >{playedTiles.map(t => (
        <PlayedTileWrapper
          onClick={() => unPlayTile(t)}
        >
          <Tile
            letter={t.letter}
            score={t.value}
          />
        </PlayedTileWrapper>
      ))}</TileRack>
      <ButtonBar>
        <Button
          onClick={handleTilesSelected}
          icon={faTrash}
          disabled={!playedTiles.length}
        />
      </ButtonBar>
      <h2>What's your score...</h2>
      <FormControl>
        <span>Score</span>
        <input
          onChange={e => setScore(e.target.value)}
          type="number"
          value={score}
        />
      </FormControl>
      <h2>Let's Play!</h2>
      <PlayWrapper>
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
    </PlayWrapper>
</GameWrapper>
  );
};

export default withRouter(Game);
