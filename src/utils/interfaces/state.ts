import { IDestination, INotification } from "./action";
import { IUser } from "./auth";

export interface IAuthState {
  user: IUser;
  error: string;
  isLoggedIn: boolean;
}

export interface IAppState {
  loading: boolean;
}

export interface IUserState {
  notifications: Array<INotification>;
  booked: Array<IDestination>;
  wishlist: Array<IDestination>;
}