import React from 'react';
import {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '@/utils/types';
import { Icons, Text } from '@/components';
import { View } from 'react-native';

export const tabNavigatorOption = (): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarLabelPosition: 'beside-icon',
  tabBarStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tabBarItemStyle: {
    borderColor: 'black',
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    columnGap: 20,
    paddingLeft: 10,
    borderRadius: 20,
  },
  tabBarActiveBackgroundColor: 'black',
  tabBarIconStyle: { paddingBottom: 5 },
});

export const tabOption = (tabName: string): BottomTabNavigationOptions => {
  let label = '';
  let icon = '';
  let iconFocused = '';
  switch (tabName) {
    case 'HomeStack':
      label = 'Home';
      icon = 'home';
      break;
    case 'MyTrip':
      label = 'My Trip';
      icon = 'send';
      iconFocused = 'homeFocused';
      break;
    case 'WishlistStack':
      label = 'Wishlist';
      icon = 'heart';
      break;
    case 'ProfileStack':
      label = 'Profile';
      icon = 'profile';
      break;
    default:
      label = 'Home';
      icon = 'home';
      break;
  }
  return {
    tabBarLabel: ({ focused }) => {
      return (
        <>
          {focused && (
            <Text title={label} style={{ color: 'white', fontWeight: '600' }} />
          )}
        </>
      );
    },
    tabBarIcon: ({ focused }) => (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icons
          name={focused ? `${icon}Focused` : icon}
          stroke={focused ? 'white' : 'black'}
        />
      </View>
    ),
  };
};
