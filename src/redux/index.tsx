import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import createStore from './createStore';
import R from 'ramda';
import React from 'react';
import ReduxProviderFactory from './_providers/ReduxProviderFactory';
import * as reducers from './reducers';
import * as sagas from './sagas';

/* ------------- Reducers ------------- */
const allReducers = R.pipe(
    R.values,
    R.map(R.prop('reducerMap')),
    R.mergeAll,
)(reducers);

const rootReducer = combineReducers(allReducers);

/* ------------- Sagas ------------- */
const allSagas = R.pipe(R.values, R.flatten)(sagas);

const rootSaga = function* () {
    yield all(allSagas);
};

/* ------------- Create Store ------------- */
export const { store, persistor } = createStore(rootReducer, rootSaga);

/* ------------- Create Provider ------------- */
export const ReduxProvider = ({ loading, children }) => (
    <ReduxProviderFactory loading={loading} persistor={persistor} store={store}>
        {children}
    </ReduxProviderFactory>
);
