import axios from "axios";
import {
  UPDATE_NOTE_BEGIN,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAIL,
} from "../const/type";
import { put, takeEvery } from "redux-saga/effects";

function* putUpdateNote(actions) {
  const { id, body } = actions;
  const Token = localStorage.getItem("Token");
  // yield console.log(Token);
  try {
    // eslint-disable-next-line no-unused-vars
    const res = yield axios.put(
      `https://remindme.gabatch13.my.id/api/v1/notes/${id}`,
      body,
      { headers: { Authorization: `Bearer ${Token}` } }
    );
    // yield console.log(res.data.data);
    yield put({
      type: UPDATE_NOTE_SUCCESS,
      payload: { id, body },
    });
  } catch (error) {
    yield put({
      type: UPDATE_NOTE_FAIL,
      payload: error,
    });
  }
}

export function* watchUpdateNote() {
  yield takeEvery(UPDATE_NOTE_BEGIN, putUpdateNote);
}
