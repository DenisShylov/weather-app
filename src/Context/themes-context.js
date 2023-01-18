import React, { useMemo, useState } from 'react';

export const ThemeContext = React.createContext({ isDark: false });

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
