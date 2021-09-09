import { CHANGE_STEP } from "../const/type";

export const changeStep = (payload, id) => {
  console.log("payload and id", payload, id);
  return {
    type: CHANGE_STEP,
    payload,
    id,
  };
};
