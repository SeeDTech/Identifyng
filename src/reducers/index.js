import { combineReducers } from 'redux';
import Auth from './Auth';
import InitSignUp from './InitSignUp'
export const reducers ={
    Auth,
    InitSignUp
}

const rootReducer = combineReducers({
   ...reducers
})

export default rootReducer;