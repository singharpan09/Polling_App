import * as actions from "../actionTypes/actionsTypes";
const initialstate = {
  isLoading: false,
  isRegistered: false,
};

const Loginreducer = (state = initialstate, action) => {
  switch (actions.type) {
    case actions.Login_Request:
      return {
        ...state,
        isLoading: true,
        isRegistered: false,
      };

    case actions.Login_Sucess:
      return {
        ...state,
        isLoading: false,
        isRegistered: true,
        response: action.payload.response,
      };

    case actions.Login_Error:
      return {
        ...state,
        isLoading: false,
        isRegistered: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default Loginreducer;
