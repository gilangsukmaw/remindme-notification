import { all } from "@redux-saga/core/effects";
import { watchGetUser, watchPutModal, watchPutUser } from "./userSaga";
import { watchallGoals, watchDetailGoals } from "./goalsSaga";

export default function* rootSaga() {
  // function generator
  yield all([watchGetUser(), watchPutUser(), watchPutModal(), watchGetUser(), watchallGoals(), watchDetailGoals()]);
}
