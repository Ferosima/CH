import {
  USER_ENTRY,
  USER_FETCH_USER,
  USER_FETCH_USER_SUCCESS,
  USER_FETCH_USER_FAILED,
  USER_CLEAR,
} from '../types/user';

const initialState = {
  pending: false,
  isLogin: false,
  user: null,
  id: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_ENTRY:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        id: action.payload.id,
        isLogin: true,
      };
    case USER_FETCH_USER:
      return {
        ...state,
        pending: true,
      };
    case USER_FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        id: action.payload.id,
        isLogin: true,
      };
    case USER_FETCH_USER_FAILED:
      return {
        ...state,
        pending: false,
      };
    case USER_CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
