import { ThemeContext } from '@emotion/react';
import React, { useContext } from 'react';

const useTheme = () => {
  const value = useContext(ThemeContext);

  return value;
};

export default useTheme;
