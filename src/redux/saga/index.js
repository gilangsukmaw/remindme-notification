import { all } from "@redux-saga/core/effects";
import { watchGetUser, watchPutModal, watchPutUser } from "./userSaga";

export default function* rootSaga() {
  // function generator
  yield all([watchGetUser(), watchPutUser(), watchPutModal()]);
}
