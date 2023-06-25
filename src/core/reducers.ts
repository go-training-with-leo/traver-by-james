
import { appReducer, authReducer, userReducer } from '@/global/redux';
import { combineReducers } from 'redux';


const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    user: userReducer
})

export default reducers;