import React from 'react';
import PropTypes from 'prop-types';

import useTheme from 'Hooks/useTheme';

const Layout = ({ children }) => {
  const { isDark } = useTheme();

  const className = isDark ? 'layout dark' : 'layout';

  return <div className={className}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
