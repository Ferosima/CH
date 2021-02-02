// import {Action, ReducerClass} from 'reducer-class';
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGN_UP,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILED,
} from '../types/user';

const initialState = {
  pending: false,
  isLogin: false,
  user: null,
  error: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        pending: false,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        pending: false,
        user: action.payload,
        error: [],
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case USER_SIGN_UP:
      return {
        ...state,
        pending: false,
      };
    case USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        isLogin: true,
        pending: false,
        user: action.payload,
        error: [],
      };
    case USER_SIGN_UP_FAILED:
      console.log("REDUX",action.payload);
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
// class ReducerUser extends ReducerClass {
//   initialState = {
//     pending: false,
//     isLogin: false,
//     user: null,
//     error: null,
//   };

//   @Action(fetchLogin)
//   fetchLogin(state) {
//     return {
//       ...state,
//       pending: false,
//     };
//   }

//   @Action(fetchLoginSuccess)
//   fetchLoginSuccess(state, action) {
//     return {
//       ...state,
//       isLogin: true,
//       pending: false,
//       user: action.payload,
//     };
//   }

//   @Action(fetchLoginFailed)
//   fetchLoginFailed(state, action) {
//     return {
//       ...state,
//       pending: false,
//       error: action.payload,
//     };
//   }

//   //   @Action(logout)
//   //   logout(state, action) {
//   //     return {
//   //       ...this.initialState,
//   //     };
//   //   }
// }

// const reducer = ReducerUser.create();
// export default reducer;
