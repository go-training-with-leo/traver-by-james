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
export default App;
