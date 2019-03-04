import {createStore,compose,applyMiddleware} from 'redux'
import reducers from '../reducers'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk,createLogger),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );

export default store; 