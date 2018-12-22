import { combineReducers } from 'redux';
import Auth from './Auth';

export const reducers ={
    Auth,
}

const rootReducer = combineReducers({
   ...reducers
})

export default rootReducer;