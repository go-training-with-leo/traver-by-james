import {
  BOOK_TRIP_FAILURE,
  BOOK_TRIP_REQUEST,
  BOOK_TRIP_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '@/global/redux';
import { IUser } from './auth';

export interface ILoginRequest {
  type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: IUser;
}

export interface ILoginFailure {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export interface ISignUpRequest {
  type: typeof SIGN_UP_REQUEST;
}

export interface ISignUpSuccess {
  type: typeof SIGN_UP_SUCCESS;
}
export interface ISignUpFailure {
  type: typeof SIGN_UP_FAILURE;
  payload: string;
}

export interface IForgotPasswordRequest {
  type: typeof FORGOT_PASSWORD_REQUEST
}

export interface IForgotPasswordSuccess {
  type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface IForgotPasswordFailure {
  type: typeof FORGOT_PASSWORD_FAILURE;
  payload: string;
}

export interface ILogout{
  type: typeof LOGOUT;
}

export interface IBookTripRequest{
  type: typeof BOOK_TRIP_REQUEST
}

export interface IBookTripSuccess {
  type: typeof BOOK_TRIP_SUCCESS;
  payload: ITrip;
}

export interface IBoolTripFailure {
  type: typeof BOOK_TRIP_FAILURE
}

export interface INotification {
  id: string;
  content: string;
  markRead: boolean;
}

export interface ITrip {
  id: string;
  name: string;
  price: number;
  description: string;
  startDate: Date;
  endDate: Date;
  reviewCount: number;
  reviewScore: number;
  photoUrl: string;
  gallery: Array<string>;
}

export interface IBookedTrip extends ITrip{
  members: number;
}
