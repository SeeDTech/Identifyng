import { ACTION } from '../helpers/Constants'


const { LOGIN_REQUEST,LOGIN_ERROR, LOGIN,LOGOUT } = ACTION
const initState = {
    errorMessage:null,
    successMessage:null,
    isLoading:false,
    isLoggedIn:false,
    user: [
        {
            id: 'id-2300011',
            name: 'Mr Moo Aliko',
            image: 'user.PNG',
            email: 'mooali@app.com',
            password: 'mooali22',
            userToken:null,
        }
    ]
}

const Auth = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:

           return state
        case LOGIN_ERROR:

         return state;
        case LOGIN:

           return state;
           case LOGOUT:

           return state;
            default:
            return state;
    }
}

export default Auth;