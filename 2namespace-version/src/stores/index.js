import { combineReducers } from "redux";

import { default as count } from "./count";
import { default as tencount } from "./tencount";

const rootReducer = combineReducers({
  count,
  tencount
});

export default rootReducer;
