import { CHANGE_STEP } from "../const/type";

const initialState = {
  modalStep: "",
};

const global = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case CHANGE_STEP:
      return {
        ...state,
        modalStep: payload,
      };
  }
};

export default global;
