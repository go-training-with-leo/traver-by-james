import { FavoritePlace } from './../../../screens/SignUp/FavoritePlace';
type RootStackParamList = {
  Welcome: undefined;
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
};

export { RootStackParamList };
