import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';

import reducers from "./reducers";
import watchers from "./sagas";

const saga = createSagaMiddleware()

const middlewares = [
    saga
];

/*if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
}*/

const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
);
saga.run(watchers)

export default store
