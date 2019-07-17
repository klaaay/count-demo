import React, { createContext, useReducer, useMemo, useContext } from "react";

const CountContext = createContext();

const initialState = {
  count: 0,
  tenCount: 0
};

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, count: state.count + 1 };
    }
    case "TEN_INCREMENT": {
      return { ...state, tenCount: state.tenCount + 10 };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function CountProvider(props) {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <CountContext.Provider value={value} {...props} />;
}

function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const [state, dispatch] = context;

  const increment = () => dispatch({ type: "INCREMENT" });
  const tenIncrement = () => dispatch({ type: "TEN_INCREMENT" });
  return {
    state,
    dispatch,
    increment,
    tenIncrement
  };
}

export { CountProvider, useCount };
