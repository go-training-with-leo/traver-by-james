/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Welcome } from '@/screens';
import React from 'react';
import '@/config/i18n'
import Navigator from '@/navigators';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



function App(): JSX.Element {
  GoogleSignin.configure({
    webClientId: '',
  });
  return (
    <Navigator />
  );
}
export default App;
