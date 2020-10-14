import { put } from "@redux-saga/core/effects";
import { actions } from "./actions";
import { v4 as uuidv4 } from "uuid";

export function* registrationSaga({ payload }) {
  try {
    // here is where we would handle api calls/interacting with the database...
    yield put(actions.userRegistered({ ...payload, id: uuidv4() }));
  } catch (err) {
    console.log(err);
  }
}
