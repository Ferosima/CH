import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import 'firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import {call, put} from 'redux-saga/effects';
import {mock_registration} from '../../const/mockForm';
import {
  createUserFailed,
  createUserSuccess,
  fetchLoginFailed,
  fetchLoginSuccess,
} from '../actions/auth';

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

export function* createUser(action) {
  const errors = yield _validationData(action.payload);
  try {
    if (errors.length) {
      yield put(createUserFailed(errors));
    } else {
      const user = yield call(
        rsf.auth.createUserWithEmailAndPassword,
        action.payload.email,
        action.payload.password,
      );
      // TODO add to firebase and add to user
      yield put(createUserSuccess(user.user));
    }
  } catch (error) {
    console.log('SIGN UP ERROR', error);
    yield errors.push(['email', error.message.split('] ')[1]]);
    yield put(createUserFailed(errors));
  }
}
function _validationData(form) {
  const errors = [];
  const password_length = 6;
  mock_registration.forEach((item) => {
    if (item.required) {
      if (form) {
        if (!form[item.name]) {
          errors.push([item.name, 'This field is required']);
        } else if (item.name === 'password') {
          if (form.password.length < password_length)
            errors.push([item.name, `At least ${password_length} character`]);
        }
      } else {
        errors.push([item.name, 'This field is required']);
      }
    }
  });
  if (!errors.length) {
    return [];
  }
  return errors;
}
