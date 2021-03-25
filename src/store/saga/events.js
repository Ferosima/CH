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
    yield put(
      fetchEventsSuccess([
        {title: 'Lorem ipsum dolor1 adadadasdadsd'},
        {title: 'Lorem ipsum dolor2'},
        {title: 'Lorem ipsum dolor3'},
        {title: 'Lorem ipsum dolor5'},
        {title: 'Lorem ipsum dolor6'},
        {title: 'Lorem ipsum dolor7'},
        // {title: 'Lorem ipsum dolor1234'},
        // {title: 'Lorem ipsum dolor1234'},
        // {title: 'Lorem ipsum dolor1234'},
        // {title: 'Lorem ipsum dolor1234'},
        // {title: 'Lorem ipsum dolor1234'},
        // {title: 'Lorem ipsum dolor1234'},
        // {title: 'Lorem ipsum dolor1234'},
      ]),
    );
  } catch (error) {
    console.log('FETCH EVENTS', error);
    yield put(fetchEventsFailed(errors));
  }
}
