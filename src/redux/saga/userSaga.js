/* eslint-disable no-unused-vars */
import axios from "axios";
import {
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_BEGIN,
  PUT_USER_SUCCESS,
  PUT_USER_FAIL,
  PUT_USER_BEGIN,
  PUT_ALERT_SUCCESS,
  PUT_ALERT_BEGIN,
} from "../const/type";
import { put, takeEvery } from "redux-saga/effects";
const Token = localStorage.getItem("Token");
function* getUser(actions) {
  const { error } = actions;
  try {
    const res = yield axios.get(
      `https://remindme.gabatch13.my.id/api/v1/user/getinfo`,
      { headers: { Authorization: `Bearer ${Token}` } }
    );
    yield put({
      type: GET_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: GET_USER_FAIL,
      payload: error,
    });
  }
}

function* putUser(actions) {
  const { error, update } = actions;
  try {
    const res = axios.put(
      `https://remindme.gabatch13.my.id/api/v1/user`,
      update,
      { headers: { Authorization: `Bearer ${Token}` } }
    );
    yield put({
      type: PUT_USER_SUCCESS,
      payload: res.data,
    });
    // yield alert("Profile Updated");
    const get = yield axios.get(
      `https://remindme.gabatch13.my.id/api/v1/user/getinfo`,
      { headers: { Authorization: `Bearer ${Token}` } }
    );
    yield put({
      type: GET_USER_SUCCESS,
      payload: get.data,
    });
    yield put({
      type: PUT_ALERT_SUCCESS,
      payload: true,
    });
    // yield window.location.reload();
  } catch (err) {
    yield put({
      type: PUT_USER_FAIL,
      payload: err.response.data.errors,
    });
  }
}

function* putModal(actions) {
  yield put({
    type: PUT_ALERT_SUCCESS,
    payload: actions.showModal,
  });
}

export function* watchGetUser() {
  yield takeEvery(GET_USER_BEGIN, getUser);
}
export function* watchPutModal() {
  yield takeEvery(PUT_ALERT_BEGIN, putModal);
}

export function* watchPutUser() {
  yield takeEvery(PUT_USER_BEGIN, putUser);
}
