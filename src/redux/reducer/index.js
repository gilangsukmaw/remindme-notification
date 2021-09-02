import { combineReducers } from "redux";
import userData from "./userReducer";
import allGoals from './goals.Reducer'

export default combineReducers({
  userData,allGoals,
});
