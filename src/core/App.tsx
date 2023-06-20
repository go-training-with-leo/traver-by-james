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
import store from './store';
import { Google_Client_Id } from '@/config';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://f2d6910cb3c241c7bbe2ebfb95750c26@o4505248251117568.ingest.sentry.io/4505248253673472',
  tracesSampleRate: 1.0,
});

function App(): JSX.Element {
  GoogleSignin.configure({
    webClientId: Google_Client_Id,
  });
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
export default Sentry.wrap(App);
