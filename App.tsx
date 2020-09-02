import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import useCachedResources from './src/hooks/useCachedResources';
import Routes from './src/routes';
import defaultTheme from './src/styles/theme/default';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;

  return (
    <NavigationContainer theme={DarkTheme}>
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaProvider>
          <Routes />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
