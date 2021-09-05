import { GET_ALLGOALS_BEGIN } from "../const/type";
import { GET_DETAILGOALS_BEGIN } from "../const/type";


export const getAllGoals = () => {
  return {
    type: GET_ALLGOALS_BEGIN,
  };
};
export const getDetailGoals = (goalsId) => {
  return {
    type: GET_DETAILGOALS_BEGIN,
    goalsId: goalsId,

  };
};