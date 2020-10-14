import { actions } from "./actions";
import { v4 as uuidv4 } from "uuid";
import { take, put, call } from "redux-saga/effects";
import { subscribeToAuth, login, logout } from "./../firebase";

export function* registrationSaga({ payload }) {
  try {
    // here is where we would handle api calls/interacting with the database...
    yield put(actions.userRegistered({ ...payload, id: uuidv4() }));
  } catch (err) {
    console.log(err);
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
    console.log("auth chan", user);
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
