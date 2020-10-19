import { actions } from "./actions";
import { take, put, call, race, delay } from "redux-saga/effects";
import {
  subscribeToAuth,
  login,
  logout,
  loginWithFacebook,
  loginWithGoogle,
  register,
  resetPassword,
  getUserInfo,
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

export function* resetPasswordWatcher() {
  while (true) {
    const {
      payload: { email },
    } = yield take(actions.resetPasswordButtonClicked);
    try {
      yield call(resetPassword, email);
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

function* cancellationSaga(id) {
  while (true) {
    const { payload } = yield take(actions.alertCancelButtonClicked);
    if (id === payload) return;
  }
}

export function* addAlertSaga({ payload }) {
  try {
    yield put(actions.alertDisplayed(payload));
    if (payload.duration) {
      yield race({
        delay: delay(payload.duration),
        click: cancellationSaga(payload.id),
      });
    } else {
      yield race({
        click: cancellationSaga(payload.id),
      });
    }

    yield put(actions.alertCleared(payload.id));
  } catch (error) {
    console.log(error);
  }
}

export function* getProfileSaga({ payload: { id } }) {
  try {
    if (id) {
      yield call(getUserInfo(id));
    }
  } catch (error) {}
}
