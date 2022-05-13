export const SET_TOKEN = 'SET_TOKEN';

export function setToken(token) {
    return {
        type: SET_TOKEN,
        payload: {
            token
        }
    }
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function loginRequest(email, password) {
    return {
        type: LOGIN_REQUEST,
        payload: {
            email,
            password
        }
    }
}

export const LOG_OUT = 'LOG_OUT';

export function logoutRequest() {
    return {
        type: LOG_OUT,
    }
}
