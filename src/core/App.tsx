/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Welcome } from '@/screens';
import React from 'react';
import '@/config/i18n';
import Navigator from '@/navigators';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Provider } from 'react-redux';
import { store, persistor } from './store';

import { PersistGate } from 'redux-persist/integration/react';

// import * as Sentry from '@sentry/react-native';
import { googleClientID } from '@/config';

// Sentry.init({
//   dsn: 'https://f2d6910cb3c241c7bbe2ebfb95750c26@o4505248251117568.ingest.sentry.io/4505248253673472',
//   tracesSampleRate: 1.0,
// });

function App(): JSX.Element {
  GoogleSignin.configure({
    webClientId: googleClientID,
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}
export default App;
