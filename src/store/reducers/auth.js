import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_SIGN_UP,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_SIGN_UP_FAILED,
} from '../types/auth';

const initialState = {
  pending: false,
  isLogin: false,
  error: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        pending: false,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        pending: false,
        error: [],
      };
    case AUTH_LOGIN_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case AUTH_SIGN_UP:
      return {
        ...state,
        pending: false,
      };
    case AUTH_SIGN_UP_SUCCESS:
      return {
        ...state,
        isLogin: true,
        pending: false,
        error: [],
      };
    case AUTH_SIGN_UP_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
