import { GET_USER_FAIL, GET_USER_SUCCESS, GET_USER_BEGIN, PUT_ALERT_SUCCESS, PUT_ALERT_BEGIN } from "../const/type";

const initialState = {
  userInfo: {
    user: [],
    loading: false,
    error: null,
  },
  showModal: false,
  ShowModalPhoto: false,
};

const userData = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case PUT_ALERT_SUCCESS:
      return {
        ...state,
        showModal: payload,
      };
    case GET_USER_BEGIN:
      return {
        ...state,
        userInfo: {
          loading: true,
          // error: null,
        },
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        userInfo: {
          user: payload,
          loading: false,
          error: null,
        },
      };
    case GET_USER_FAIL:
      return {
        userInfo: {
          user: [],
          loading: false,
          error: error,
        },
      };
  }
};

export default userData;
