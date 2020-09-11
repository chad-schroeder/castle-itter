import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { reducer as mapReducer, saga as mapSaga } from './Map';

const rootReducer = combineReducers({
    map: mapReducer,
});

function* rootSaga() {
    // yield all([organizerSaga(), sparkModalSaga(), commonSaga(), previewSaga()]);
    yield all([mapSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
