import styled from 'styled-components';
import colours from '../../styles/colours';

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 20px auto;
  > div {
    margin-bottom: 10px;
  }
`;

export const TileRack = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ backgroundColour }) => backgroundColour || colours.BASE.NORMAL};
  border: solid 1px ${({ borderColour }) => borderColour || colours.BORDER.NORMAL};
  padding: 6px;
  border-radius: 4px;
  height: 42px;
  > div {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const TileWrapper = styled.div`
  position: relative;
`;

export const TilePlayed = styled.div`
  display: ${({ played }) => played ? 'inline-block' : 'none'};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 4px;
  z-index: 1;
  opacity: 0.8;
`;

export const PlayedRack = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: ${colours.PRIMARY.LIGHTEST};
  border: solid 1px ${colours.PRIMARY.NORMAL};
  padding: 6px;
  border-radius: 4px;
  height: 42px;
  > div {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const PlayedTileWrapper = styled.div`
  position: relative;
`;

export const PlayerTileSelected = styled.div`
  display: ${({ selected }) => selected ? 'inline-block' : 'none'};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 4px;
  z-index: 1;
  opacity: 0.2;
  border: solid 2px ${colours.PRIMARY.DARKER};
`;

export const FormControl = styled.div`
  display: flex;
  align-items: center;
  > span {
    display: inline-block;
    margin-right: 4px;
    color: ${colours.TEXT.NORMAL};
  }
`;

export const PlayWrapper = styled.div`
  justify-self: flex-end;
  margin-left: auto;
  display: flex;
  align-items: center;
  ${FormControl} {
    margin-right: 10px;
  }
`;
