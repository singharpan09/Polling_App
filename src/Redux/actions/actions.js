import * as actions from "../actionTypes/actionsTypes";

export const RegistrationRequest = (status) => {
  return {
    type: actions.REGISTRATION_REQUEST,
    payload: {
      isLoading: status,
    },
  };
};
