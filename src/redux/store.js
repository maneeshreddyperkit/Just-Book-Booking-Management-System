import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import reducer from "./index";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export default store;
