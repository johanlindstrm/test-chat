import React, { createContext, useState } from 'react';
import LangSchemes from '../Resources/LangScheme';

export const LangContext = createContext();

export default function LangContextProvider({ children }) {
  const [language, setLanguage] = useState(LangSchemes.SV.headerTitleMessages);
  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
}
