import { AnyAction } from 'redux';
import * as actionTypes from '../actionTypes';
import { IAppState } from '@/utils/interfaces';
import { TAction } from '@/utils/types/redux';
import dayjs from 'dayjs';

const initState: IAppState = {
  loading: false,
  recentSearches: [
    'Kuta Beach',
    'Bali Resort',
    'Bromo',
    'Kuta Beach',
    'Bali Resort',
  ],
  destinations: [
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
      location: 'Ho Chi Minh, Viet Nam',
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
      location: 'Ho Chi Minh, Viet Nam',
    },
    {
      id: '3',
      name: 'Nha Trang',
      price: 1450,
      description: 'Nha trang',
      photoUrl:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ca/db/5b/matira-beach.jpg?w=1400&h=-1&s=1',
      gallery: [],
      reviewCount: 5,
      reviewScore: 2,
      startDate: dayjs('2021-06-13').toDate(),
      endDate: dayjs('2021-06-15').toDate(),
      location: 'Ho Chi Minh, Viet Nam',
    },
    {
      id: '4',
      name: 'Can Gio Resort',
      price: 145,
      description: 'Kuta Beach',
      photoUrl:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ca/db/5b/matira-beach.jpg?w=1400&h=-1&s=1',
      gallery: [],
      reviewCount: 5,
      reviewScore: 4.4,
      startDate: dayjs('2021-06-13').toDate(),
      endDate: dayjs('2021-06-15').toDate(),
      location: 'Ho Chi Minh, Viet Nam',
    },
    {
      id: '5',
      name: 'Vung Tau',
      price: 1450,
      description: 'Vung Tau',
      photoUrl:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ca/db/5b/matira-beach.jpg?w=1400&h=-1&s=1',
      gallery: [],
      reviewCount: 5,
      reviewScore: 0,
      startDate: dayjs('2021-06-13').toDate(),
      endDate: dayjs('2021-06-15').toDate(),
      location: 'Ho Chi Minh, Viet Nam',
    },
    {
      id: '6',
      name: 'Kien Giang',
      price: 145,
      description: 'Kien Giang',
      photoUrl:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ca/db/5b/matira-beach.jpg?w=1400&h=-1&s=1',
      gallery: [],
      reviewCount: 5,
      reviewScore: 1,
      startDate: dayjs('2021-06-13').toDate(),
      endDate: dayjs('2021-06-15').toDate(),
      location: 'Ho Chi Minh, Viet Nam',
    },
  ],
};

export const appReducer = (state: IAppState = initState, action: TAction) => {
  switch (action.type) {
    case actionTypes.FORGOT_PASSWORD_REQUEST:
    case actionTypes.LOGIN_REQUEST:
    case actionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.FORGOT_PASSWORD_FAILURE:
    case actionTypes.FORGOT_PASSWORD_SUCCESS:
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.ADD_RECENT_SEARCH:
      return {
        ...state,
        recentSearches: [action.payload,...state.recentSearches],
      };
    case actionTypes.REMOVE_RECENT_SEARCH:
      const index = state.recentSearches.findIndex(
        item => item === action.payload,
      );
      return {
        ...state,
        recentSearches: [
          ...state.recentSearches.slice(0, index),
          ...state.recentSearches.slice(index + 1),
        ],
      };
    case actionTypes.LOGOUT:
      return initState;
    default:
      return state;
  }
};
