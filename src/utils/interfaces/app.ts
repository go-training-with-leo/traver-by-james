import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import { COLLECTION } from "../enums";

export interface IFirebaseFunctionProps {
  collection: COLLECTION;
  filter?: {
    field: string;
    operator: FirebaseFirestoreTypes.WhereFilterOp;
    value: any;
  };
}

export interface IUser {
  displayName: string;
  photoUrl: string;
  email: string;
  uid: string;
  favoritePlace?: Array<string | number>;
}

export interface IDestination {
  id: string;
  name: string;
  price: number;
  description: string;
  startDate: Date;
  endDate: Date;
  reviewCount: number;
  reviewScore: number;
  photoUrl: string;
  location: string;
  gallery: Array<string>;
}

export interface ITrip extends IDestination {
  members: number;
  userId: string;
}

