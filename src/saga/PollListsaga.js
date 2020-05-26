import * as actions from "../Redux/actionTypes/actionsTypes";
import { call, put } from "redux-saga/effects";
import axios from "axios";
function* Listsaga() {
  const response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/list_polls`
  );
  console.log(response);
}

export function* PollListsaga() {
  yield (actions.Add_PollRequest, Listsaga);
}

export default PollListsaga;
