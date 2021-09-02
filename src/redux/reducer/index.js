import { combineReducers } from "redux";
import userData from "./userReducer";
import noteData from "./noteReducer";
export default combineReducers({
  userData,
  noteData,
});
