import * as actions from "../actionTypes/actionsTypes";
const initialState = {
  isPollfetched: false,
  isLoading: false,
  isError: false,
  poll: [],
};

const PollListreducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.Add_PollRequest:
      return {
        ...state,
        isLoading: true,
      };

    case actions.Add_PollSuccess:
      return {
        ...state,
        isLoading: false,
        isPollfetched: true,
        poll: action.payload.response,
      };

    case actions.Add_PollError:
      return {
        ...state,
        isPollfetched: false,
        isError: true,
        isLoading: false,
        response: action.payload.response,
      };
    default:
      return state;
  }
};

export default PollListreducer;
