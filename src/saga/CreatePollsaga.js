import * as actions from "../Redux/actionTypes/actionsTypes";
import { takeLatest, call } from "redux-saga/effects";
import axios from "axios";
export function* CreateNewPollSaga(action) {
  console.log(action);
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
    `https://secure-refuge-14993.herokuapp.com/add_poll?title=${title}&options=${optionString}`
  );
  console.log(response);
}

export function* CreatePollRequest() {
  yield takeLatest(actions.Create_NewPollRequest, CreateNewPollSaga);
}

export default CreatePollRequest;
