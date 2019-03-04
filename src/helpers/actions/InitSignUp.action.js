import { ACTION } from '../Constants'

const {
    PHONE_BVN_ERROR,
    PHONE_BVN_SUCCESS,
    BVN_VALIDATION,
    ADD_PHONE_BVN_REQUEST,
    ADD_PHONE_BVN,
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