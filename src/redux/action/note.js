import { GET_NOTE_BEGIN, UPDATE_NOTE_BEGIN, DELETE_NOTE_BEGIN, GET_NOTEDETAIL_BEGIN } from "../const/type";

export const getNote = (body) => {
  return {
    type: GET_NOTE_BEGIN,
    body,
  };
};

export const updateNote = (id, newUpdate) => {
  return {
    type: UPDATE_NOTE_BEGIN,
    id,
    newUpdate,
  };
};

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE_BEGIN,
    id,
  };
};

export const getNoteDetail = (id) => {
  return {
    type: GET_NOTEDETAIL_BEGIN,
    id: id,
  };
};
