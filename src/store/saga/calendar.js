import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import {select, call, put} from 'redux-saga/effects';
import moment from 'moment';
import {
  fetchCalendarSuccess,
  fetchCalendarFailed,
  fetchIntersectingEventsSuccess,
  fetchIntersectingEventsFailed,
  addEventToCalendarSuccess,
  addEventToCalendarFailed,
  deleteEventFromCalendarSuccess,
  deleteEventFromCalendarFailed,
} from '../actions/calendar';
import {getUserId} from '../selectors/user';
import {
  dateToTimestamp,
  getDayRange,
  dateToDay,
  timestampToDate,
} from '../../const/functions/time';

const firebaseApp = firebase.apps[0];
const rsf = new ReduxSagaFirebase(firebaseApp);
export function* fetchCalendar() {
  try {
    const id_user = yield select(getUserId);
    const data = [];

    const snapshot = yield call(
      rsf.firestore.getCollection,
      firestore()
        .collection('Calendar')
        .where('id_user', '==', id_user)
        .orderBy('time_begin', 'asc'),
    );
    snapshot.forEach((querySnapshot) => {
      data.push(Object.assign(querySnapshot.data(), {id: querySnapshot.id}));
    });
    yield put(fetchCalendarSuccess(data));
  } catch (error) {
    console.log('ERROR FETCH CALENDAR', error);
    yield put(fetchCalendarFailed(error));
  }
}

export function* fetchIntersectingEvents({payload}) {
  try {
    const {time_begin, time_end} = payload;
    const [start_day, end_day] = getDayRange(time_begin);
    const id_user = yield select(getUserId);
    const data = [];
    // we have to get list evetns on current day
    // because firebase cannot to process >= and <= for differents fields
    const snapshot = yield call(
      rsf.firestore.getCollection,
      firestore()
        .collection('Calendar')
        .where('id_user', '==', id_user)
        .where('time_begin', '>=', dateToTimestamp(start_day))
        .where('time_begin', '<=', dateToTimestamp(end_day)),
    );
    yield snapshot.forEach((querySnapshot) => {
      data.push(Object.assign(querySnapshot.data(), {id: querySnapshot.id}));
    });
    // filter data for special event
    const intersectingEvents = yield data.filter(
      (event) =>
        (timestampToDate(event.time_begin) <= timestampToDate(time_begin) &&
          timestampToDate(event.time_end) > timestampToDate(time_begin)) ||
        (timestampToDate(event.time_begin) < timestampToDate(time_end) &&
          timestampToDate(event.time_end) >= timestampToDate(time_end)),
      // timestampToDate(time_end).subtract(1, 'seconds'),
    );
    console.log(intersectingEvents);
    yield put(fetchIntersectingEventsSuccess(intersectingEvents));
  } catch (error) {
    console.log('ERROR FETCH INTESRCTING EVENTS', error);
    yield put(fetchIntersectingEventsFailed(error));
  }
}
export function* addEventToCalendar({payload}) {
  try {
    const id_user = yield select(getUserId);
    const {time_begin, time_end, id, label, map} = payload;
    // we have to denormalization data
    const data = {
      id_user,
      id_event: id,
      time_begin,
      time_end,
      label,
      map,
    };
    const doc = yield call(rsf.firestore.addDocument, 'Calendar', data);
    data.id = yield doc._documentPath._parts[1];
    yield put(addEventToCalendarSuccess(data));
  } catch (error) {
    console.log('ERROR ADD TO CALENDAR', error);
    yield put(addEventToCalendarFailed(error));
  }
}
export function* deleteEventFromCalendar({payload}) {
  try {
    yield call(rsf.firestore.deleteDocument, `Calendar/${payload}`);
    yield put(deleteEventFromCalendarSuccess(payload));
    // yield put(fetchCalendar());
  } catch (error) {
    console.log('ERROR DELETE EVENT FROM CALENDAR', error);
    yield put(deleteEventFromCalendarFailed(error));
  }
}
