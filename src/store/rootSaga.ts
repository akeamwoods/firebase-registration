import { getType } from "typesafe-actions";
import { all, takeLatest } from "@redux-saga/core/effects";
import { actions } from "./actions";
import { registrationSaga } from "./saga";

export function* rootSaga() {
  yield all([takeLatest(getType(actions.registerUser), registrationSaga)]);
}
