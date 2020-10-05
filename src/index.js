import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";

import { Provider } from "react-redux";
import store from "./redux/store";
import "semantic-ui-css/semantic.min.css";
require("dotenv").config();
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
