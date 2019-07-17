import React from "react";

import { CountProvider, useCount } from "./context/CountContext";
import { TenCountProvider, useTenCount } from "./context/TenCountContext";

function Counter() {
  const {
    state: { count },
    increment,
    tenIncrement
  } = useCount();
  return <button onClick={increment}>+</button>;
}

function CountDisplay() {
  const {
    state: { count }
  } = useCount();
  return <div>The current counter count is {count}</div>;
}

function _TenCounter() {
  const {
    state: { count },
    tenIncrement
  } = useCount();
  return <button onClick={tenIncrement}>+</button>;
}

function _TenCountDisplay() {
  const {
    state: { tenCount }
  } = useCount();
  return <div>The current counter count is {tenCount}</div>;
}

function TenCounter() {
  const {
    state: { count },
    incrementTen
  } = useTenCount();
  return <button onClick={incrementTen}>+</button>;
}

function TenCountDisplay() {
  const {
    state: { count }
  } = useTenCount();
  return <div>The current counter count is {count}</div>;
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
        <_TenCountDisplay />
        <_TenCounter />
      </CountProvider>
      <TenCountProvider>
        <TenCountDisplay />
        <TenCounter />
      </TenCountProvider>
    </div>
  );
}

export default App;
