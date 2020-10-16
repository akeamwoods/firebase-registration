import { all, takeLatest, takeEvery } from "@redux-saga/core/effects";
import { getType } from "typesafe-actions";
import { actions } from "./actions";
import {
  loginWatcher,
  logoutWatcher,
  resetPasswordWatcher,
  authChannelWatcher,
  loginWithFacebookWatcher,
  loginWithGoogleWatcher,
  registrationWatcher,
  addAlertSaga,
} from "./saga";

export function* rootSaga() {
  yield all([
    loginWatcher(),
    authChannelWatcher(),
    logoutWatcher(),
    resetPasswordWatcher(),
    registrationWatcher(),
    takeLatest(
      getType(actions.loginWithFacebookButtonClicked),
      loginWithFacebookWatcher
    ),
    takeLatest(
      getType(actions.loginWithGoogleButtonClicked),
      loginWithGoogleWatcher
    ),
    takeEvery(getType(actions.alertCreated), addAlertSaga),
  ]);
}
