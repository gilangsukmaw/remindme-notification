import { all } from "@redux-saga/core/effects";
import { watchGetUser } from "./userSaga";
import { watchallGoals, watchDetailGoals } from "./goalsSaga";


export default function* rootSaga() {
  // function generator
  yield all([watchGetUser(), watchallGoals(),watchDetailGoals() ]);
  
}
