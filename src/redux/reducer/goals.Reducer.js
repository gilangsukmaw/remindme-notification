import { GET_ALLGOALS_FAIL, GET_ALLGOALS_SUCCESS, GET_ALLGOALS_BEGIN } from "../const/type";

const initialState = {
    goalsData: {
    Goals: [],
    loading: false, error: null,
  },
};

const allGoals = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_ALLGOALS_BEGIN:
      return {
        ...state,
        goalsData: {
          loading: true,
          error: null,
        },
      };
    case GET_ALLGOALS_SUCCESS:
      return {
        ...state,
        goalsData: {
          goals: payload,
          loading: false,
          error: null,
        },
      };
    case GET_ALLGOALS_FAIL:
      return {
        ...state,
        goalsData: {
          goals: [],
          loading: false,
          error: error,
        },
      };
  }
};

export default allGoals;
