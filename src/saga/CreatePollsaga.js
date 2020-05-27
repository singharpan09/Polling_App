import * as actions from "../Redux/actionTypes/actionsTypes";
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  CreateNewPollSuccess,
  CreateNewPollError,
} from "../Redux/createAction/createAction";
export function* CreateNewPollSaga(action) {
  let option = action.payload.options;
  let title = action.payload.title;
  option.splice(-1, 1);
  let length = option.length;
  let optionString = "";
  //no underscore for last string
  option.map((opt, index) => {
    if (index == length - 1) {
      optionString += opt;
    } else {
      optionString += opt + "____";
    }
  });

  let response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/add_poll?title=${title}&options=${optionString}`
  );
  let data = response.data;
  if (data.error === 0) {
    yield put(CreateNewPollSuccess({ response: data.data }));
  } else {
    yield put(CreateNewPollError({ error: data.error }));
  }
}

export function* CreatePollRequest() {
  yield takeLatest(actions.Create_NewPollRequest, CreateNewPollSaga);
}
