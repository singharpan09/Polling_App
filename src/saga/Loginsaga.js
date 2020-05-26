import { takeLatest, put, call } from "redux-saga/effects";

import { LoginSuccess, LoginError } from "../Redux/createAction/createAction";
import * as actions from "../Redux/actionTypes/actionsTypes";
import axios from "axios";

export function* loginSaga(action) {
  try {
    let username = action.payload.username;
    let password = action.payload.password;
    console.log(username);
    console.log(password);
    let response = yield call(
      axios.get,
      `https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`
    );
    let data = response.data;
    console.log(data);
    if (data.error === 0) {
      localStorage.setItem("token", data.token);
      yield put(LoginSuccess({ response: data }));
    } else {
      yield put(LoginError({ error: data }));
    }
  } catch (error) {
    yield put(LoginError({ error: error }));
  }
}

export function* loginRequest() {
  yield takeLatest(actions.Login_Request, loginSaga);
}
