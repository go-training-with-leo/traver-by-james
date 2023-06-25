import { IDestination, ITrip, IUserState } from '@/utils/interfaces';
import * as actionTypes from '../actionTypes';
import { TAction } from '@/utils/types/redux/action';
import dayjs from 'dayjs';

const data: Array<IDestination> = [
  {
    id: '1',
    name: 'Kuta Beach',
    price: 1450,
    description: `Picturesque beach offers scenic hiking trails and tourist services including several boutique shops, the popular Ben's Place snack bar and restaurants.`,
    photoUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ca/db/5b/matira-beach.jpg?w=1400&h=-1&s=1',
    gallery: [],
    reviewCount: 5,
    reviewScore: 4.8,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
  },
  {
    id: '2',
    name: 'Kuta Resort',
    price: 145,
    description: 'Kuta Beach',
    photoUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ca/db/5b/matira-beach.jpg?w=1400&h=-1&s=1',
    gallery: [],
    reviewCount: 5,
    reviewScore: 5,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
  },
  {
    id: '3',
    name: 'Kuta Beach',
    price: 1450,
    description: 'Kuta Beach',
    photoUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ca/db/5b/matira-beach.jpg?w=1400&h=-1&s=1',
    gallery: [],
    reviewCount: 5,
    reviewScore: 2,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
  },
  {
    id: '4',
    name: 'Kuta Resort',
    price: 145,
    description: 'Kuta Beach',
    photoUrl: '',
    gallery: [],
    reviewCount: 5,
    reviewScore: 4.4,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
  },
  {
    id: '5',
    name: 'Kuta Beach',
    price: 1450,
    description: 'Kuta Beach',
    photoUrl: '',
    gallery: [],
    reviewCount: 5,
    reviewScore: 0,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
  },
  {
    id: '6',
    name: 'Kuta Resort',
    price: 145,
    description: 'Kuta Beach',
    photoUrl: '',
    gallery: [],
    reviewCount: 5,
    reviewScore: 1,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
  },
];

const initialState: IUserState = {
  booked: data,
  wishlist: data,
  notifications: [],
};

export const userReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case actionTypes.BOOK_TRIP_SUCCESS:
      return {
        ...state,
        booked: [...state.booked, action.payload],
      };
    case actionTypes.ADD_FAVORITE:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case actionTypes.REMOVE_FAVORITE:
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload.id),
      };
    case actionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
