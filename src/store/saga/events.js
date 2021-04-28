import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import {call, put} from 'redux-saga/effects';
import {fetchEventsSuccess, fetchEventsFailed} from '../actions/events';

const firebaseApp = firebase.apps[0];
const rsf = new ReduxSagaFirebase(firebaseApp);

export function* fetchEvents() {
  try {
    const data = [];
    const snapshot = yield call(
      rsf.firestore.getCollection,
      firestore().collection('Events'),
    );

    snapshot.forEach((querySnapshot) => {
      data.push(Object.assign(querySnapshot.data(), {id: querySnapshot.id}));
    });
    yield put(fetchEventsSuccess(data));
  } catch (error) {
    console.log('FETCH EVENTS', error);
    yield put(fetchEventsFailed(error));
  }
}
