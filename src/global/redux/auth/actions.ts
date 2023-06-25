import {
  IForgotPasswordFailure,
  IForgotPasswordRequest,
  IForgotPasswordSuccess,
  ILoginFailure,
  ILoginRequest,
  ILoginSuccess,
  ILogout,
  ISignUpFailure,
  ISignUpRequest,
  ISignUpSuccess,
  IUser,
} from '@/utils/interfaces';
import * as actionTypes from './actionTypes';



export const loginRequest = (): ILoginRequest => ({
  type: actionTypes.LOGIN_REQUEST,
});

export const loginSuccess = (user: IUser): ILoginSuccess => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailed = (error: string): ILoginFailure => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: error,
});

export const signUpRequest = (): ISignUpRequest => ({
  type: actionTypes.SIGN_UP_REQUEST,
});

export const signUpSuccess = (): ISignUpSuccess => ({
  type: actionTypes.SIGN_UP_SUCCESS
})

export const signUpFailure = (error: string): ISignUpFailure => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload: error
});

export const forgotPasswordRequest = (): IForgotPasswordRequest =>({
  type: actionTypes.FORGOT_PASSWORD_REQUEST
})

export const forgotPasswordSuccess = (): IForgotPasswordSuccess => ({
  type: actionTypes.FORGOT_PASSWORD_SUCCESS,
});

export const forgotPasswordFailure = (error: string): IForgotPasswordFailure => ({
  type: actionTypes.FORGOT_PASSWORD_FAILURE,
  payload: error
});

export const logout = (): ILogout =>({
  type: actionTypes.LOGOUT
})
