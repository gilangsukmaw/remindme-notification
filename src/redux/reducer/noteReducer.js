import {
  POST_NOTE_BEGIN,
  POST_NOTE_SUCCESS,
  POST_NOTE_FAIL,
} from "../const/type";

const initialState = {
  noteInfo: {
    data: [],
    loading: false,
    error: null,
  },
};

const noteData = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case POST_NOTE_BEGIN:
      return {
        ...state,
        noteInfo: {
          loading: true,
        },
      };
    case POST_NOTE_SUCCESS:
      return {
        ...state,
        noteInfo: {
          data: payload,
          loading: false,
          error: null,
        },
      };
    case POST_NOTE_FAIL:
      return {
        noteInfo: {
          data: [],
          loading: false,
          error: error,
        },
      };
  }
};

export default noteData;
