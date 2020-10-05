/**
*
* LoadingPanel
*
*/

import styled from 'styled-components';

import colours from '../../styles/colours';

export const LoadingPanelWrapper = styled.div`
  display: ${({ isLoading }) => isLoading ? 'flex' : 'none'};
  background-color: transparent;
  position: ${({ position }) => position};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90000;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: center;
  justify-content: flex-start;
  padding-top: ${({ pt }) => pt};
  padding-right: ${({ pr }) => pr};
  padding-bottom: ${({ pb }) => pb};
  padding-left: ${({ pl }) => pl};
  color: ${colours.base};
`;

const sizeCodes = {
  xs: 'extra-small',
  sm: 'small',
  md: 'medium',
  lg: 'large',
};

export const LoadingImage = styled.div.attrs(({ size }) => ({
  boxsize: () => {
    switch (size) {
      case sizeCodes.xs:
        return '20px';
      case sizeCodes.sm:
        return '40px';
      case sizeCodes.md:
        return '60px';
      case sizeCodes.lg:
        return '80px';
      default:
        return '40px';
    }
  },
}))`
  width: ${({ boxsize }) => boxsize};
  height: ${({ boxsize }) => boxsize};
  z-index: 999;
  color: ${colours.primary};
`;

export const LoadingBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colours.base};
  opacity: 0.7;
`;

export const LoadingMessage = styled.span`
  margin-top: ${({ flexDirection }) => flexDirection === 'column' ? '20px' : '0px'};
  margin-left: ${({ flexDirection }) => flexDirection === 'column' ? '0px' : '10px'};
  z-index: 1;
  font-size: 1rem;
  font-weight: 600;
  color: ${colours.primary};
`;
