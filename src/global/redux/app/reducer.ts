import { AnyAction } from 'redux';
import * as actionTypes from '../actionTypes';
import { IAppState } from '@/utils/interfaces';

const initState: IAppState = {
  loading: false,
};

export const appReducer = (state: IAppState = initState, action: AnyAction) => {
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
    default:
      return state;
  }
};
