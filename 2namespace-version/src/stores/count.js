import namespace from "../utils/redux-namespace";

const count = {
  increment: (state, action) => {
    return {
      ...state,
      count: ++state.count
    };
  },
  tenIncrement: (state, action) => {
    return {
      ...state,
      tenCount: state.tenCount + 10
    };
  }
};

export default namespace("count")(count);
