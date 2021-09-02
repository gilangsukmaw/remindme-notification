import { POST_NOTE_BEGIN } from "../const/type";

export const setNote = (body) => {
  return {
    type: POST_NOTE_BEGIN,
    body,
  };
};
