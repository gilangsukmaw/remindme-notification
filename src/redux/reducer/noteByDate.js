import { GET_NOTEBYDATE_FAIL, GET_NOTEBYDATE_SUCCESS, GET_NOTEBYDATE_BEGIN } from "../const/type";

const initialState = {
  ByDate: {
    noteDate: [],
    loading: false, 
    error: null,
  },
};

const noteByDate = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_NOTEBYDATE_BEGIN:
      return {
        ...state,
        noteByDate: {
          loading: true,
          error: null,
        },
      };
    case GET_NOTEBYDATE_SUCCESS:
      return {
        ...state,
        noteByDate: {
            noteDate: payload,
          loading: false,
          error: null,
        },
      };
    case GET_NOTEBYDATE_FAIL:
      return {
        ...state,
        noteByDate: {
            noteDate: [],
          loading: false,
          error: error,
        },
      };
  }
};

export default noteByDate;
