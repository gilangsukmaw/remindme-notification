import axios from "axios";
import {
  GET_NOTE_BEGIN,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAIL,
  GET_NOTEDETAIL_BEGIN,
  GET_NOTEDETAIL_SUCCESS,
  GET_NOTEDETAIL_FAIL,
} from "../const/type";
// eslint-disable-next-line no-unused-vars
import { put, takeEvery, takeLatest } from "redux-saga/effects";
const Token = localStorage.getItem("Token");

function* getNote() {
  try {
    const res = yield axios.get(
      `https://remindme.gabatch13.my.id/api/v1/notes/`,
      { headers: { Authorization: `Bearer ${Token}` } }
    );
    // yield console.log(res.data.data);
    yield put({
      type: GET_NOTE_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    yield put({
      type: GET_NOTE_FAIL,
      payload: error,
    });
  }
}

function* getNoteDetail(actions) {
  const { id } = actions;
  try {
    // console.log("id detail", id);
    const res = yield axios.get(
      `https://remindme.gabatch13.my.id/api/v1/notes/${id}`,
      { headers: { Authorization: `Bearer ${Token}` } }
    );
    // yield console.log("res", res.data.data);
    yield put({
      type: GET_NOTEDETAIL_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    yield put({
      type: GET_NOTEDETAIL_FAIL,
      payload: error,
    });
  }
}

export function* watchGetNote() {
  yield takeEvery(GET_NOTE_BEGIN, getNote);
}

export function* watchGetNoteDetail() {
  yield takeEvery(GET_NOTEDETAIL_BEGIN, getNoteDetail);
}
