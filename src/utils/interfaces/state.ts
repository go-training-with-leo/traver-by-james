import { INotification } from "./action";
import { IDestination, ITrip, IUser } from "./app";


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
  booked: Array<ITrip>;
  wishlist: Array<IDestination>;
}