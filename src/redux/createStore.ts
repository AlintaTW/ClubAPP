import { applyMiddleware, compose, createStore } from 'redux';
import { isPersistActive, persistConfig } from './_reduxPersist/persistConfig';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

// creates the store
export default (rootReducer, rootSaga) => {
    /* ------------- Redux Configuration ------------- */

    const middleware = [];
    const enhancers = [];

    /* ------------- Thunk Middleware ------------- */
    middleware.push(thunk);

    /* ------------- Saga Middleware ------------- */
    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);

    /* ------------- Assemble Middleware ------------- */
    enhancers.push(applyMiddleware(...middleware));

    /* ------------- createStore ------------- */

    const store = createStore(
        isPersistActive
            ? persistReducer(persistConfig, rootReducer)
            : rootReducer,
        compose(...enhancers),
    );

    const persistor = isPersistActive ? persistStore(store) : null;

    // kick off root saga
    sagaMiddleware.run(rootSaga);

    return { store, persistor };
};
