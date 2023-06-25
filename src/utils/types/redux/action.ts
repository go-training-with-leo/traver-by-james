import {
  IAddFavorite,
    IBookTripSuccess,
  IForgotPasswordFailure,
  IForgotPasswordRequest,
  IForgotPasswordSuccess,
  ILoginFailure,
  ILoginRequest,
  ILoginSuccess,
  ILogout,
  IRemoveFavorite,
  ISignUpFailure,
  ISignUpRequest,
  ISignUpSuccess,
} from '@/utils/interfaces';

type TUserAction = IBookTripSuccess|IAddFavorite|IRemoveFavorite;

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
  
