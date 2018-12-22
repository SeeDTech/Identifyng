import {createStore,compose,applyMiddleware} from 'redux'
import reducers from '../reducers'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(reducers);

export default store; 