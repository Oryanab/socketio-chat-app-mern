import { GET_USERS, ADD_USER, REMOVE_USER, SWITCH_ROOM } from "../Types/types";

export const getUsers = () => {
  return {
    type: GET_USERS,
  };
};

export const addUser = (id, username, room) => {
  return {
    type: ADD_USER,
    payload: { id, username, room },
  };
};

export const removeUser = (username) => {
  return {
    type: REMOVE_USER,
    payload: { username },
  };
};

export const switchUserRoom = (username, room) => {
  return {
    type: SWITCH_ROOM,
    payload: { username, room },
  };
};
