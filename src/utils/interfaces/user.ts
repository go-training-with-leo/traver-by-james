export interface IUser {
  displayName: string;
  photoUrl: string;
  email: string;
  uid: string;
  like?: Array<string|number>;
}