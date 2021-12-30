import { CHANGE_ROOM } from "../Types/types";

export const setCurrentRoom = (room) => {
  return {
    type: CHANGE_ROOM,
    payload: { room },
  };
};
