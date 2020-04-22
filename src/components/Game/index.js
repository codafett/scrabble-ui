import React from 'react';
import { withRouter } from 'react-router';
import { useState } from 'react';
import { faRandom, faPlay, faTrash } from '@fortawesome/free-solid-svg-icons';


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
} from './styles';
import { useEffect } from 'react';

import arrayHelper from '../../helpers/arrayHelper';
import Button from '../Button';
import { PLAY_MUTATION } from './mutations';
import { toast } from 'react-toastify';
import colours from '../../styles/colours';
import messageHelper from '../../helpers/messageHelper';

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
      onError: error => messageHelper.renderGraphQlError(error),
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
      <Section>
        <SectionTitle>
          Last Turn You Played...
        </SectionTitle>
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
        <SectionInfo>
          You Scored: {lastTurn.score}
        </SectionInfo>
      </Section>
    )
    : null;
  }

  return (
    <GameWrapper>
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

export default withRouter(Game);
