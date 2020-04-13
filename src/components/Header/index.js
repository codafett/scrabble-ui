import React from 'react';

import { HeaderWrapper, Title, Menu, MenuItem } from './styles';
import Tile from '../Tile';

const Header = () => (
  <HeaderWrapper>
    <Title>
      <Tile
        letter="s"
        score={1}
        width="30px"
        fontSize="2.4rem"
      />
      <span>
        crabble
      </span>
    </Title>
    <Menu>
      <MenuItem to="/games">
        Games
      </MenuItem>
    </Menu>
  </HeaderWrapper>
)

export default Header;
