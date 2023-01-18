// import { ThemeContext } from 'App';
import { ThemeContext } from 'Context/themes-context';
import useTheme from 'Hooks/useTheme';
import React, { useCallback, useContext, useState } from 'react';

const Cabinet = () => {
  const { isDark, setIsDark } = useTheme();

  const handleTheme = useCallback(() => setIsDark(!isDark), []);
  console.log(useContext(ThemeContext));

  return <button onClick={handleTheme}>Change theme</button>;
};

export default Cabinet;
