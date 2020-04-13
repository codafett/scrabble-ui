import styled from 'styled-components';
import colours from '../../styles/colours';

export const Header = styled.div`
  font-size: 30px;
  font-family: 'MainFont';
`;

export const GameList = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  margin: 20px auto;
`;

export const GameTitle = styled.div`
  font-size: 2rem;
  color: ${colours.PRIMARY.NORMAL};
  margin-bottom: 20px;
`;

export const GameItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 4px;
  border-top: solid 1px ${colours.BORDER.NORMAL};
  cursor: pointer;
  &:last-child {
    padding-bottom: 10px;
    border-bottom: solid 1px ${colours.BORDER.NORMAL};
  }
  &:hover {
    background-color: ${colours.BORDER.NORMAL};
  }
`;

export const GameDate = styled.div`
  font-size: 1rem;
`;

export const PlayerList = styled.div`
  display: flex;
  flex-direction: column;
`;
