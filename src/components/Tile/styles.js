import styled from 'styled-components';
import colours from '../../styles/colours';

export const TileWrapper = styled.div`
  display: flex;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  background-color: ${colours.TILE.NORMAL};
  color: ${colours.TEXT.NORMAL};
  border: solid 1px ${colours.TEXT.LIGHTEST};
  border-radius: 4px;
  justify-content: center;
  cursor: pointer;
`;

export const TileLetter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fontSize }) => fontSize};
  text-transform: uppercase;
`;

export const TileValue = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
  align-self: flex-end;
`;
