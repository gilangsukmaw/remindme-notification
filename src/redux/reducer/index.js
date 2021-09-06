import { combineReducers } from "redux";
import userData from "./userReducer";
import allGoals from "./goals.Reducer";
import detailGoals from "./detailgoalsReducers";
import allNote from "./noteReducer";

export default combineReducers({
  userData,
  allGoals,
  detailGoals,
  allNote,
});
