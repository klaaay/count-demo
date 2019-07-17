import { combineReducers } from "redux";
import count from "./count";
import tencount from "./tencount";

export default combineReducers({
  count,
  tencount
});
