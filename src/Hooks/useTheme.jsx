import { ThemeContext } from 'Context/themes-context';
import { useContext } from 'react';

const useTheme = () => {
  const value = useContext(ThemeContext);

  return value;
};

export default useTheme;
