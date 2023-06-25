import { INotification, ITrip } from "./action";
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
  booked: Array<ITrip>;
  wishlist: Array<ITrip>;
}