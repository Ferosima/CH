import {createAction} from 'redux-actions';
import {
  USER_ENTRY,
  USER_FETCH_USER,
  USER_FETCH_USER_SUCCESS,
  USER_FETCH_USER_FAILED,
  USER_CLEAR,
} from '../types/user';

export const userEntry = createAction(USER_ENTRY, (payload) => payload);

export const fetchUser = createAction(USER_FETCH_USER, (payload) => payload);
export const fetchUserSuccess = createAction(
  USER_FETCH_USER_SUCCESS,
  (payload) => payload,
);
export const fetchUserFailed = createAction(USER_FETCH_USER_FAILED);

export const userClear = createAction(USER_CLEAR);
