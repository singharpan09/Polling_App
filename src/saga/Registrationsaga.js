import { takeLatest, put, call } from "redux-saga/effects";
import * as actions from "../Redux/actionTypes/actionsTypes";

import {
  RegistationSuccess,
  RegistationError,
} from "../Redux/createAction/createAction";
import axios from "axios";

export default function* registrationSaga(action) {
  try {
    let username = action.payload.username;
    let password = action.payload.password;
    let option = action.payload.option;

    // yield put(RegistationRequest);
    const response = yield call(
      axios.get,
      `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${option}`
    );

    // yield put(RegistationRequest({ isLoading: true }));
    const data = response.data;
    console.log(data);
    if (data.error === 0) {
      yield put(RegistationSuccess({ registation: true, response: data }));
    } else {
      yield put(RegistationError({ registation: false, error: data }));
    }
  } catch (error) {
    yield put(RegistationError({ registation: false, error: error }));
  }
}

export function* registrationRequest() {
  yield takeLatest(actions.Registation_Request, registrationSaga);
}
