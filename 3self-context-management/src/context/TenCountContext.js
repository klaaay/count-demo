import React, { createContext, useReducer, useMemo, useContext } from "react";

const CountContext = createContext();

const initialState = {
  count: 0
};

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + 10 };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function TenCountProvider(props) {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <CountContext.Provider value={value} {...props} />;
}

function useTenCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const [state, dispatch] = context;

  const incrementTen = () => dispatch({ type: "INCREMENT" });
  return {
    state,
    dispatch,
    incrementTen
  };
}

export { TenCountProvider, useTenCount };
