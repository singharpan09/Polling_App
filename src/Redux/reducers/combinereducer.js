import { combineReducers } from "redux";

import Registrationreducer from "./Registrationreducer";
import Loginreducer from "./Loginreducer";
import PollListreducer from "./PollListreducer";
import CreateNewPollreducer from "./createNewPollreducer";
const rootReducer = combineReducers({
  Registrationstatus: Registrationreducer,
  Loginstatus: Loginreducer,
  PollListstatus: PollListreducer,
  CreateNewPollstatus: CreateNewPollreducer,
});

export default rootReducer;
