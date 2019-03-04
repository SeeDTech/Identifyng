import { ACTION } from '../helpers/Constants'

const {
   ADD_PHONE_BVN_REQUEST,
    BVN_VALIDATION,
    ADD_BVN_REQUEST,
    PHONE_BVN_SUCCESS,
    PHONE_BVN_ERROR,
    ADD_PHONE_BVN,
    SIGN_UP_OTP_VALIDATION_REQUEST,
    SIGN_UP_OTP_VALIDATION,
    ADD_PHONE_NUMBER_ERROR,
} = ACTION
const initState = {
    bvnIsValid:false,
    successMessage:null,
    isLoading:false,
    error:false,
    userData:{
        phone:'',
        bvn:'',
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
                    },
                    bvnIsValid:false,
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
                    error:false,
                    
                }
            default:
            return state
        }
    }

    export default InitSignUp