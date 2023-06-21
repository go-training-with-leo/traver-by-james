import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';
import reduxStorage from './storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: reduxStorage,
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)
let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export {store, persistor}
