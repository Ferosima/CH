import {put, call} from 'redux-saga/effects';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import {fetchLoginSuccess, fetchLoginFailed} from '../actions/user';

const firebaseApp = firebase.apps[0];
const rsf = new ReduxSagaFirebase(firebaseApp);
export function* fetchLogin() {
  console.log('hi');
  try {
    const snapshot = yield call(rsf.firestore.getCollection, 'Users');
    let users;
    snapshot.forEach((user) => {
      console.log('AAAADATA', user.data());
      users = {
        ...users,
        [user.id]: user.data().name,
      };
    });
    yield put(fetchLoginSuccess(users));
    // TODO add login firebase
  } catch (error) {
    yield put(fetchLoginFailed(error.response.data));
  }
}
