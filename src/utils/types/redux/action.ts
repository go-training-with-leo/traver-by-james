import {
    IBookTripSuccess,
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
} from '@/utils/interfaces';

type TUserAction = IBookTripSuccess;

type TAuthAction= ILoginRequest
  | ILoginSuccess
  | ILoginFailure
  | ISignUpRequest
  | ISignUpSuccess
  | ISignUpFailure
  | IForgotPasswordRequest
  | IForgotPasswordSuccess
  | IForgotPasswordFailure
  | ILogout;

export type TAction = TUserAction|TAuthAction
  
