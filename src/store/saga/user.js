import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import 'firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import {call, put} from 'redux-saga/effects';
// import {mock_registration} from '../../const/mockForm';
// import {
//   createUserFailed,
//   createUserSuccess,
//   fetchLoginFailed,
//   fetchLoginSuccess,
// } from '../actions/auth';

const firebaseApp = firebase.apps[0];
const rsf = new ReduxSagaFirebase(firebaseApp);

// TODO add write to the firestore
