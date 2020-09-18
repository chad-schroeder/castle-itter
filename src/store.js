import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { all } from 'redux-saga/effects';
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as mapReducer } from './Map';
import { reducer as unitReducer } from './Units';
import { reducer as commonReducer } from './Common';

const rootReducer = combineReducers({
    common: commonReducer,
    map: mapReducer,
    units: unitReducer,
});

function* rootSaga() {
    // yield all([organizerSaga(), sparkModalSaga(), commonSaga(), previewSaga()]);
    // yield all([mapSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
