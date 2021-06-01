import {all, takeLatest} from 'redux-saga/effects';

import * as auth from '../actions/auth';
import * as user from '../actions/user';
import * as events from '../actions/events';
import * as calendar from '../actions/calendar';
// AUTH
import {fetchLogin, createUser} from './auth';

import {fetchUser} from './user';

import {fetchEvents} from './events';

import {
  fetchCalendar,
  fetchIntersectingEvents,
  addEventToCalendar,
  deleteEventFromCalendar,
} from './calendar';

function* fetchLoginSaga() {
  yield takeLatest(auth.fetchLogin, fetchLogin);
}
function* createUserSaga() {
  yield takeLatest(auth.createUser, createUser);
}
function* fetchUserSaga() {
  yield takeLatest(user.fetchUser, fetchUser);
}
function* fetchEventsSaga() {
  yield takeLatest(events.fetchEvents, fetchEvents);
}
function* fetchCalendarSaga() {
  yield takeLatest(calendar.fetchCalendar, fetchCalendar);
}
function* fetchIntersectingEventsSaga() {
  yield takeLatest(calendar.fetchIntersectingEvents, fetchIntersectingEvents);
}
function* addEventToCalendarSaga() {
  yield takeLatest(calendar.addEventToCalendar, addEventToCalendar);
}
function* deleteEventFromCalendarSaga() {
  yield takeLatest(calendar.deleteEventFromCalendar, deleteEventFromCalendar);
}

export default function* rootSaga() {
  yield all([
    // AUTH
    fetchLoginSaga(),
    createUserSaga(),
    // USER
    fetchUserSaga(),
    // EVENT
    fetchEventsSaga(),
    // CALENDAR
    fetchCalendarSaga(),
    fetchIntersectingEventsSaga(),
    addEventToCalendarSaga(),
    deleteEventFromCalendarSaga(),
  ]);
}
