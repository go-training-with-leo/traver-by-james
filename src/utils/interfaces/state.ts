import { IUser } from "./auth";

export interface IAuthState {
  user: IUser;
  error: string;
}

export interface IAppState {
  loading: boolean;
}
