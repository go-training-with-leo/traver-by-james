import React from 'react';
import {
  FavoritePlace,
  Login,
  NewPassword,
  RegisterEmail,
  RegisterName,
  RegisterPassword,
  RegisterSuccess,
  VerifyEmail,
  VerifyOTP,
  Welcome,
} from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/utils/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="RegisterName" component={RegisterName} />
      <Stack.Screen name="RegisterEmail" component={RegisterEmail} />
      <Stack.Screen name="RegisterPassword" component={RegisterPassword} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
      <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} />
      <Stack.Screen name="FavoritePlace" component={FavoritePlace} />
    </Stack.Navigator>
  );
};
export default AuthStack;
