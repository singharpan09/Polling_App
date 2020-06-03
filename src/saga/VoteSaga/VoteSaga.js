import * as actions from "../../Redux/actionTypes/actionsTypes";
import {
  VoteSuccess,
  VoteError,
  ListPollRequest,
} from "../../Redux/createAction/createAction";
import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";

export function* VoteSaga(action) {
  const id = action.payload.id;
  const text = action.payload.option;
  const token = action.payload.token;
  let header = {
    "Content-Type": "application/json",
    access_token: `${token}`,
  };

  let response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${text}`,
    { headers: header }
  );
  let data = response.data;

  if (data.error === 0) {
    yield put(VoteSuccess({ response: data }));
    yield put(ListPollRequest());
  } else {
    yield put(VoteError({ error: data }));
  }
}

export function* VoteRequest() {
  yield takeLatest(actions.Vote_Request, VoteSaga);
}
