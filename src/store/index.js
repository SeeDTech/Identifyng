import {createStore,compose,applyMiddleware} from 'redux'
import reducers from '../reducers'
// import {persistReducer } from 'redux-persist'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
// import storage from 'redux-persist/lib/storage'


// const persistConfig = {
//     key: 'root',
//     storage,
//   }

//   const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(
   reducers,
    {},
    compose(
        applyMiddleware(thunk,createLogger),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );

export default store; 