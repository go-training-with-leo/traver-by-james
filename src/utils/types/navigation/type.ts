import { IDestination, IPlaceProps } from '@/utils/interfaces';
import { Destination } from './../../../components/Destination/index';
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
};

export { RootStackParamList };
