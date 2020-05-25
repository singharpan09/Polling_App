import { combineReducers } from "redux";

import Registrationreducer from "./Registrationreducer";
import Loginreducer from "./Loginreducer";
const rootReducer = combineReducers({
  Regis_status: Registrationreducer,
  Login_status: Loginreducer,
});

export default rootReducer;
