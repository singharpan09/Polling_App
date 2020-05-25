import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose } from "redux";
import Registrationreducer from "./Redux/reducers/reducer";
import createSagaMiddleware from "redux-saga";
import { regisRequest } from "../src/saga/saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  Registrationreducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(regisRequest);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
