import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, VerifyEmail, Welcome } from '@/screens';
import { RootStackParamList } from '@/utils/types';
import { NewPassword } from '@/screens/ForgotPassword/NewPassword';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;