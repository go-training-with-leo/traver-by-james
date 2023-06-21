import { IUser } from "./auth";

export interface IAuthState {
  user: IUser;
  error: string;
  isLoggedIn: boolean;
}

export interface IAppState {
  loading: boolean;
}
