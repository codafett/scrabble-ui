import styled from 'styled-components';
import colours from '../../styles/colours';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  margin: 20px auto;
  > h3 {
    color: ${colours.PRIMARY.NORMAL};
    margin-bottom: 10px;
  }
`;

export const PageTitle = styled.div`
  font-size: 2rem;
  color: ${colours.PRIMARY.NORMAL};
  margin-bottom: 10px;
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > span {
    display: inline-block;
    margin-left: 6px;
  }
`;
