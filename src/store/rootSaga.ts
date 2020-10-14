import { getType } from "typesafe-actions";
import { all, takeLatest } from "@redux-saga/core/effects";
import { loginWatcher, logoutWatcher, authChannelWatcher } from "./saga";
import { actions } from "./actions";
import { registrationSaga } from "./saga";

export function* rootSaga() {
  yield all([
    loginWatcher(),
    authChannelWatcher(),
    logoutWatcher(),
    takeLatest(getType(actions.registerUser), registrationSaga),
  ]);
}
