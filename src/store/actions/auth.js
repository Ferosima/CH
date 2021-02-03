import {createAction} from 'redux-actions';
import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_SIGN_UP,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_SIGN_UP_FAILED,
  AUTH_CLEAR,
} from '../types/auth';

export const fetchLogin = createAction(AUTH_LOGIN, (payload) => payload);

export const fetchLoginSuccess = createAction(AUTH_LOGIN_SUCCESS);
export const fetchLoginFailed = createAction(
  AUTH_LOGIN_FAILED,
  (payload) => payload,
);
export const createUser = createAction(AUTH_SIGN_UP, (payload) => payload);
export const createUserSuccess = createAction(AUTH_SIGN_UP_SUCCESS);
export const createUserFailed = createAction(
  AUTH_SIGN_UP_FAILED,
  (payload) => payload,
);

export const authClear = createAction(AUTH_CLEAR);
// TODO add logout
