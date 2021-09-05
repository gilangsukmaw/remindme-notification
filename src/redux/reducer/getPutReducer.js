import { GET_PUT_USER_SUCCESS } from "../const/type";

const initialState = {
  status: [],
};

const putData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PUT_USER_SUCCESS:
      return {
        state: payload,
      };

    default:
      return state;
  }
};

export default putData;
