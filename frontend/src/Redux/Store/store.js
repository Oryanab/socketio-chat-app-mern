import { combineReducers, createStore } from "redux";
import counterReducer from "../Reducers/counterReducer";
import currentRoomReducer from "../Reducers/currentRoomReducer";
import usersReducer from "../Reducers/usersReducer";
import usernameReducer from "../Reducers/usernameReducer";
import chatsReducer from "../Reducers/chatsReducer";

const AppReducers = combineReducers({
  counter: counterReducer,
  chats: chatsReducer,
  username: usernameReducer,
  users: usersReducer,
  currentRoom: currentRoomReducer,
});

const store = createStore(AppReducers);

export default store;
