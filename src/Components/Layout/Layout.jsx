import React from 'react';

import useTheme from 'Hooks/useTheme';

const Layout = ({ children }) => {
  const { isDark } = useTheme();

  const className = isDark ? 'layout' : 'layout dark';

  return <div className={className}>{children}</div>;
};

export default Layout;