import {
    fetchphoneBvnrequest,
    fetchBvnValidation,
    fetchAddPhoneBvn,
    fetchphoneBvnSuccess,
    fetchphoneBvnError,
} from './actions/InitSignUp.action'
import { validateBVN } from '../api/user.api';


export  const addPhoneBvn = (phoneBvn) => {
  
    return (dispatch,getState) => {
        dispatch(fetchphoneBvnrequest())
        if (phoneBvn.bvn) {
           return validateBVN(phoneBvn.bvn)
           .then(data=>{
               console.log(data)
               dispatch(fetchBvnValidation(data.data))
               const {bvnIsValid} =getState().InitSignUp
               if(bvnIsValid===true){
                   dispatch(fetchphoneBvnSuccess())
               return dispatch(fetchAddPhoneBvn(phoneBvn))
               }
           })
           .catch(err=>{
               console.log(err)
             return  dispatch(fetchphoneBvnError())
           })
        }
    }
    
}