import { registrationRequest } from "./Registrationsaga";
import { loginRequest } from "./Loginsaga";
import { PollListRequest } from "./PollListsaga";
import { CreatePollRequest } from "./CreatePollsaga";

import { fork, all } from "redux-saga/effects";
function* watchAllSaga() {
  {
    yield all([
      fork(registrationRequest),
      fork(loginRequest),
      fork(PollListRequest),
      fork(CreatePollRequest),
    ]);
  }
}

export default watchAllSaga;
