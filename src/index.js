import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore, applyMiddleware, compose } from "redux";

import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import { Provider } from "react-redux";

import rootReducer from "./redux/reducers/index"; // imports ./redux/reducers/index.js
import rootSaga from "./sagas/sagas"; // imports ./redux/sagas/index.js

import "semantic-ui-css/semantic.min.css";
require("dotenv").config();

const sagaMiddleware = createSagaMiddleware();

const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewareList))
);
sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
