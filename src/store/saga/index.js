import {all, takeLatest} from 'redux-saga/effects';

import * as user from '../actions/auth';
import * as events from '../actions/events';
// AUTH
import {fetchLogin, createUser} from './auth';

import {fetchEvents} from './events';

function* fetchLoginSaga() {
  yield takeLatest(user.fetchLogin, fetchLogin);
}
function* createUserSaga() {
  yield takeLatest(user.createUser, createUser);
}
function* fetchEventsSaga() {
  yield takeLatest(events.fetchEvents, fetchEvents);
}
export default function* rootSaga() {
  yield all([
    // AUTH
    fetchLoginSaga(),
    createUserSaga(),
    fetchEventsSaga(),
  ]);
}
