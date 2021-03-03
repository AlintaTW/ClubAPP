// take from reducers & put to Fetching reducer
import { put, takeEvery } from 'redux-saga/effects';

import FetchingRedux from './FetchingRedux';

const started = function* ({ type }) {
    // __DEV__ && console.warn('started ', type)
    yield put(FetchingRedux.Creators.started());
};

const stopped = function* ({ type }) {
    // __DEV__ && console.warn('stopped ', type)
    yield put(FetchingRedux.Creators.stopped());
};

export default [
];
