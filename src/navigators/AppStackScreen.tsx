import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '@/utils/types';
import { Home } from '@/screens';
import HomeStack from './AppStacks/HomeStackScreen';
import { Icons, Text } from '@/components';
import { View } from 'react-native';
import { colors } from '@/utils/theme';
import { tabNavigatorOption, tabOption } from './headerOptions';
import MyTrip from '@/screens/MyTrip';


const Tab = createBottomTabNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={tabNavigatorOption}
      initialRouteName="HomeStack">
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({ route }) => tabOption(route.name)}
      />
      <Tab.Screen
        name="MyTrip"
        component={MyTrip}
        options={({ route }) => tabOption(route.name)}
      />
      <Tab.Screen
        name="WishlistStack"
        component={HomeStack}
        options={({ route }) => tabOption(route.name)}
      />
      <Tab.Screen
        name="ProfileStack"
        component={HomeStack}
        options={({ route }) => tabOption(route.name)}
      />
    </Tab.Navigator>
  );
};
export default AppStack;
