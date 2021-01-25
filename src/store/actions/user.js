import {createAction} from 'redux-actions';
import {USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED} from '../types/user';

export const fetchLogin = createAction(USER_LOGIN);
export const fetchLoginSuccess = createAction(
  USER_LOGIN_SUCCESS,
  (payload) => payload,
);
export const fetchLoginFailed = createAction(
  USER_LOGIN_FAILED,
  (payload) => payload,
);

// TODO add logout
