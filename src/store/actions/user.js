import {createAction} from 'redux-actions';
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGN_UP,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILED,
} from '../types/user';

export const fetchLogin = createAction(USER_LOGIN);

export const fetchLoginSuccess = createAction(
  USER_LOGIN_SUCCESS,
  (payload) => payload,
);
export const fetchLoginFailed = createAction(
  USER_LOGIN_FAILED,
  (payload) => payload,
);
export const createUser = createAction(USER_SIGN_UP, (payload) => payload);
export const createUserSuccess = createAction(
  USER_SIGN_UP_SUCCESS,
  (payload) => payload,
);
export const createUserFailed = createAction(
  USER_SIGN_UP_FAILED,
  (payload) => payload,
);
// TODO add logout
