import { GET_CHATS, ADD_CHAT } from "../Types/types";
import { nanoid } from "nanoid";

export const addChat = (id, room, username, message) => {
  return {
    type: ADD_CHAT,
    payload: {
      id,
      room,
      username,
      message,
    },
  };
};

export const getChats = () => {
  return {
    type: GET_CHATS,
  };
};
