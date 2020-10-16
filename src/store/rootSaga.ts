import { all, takeLatest } from "@redux-saga/core/effects";
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
} from "./saga";

export function* rootSaga() {
  yield all([
    loginWatcher(),
    authChannelWatcher(),
    logoutWatcher(),
    resetPasswordWatcher(),
    takeLatest(
      getType(actions.loginWithFacebookButtonClicked),
      loginWithFacebookWatcher
    ),
    takeLatest(
      getType(actions.loginWithGoogleButtonClicked),
      loginWithGoogleWatcher
    ),

    registrationWatcher(),
  ]);
}
