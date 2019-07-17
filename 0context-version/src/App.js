import React, { useReducer } from "react";
import { MyProvider } from "./utils/connect";
import CounterBox from "./components/CounterBox";

function App() {
  const initialState = {
    count: 0,
    tenCount: 0
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: ++state.count
        };
      case "INCREMENT_TEN":
        return {
          ...state,
          tenCount: state.tenCount + 10
        };
      default:
        return state;
    }
  }, initialState);

  return (
    <div>
      <MyProvider value={{ state, dispatch }}>
        <CounterBox />
      </MyProvider>
    </div>
  );
}

export default App;
