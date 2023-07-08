import { IUserState } from '@/utils/interfaces';
import * as actionTypes from '../actionTypes';
import { TAction } from '@/utils/types/redux/action';

const initialState: IUserState = {
  booked: [],
  wishlist: [],
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
