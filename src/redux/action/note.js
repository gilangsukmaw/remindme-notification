import { GET_NOTE_BEGIN } from "../const/type";

export const getNote = (body) => {
  return {
    type: GET_NOTE_BEGIN,
    body,
  };
};
