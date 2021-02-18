import React from 'react';
import PropTypes from 'prop-types';
import { GlobalContainer } from './LayoutStyled';

const Layout = ({ children }) => <GlobalContainer>{children}</GlobalContainer>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
