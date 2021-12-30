import { GET_CHATS, ADD_CHAT } from "../Types/types";

let initialState = [
  {
    id: 12345,
    room: "javascript",
    username: "oryan",
    time: "9:12pm",
    message:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,repudiandae.",
  },
  {
    id: 12345,
    room: "javascript",
    username: "oryan",
    time: "9:12pm",
    message:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,repudiandae.",
  },
];

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
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
    case GET_CHATS:
      return [...state];
    default:
      return state;
  }
};

export default chatsReducer;
