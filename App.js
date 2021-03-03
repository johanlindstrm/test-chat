import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeContextProvider from './context/ThemeContext';
import LangContextProvider from './context/LangContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Routes from './navigation/Router';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeContextProvider from './context/ThemeContext';
import LangContextProvider from './context/LangContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Routes from './navigation/Router';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeContextProvider>
          <LangContextProvider>
            <Routes />
            <StatusBar style={colorScheme} />
          </LangContextProvider>
        </ThemeContextProvider>
      </SafeAreaProvider>
    );
  }
}
