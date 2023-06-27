import { FilterScreen } from './../../../screens/FilterScreen/index';

import { IDestination } from '@/utils/interfaces';
type RootStackParamList = {
  Welcome: undefined;
  Auth: undefined;
  Main: undefined;
  Login: undefined;
  VerifyEmail: undefined;
  NewPassword: { email: string };
  RegisterName: undefined;
  RegisterEmail: {
    firstName: string;
    lastName: string;
  };
  RegisterPassword: {
    firstName: string;
    lastName: string;
    email: string;
  };
  VerifyOTP: undefined;
  RegisterSuccess: undefined;
  FavoritePlace: undefined;
  HomeStack: undefined;
  ProfileStack: undefined;
  MyTrip: undefined;
  WishlistStack: undefined;
  Home: undefined;
  Destination: { place: IDestination };
  DetailDestination: { place: IDestination };
  MainTab: undefined;
  Notification: undefined;
  SearchScreen: undefined;
  FilterScreen: undefined;
};

export { RootStackParamList };
