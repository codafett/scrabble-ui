import React from 'react';
import PropTypes from 'prop-types';

import {
  TileWrapper, TileLetter, TileValue
} from './styles';

const Tile = ({
  letter,
  score,
  width,
  fontSize,
}) => (
  <TileWrapper
    width={width}
  >
    <TileLetter
      fontSize={fontSize}
    >
      {letter}
    </TileLetter>
    <TileValue>
      {score}
    </TileValue>
  </TileWrapper>
)

Tile.propTypes = {
  letter: PropTypes.string,
  score: PropTypes.number,
  width: PropTypes.string,
  fontSize: PropTypes.string,
};

Tile.defaultProps = {
  width: '40px',
  fontSize: '3rem',
};

export default Tile;
