import { GET_USER_BEGIN } from "../const/type";

export const getUser = () => {
  return {
    type: GET_USER_BEGIN,
  };
};
