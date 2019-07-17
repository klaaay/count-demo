import namespace from "../utils/redux-namespace";

const tencount = {
  increment: (state, action) => {
    let _state = state + 10;
    return _state;
  }
};

export default namespace("tencount")(tencount);
