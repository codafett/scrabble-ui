import React from 'react';
import PropTypes from 'prop-types';

import { MainLayoutWrapper, ContentWrapper } from './styles';
import Header from '../Header';

const MainLayout = ({
  children,
}) => (
  <MainLayoutWrapper>
    <div>
      <Header />
    </div>
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </MainLayoutWrapper>
)

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MainLayout;
