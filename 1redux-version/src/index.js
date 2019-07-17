import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import App from "./App";

import reducers from "./reducers";

const storeEnhancers = compose(
  window && window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, {}, storeEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
