import * as actions from "../Redux/actionTypes/actionsTypes";

export function* PollListsaga() {
  yield (actions.Add_PollRequest, Listsaga);
}
