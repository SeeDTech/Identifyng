import React from 'react'
import { API } from '../services/api/constants';


const  {url, paths}= API

const headers = {
 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            
  
}


export const loginUser = (credentials)=>{
    const loginURL = url+paths.LOGIN
    console.log(loginURL)
    const method = 'POST'
    return fetch(loginURL,{
        method,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email:credentials.email,
            password:credentials.password
        })
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