import * as actionTypes from '../actionTypes';

export const addSearch = (value: string)=>({
    type: actionTypes.ADD_RECENT_SEARCH,
    payload: value
})

export const removeSearch = (value: string) => ({
  type: actionTypes.REMOVE_RECENT_SEARCH,
  payload: value,
});