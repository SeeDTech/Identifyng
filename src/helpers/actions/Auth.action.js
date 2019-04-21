import { ACTION } from '../Constants'

const {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    LOGOUT,
    REFRESH_REQUEST,
    FETCH_USER_ERROR,
    FETCH_USER_SUCCESS
} = ACTION;


export const fetchLogin = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}
export const loginSuccessMessage = (payload) => {
 
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

export const fetchLoginrequest = () => {
    return {
        type: LOGIN_REQUEST,
    }
}

export const fetchLogout = () => {
    return {
        type: LOGOUT,
        
    }
}

export const logoutErrorMessage = () => {
    return {
        type:  LOGOUT_ERROR,
    }
}

export const fetchedUserSuccess = (payload)=>{
    return{
        type: FETCH_USER_SUCCESS,
        payload,
    }
}

export const fetchedUserError = (payload)=>{
    return{
        type: FETCH_USER_ERROR,
        payload,
    }
}

export const refreshReguest=()=>{
    return{
        type:REFRESH_REQUEST
    }
}


export const loginError = (payload) => {
    return {
        type: LOGIN_ERROR,
        payload:payload !==undefined? payload:"Connection failed"
    }
}