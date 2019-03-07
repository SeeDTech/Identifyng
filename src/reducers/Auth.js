import { ACTION } from '../helpers/Constants'


const { LOGIN_REQUEST,LOGIN_ERROR,LOGIN_SUCCESS, LOGIN,LOGOUT } = ACTION
const initState = {
    errorMessage:'authentication failed',
    successMessage:null,
    isLoading:false,
    error:false,
    isLoggedIn:false,
    userToken:''
}

const Auth = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:  
           return{
               ...state,
               isLoading:true,
               error:false,
           }
        case LOGIN_ERROR:
      
            return{
                ...state,
                isLoading:false,
                error:true,
              
            }
        case LOGIN_SUCCESS:
        console.log(JSON.stringify(action.payload._bodyText))
        return{
            ...state,
            isLoading:false,
            error:false,
            userToken: action.payload._bodyText
        }
           case LOGOUT:
            return{
                ...state,
                isLoading:false,
                error:false,
                userToken:'',
            }
            default:
            return state;
    }
}

export default Auth;