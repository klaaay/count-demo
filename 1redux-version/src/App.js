import React from "react";
import Counter from "./components/Counter";
import CounterDisplay from "./components/CounterDisplay";
import TenCounter from "./components/TenCounter";
import TenCounterDisplay from "./components/TenCounterDisplay ";
import _TenCounter from "./components/_TenCounter";
import _TenCounterDisplay from "./components/_TenCounterDisplay";

function App() {
  return (
    <div className="App">
      <CounterDisplay />
      <Counter />
      <_TenCounterDisplay />
      <_TenCounter />
      <TenCounterDisplay />
      <TenCounter />
    </div>
  );
}

export default App;
