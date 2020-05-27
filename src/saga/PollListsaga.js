import * as actions from "../Redux/actionTypes/actionsTypes";
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  AddPollSuccess,
  AddPollError,
} from "../Redux/createAction/createAction";
export function* Listsaga(action) {
  try {
    let response = yield call(
      axios.get,
      "https://secure-refuge-14993.herokuapp.com/list_polls"
    );

    if (response) {
      yield put(AddPollSuccess({ response: response.data.data }));
    } else {
      yield put(AddPollError({ error: response.error }));
    }
  } catch (error) {
    yield put(AddPollError({ error: error }));
  }
}

export function* PollListRequest() {
  yield takeLatest(actions.Add_PollRequest, Listsaga);
}
