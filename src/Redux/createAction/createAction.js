import { createAction } from "redux-actions";
import * as actions from "../actionTypes/actionsTypes";

export const RegistationRequest = createAction(actions.Registation_Request);
export const RegistationSuccess = createAction(actions.Registation_Success);
export const RegistationError = createAction(actions.Registation_Error);
