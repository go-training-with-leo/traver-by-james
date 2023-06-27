import { IDestination, INotification } from "./action";
import { IUser } from "./auth";

export interface IAuthState {
  user: IUser;
  error: string;
  isLoggedIn: boolean;
}

export interface IAppState {
  loading: boolean;
  recentSearches: Array<string>;
  destinations: Array<IDestination>;
}

export interface IUserState {
  notifications: Array<INotification>;
  booked: Array<IDestination>;
  wishlist: Array<IDestination>;
}