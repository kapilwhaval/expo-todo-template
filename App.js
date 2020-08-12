import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/util/theme';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';

export default () => {
  const [fontLoad, setFontLoad] = useState(false);

  console.disableYellowBox = true;

  const fetchFonts = () => {
    return Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  };

  if (!fontLoad) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoad(true)} />
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <PaperProvider theme={theme}>
          <StatusBar style="light" backgroundColor={theme.colors.primary} />
          <Routes />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}