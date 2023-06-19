import type { Dispatch } from 'redux';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { COLLECTION } from '@/utils/enums';
import {
  signInWithEmail,
  saveDoc,
  signInWithFacebook,
  signInWithGoogle,
  signUpEmailPassword,
  updatePassword,
} from '@/services';
import type {
  ICallBackProps,
  IForgotPasswordProps,
  ILoginWithEmailProps,
  ISignUpProps,
  IUser,
} from '@/utils/interfaces';
import {
  loginSuccess,
  loginFailed,
  TAuthAction,
  loginRequest,
  signUpRequest,
  signUpFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure,
} from './actions';
import { Alert } from 'react-native';

const onLoginSuccess = (
  credential: FirebaseAuthTypes.UserCredential,
  dispatch: Dispatch,
  onSuccess: () => void
) => {
  const user: IUser = {
    displayName: credential.user.displayName ?? '',
    email: credential.user.email,
    photoUrl: credential.user.photoURL,
    uid: credential.user.uid,
  };

  credential.additionalUserInfo.isNewUser &&
    saveDoc({ collection: COLLECTION.USER, data: user });
    onSuccess()
  return dispatch(loginSuccess(user));
};

const onLoginFailure = (error: string,dispatch: Dispatch,onFailure: () => void)=>{
  dispatch(loginFailed(error))
  onFailure()
}

const onSignUpSuccess = (
  credential: FirebaseAuthTypes.UserCredential & ISignUpProps,
  dispatch: Dispatch,
  onSuccess: () => void,
) => {
  const user: IUser = {
    displayName:
      credential.user.displayName ??
      `${credential.firstName} ${credential.lastName}`,
    email: credential.user.email,
    photoUrl: credential.user.photoURL,
    uid: credential.user.uid,
  };

  credential.additionalUserInfo.isNewUser &&
    saveDoc({ collection: COLLECTION.USER, data: user });
  onSuccess();
  return dispatch(loginSuccess(user));
};

const onSignUpFailure = (
  error: string,
  dispatch: Dispatch,
  onFailure: () => void,
) => {
  onFailure();
  dispatch(signUpFailure(error));
};

export const loginWithEmail =
  (props: ILoginWithEmailProps) =>
  async (dispatch: Dispatch<TAuthAction>) => {
    dispatch(loginRequest());
    try {
      const data = await signInWithEmail(props);
      return data.credential
        ? onLoginSuccess(data.credential, dispatch,props.onSuccess)
        : onLoginFailure(data.error, dispatch, props.onFailure);
    } catch (error) {
      return onLoginFailure(error, dispatch, props.onFailure)
    }
  };

export const loginWithFacebook =
  ({onSuccess, onFailure}: ICallBackProps) => async (dispatch: Dispatch<TAuthAction>) => {
    dispatch(loginRequest());
    try {
      const data = await signInWithFacebook();
      return data.credential
        ? onLoginSuccess(data.credential, dispatch, onSuccess)
        : onLoginFailure(data.error, dispatch, onFailure);
    } catch (error) {
      return onLoginFailure(error, dispatch, onFailure);
    }
  };

export const loginWithGoogle =
  ({ onSuccess, onFailure }: ICallBackProps) =>
  async (dispatch: Dispatch<TAuthAction>) => {
    dispatch(loginRequest());
    try {
      const data = await signInWithGoogle();
      return data.credential
        ? onLoginSuccess(data.credential, dispatch, onSuccess)
        : onLoginFailure(data.error, dispatch, onFailure);
    } catch (error) {
      return onLoginFailure(error, dispatch, onFailure);
    }
  };

export const signUp =
  (props: ISignUpProps) => async (dispatch: Dispatch<TAuthAction>) => {
    dispatch(signUpRequest());
    try {
      const data = await signUpEmailPassword(props);

      return data.credential
        ? onSignUpSuccess(data.credential, dispatch, props.onSuccess)
        : onSignUpFailure(data.error,dispatch,props.onFailure);
    } catch (error) {
      return onSignUpFailure(error, dispatch, props.onFailure);
    }
  };

export const forgotPassword =
  ({ email, onSuccess, onFailure }: IForgotPasswordProps) =>
  (dispatch: Dispatch) => {
    dispatch(forgotPasswordRequest());
    updatePassword(email)
      .then(() => {
        dispatch(forgotPasswordSuccess());
        onSuccess();
      })
      .catch(error => {
        dispatch(forgotPasswordFailure(error?.code));
        onFailure()
      });
  };
