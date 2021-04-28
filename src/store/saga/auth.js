import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import {call, put} from 'redux-saga/effects';
import {mock_registration, mock_login} from '../../const/mockForm';
import {
  createUserFailed,
  createUserSuccess,
  fetchLoginFailed,
  fetchLoginSuccess,
} from '../actions/auth';
import {userEntry} from '../actions/user';

const firebaseApp = firebase.apps[0];
const rsf = new ReduxSagaFirebase(firebaseApp);

export function* fetchLogin(action) {
  const errors = yield _validationData(action.payload, mock_login);
  try {
    if (errors.length) {
      yield put(fetchLoginFailed(errors));
    } else {
      const user = yield call(
        rsf.auth.signInWithEmailAndPassword,
        action.payload.email,
        action.payload.password,
      );
      yield put(fetchLoginSuccess());
      const snapshot = yield call(
        rsf.firestore.getCollection,
        firestore()
          .collection('Users')
          .where('id', '==', user.user.uid)
          .limit(1),
      );
      yield put(userEntry({user: snapshot.docs[0].data(), id: user.id}));
    }
  } catch (error) {
    if (error.code.includes('email'))
      yield errors.push(['email', error.message.split('] ')[1]]);
    else if (error.code.includes('password'))
      yield errors.push(['password', error.message.split('] ')[1]]);
    else
      yield errors.push([
        'form_error',
        'Something went wrong:(\nCheck your internet connection',
      ]);
  }
  yield put(fetchLoginFailed(errors));
}

export function* createUser(action) {
  const errors = yield _validationData(action.payload, mock_registration);
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
      yield call(rsf.firestore.addDocument, 'Users', {
        ...action.payload,
        id: user.user.uid,
      });
      yield put(
        userEntry({
          user: {...action.payload, id: user.user.uid},
          id: user.user.uid,
        }),
      );
    }
  } catch (error) {
    console.log('SIGN UP ERROR', error);
    if (error.code !== 'auth/unknown') {
      yield errors.push(['email', error.message.split('] ')[1]]);
    } else {
      yield errors.push([
        'form_error',
        'Something went wrong:(\nCheck your internet connection',
      ]);
    }
    // TODO check internet connection and add to error new field (form_error)
    yield put(createUserFailed(errors));
  }
}

function _validationData(form, mock_form) {
  const errors = [];
  const password_length = 6;
  mock_form.forEach((item) => {
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
