import styled from 'styled-components';
import colours from '../../styles/colours';

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 10px auto;
  > div {
    margin-bottom: 10px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: solid 1px ${colours.BORDER.NORMAL};
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 4px 0;
`;

export const SectionInfo = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  padding: 4px 0;
`;

export const TileRack = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ backgroundColour }) => backgroundColour || colours.BASE.NORMAL};
  border: solid 1px ${({ borderColour }) => borderColour || colours.BORDER.NORMAL};
  padding: 6px;
  border-radius: 4px;
  height: 32px;
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

export const PlayedTileWrapper = styled.div`
  position: relative;
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

export const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${FormControl} {
    margin-right: 10px;
  }
`;
