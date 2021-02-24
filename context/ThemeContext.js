import React, { createContext, useState } from "react";
import {schemes} from "../colorSchemes/Schemes";

export const ThemeContext = createContext({});

export default function ThemeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const [theme, setTheme] = useState(schemes.DEF);

  const toggleTheme = (value) => {
    setTheme(value);
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleDarkMode, theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
