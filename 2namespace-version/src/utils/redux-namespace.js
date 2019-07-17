const namespace = ns => handler => {
  return function(state, action) {
    if (!state) {
      if (ns === "count") {
        state = {
          count: 0,
          tenCount: 0
        };
      }
      if (ns === "tencount") {
        state = 0;
      }
    }
    const { type, payload } = action;
    const namespaceType = type.split("/");
    if (ns !== namespaceType[0]) {
      return state;
    }
    if (namespaceType[1] in handler) {
      return handler[namespaceType[1]](state, action);
    }
    return state;
  };
};

export default namespace;
