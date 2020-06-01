import * as actions from "../Redux/actionTypes/actionsTypes";
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  ListPollSuccess,
  ListPollError,
} from "../Redux/createAction/createAction";
export function* Listsaga(action) {
  try {
    let response = yield call(
      axios.get,
      "https://secure-refuge-14993.herokuapp.com/list_polls"
    );

    if (response) {
      yield put(ListPollSuccess({ response: response.data.data }));
    } else {
      yield put(ListPollError({ error: response.error }));
    }
  } catch (error) {
    yield put(ListPollError({ error: error }));
  }
}

export function* PollListRequest() {
  yield takeLatest(actions.List_PollRequest, Listsaga);
}
