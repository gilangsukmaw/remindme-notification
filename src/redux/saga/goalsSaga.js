import axios from "axios";
import { GET_ALLGOALS_FAIL, GET_ALLGOALS_SUCCESS, GET_ALLGOALS_BEGIN } from "../const/type";
import { put, takeEvery } from "redux-saga/effects";

function* allGoals(actions) {
  const { error } = actions;
  try {
    const Token = localStorage.getItem("Token");
    const res = yield axios.get(`https://remindme.gabatch13.my.id/api/v1/goals/`, { headers: { Authorization: `Bearer ${Token}` } });
    yield put({
      type: GET_ALLGOALS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_ALLGOALS_FAIL,
      error: error,
    });
  }
}

export function* watchallGoals() {
  yield takeEvery(GET_ALLGOALS_BEGIN, allGoals);
}
