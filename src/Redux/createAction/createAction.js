import { createAction } from "redux-actions";
import * as actions from "../actionTypes/actionsTypes";

export const RegistationRequest = createAction(actions.Registation_Request);
export const RegistationSuccess = createAction(actions.Registation_Success);
export const RegistationError = createAction(actions.Registation_Error);

export const LoginRequest = createAction(actions.Login_Request);
export const LoginSuccess = createAction(actions.Login_Sucess);
export const LoginError = createAction(actions.Login_Error);
