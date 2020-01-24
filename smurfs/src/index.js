import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Reducer } from "./components/Reducer/Reducer";
import { Provider } from "react-redux";

const store = createStore(Reducer, applyMiddleware(thunk, logger));
const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
