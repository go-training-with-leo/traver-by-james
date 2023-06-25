import {
  ITrip,
  IUserState,
} from '@/utils/interfaces';
import * as actionTypes from '../actionTypes';
import { TAction } from '@/utils/types/redux/action';
import dayjs from 'dayjs';


const data: Array<ITrip> = [
  {
    id: '1',
    name: 'Kuta Beach',
    price: 1450,
    description: 'Kuta Beach',
    photoUrl: '',
    gallery: [],
    reviewCount: 5,
    reviewScore: 5,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
  },
  {
    id: '2',
    name: 'Kuta Resort',
    price: 145,
    description: 'Kuta Beach',
    photoUrl: '',
    gallery: [],
    reviewCount: 5,
    reviewScore: 5,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
  },
  {
    id: '1',
    name: 'Kuta Beach',
    price: 1450,
    description: 'Kuta Beach',
    photoUrl: '',
    gallery: [],
    reviewCount: 5,
    reviewScore: 5,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
  },
  {
    id: '2',
    name: 'Kuta Resort',
    price: 145,
    description: 'Kuta Beach',
    photoUrl: '',
    gallery: [],
    reviewCount: 5,
    reviewScore: 5,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
  },
  {
    id: '1',
    name: 'Kuta Beach',
    price: 1450,
    description: 'Kuta Beach',
    photoUrl: '',
    gallery: [],
    reviewCount: 5,
    reviewScore: 5,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
  },
  {
    id: '2',
    name: 'Kuta Resort',
    price: 145,
    description: 'Kuta Beach',
    photoUrl: '',
    gallery: [],
    reviewCount: 5,
    reviewScore: 5,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
  },
];

const initialState: IUserState = {
  booked: data,
  wishlist: [],
  notifications: [],
};

export const userReducer = (state = initialState, action:TAction) => {
  switch (action.type) {
    case actionTypes.BOOK_TRIP_SUCCESS:
      return {
        ...state,
        booked: [...state.booked, action.payload],
      };
    case actionTypes.LOGOUT:
      return initialState
    default:
      return state;
  }
};
