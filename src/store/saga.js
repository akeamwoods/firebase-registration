import { actions } from "./actions";
import { take, put, call } from "redux-saga/effects";
import {
  subscribeToAuth,
  login,
  logout,
  loginWithFacebook,
  loginWithGoogle,
  register,
} from "./../firebase";

export function* registrationWatcher() {
  while (true) {
    const {
      payload: { email, password, confirmPassword },
    } = yield take(actions.registrationButtonClicked);
    try {
      yield call(register, email, password, confirmPassword);
    } catch (error) {
      console.log(error);
    }
  }
}

export function* loginWithFacebookWatcher() {
  try {
    yield call(loginWithFacebook);
  } catch (error) {
    console.log(error);
  }
}

export function* loginWithGoogleWatcher() {
  try {
    yield call(loginWithGoogle);
  } catch (error) {
    console.log(error);
  }
}

export function* loginWatcher() {
  while (true) {
    const {
      payload: { email, password },
    } = yield take(actions.loginButtonClicked);
    try {
      yield call(login, email, password);
    } catch (error) {
      console.log(error);
    }
  }
}

export function* logoutWatcher() {
  while (true) {
    yield take(actions.logoutButtonClicked);
    yield call(logout);
  }
}

export function* authChannelWatcher() {
  const authChannel = yield subscribeToAuth();
  while (true) {
    const user = yield take(authChannel);
    if (user)
      yield put(
        actions.userLogin({
          email: user.email,
          id: user.id,
        })
      );
    else yield put(actions.userLogout());
  }
}
