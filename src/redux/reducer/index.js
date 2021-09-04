import { combineReducers } from "redux";
import userData from "./userReducer";
import allNote from "./noteReducer";
import allGoals from "./goals.Reducer";
export default combineReducers({
  userData,
  allNote,
  allGoals,
});
