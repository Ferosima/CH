import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import {call, put} from 'redux-saga/effects';
import {mock_registration} from '../../const/mockForm';
import {
  createUserFailed,
  createUserSuccess,
  fetchLoginFailed,
  fetchLoginSuccess,
} from '../actions/auth';
import {userEntry} from '../actions/user';

const firebaseApp = firebase.apps[0];
const rsf = new ReduxSagaFirebase(firebaseApp);

export function* fetchLogin() {
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
      yield put(createUserSuccess());
      delete action.payload.password;
      yield call(rsf.firestore.addDocument, 'Users', action.payload);
      yield put(userEntry({user: action.payload, id: user.id}));
    }
  } catch (error) {
    console.log('SIGN UP ERROR', error);
    if (error.code !== 'auth/unknown') {
      yield errors.push(['email', error.message.split('] ')[1]]);
    } else {
      yield errors.push(['form_error', error.message.split('] ')[1]]);
    }
    // TODO check internet connection and add to error new field (form_error)
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
