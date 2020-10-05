import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colours from '../../styles/colours';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: ${colours.PRIMARY.NORMAL};
  color: ${colours.PRIMARY.LIGHTEST};
  border-bottom: solid 1px ${colours.PRIMARY.DARKEST};
  padding: 2px 4px;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 330px;
  margin: 0 auto;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  > span {
    padding-left: 2px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-left: 10px;
`;

export const MenuItem = styled(({ isActive, ...rest }) => <Link {...rest} />)`
  padding: 6px;
  color: ${colours.BASE.NORMAL};
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background-color: ${colours.PRIMARY.DARKER};
    color: ${colours.PRIMARY.LIGHTEST};
  }
`;
