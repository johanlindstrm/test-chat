import React, { createContext, useState } from 'react';
import schemes from '../Resources/Schemes';
import { Actions } from 'react-native-router-flux';

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(schemes.DEF);

  const toggleTheme = (value) => {
    setTheme(value);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
