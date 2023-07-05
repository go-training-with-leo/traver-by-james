import { FirebaseAuthTypes } from "@react-native-firebase/auth";



export interface ILoginWithEmailProps extends ICallBackProps {
  email: string;
  password: string;
}

export interface ISignUpProps extends ICallBackProps{
  email: string;
  password: string,
  firstName: string;
  lastName: string;
};

export interface IAuthResponse {
  credential: FirebaseAuthTypes.UserCredential | null | FirebaseAuthTypes.UserCredential & ISignUpProps;
  error: null | string;
}

export interface IAddDocResponse{
  success: boolean;
}

export interface IForgotPasswordProps extends ICallBackProps {
  email: string;
};

export interface ICallBackProps {
  onSuccess?: () => void;
  onFailure?: () => void
}