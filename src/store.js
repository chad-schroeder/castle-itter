import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { all } from 'redux-saga/effects';
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as appReducer } from './App';
import { reducer as mapReducer } from './Map';
import { reducer as unitReducer } from './Units';

const rootReducer = combineReducers({
    app: appReducer,
    map: mapReducer,
    units: unitReducer,
});

function* rootSaga() {
    // yield all([organizerSaga(), sparkModalSaga(), appSaga(), previewSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
