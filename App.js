import React from 'react';
import { Routes } from './navigation/Router';
import ThemeContextProvider from './context/ThemeContext';
import LangContextProvider from './context/LangContext';

export default function App() {
  return (
    <ThemeContextProvider>
      <LangContextProvider>
        <Routes />
      </LangContextProvider>
    </ThemeContextProvider>
  );
}
