import {
  GET_NOTE_BEGIN,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAIL,
  UPDATE_NOTE_BEGIN,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAIL,
  DELETE_NOTE_BEGIN,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  GET_NOTEDETAIL_BEGIN,
  GET_NOTEDETAIL_SUCCESS,
  GET_NOTEDETAIL_FAIL,
} from "../const/type";

const initialState = {
  noteData: {
    data: [],
    loading: false,
    error: null,
  },
  noteDataDetail: {
    detail: [],
    loadingDetail: false,
    errorDetail: null,
  },
  noteDataDelete: {
    data: [],
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
    case GET_NOTEDETAIL_BEGIN:
      return {
        ...state,
        noteDataDetail: {
          loading: true,
          error: null,
        },
      };
    case GET_NOTEDETAIL_SUCCESS:
      return {
        ...state,
        noteDataDetail: {
          data: payload,
          loading: false,
          error: null,
        },
      };
    case GET_NOTEDETAIL_FAIL:
      return {
        ...state,
        noteDataDetail: {
          data: [],
          loading: false,
          error: error,
        },
      };
    case DELETE_NOTE_BEGIN:
      return {
        noteData: {
          data: [],
          loading: true,
          error: null,
        },
      };
    case DELETE_NOTE_SUCCESS:
      return {
        noteData: {
          data: [
            ...state.noteData.filter((item) => item.id !== action.payload),
          ],
        },
      };
    case DELETE_NOTE_FAIL:
      return {
        noteData: {
          data: [],
          loading: false,
          error: error,
        },
      };
    case UPDATE_NOTE_BEGIN:
      return {
        ...state,
        noteData: {
          data: [],
          loading: true,
          error: null,
        },
      };
    case UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        noteData: state.noteData.data.map(
          (newUpdate) => [newUpdate.id, newUpdate].values
        ),
      };
    case UPDATE_NOTE_FAIL:
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
