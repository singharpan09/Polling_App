import { createAction } from "redux-actions";
import * as actions from "../actionTypes/actionsTypes";

export const RegistationRequest = createAction(actions.Registation_Request);
export const RegistationSuccess = createAction(actions.Registation_Success);
export const RegistationError = createAction(actions.Registation_Error);

export const LoginRequest = createAction(actions.Login_Request);
export const LoginSuccess = createAction(actions.Login_Sucess);
export const LoginError = createAction(actions.Login_Error);

export const ListPollRequest = createAction(actions.List_PollRequest);
export const ListPollSuccess = createAction(actions.List_PollSuccess);
export const ListPollError = createAction(actions.List_PollError);

export const CreateNewPollRequest = createAction(actions.Create_NewPollRequest);
export const CreateNewPollSuccess = createAction(actions.Create_NewPollSuccess);
export const CreateNewPollError = createAction(actions.Create_NewPollError);

export const UpdatePollTitleRequest = createAction(
  actions.Update_PollTitleRequest
);
export const UpdatePollTitleSuccess = createAction(
  actions.Update_PollTitleSuccess
);
export const UpdatePollTitleError = createAction(actions.Update_PollTitleError);

export const DeletePollRequest = createAction(actions.Delete_PollRequest);
export const DeletePollSuccess = createAction(actions.Delete_PollSuccess);
export const DeletePollError = createAction(actions.Delete_PollError);
