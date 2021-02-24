import React, { createContext, useState } from "react";
import languageScheme from "../Resources/LangScheme";

export const LangContext = createContext();

export default function LangContextProvider({ children }) {
  const [language, setLanguage] = useState(languageScheme.EN);
  const toggleLanguage = (value) => {
    setLanguage(value);
  };

  return (
    <LangContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LangContext.Provider>
  );
}
