import { ACTION } from '../Constants'

const {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    LOGOUT,
} = ACTION;


export const fetchLogin = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}
export const loginSuccessMessage = () => {
    return {
        type: LOGIN_SUCCESS,
    }
}

export const fetchLoginrequest = (payload) => {
    return {
        type: LOGIN_REQUEST,
        payload
    }
}

export const fetchLogout = (id) => {
    return {
        type: LOGOUT,
        payload:id
    }
}

export const logoutErrorMessage = () => {
    return {
        type:  LOGOUT_ERROR,
    }
}

export const loginError = () => {
    return {
        type: LOGIN_ERROR,
       
    }
}