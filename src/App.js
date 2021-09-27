import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from '@/Redux/Store';
import MainNavigator from '@/Navigators/Main';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <MainNavigator />
      </PaperProvider>
    </StoreProvider>
  );
}
