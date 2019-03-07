import { ACTION } from '../Constants'

const {
    PHONE_BVN_ERROR,
    PHONE_BVN_SUCCESS,
    BVN_VALIDATION,
    ADD_PHONE_BVN_REQUEST,
    ADD_PHONE_BVN,
    GET_OTP_REQUEST,
    GET_OTP,
    SIGN_UP_OTP_VALIDATION_REQUEST,
    SIGN_UP_OTP_VALIDATION,
    SIGN_UP_OTP_VALIDATION_ERROR,
    GET_OTP_ERROR,
} = ACTION;


export const fetchphoneBvnrequest = () => {
 
    return {
        type: ADD_PHONE_BVN_REQUEST,
        
    }
}

export const fetchAddPhoneBvn = payload => {
    return {
        type:  ADD_PHONE_BVN,
        payload
    }
}

export const fetchphoneBvnError = () => {
    return {
        type: PHONE_BVN_ERROR, 
    }
}


export const fetchphoneBvnSuccess = ()=>{
    return{
        type: PHONE_BVN_SUCCESS,
        
    }
}


export const fetchBvnValidation = (payload) => {
    return {
        type: BVN_VALIDATION,
        payload
    }
}

export const fetchValidateOtpReguest=()=>{
    return{
        type:SIGN_UP_OTP_VALIDATION_REQUEST,
    }
}

export const fetchValidateOtp=(payload)=>{
    return{
        type:SIGN_UP_OTP_VALIDATION,
        payload
    }
}
export const fetchValidateOtpError=()=>{
    return{
        type:SIGN_UP_OTP_VALIDATION_ERROR,
    }
}
export const getuserOtp= (payload)=>{
    return{
        type:GET_OTP,
        payload:payload.data,
    }
}
export const getuserOtpReguest =()=>{
    return{
        type:GET_OTP_REQUEST,
    }
}
export const getuserOtpError=()=>{
    return{
      type:  GET_OTP_ERROR
    }
}