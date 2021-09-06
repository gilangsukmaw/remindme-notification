import { CHANGE_STEP } from "../const/type";

export const changeStep = (payload) => {
  return {
    type: CHANGE_STEP,
    payload,
  };
};
