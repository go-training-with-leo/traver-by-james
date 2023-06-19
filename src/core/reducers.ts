
import { appReducer, authReducer } from '@/global/redux';
import { combineReducers } from 'redux';


const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
})

export default reducers;