import { combineReducers } from "redux";

import Registrationreducer from "./Registrationreducer";
import Loginreducer from "./Loginreducer";
import PollListreducer from "./PollListreducer";
import CreateNewPollreducer from "./createNewPollreducer";
import UpdateTitlereducer from "./UpdatePoll/UpdatePollTitle";
const rootReducer = combineReducers({
  Registrationstatus: Registrationreducer,
  Loginstatus: Loginreducer,
  PollListstatus: PollListreducer,
  CreateNewPollstatus: CreateNewPollreducer,
  UpdateTitlestatus: UpdateTitlereducer,
});

export default rootReducer;
