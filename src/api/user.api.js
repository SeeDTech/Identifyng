import React from 'react'
import { API, bvnChecker } from '../services/api/constants';
import Axios from 'axios';


const  {url, paths}= API


/*Validate and return token */
export const loginUser = (credentials)=>{
     const loginURL = url+paths.LOGIN
    // console.log(loginURL)
    return Axios.post(loginURL,{
        email:credentials.email,
        password:credentials.password
    })
    
}

/**
    to get the auth user data
**/
export const fetchUser=(usertoken)=>{
    const UserDataURL = url+paths.AUTHUSER
   return Axios.get(UserDataURL,{
        headers: {
            'Authorization':'Bearer'+usertoken
        }
      })
}
export const SignUpUser = (credentials)=>{
    const signUpURL = url+paths.SIGNUP
    const method = 'POST'
    return fetch(signUpURL,{
        method,
        headers:apiHeader(),
        body:JSON.stringify({
            email:credentials.email,
            name:credentials.name,
            password:credentials.password,
        })
    })
}

export const validateBVN =(bvn)=>{
 
    const status = response =>{
        if(response.status===200){
             return response;
        }else{
            Promise.reject(response)
        }
    }

    return Axios.get(`https://api.paystack.co/bank/resolve_bvn/${bvn}`,{
        headers:{
            'Authorization':'Bearer sk_live_b88d24fb83f84e6580d8d85d72416fc4a007bc9b'
        }
    })
    .then(status)
            
}

export const getOTP =(credentials)=>{
    const status = response =>{
        if(response.status===200){
             return response;
        }else{
            Promise.reject(response)
        }
    }
    const userOTPUrl = url+paths.SENDOTP
  return  Axios.post(userOTPUrl,{
       phone:credentials.phone,
       bvn:credentials.bvn 
    }).then(status)
}