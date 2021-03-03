import * as ErrorRedux from './ErrorRedux';

// take from reducers & put to Error reducer
import { put, takeEvery } from 'redux-saga/effects';

const requestFailure = function* ({ error }) {
    if (!error) {
        return;
    }
    if (typeof error === 'string') {
        yield put(ErrorRedux.Creators.errorsQueueAppend(new Error(error)));
    } else if (typeof error.message === 'string') {
        yield put(ErrorRedux.Creators.errorsQueueAppend(error));
    }
};

const setRequestFailure = function* ({ payload: { error } }) {
    if (!error) {
        return;
    }
    if (typeof error === 'string') {
        yield put(ErrorRedux.Creators.errorsQueueAppend(new Error(error)));
    } else if (typeof error.message === 'string') {
        yield put(ErrorRedux.Creators.errorsQueueAppend(error));
    }
};

export default [
    takeEvery(ErrorRedux.Types.REQUEST_FAILURE, requestFailure),
];
