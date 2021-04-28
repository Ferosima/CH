import {all, takeLatest} from 'redux-saga/effects';

import * as user from '../actions/auth';
import * as events from '../actions/events';
import * as calendar from '../actions/calendar';
// AUTH
import {fetchLogin, createUser} from './auth';

import {fetchEvents} from './events';
import {
  fetchCalendar,
  fetchIntersectingEvents,
  addEventToCalendar,
  deleteEventFromCalendar,
} from './calendar';

function* fetchLoginSaga() {
  yield takeLatest(user.fetchLogin, fetchLogin);
}
function* createUserSaga() {
  yield takeLatest(user.createUser, createUser);
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
    // EVENT
    fetchEventsSaga(),
    // CALENDAR
    fetchCalendarSaga(),
    fetchIntersectingEventsSaga(),
    addEventToCalendarSaga(),
    deleteEventFromCalendarSaga(),
  ]);
}
