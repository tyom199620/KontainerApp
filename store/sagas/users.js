import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS } from "../actions/users";
import Api from "../../Api";

export default function* watcher() {
    yield takeLatest(LOGIN_REQUEST, login)
}

function* login(action) {
    try {
        const {email, password} = action.payload
        const { data } = yield call(Api.login, email, password);

        console.log(data)
        yield put({
            type: LOGIN_SUCCESS,
            payload: {
                data
            }
        });

    } catch (e) {
        console.warn(e);
        yield put({
            type: LOGIN_FAIL,
            message: e.message,
            payload: {
                data: e.response?.data || {},
            }
        })
    }
}
