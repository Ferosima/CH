import {USER_ENTRY} from '../types/user';

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
    default:
      return state;
  }
}
