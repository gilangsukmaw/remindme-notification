import { all } from "@redux-saga/core/effects";
import { watchGetUser, watchPutModal, watchPutUser } from "./userSaga";
import { watchallGoals, watchDetailGoals } from "./goalsSaga";
import { watchGetNote } from "./noteSaga";
import { watchUpdateNote } from "./updateNoteSaga";
import { watchDeleteNote } from "./deleteNoteSaga";
import { watchGetNoteDetail } from "./noteSaga";

export default function* rootSaga() {
  // function generator
  yield all([
    watchGetUser(),
    watchPutUser(),
    watchPutModal(),
    watchallGoals(),
    watchDetailGoals(),
    watchDeleteNote(),
    watchUpdateNote(),
    watchGetNote(),
    watchGetNoteDetail(),
  ]);
}
