import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '@/utils/types';
import { DetailPlace, FilterScreen, Home, MyTrip, Notification, Place, Profile, SearchScreen, Wishlist } from '@/screens';
import { tabNavigatorOption, tabOption } from './headerOptions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const MainTab = () =>{
  return (
    <Tab.Navigator
      screenOptions={tabNavigatorOption}
      initialRouteName="HomeStack">
      <Tab.Screen
        name="HomeStack"
        component={Home}
        options={({ route }) => tabOption(route.name)}
      />
      <Tab.Screen
        name="MyTrip"
        component={MyTrip}
        options={({ route }) => tabOption(route.name)}
      />
      <Tab.Screen
        name="WishlistStack"
        component={Wishlist}
        options={({ route }) => tabOption(route.name)}
      />
      <Tab.Screen
        name="ProfileStack"
        component={Profile}
        options={({ route }) => tabOption(route.name)}
      />
    </Tab.Navigator>
  );
}

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Destination" component={Place} />
      <Stack.Screen name="DetailDestination" component={DetailPlace} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
    </Stack.Navigator>
  );
};
export default AppStack;
