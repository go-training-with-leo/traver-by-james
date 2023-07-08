import * as actionTypes from '../actionTypes';
import { bookTripSuccess, bookTripRequest,bookTripFailure } from "./action";

import { saveDoc } from "@/services";
import { ITrip } from "@/utils/interfaces";
import { Dispatch } from "redux";

export const bookTrip = (trip:ITrip) => async(dispatch:Dispatch)=>{
    dispatch(bookTripRequest())
    const bookTripStatus = await saveDoc({collection: 'trip',data: trip})
    bookTripStatus.success ? dispatch(bookTripSuccess(trip)) : dispatch(bookTripFailure())
}