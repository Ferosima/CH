import { put } from "redux-saga/effects";

import { fetchLoginSuccess, fetchLoginFailed } from "../actions/user";

export function* fetchLogin() {
  try {
    // const response = yield client.get("members/payments");
    // yield put(fetchLoginSuccess());
    // TODO add login firebase
    console.log("hi");
  } catch (error) {
    yield put(fetchLoginFailed(error.response.data));
  }
}
