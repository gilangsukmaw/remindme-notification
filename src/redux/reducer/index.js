import { combineReducers } from "redux";
import userData from "./userReducer";
import allGoals from "./goals.Reducer";
import detailGoals from "./detailgoalsReducers";
import allNote from "./noteReducer";
import global from "./global";
import noteByDate from "./noteByDate";
import editTime from "./editTimeReducer";

export default combineReducers({
  userData,
  allGoals,
  detailGoals,
  allNote,
  global,
  noteByDate,
  editTime,
});
