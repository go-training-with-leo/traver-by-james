import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoritePlace, Login, RegisterEmail, RegisterPassword, RegisterSuccess, VerifyEmail, VerifyOTP, Welcome } from '@/screens';
import { RootStackParamList } from '@/utils/types';
import { NewPassword } from '@/screens/ForgotPassword/NewPassword';
import { RegisterName } from '@/screens/SignUp/RegisterName';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="RegisterName" component={RegisterName} />
      <Stack.Screen name="RegisterEmail" component={RegisterEmail} />
      <Stack.Screen name="RegisterPassword" component={RegisterPassword} />
      <Stack.Screen name='VerifyOTP' component={VerifyOTP} />
      <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} />
      <Stack.Screen name="FavoritePlace" component={FavoritePlace} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;