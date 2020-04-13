import styled from 'styled-components';
import PropTypes from 'prop-types';

import colours from '../../styles/colours';
import Button from '../Button';
import ButtonBarStyles from './buttonBarStyles';

export const ButtonBarLocationCodes = Object.freeze({
  inPlace: -1,
  top: 0,
  bottom: 1,
});

const ButtonBar = styled.div`
  display: flex;
  position: ${({ isSticky }) => isSticky ? 'sticky' : ''};
  top: ${({ isSticky, top }) => isSticky ? top : ''};
  justify-content: ${({ justifyContent }) => justifyContent};
  border-bottom: ${({ location }) => location === ButtonBarLocationCodes.top ? `solid 1px ${colours.BORDER.NORMAL}` : 'none'};
  border-top: ${({ location }) => location === ButtonBarLocationCodes.bottom ? `solid 1px ${colours.BORDER.NORMAL}` : 'none'};
  background-color: ${({ isSticky }) => isSticky ? colours.BASE.NORMAL : 'inherit'};
  opacity: 1;
  margin-top: ${({ mt, m }) => mt || m || 0};
  margin-right: ${({ mr, m }) => mr || m || 0};
  margin-bottom: ${({ mb, m }) => mb || m || 0};
  margin-left: ${({ ml, m }) => ml || m || 0};
  padding-top: ${({ pt, p }) => pt || p || 0};
  padding-right: ${({ pr, p }) => pr || p || 0};
  padding-bottom: ${({ pb, p }) => pb || p || 0};
  padding-left: ${({ pl, p }) => pl || p || 0};
  > button {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }  
  }
  a {
    text-decoration: none;
  }
  z-index: ${({ isSticky }) => isSticky ? 10 : 'inherit'};
  width: 100%;
`;

ButtonBar.propTypes = {
  style: PropTypes.object,
  isSticky: PropTypes.bool,
  top: PropTypes.string,
  location: PropTypes.oneOf(Object.values(ButtonBarLocationCodes)),
  m: PropTypes.string,
  mt: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
  p: PropTypes.string,
  pt: PropTypes.string,
  pr: PropTypes.string,
  pb: PropTypes.string,
  pl: PropTypes.string,
  justifyContent: PropTypes.string,
};

ButtonBar.defaultProps = {
  style: ButtonBarStyles.grey,
  location: ButtonBarLocationCodes.top,
  p: '10px',
  justifyContent: 'flex-start',
};

ButtonBar.locationCodes = ButtonBarLocationCodes;

export default ButtonBar;
