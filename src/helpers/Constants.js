export const ACTION = {
    //Authentication

    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_ERROR: 'LOGOUT_ERROR',
    /* fetching user constants*/
    FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR:'FETCH_USER_ERROR',
    /* Add user phone number*/
    ADD_PHONE_NUMBER_REQUEST:'ADD_PHONE_NUMBER_REQUEST',
    ADD_PHONE_NUMBER: 'ADD_PHONE_NUMBER',
    ADD_PHONE_NUMBER_ERROR:'ADD_PHONE_NUMBER_ERROR',
    /* Add user BVN*/
    ADD_BVN_REQUEST:'ADD_BVN_REQUEST',
    ADD_BVN: 'ADD_BVN',
    BVN_VALIDATION: 'BVN_VALIDATION',
     /* user Phone BVN*/
    ADD_PHONE_BVN_REQUEST:'ADD_PHONE_BVN_REQUEST',
    ADD_PHONE_BVN: 'ADD_PHONE_BVN',
    PHONE_BVN_ERROR:'PHONE_BVN_ERROR',
    PHONE_BVN_SUCCESS:'PHONE_BVN_SUCCESS',
    /* OTP Validaion*/
    GET_OTP_REQUEST:'GET_OTP_REQUEST',
    GET_OTP:'GET_OTP',
    GET_OTP_ERROR:'GET_OTP_ERROR',
    SIGN_UP_OTP_VALIDATION: 'SIGN_UP_OTP_VALIDATION',
    SIGN_UP_OTP_VALIDATION_REQUEST: 'SIGN_UP_OTP_VALIDATION_REQUEST',
    SIGN_UP_OTP_VALIDATION_ERROR:'SIGN_UP_OTP_VALIDATION_ERROR',
    /* Account Generation*/
    GENERATE_USER_REQUEST: 'GENERATE_USER_REQUEST',
    GENERATE_USER:'GENERATE_USER',
    GENERATE_USER_SUCCESS:'GENERATE_USER_SUCCESS',
};
export const REG_EXPRESSION={
    
     EMAIL:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
     PASSWORD: /^[a-z]+$/,
}

export const ERROR_CONST= {
    OTP:{
        INVALID:'Invalid OTP',
        INCORRECT:'Incorrect OTP',
        TIMEOUT:'OTP has Expired',
        EMPTY_STRING:'OTP cannot be empty',
    },
    PHONE:{
        INVALID:'Invalid Phone number',
    },
    BVN:{
        INVALID:'Invalid BVN',
        EMPTY_STRING:'BVN cannot be empty',
    }
}