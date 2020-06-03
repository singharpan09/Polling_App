import { combineReducers } from "redux";

import Registrationreducer from "./Registrationreducer";
import Loginreducer from "./Loginreducer";
import PollListreducer from "./PollListreducer";
import CreateNewPollreducer from "./createNewPollreducer";
import UpdateTitlereducer from "./UpdatePoll/UpdatePollTitle";

import DeletePollreducer from "./UpdatePoll/DeletePoll";
import DeleteOptionreducer from "./UpdatePoll/DeleteOption";
const rootReducer = combineReducers({
  Registrationstatus: Registrationreducer,
  Loginstatus: Loginreducer,
  PollListstatus: PollListreducer,
  CreateNewPollstatus: CreateNewPollreducer,
  UpdateTitlestatus: UpdateTitlereducer,
  DeletePollstatus: DeletePollreducer,
  DeleteOptionstatus: DeleteOptionreducer,
});

export default rootReducer;
