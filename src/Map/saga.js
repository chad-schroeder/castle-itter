import {
    select, call, put, take, takeLatest, takeEvery,
} from 'redux-saga/effects';

import { tiles } from './selectors';

function* vacateTile() {
    console.log('tile should be vacated');
    // yield put({ type: 'SET_MAP_SPACES', payload: spaces });
}

export default function* root() {
    yield takeLatest('UNIT_KIA', vacateTile);
}
