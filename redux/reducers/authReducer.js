import { 
    SET_CURRENT_USER,
    UNSET_CURRENT_USER,
    SIGNUP_ERRORS,
    SIGNIN_ERRORS
} from '../types';

const initialState = {
    isAuthenticated: false,
    user: {},
    signUpErrors: null,
    signInErrors: null
}

export default function authReducer(state = initialState, action) {
    const reducer = {
        [SET_CURRENT_USER]: {
            ...state,
            user: action.payload,
            isAuthenticated: true
        },
        [UNSET_CURRENT_USER]: {
            ...state,
            user: {},
            isAuthenticated: false
        },
        [SIGNUP_ERRORS]: {
            ...state,
            signUpErrors: action.payload
        },
        [SIGNIN_ERRORS]: {
            ...state,
            signInErrors: action.payload
        }
    }

    return reducer[action.type] || state;
}