import { GET_CHATS, ADD_CHAT, RESET_CHAT } from "../Types/types";

let initialState = [];

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      if (action.payload.message !== undefined) {
        return [
          ...state,
          {
            id: action.payload.id,
            room: action.payload.room,
            username: action.payload.username,
            time: new Date().toLocaleTimeString(),
            message: action.payload.message,
          },
        ];
      }

    case GET_CHATS:
      return [...state];

    case RESET_CHAT:
      state.length = 0;
      return [...state];
    default:
      return state;
  }
};

export default chatsReducer;
