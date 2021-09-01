import axios from "axios";
import { GET_USER_FAIL, GET_USER_SUCCESS, GET_USER_BEGIN } from "../const/type";
import { put, takeEvery } from "redux-saga/effects";

function* getUser(actions) {
  const { error } = actions;
  try {
    const Token = localStorage.getItem("Token");
    const res = yield axios.get(`https://remindme.gabatch13.my.id/api/v1/user/getinfo`, { headers: { Authorization: `Bearer ${Token}` } });
    yield put({
      type: GET_USER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_USER_FAIL,
      error: error,
    });
  }
}

export function* watchGetUser() {
  yield takeEvery(GET_USER_BEGIN, getUser);
}
