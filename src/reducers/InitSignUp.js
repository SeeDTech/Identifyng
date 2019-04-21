import { ACTION } from '../helpers/Constants'

const {
   ADD_PHONE_BVN_REQUEST,
    BVN_VALIDATION,
    ADD_BVN_REQUEST,
    PHONE_BVN_SUCCESS,
    PHONE_BVN_ERROR,
    ADD_PHONE_BVN,
    REFRESH_REQUEST,
    SIGN_UP_OTP_VALIDATION_REQUEST,
    SIGN_UP_OTP_VALIDATION,
    GET_OTP,
    GET_OTP_ERROR,
    SIGN_UP_OTP_VALIDATION_ERROR,
    GET_OTP_REQUEST,
    ADD_PHONE_NUMBER_ERROR,
} = ACTION
const initState = {
    bvnIsValid:false,
    successMessage:null,
    isLoading:false,
    isValidOTP:false,
    error:false,
    userData:{
        phone:'',
        bvn:'',
        otp:'',
    },
    bvnData:{},
}
 
    const InitSignUp = (state = initState, action) => {
        switch (action.type) {
            case ADD_PHONE_BVN_REQUEST:
                return {
                    ...state,
                    isLoading:true,
                    error:false,
                }
                case ADD_PHONE_BVN:
                return{
                    ...state,
                    isLoading:false,
                    userData:{...state.userData,...action.payload}
                }
                case PHONE_BVN_ERROR:
                return{
                    ...state,
                    isLoading:false,
                    error:true,
                    userData:{
                        phone:'',
                        bvn:'',
                        bvnIsValid:false,
                    }
                }
                case PHONE_BVN_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    error:false,
                    bvnIsValid:true,
                }
                case BVN_VALIDATION:
                return{
                    ...state,
                    bvnData:{...state.bvnData,...action.payload},
                    bvnIsValid:true,
                    error:false,
                }
                case GET_OTP:
                return{
                    ...state,
                    userData:{
                        ...state.userData,
                        otp:action.payload.otp
                    },
                    isLoading:false,
                }
                case GET_OTP_REQUEST:
                return{
                    ...state,
                    isLoading:true,
                }
                case GET_OTP_ERROR:
                return{
                    ...state,
                    isLoading:false,
                    error:true,
                }
                case SIGN_UP_OTP_VALIDATION_REQUEST:
                return{
                    ...state,
                    isLoading:true,
                    error:false,
                }
                case SIGN_UP_OTP_VALIDATION:
                return{
                    ...state,
                    isLoading:false,
                    isValidOTP:true,
                    error:false,
                }

                case REFRESH_REQUEST:
                return{
                    ...state,
                    isloading:false,
                    error:false,
                }
                case SIGN_UP_OTP_VALIDATION_ERROR:
                return{
                    ...state,
                    isloading:false,
                    error:true,
                    isValidOTP:false,
                    isLoading:false,
                }
            default:
            return state
        }
    }

    export default InitSignUp