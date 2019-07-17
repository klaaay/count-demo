import React from "react";
import CounterDisplay from "./components/CounterDisplay";
import Counter from "./components/Counter";
import _CounterDisplay from "./components/_CounterDisplay";
import _Counter from "./components/_Counter";
import TenCounterDisplay from "./components/TenCounterDisplay";
import TenCounter from "./components/TenCounter";

function App() {
  return (
    <div className="App">
      <CounterDisplay />
      <Counter />
      <_CounterDisplay />
      <_Counter />
      <TenCounterDisplay />
      <TenCounter />
    </div>
  );
}

export default App;
