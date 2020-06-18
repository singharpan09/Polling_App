import * as actions from "../../actionTypes/actionsTypes";

const initialState = {
  isLoading: false,
};

const Votingreducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.Vote_Request:
      return {
        ...state,
        isLoading: true,
      };

    case actions.Vote_Success:
      return {
        ...state,
        isLoading: false,
        response: action.payload.response,
      };
    case actions.Vote_Error:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default Votingreducer;
