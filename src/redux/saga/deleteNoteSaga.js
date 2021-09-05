import axios from "axios";
import {
  DELETE_NOTE_BEGIN,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
} from "../const/type";
import { put, takeEvery } from "redux-saga/effects";

function* deleteNote(id) {
  const Token = localStorage.getItem("Token");
  yield console.log(Token);
  try {
    const res = yield axios.get(
      `https://remindme.gabatch13.my.id/api/v1/notes/`,
      { headers: { Authorization: `Bearer ${Token}` } }
    );
    yield console.log(res.data.data);
    yield put({
      type: DELETE_NOTE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    yield put({
      type: DELETE_NOTE_FAIL,
      payload: error,
    });
  }
}

export function* watchDeleteNote() {
  yield takeEvery(DELETE_NOTE_BEGIN, deleteNote);
}
