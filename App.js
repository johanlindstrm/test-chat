import React, { Component } from 'react';
import { Routes } from './navigation/Router';
import ThemeContextProvider from './Context/ThemeContext';

export default function App() {
  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  );
}
