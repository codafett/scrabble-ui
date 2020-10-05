import styled from 'styled-components';

export const CheckboxIconWrapper = styled.div`
  > i, svg {
    font-size: ${({ fontSize }) => fontSize};
  }
  cursor: pointer;
  display: ${({ visible }) => visible ? 'inline-block' : 'none'};
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > span {
    cursor: pointer;
    display: inline-block;
    padding: 2px 0 2px 6px;
  }
  ${CheckboxIconWrapper} {
    color: ${({ checked, disabled, style }) => {
    if (checked) {
      return disabled
        ? style.disabled.checkedColour
        : style.checkedColour;
    }
    return disabled
      ? style.disabled.unCheckedColour
      : style.unCheckedColour;
  }};
  }
`;

export const CheckboxText = styled.div`
  margin-left: 6px;
`;

export const CheckboxListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${({ pt }) => pt};
  padding-right: ${({ pr }) => pr};
  padding-bottom: ${({ pb }) => pb};
  padding-left: ${({ pl }) => pl};
  ${CheckboxWrapper} {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
