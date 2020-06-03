import * as actions from "../../Redux/actionTypes/actionsTypes";
import {
  DeletePollSuccess,
  DeletePollError,
  ListPollRequest,
} from "../../Redux/createAction/createAction";
import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";

export function* DeletePollSaga(action) {
  let id = action.payload.id;

  const response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/delete_poll?id=${id}`
  );

  const data = response.data;
  if (data.error == 0) {
    yield put(ListPollRequest());
    yield put(DeletePollSuccess({ response: data }));
  } else {
    yield put(DeletePollError({ error: data.error }));
  }
}

export function* DeletePollRequest() {
  yield takeLatest(actions.Delete_PollRequest, DeletePollSaga);
}
