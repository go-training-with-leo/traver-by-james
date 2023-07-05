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
  destinations: [],
};

export const appReducer = (state: IAppState = initState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.FORGOT_PASSWORD_REQUEST:
    case actionTypes.LOGIN_REQUEST:
    case actionTypes.SIGN_UP_REQUEST:
    case actionTypes.BOOK_TRIP_REQUEST:
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
    case actionTypes.BOOK_TRIP_SUCCESS:
    case actionTypes.BOOK_TRIP_FAILURE:
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
    case actionTypes.LOAD_ALL_DESTINATION:
      return {
        ...state,
        destinations: action.payload 
      }
    
    case actionTypes.LOGOUT:
      return initState;
    default:
      return state;
  }
};
