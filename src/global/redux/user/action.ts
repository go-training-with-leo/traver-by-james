import { IAddFavorite, IDestination, IRemoveFavorite, ITrip } from '@/utils/interfaces';
import * as actionTypes from './actionTypes';

// export const bookTrip = (trip: ITrip) => ({
//   type: actionTypes.BOOK_TRIP_SUCCESS,
//   payload: trip,
// });

export const addFavorite = (destination: IDestination): IAddFavorite=>({
    type: actionTypes.ADD_FAVORITE,
    payload: destination
})

export const removeFavorite = (destination: IDestination): IRemoveFavorite => ({
  type: actionTypes.REMOVE_FAVORITE,
  payload: destination,
});

