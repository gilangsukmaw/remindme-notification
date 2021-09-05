import { all } from "@redux-saga/core/effects";
import { watchGetUser } from "./userSaga";
import { watchGetNote } from "./noteSaga";
import { watchallGoals } from "./goalsSaga";
import { watchUpdateNote } from "./updateNoteSaga";
import { watchDeleteNote } from "./deleteNoteSaga";

export default function* rootSaga() {
  // function generator
  yield all([
    watchGetUser(),
    watchGetNote(),
    watchallGoals(),
    watchDeleteNote(),
    watchUpdateNote(),
  ]);
}
