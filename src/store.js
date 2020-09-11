import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as commonReducer, saga as commonSaga } from './App';
import { reducer as mapReducer, saga as mapSaga } from './Map';
import { reducer as unitReducer, saga as unitSaga } from './Units';

const rootReducer = combineReducers({
    common: commonReducer,
    map: mapReducer,
    units: unitReducer,
});

function* rootSaga() {
    // yield all([organizerSaga(), sparkModalSaga(), commonSaga(), previewSaga()]);
    yield all([mapSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
