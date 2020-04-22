import React from 'react';

import { HeaderWrapper, Title, Menu, MenuItem, HeaderContent } from './styles';
import Tile from '../Tile';
import storageManager from '../../helpers/storageManager';

const Header = () => {
  function renderMenu() {
    return storageManager.isLoggedIn()
      ? (
        <Menu>
          <MenuItem to="/games">
            Games
          </MenuItem>
          <MenuItem
            to="/login"
          >
            Log Out
          </MenuItem>
        </Menu>
      )
      : null;
  }
  
  return (
    <HeaderWrapper>
      <HeaderContent>
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
        {renderMenu()}
      </HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;
