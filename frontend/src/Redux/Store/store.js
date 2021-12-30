import { combineReducers } from "redux";
import counterReducer from "../Reducers/counterReducer";
import { createStore } from "redux";

const AppReducers = combineReducers({
  counter: counterReducer,
});

const store = createStore(AppReducers);

export default store;
