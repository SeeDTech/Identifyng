import React from 'react'
import { fetchLogin,
     loginError,
      logoutErrorMessage,
       fetchLoginrequest,
        fetchLogout,
        loginSuccessMessage
         } from './actions/Auth.action';
import { loginUser } from '../api/user.api';

export const userLogin = credentials => {
    return (dispatch) => {
        dispatch(fetchLoginrequest())
        if (credentials) {
            return loginUser(credentials)
                .then(response => {
                    console.log(response)
                    if (response.status === 200) {
                        return dispatch(loginSuccessMessage(response))
                    } 
                        return dispatch(loginError(response))
                })
                .catch(err => {
                    console.log(err)
                    return dispatch(loginError(err))
                })
        }
    }
}

export const userLogout = id => {
    return (dispatch) => {
        if (id) return dispatch(fetchLogout(id))
        dispatch(logoutErrorMessage())
    }
}