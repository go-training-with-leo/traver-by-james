import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Welcome } from '@/screens';
import { RootStackParamList } from '@/utils/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () =>(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
)

export default Navigator;