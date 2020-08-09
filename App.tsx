import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import useCachedResources from './src/hooks/useCachedResources';
import Routes from './src/routes';
import defaultTheme from './src/styles/theme/default';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaProvider>
          <Routes />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
