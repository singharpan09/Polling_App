import { registrationRequest } from "./Registrationsaga";
import { loginRequest } from "./Loginsaga";
import { PollListRequest } from "./PollListsaga";
import { CreatePollRequest } from "./CreatePollsaga";
import { UpdateTitleRequest } from "./PollUpdateSaga/TitleUpdateSaga";
import { DeletePollRequest } from "./PollUpdateSaga/DeletePollSaga";
import { DeleteOptionRequest } from "./PollUpdateSaga/DeleteOptionSaga";
import { VoteRequest } from "./VoteSaga/VoteSaga";
import { AddNewOptionRequest } from "./PollUpdateSaga/AddNewOptionSaga";

import { fork, all } from "redux-saga/effects";
function* watchAllSaga() {
  {
    yield all([
      fork(registrationRequest),
      fork(loginRequest),
      fork(PollListRequest),
      fork(CreatePollRequest),
      fork(UpdateTitleRequest),
      fork(DeletePollRequest),
      fork(DeleteOptionRequest),
      fork(AddNewOptionRequest),
      fork(VoteRequest),
    ]);
  }
}

export default watchAllSaga;
