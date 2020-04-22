import styled from 'styled-components';
import colours from '../../styles/colours';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

export const LoginTitle = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 4px 4px 10px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  border-bottom: solid 1px ${colours.BORDER.NORMAL};
`;

export const FormControl = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
`;

export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  ${FormControl} {
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
    span {
      width: ${({ titleWidth }) => titleWidth};
    }
    input {
      flex-grow: 1;
    }
  }
`;

export const FormButtonBar = styled.div`
  display: flex;
  margin-top: 6px;
  justify-content: flex-end;
  align-items: center;
  padding: 6px;
  border-top: solid 1px ${colours.BORDER.NORMAL};
  > button {
    margin-right: 6px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
