import { all } from "@redux-saga/core/effects";
import { watchGetUser } from "./userSaga";
import { watchGetNote } from "./noteSaga";
import { watchallGoals } from "./goalsSaga";

export default function* rootSaga() {
  // function generator
  yield all([watchGetUser(), watchGetNote(), watchallGoals()]);
}
