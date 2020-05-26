import registrationSaga from "./Registrationsaga";
import loginSaga from "./Loginsaga";

import { takeLatest } from "redux-saga/effects";
import * as actions from "../Redux/actionTypes/actionsTypes";
function* watchAllSaga() {
  {
    yield takeLatest(actions.Registation_Request, loginSaga);
    yield takeLatest(actions.Login_Request, registrationSaga);
  }
}

export default watchAllSaga;
