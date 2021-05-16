import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import 'firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import {call, put} from 'redux-saga/effects';

import {fetchUserSuccess, fetchUserFailed} from '../actions/user';

const firebaseApp = firebase.apps[0];
const rsf = new ReduxSagaFirebase(firebaseApp);

export function* fetchUser(action) {
  try {
    console.log(action.payload);
    const snapshot = yield call(
      rsf.firestore.getCollection,
      firestore()
        .collection('Users')
        .where('id', '==', action.payload)
        .limit(1),
    );
    yield put(
      fetchUserSuccess({user: snapshot.docs[0].data(), id: action.payload}),
    );
    console.log(snapshot.docs[0].data());
  } catch (error) {
    console.log('USER FETCH ERROR', error);
    yield put(fetchUserFailed());
  }
}
