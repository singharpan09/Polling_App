import { createStore } from "redux";
import reducer from "../Redux/reducers/reducer";

const store = createStore(reducer);

export default store;
