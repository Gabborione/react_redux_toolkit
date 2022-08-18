import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

export const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
  middleware: [saga],
});

export default store;
