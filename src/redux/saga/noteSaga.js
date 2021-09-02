import axios from "axios";
import {
  POST_NOTE_BEGIN,
  POST_NOTE_SUCCESS,
  POST_NOTE_FAIL,
} from "../const/type";
import { put, takeEvery } from "redux-saga/effects";

function* setNote(actions) {
  const { body } = actions;
  const Token = localStorage.getItem("Token");
  try {
    const res = yield axios.post(
      `https://remindme.gabatch13.my.id/api/v1/notes/`,
      body,
      { headers: { Authorization: `Bearer ${Token}` } }
    );
    yield console.log(res.data.data);
    yield put({
      type: POST_NOTE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: POST_NOTE_FAIL,
      payload: error,
    });
  }
}

export function* watchSetNote() {
  yield takeEvery(POST_NOTE_BEGIN, setNote);
}
