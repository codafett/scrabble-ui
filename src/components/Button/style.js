import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  width: ${({ width }) => width || 'auto'};
  font-size: 0.9rem;
  font-weight: 600;
  > span {
    display: inline-block;
    margin-left: 6px;
  }
  > svg {
    margin-right: 6px;
  }
  cursor: pointer;
  background-color: ${({ buttonStyle }) => buttonStyle.backgroundColour || 'inherit'};
  border: solid ${({ noBorder }) => noBorder ? '0' : '1px'} ${({ buttonStyle }) => buttonStyle.borderColour || 'inherit'};
  border-radius: 4px;
  color: ${({ buttonStyle }) => buttonStyle.colour};
  &:hover {
    background-color: ${({ buttonStyle }) => buttonStyle.hover.backgroundColour || 'inherit'};
    color: ${({ buttonStyle }) => buttonStyle.hover.colour || 'inherit'};
    border-color: ${({ buttonStyle }) => buttonStyle.hover.borderColour || 'inherit'};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ buttonStyle }) => buttonStyle.disabled.backgroundColour || 'inherit'};
    border: solid 1px ${({ buttonStyle }) => buttonStyle.disabled.borderColour || 'inherit'};
    color: ${({ buttonStyle }) => buttonStyle.disabled.colour || 'inherit'};
    &:hover {
      background-color: ${({ buttonStyle }) => buttonStyle.disabled.backgroundColour || 'inherit'};
      border: solid 1px ${({ buttonStyle }) => buttonStyle.disabled.borderColour || 'inherit'};
      color: ${({ buttonStyle }) => buttonStyle.disabled.colour || 'inherit'};
    }
  }
`;

export const ButtonIcon = styled.div`
  margin-right: ${({ marginRight }) => marginRight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
