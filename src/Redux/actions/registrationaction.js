import {
  RegistationSuccess,
  RegistationError,
  RegistationRequest,
} from "../createAction/createAction";
import apiRequest from "../../registrationAPI";

export function registationForm(username, password, option) {
  return async function (dispatch) {
    try {
      dispatch(RegistationRequest({ isLoading: true }));
      let data = await apiRequest(
        `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${option}`,
        "get"
      );

      if (data.error === 0) {
        dispatch(RegistationSuccess({ registation: true, response: data }));
      } else {
        dispatch(RegistationError({ registation: false, error: data }));
      }
    } catch (error) {
      dispatch(RegistationError({ registation: false, error: error }));
    }
  };
}
