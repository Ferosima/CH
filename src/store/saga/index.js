import {all, takeLatest} from 'redux-saga/effects';

import * as user from '../actions/auth';

// AUTH
import {fetchLogin, createUser} from './auth';

function* fetchLoginSaga() {
  yield takeLatest(user.fetchLogin, fetchLogin);
}
function* createUserSaga() {
  yield takeLatest(user.createUser, createUser);
}

export default function* rootSaga() {
  yield all([
    // AUTH
    fetchLoginSaga(),
    createUserSaga(),
  ]);
}
