import { GET_NOTE_BEGIN, GET_NOTE_SUCCESS, GET_NOTE_FAIL } from "../const/type";

const initialState = {
  noteData: {
    data: [],
    loading: false,
    error: null,
  },
};

const allNote = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_NOTE_BEGIN:
      return {
        ...state,
        noteData: {
          loading: true,
          error: null,
        },
      };
    case GET_NOTE_SUCCESS:
      return {
        ...state,
        noteData: {
          data: payload,
          loading: false,
          error: null,
        },
      };
    case GET_NOTE_FAIL:
      return {
        noteData: {
          data: [],
          loading: false,
          error: error,
        },
      };
  }
};

export default allNote;
