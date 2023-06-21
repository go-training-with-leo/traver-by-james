import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/utils/types';
import AuthStack from './AuthStackScreen';
import { useAppSelector } from '@/components';
import AppStack from './AppStackScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="Main" component={AppStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
