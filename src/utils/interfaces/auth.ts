import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export interface IUser {
  displayName: string;
  photoUrl: string;
  email: string;
  uid: string;
  favoritePlace?: Array<string|number>;
}

export interface ILoginWithEmailProps extends ICallBackProps {
  email: string;
  password: string;
}

export interface ISignUpProps extends ICallBackProps{
  email: string;
  password: string,
  firstName: string;
  lastName: string;
} ;

export interface IAuthResponse {
  credential: FirebaseAuthTypes.UserCredential | null | FirebaseAuthTypes.UserCredential & ISignUpProps;
  error: null | string;
}

export interface IForgotPasswordProps extends ICallBackProps {
  email: string;
};

export interface ICallBackProps {
  onSuccess?: () => void;
  onFailure?: () => void
}