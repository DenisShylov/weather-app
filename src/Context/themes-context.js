import React, { createContext, useMemo, useState } from 'react';
const themeLocalStorage = JSON.parse(localStorage.getItem('darkTheme'));
export const ThemeContext = createContext({ isDark: themeLocalStorage });

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(themeLocalStorage);
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
