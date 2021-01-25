import { all, takeLatest } from "redux-saga/effects";

import * as user from "../actions/user";

// USER
import { fetchLogin } from "./user";

function* fetchLoginSaga() {
  yield takeLatest(user.fetchLogin, fetchLogin);
}

export default function* rootSaga() {
  yield all([
    // AUTH
    fetchLoginSaga(),
  ]);
}
