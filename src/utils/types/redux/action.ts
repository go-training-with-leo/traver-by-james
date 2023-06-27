import {
  IAddFavorite,
  IAddSearch,
  IBookTripSuccess,
  IForgotPasswordFailure,
  IForgotPasswordRequest,
  IForgotPasswordSuccess,
  ILoginFailure,
  ILoginRequest,
  ILoginSuccess,
  ILogout,
  IRemoveFavorite,
  IRemoveSearch,
  ISignUpFailure,
  ISignUpRequest,
  ISignUpSuccess,
} from '@/utils/interfaces';

type TUserAction = IBookTripSuccess | IAddFavorite | IRemoveFavorite;

type TAppAction = IAddSearch | IRemoveSearch;

type TAuthAction =
  | ILoginRequest
  | ILoginSuccess
  | ILoginFailure
  | ISignUpRequest
  | ISignUpSuccess
  | ISignUpFailure
  | IForgotPasswordRequest
  | IForgotPasswordSuccess
  | IForgotPasswordFailure
  | ILogout;

export type TAction = TUserAction | TAuthAction| TAppAction;
