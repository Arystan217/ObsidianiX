import { combineReducers, createStore } from "redux";
import postsReducer from "./postsReducer";
import chatsReducer from "./chatsReducer";

const reducers = combineReducers({
  postsPage: postsReducer,
  chatsPage: chatsReducer,
})

const store = createStore(reducers)

export default store