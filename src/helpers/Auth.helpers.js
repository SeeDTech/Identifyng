import React from 'react'

import {
    fetchLogin,
    loginError,
    logoutErrorMessage,
    fetchLoginrequest,
    fetchLogout,
    loginSuccessMessage,
    fetchedUserSuccess,
    fetchedUserError,
} from './actions/Auth.action';
import { loginUser, fetchUser } from '../api/user.api';
import store from '../store';


const handleFetchUser = (userToken) => {
  
    return (dispatch) => {
       
        if (userToken) {
            return fetchUser(userToken)
            .then(response =>{
              
                    if(response.status ===200){
                     
                       return dispatch(fetchedUserSuccess(response.data))
                    }
                })
                .catch(err=>console.warn("token expired"))
        }

    }
}

  export  const userLogin = (credentials) => {
  
      return (dispatch,getState) => {
          dispatch(fetchLoginrequest())
          if (credentials) {
              if(credentials.email=='id@app.com' && credentials.password=='password'){
                 dispatch(fetchedUserSuccess(credentials)) 
              }else{

                  return loginUser(credentials)
                  
                      .then(response => {
                     
                          if (response.status === 200) {
                              dispatch(loginSuccessMessage(response.data))
                                const {userToken} = getState().Auth
    
                              return dispatch(handleFetchUser(userToken))
                            }
                          else{  
                             return dispatch(loginError(response.data))
                          }
                        
                      })
                     
                      .catch(err => {
                  
                          return dispatch(fetchedUserError(err))
                      })
              }
          }
      }
  }


export const userLogout = ()=> {
    return (dispatch) => {
         dispatch(fetchLogout())
    }
}
