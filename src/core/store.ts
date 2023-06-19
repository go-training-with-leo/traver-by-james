import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;