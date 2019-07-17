import { INCREMENT, _TEN_INCREMENT } from "../actions/types";

const INITIAL_STATE = {
  count: 0,
  tenCount: 0
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: ++state.count
      };
    }
    case _TEN_INCREMENT: {
      return {
        ...state,
        tenCount: state.tenCount + 10
      };
    }
    default:
      return state;
  }
}
