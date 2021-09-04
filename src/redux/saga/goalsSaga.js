import axios from "axios";
import { GET_ALLGOALS_FAIL, GET_ALLGOALS_SUCCESS, GET_ALLGOALS_BEGIN } from "../const/type";
import { GET_DETAILGOALS_FAIL, GET_DETAILGOALS_SUCCESS, GET_DETAILGOALS_BEGIN } from "../const/type";

import { put, takeEvery } from "redux-saga/effects";

// ======All Goals==========
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
// ================All Goals end=========================

// ======Detail Goals==========
function* detailGoals(actions) {
  const { error, goalsId } = actions;
  try {
    const Token = localStorage.getItem("Token");
    const res = yield axios.get(`https://remindme.gabatch13.my.id/api/v1/goals/${goalsId}`, { headers: { Authorization: `Bearer ${Token}` } });
    console.log('datares' ,res)
    yield put({
      type: GET_DETAILGOALS_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_DETAILGOALS_FAIL,
      error: error,
    });
  }
}

export function* watchDetailGoals() {
  yield takeEvery(GET_DETAILGOALS_BEGIN, detailGoals);
}
// ===============Detail Goals end===========================