import { all } from "@redux-saga/core/effects";
import { loginWatcher, logoutWatcher, authChannelWatcher } from "./saga";

export function* rootSaga() {
  yield all([loginWatcher(), authChannelWatcher(), logoutWatcher()]);
}
