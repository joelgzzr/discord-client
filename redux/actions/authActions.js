import axios from 'axios';
import to from 'await-to-js';

import { UNSET_CURRENT_USER, SET_CURRENT_USER, SIGNUP_ERRORS, SIGNIN_ERRORS } from '../types';

export const signUp = values => async dispatch => {
    const [err, response] = await to(axios({
        method: 'post',
        url: 'http://localhost:3001/auth/signup',
        data: {
            ...values
        },
        withCredentials: true
    }));

    if(err) {
        return dispatch({
            type: SIGNUP_ERRORS,
            payload: err.response.data.message
        })
    }

    dispatch({
        type: SIGNUP_ERRORS,
        payload: null
    })

    return window.location.replace('/profile?register=true');
}

export const signIn = values => async dispatch => {
    const [err, response] = await to(axios({
        method: 'post',
        url: 'http://localhost:3001/auth/signin',
        data: {
            ...values
        },
        withCredentials: true
    }));

    if(err) {
        return dispatch({
            type: SIGNIN_ERRORS,
            payload: err.response.data.message
        })
    }

    dispatch({
        type: SIGNIN_ERRORS,
        payload: null
    })

    return window.location.replace('/home?login=true');
}

export const meServer = (cookie) => async dispatch => {
    const [err, response] = await to(axios({
        method: 'get',
        url: 'http://localhost:3001/auth/me',
        withCredentials: true,
        headers: {
            cookie
        }
    }));

    if(err) {
        return dispatch({
            type: UNSET_CURRENT_USER
        });
    }

    return dispatch({
        type: SET_CURRENT_USER,
        payload: response.data
    })
}

export const signOut = () => dispatch => {
    dispatch({
        type: UNSET_CURRENT_EMPLOYEE
    })
    
    authContext.logOut();
}