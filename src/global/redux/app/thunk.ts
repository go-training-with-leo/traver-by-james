import { getAll } from '@/services';
import * as actionTypes from '../actionTypes'
import { Dispatch } from "redux";
import { COLLECTION } from '@/utils/enums';

export const loadAllDestionation = () => async (dispatch: Dispatch) =>{
    const destinations = await getAll({collection: COLLECTION.PLACE})
    dispatch({
        type: actionTypes.LOAD_ALL_DESTINATION,
        payload: destinations
    })
}