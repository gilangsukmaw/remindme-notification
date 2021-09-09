import { CHANGE_STEP } from "../const/type";

const initialState = {
  modalStep: "",
  data: {},
};

const global = (state = initialState, action) => {
  const { type, payload, id } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case CHANGE_STEP:
      return {
        ...state,
        modalStep: payload,
        data: id || {},
      };
  }
};

export default global;
