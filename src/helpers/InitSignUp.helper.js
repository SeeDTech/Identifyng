import {
    fetchphoneBvnrequest,
    fetchBvnValidation,
    fetchAddPhoneBvn,
    fetchphoneBvnSuccess,
    fetchphoneBvnError,
    getuserOtpReguest,
    getuserOtp,
    getuserOtpError,
    fetchValidateOtpReguest,
    fetchValidateOtp,
    fetchValidateOtpError,
} from './actions/InitSignUp.action'
import { validateBVN, getOTP } from '../api/user.api';


export  const addPhoneBvn = (phoneBvn) => {
  
    return (dispatch,getState) => {
        dispatch(fetchphoneBvnrequest())
        if (phoneBvn.bvn) {
           return validateBVN(phoneBvn.bvn)
           .then(data=>{

               dispatch(fetchBvnValidation(data.data))
               const {bvnIsValid} =getState().InitSignUp
               if(bvnIsValid===true){
                return   dispatch(fetchphoneBvnSuccess())
               }
           })
           .catch(error=>{
             return  dispatch(fetchphoneBvnError())
           })
        }
    }
    
}

export  const getUserOTP = (phoneBvn) => {
    return(dispatch,getState)=>{
        dispatch(getuserOtpReguest())
        if(phoneBvn){
          return  getOTP(phoneBvn)
            .then(data=>{
               
                dispatch(getuserOtp(data))
            })
            .catch(error=>{
                dispatch(getuserOtpError())
            })
        }
        
    }
}

export const validateOTP = (otp)=>{
    return(dispatch,getState)=>{
        dispatch(fetchValidateOtpReguest())
        if(otp){
            const {userData} = getState().InitSignUp
            if(userData.otp ===otp) return dispatch(fetchValidateOtp())
            return dispatch(fetchValidateOtpError())
        }
    }
}