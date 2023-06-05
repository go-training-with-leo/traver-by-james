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

function App(): JSX.Element {
  return (
    <Navigator />
  );
}
export default App;
