import { ACTION } from '../helpers/Constants'


const { LOGIN_REQUEST,LOGIN_ERROR,LOGIN_SUCCESS,FETCH_USER_SUCCESS,FETCH_USER_ERROR, LOGIN,LOGOUT } = ACTION
const initState = {
    errorMessage:'',
    successMessage:null,
    isLoading:false,
    error:false,
    isLoggedIn:false,
    userToken:'',
    AuthUser:[],
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
                errorMessage:action.payload.data.error
              
            }
        case LOGIN_SUCCESS:
       
        return{
            ...state,
            isLoading:true,
            error:false,
            errorMessage:'',
            userToken: action.payload.data.token
        }
        case FETCH_USER_ERROR:
        return{
            ...state,
            AuthUser:[],
            isLoading:false,
            error:true,
            isLoggedIn:false,
            errorMessage:"Failed to login",
        }
        case FETCH_USER_SUCCESS:
        return{
            ...state,
            isLoading:false,
            isLoggedIn:true,
            error:false,
            errorMessage:'',
            AuthUser: action.payload,
           
        }
           case LOGOUT:
            return{
                ...state,
                isLoading:false,
                error:false,
                isLoggedIn:false,
                userToken:'',
            }
            default:
            return state;
    }
}

export default Auth; 