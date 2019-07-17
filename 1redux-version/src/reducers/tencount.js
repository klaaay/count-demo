import { INCREMENT, TEN_INCREMENT } from "../actions/types";

const INITIAL_STATE = 0;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEN_INCREMENT: {
      let _state = state + 10;
      return _state;
    }
    default:
      return state;
  }
}
