import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { reducerPrefixFormat } from '../common';

const stateKey = 'fetching';

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
    fetching: false,
    fetchingCount: 0,
    downloadingPDF: false,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions(
    {
        started: null,
        stopped: null,
        updateDownloadingPdf: ['value'],
    },
    {
        prefix: reducerPrefixFormat(stateKey),
    },
);

/* ------------- Reducers ------------- */
const started = (state) =>
    Immutable(state).merge({
        fetching: state.fetchingCount + 1 > 0,
        fetchingCount: state.fetchingCount + 1,
    });

const stopped = (state) =>
    Immutable(state).merge({
        fetching: state.fetchingCount - 1 > 0,
        fetchingCount: state.fetchingCount > 0 ? state.fetchingCount - 1 : 0,
    });

const updateDownloadingPdf = (state, { value }) =>
    Immutable(state).merge({
        downloadingPDF: value,
    });

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
    [Types.STARTED]: started,
    [Types.STOPPED]: stopped,
    [Types.UPDATE_DOWNLOADING_PDF]: updateDownloadingPdf,
});

const reducerMap = { [stateKey]: reducer };

/* ------------- Selectors ------------- */
const getReducerState = (state) => state[stateKey];
const getFetchingStatus = ({ fetching }) => fetching;

/* ------------- Export ------------- */
export default {
    getFetchingStatus,

    // default export
    INITIAL_STATE,
    Types,
    Creators,

    stateKey,
    getReducerState,
    reducerMap,
};
