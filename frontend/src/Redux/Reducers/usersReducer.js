import { GET_USERS, ADD_USER, REMOVE_USER, SWITCH_ROOM } from "../Types/types";

let initialState = [];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return [...state];
    case ADD_USER:
      if (
        !state.find((user) => user.username === action.payload.username) &&
        action.payload.username !== "ChatCord"
      ) {
        return [
          ...state,
          {
            id: action.payload.id,
            username: action.payload.username,
            room: action.payload.room,
          },
        ];
      }

    case REMOVE_USER:
      const newState = state.filter((user) => user !== action.payload.username);
      state = newState;
      return [...state];

    case SWITCH_ROOM:
      let currentUser = state.find(
        (user) => user.username === action.payload.username
      );
      currentUser.room = action.payload.room;
      return [...state];
    default:
      return state;
  }
};

export default usersReducer;
