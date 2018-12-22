import { ACTION } from '../Constants'

const {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGOUT,
} = ACTION;


export const fetchLogin = () => {
    return {
        type: LOGIN
    }
}

export const fetchLoginrequest = (payload) => {
    return {
        type: LOGIN_REQUEST,
        payload
    }
}

export const fetchLogout = () => {
    return {
        type: LOGOUT,
    }
}

export const loginError = () => {
    return {
        type: LOGIN_ERROR,
        payload: "Unable to login user"
    }
}