import { all } from "@redux-saga/core/effects";
import { watchGetUser } from "./userSaga";
import { watchSetNote } from "./noteSaga";

export default function* rootSaga() {
  // function generator
  yield all([watchGetUser(), watchSetNote()]);
}
