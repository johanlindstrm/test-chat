import React, { createContext, useState } from "react";
import {schemes} from "../Resources/Schemes";

export const ThemeContext = createContext(schemes.DEF);

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
