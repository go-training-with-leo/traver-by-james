import { IAddFavorite, IBookTripSuccess, IDestination, IRemoveFavorite, ITrip } from '@/utils/interfaces';
import * as actionTypes from '../actionTypes'

export const bookTripSuccess = (trip: ITrip):IBookTripSuccess => ({
  type: actionTypes.BOOK_TRIP_SUCCESS,
  payload: trip,
});

export const bookTripRequest = () => ({
  type: actionTypes.BOOK_TRIP_REQUEST,
});

export const bookTripFailure = () => ({
  type: actionTypes.BOOK_TRIP_FAILURE,
});

export const addFavorite = (destination: IDestination): IAddFavorite=>({
    type: actionTypes.ADD_FAVORITE,
    payload: destination
})

export const removeFavorite = (destination: IDestination): IRemoveFavorite => ({
  type: actionTypes.REMOVE_FAVORITE,
  payload: destination,
});
