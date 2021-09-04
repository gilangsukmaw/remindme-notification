import { GET_DETAILGOALS_FAIL, GET_DETAILGOALS_SUCCESS, GET_DETAILGOALS_BEGIN } from "../const/type";

const initialState = {
  detailData: {
    details: [],
    loading: false, 
    error: null,
  },
};

const detailGoals = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_DETAILGOALS_BEGIN:
      return {
        ...state,
        detailData: {
          loading: true,
          error: null,
        },
      };
    case GET_DETAILGOALS_SUCCESS:
      return {
        ...state,
        detailData: {
          details: payload,
          loading: false,
          error: null,
        },
      };
    case GET_DETAILGOALS_FAIL:
      return {
        ...state,
        detailData: {
          details: [],
          loading: false,
          error: error,
        },
      };
  }
};

export default detailGoals;
