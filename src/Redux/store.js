import { createStore, applyMiddleware, compose } from "redux";
import Registrationreducer from "../Redux/reducers/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  Registrationreducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
