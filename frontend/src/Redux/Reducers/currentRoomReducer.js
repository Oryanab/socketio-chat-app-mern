import { CHANGE_ROOM } from "../Types/types";

const currentRoomReducer = (state = "", action) => {
  switch (action.type) {
    case CHANGE_ROOM:
      return (state = action.payload.room);
    default:
      return state;
  }
};

export default currentRoomReducer;
