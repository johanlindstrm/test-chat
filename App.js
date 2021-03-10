import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ThemeContextProvider from "./context/ThemeContext";
import LangContextProvider from "./context/LangContext";

import Routes from "./navigation/Router";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <LangContextProvider>
          <Routes />
        </LangContextProvider>
      </ThemeContextProvider>
    </SafeAreaProvider>
  );
}
