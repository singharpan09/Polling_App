import * as actions from "../Redux/actionTypes/actionsTypes";
import { takeLatest, call } from "redux-saga/effects";

export function* CreateNewPollSaga(action) {
  console.log(action);
  let title = action.payload.title;
  console.log(title);
  yield call(
    `https://secure-refuge-14993.herokuapp.com/add_poll?title=${title}&options=opt1____opt2____opt3____opt4`
  );
}

export function* CreatePollRequest() {
  yield takeLatest(actions.Create_NewPollRequest, CreateNewPollSaga);
}

export default CreatePollRequest;
