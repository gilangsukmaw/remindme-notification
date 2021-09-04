import axios from "axios";
import { GET_NOTE_BEGIN, GET_NOTE_SUCCESS, GET_NOTE_FAIL } from "../const/type";
import { put, takeEvery } from "redux-saga/effects";

function* getNote(actions) {
  const { body } = actions;
  const Token = localStorage.getItem("Token");
  try {
    const res = yield axios.get(
      `https://remindme.gabatch13.my.id/api/v1/notes/`,
      body,
      { headers: { Authorization: `Bearer ${Token}` } }
    );
    console.log(res.data.data);
    yield put({
      type: GET_NOTE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: GET_NOTE_FAIL,
      payload: error,
    });
  }
}

export function* watchGetNote() {
  yield takeEvery(GET_NOTE_BEGIN, getNote);
}
