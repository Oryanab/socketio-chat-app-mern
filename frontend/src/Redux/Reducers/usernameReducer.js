import { CHANGE_USERNAME } from "../Types/types";

const usernameReducer = (state = "", action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return (state = action.payload.username);
    default:
      return state;
  }
};

export default usernameReducer;
