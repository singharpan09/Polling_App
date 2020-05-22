import { createStore } from "redux";
import reducer from "../Redux/reducers/reducer";

const reduxdevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, reduxdevTool);

export default store;
