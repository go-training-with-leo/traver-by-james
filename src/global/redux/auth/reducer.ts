import { IAuthState } from '@/utils/interfaces';
import * as actionTypes from './actionTypes';
import { TAuthAction } from './actions';



const initialState: IAuthState = {
  user: null,
  error: '',
  isLoggedIn: true
};

export const authReducer = (
  state: IAuthState = initialState,
  action: TAuthAction,
) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        isLoggedIn: true
      };
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.FORGOT_PASSWORD_SUCCESS:
      return{
        ...state,
        error: ''
      }
    case actionTypes.SIGN_UP_FAILURE:
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.LOGOUT:
      return{
        ...state,
        isLoggedIn: false
      }
    default:
      return state;
  }
};
