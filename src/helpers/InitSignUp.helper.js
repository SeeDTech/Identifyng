import {
    fetchphoneBvnrequest,
    fetchBvnValidation,
    fetchAddPhoneBvn,
    fetchphoneBvnSuccess,
    fetchphoneBvnError,
    getuserOtpReguest,
    getuserOtp,
    getuserOtpError,
    refreshReguest,
    fetchValidateOtpReguest,
    fetchValidateOtp,
    fetchValidateOtpError,
} from './actions/InitSignUp.action'
import { validateBVN, getOTP } from '../api/user.api';

const checkBVN = (bvn) => {
    regex = /^222\d+$/;
    return regex.test(bvn);
}

export const addPhoneBvn = (phoneBvn) => {

    return (dispatch, getState) => {
        dispatch(fetchphoneBvnrequest())
        if (checkBVN(phoneBvn.bvn)) {
            dispatch(fetchBvnValidation(phoneBvn))
            const { bvnIsValid } = getState().InitSignUp
            if (bvnIsValid === true) {
                return dispatch(fetchphoneBvnSuccess())
                //    return validateBVN(phoneBvn.bvn)
                //    .then(data=>{

                //        dispatch(fetchBvnValidation(data.data))
                //        const {bvnIsValid} =getState().InitSignUp
                //        if(bvnIsValid===true){
                //         return   dispatch(fetchphoneBvnSuccess())
                //        }
                //    })
                //    .catch(error=>{
                //      return  dispatch(fetchphoneBvnError())
                //    })
            } 

        }else {
               dispatch(fetchphoneBvnError())
               setTimeout(()=>{dispatch(refreshReguest())},3000)
            }
    }
}
// export  const getUserOTP = (phoneBvn) => {
//     return(dispatch,getState)=>{
//         dispatch(getuserOtpReguest())
//         if(phoneBvn){
//           return  getOTP(phoneBvn)
//             .then(data=>{

//                 dispatch(getuserOtp(data))
//             })
//             .catch(error=>{
//                 dispatch(getuserOtpError())
//             })
//         }
//     }
// }

export const validateOTP = (otp) => {
    return (dispatch, getState) => {
        dispatch(fetchValidateOtpReguest())
        if (otp) {
            const { userData } = getState().InitSignUp
            if (otp == 1234){
                dispatch(fetchValidateOtp())
            }else{
                dispatch(fetchValidateOtpError()),
                setTimeout(()=>{dispatch(refreshReguest())},3000)
            } 
            
        }
    }
}