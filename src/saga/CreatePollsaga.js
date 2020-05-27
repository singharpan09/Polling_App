import * as actions from "../Redux/actionTypes/actionsTypes";
import { takeLatest } from "redux-saga";

function* CreatePollRequest() {
  yield takeLatest(actions.Create_NewPollRequest, CreateNewPollSaga);
}
