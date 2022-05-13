import {SET_TOKEN, LOGIN_SUCCESS, LOG_OUT, LOGIN_FAIL} from "../actions/users";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    account: {},
    token: '',
    loginErrors: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN: {
            return {
                ...state,
                token: action.payload.token,
            }
        }

        case LOG_OUT: {
            (async () => {
                await AsyncStorage.removeItem('token')
            })()
            return {
                ...state,
                token: '',
                account: {}
            }
        }

        case LOGIN_SUCCESS: {
            const {data} = action.payload;

            (async () => {
                await AsyncStorage.setItem('token', data.token)
                await AsyncStorage.setItem('account', JSON.stringify(data.user))
            })()

            return {
                ...state,
                token: data.token,
                account: data.user
            }
        }

        case LOGIN_FAIL: {
            return {
                ...state,
                loginErrors: data.errors
            }
        }

        default: {
            return state
        }
    }
}
