import * as actions from "../../Redux/actionTypes/actionsTypes";
import {
  UpdatePollTitleSuccess,
  UpdatePollTitleError,
} from "../../Redux/createAction/createAction";
import Axios from "axios";
import { takeLatest } from "redux-saga/effects";

export function* UpdateTitleSaga(action) {
  console.log(action.payload);
}

export function* UpdateTitleRequest() {
  yield takeLatest(actions.Update_PollTitleRequest, UpdateTitleSaga);
}
