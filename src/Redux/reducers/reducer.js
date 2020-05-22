import * as actions from "../actionTypes/actionsTypes";
const initialstate = {
  isLoading: false,
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case actions.REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case "":
      return state;

    default:
      return state;
  }
};

export default reducer;
