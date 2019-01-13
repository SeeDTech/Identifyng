import React from 'react'
import { fetchLogin, loginError, fetchLogout, loginSuccessMessage } from './Auth.action';

export const userLogin =(credentials)=>{
    return (dispatch)=>{
        dispatch(fetchLoginrequest())
        if(credentials) return dispatch(fetchLogin(credentials),()=>loginSuccessMessage())
        dispatch(loginError())
    }
}

export const userLogout =id =>{
    return (dispatch)=>{
        if (id) return dispatch(fetchLogout(id))
        dispatch(logoutErrorMessage())
    }
}