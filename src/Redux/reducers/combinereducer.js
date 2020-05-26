import { combineReducers } from "redux";

import Registrationreducer from "./Registrationreducer";
import Loginreducer from "./Loginreducer";
import PollListreducer from "./PollListreducer";
const rootReducer = combineReducers({
  Registrationstatus: Registrationreducer,
  Loginstatus: Loginreducer,
  PollListstatus: PollListreducer,
});

export default rootReducer;
