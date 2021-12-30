import { CHANGE_USERNAME } from "../Types/types";

export const setUsername = (username) => {
  return {
    type: CHANGE_USERNAME,
    payload: { username },
  };
};
