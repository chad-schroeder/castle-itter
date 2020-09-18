import {
    select, call, put, take, takeLatest, takeEvery,
} from 'redux-saga/effects';

import { spaces } from './selectors';

function* fetchMapSpaces() {
    yield put({ type: 'SET_MAP_SPACES', payload: spaces });
}

export default function* root() {
    yield takeLatest('GET_MAP_SPACES', fetchMapSpaces);
}
