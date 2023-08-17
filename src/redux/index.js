import { combineReducers } from "@reduxjs/toolkit";
import { AppSlice } from "./app";
import { ShowsSlice } from "./shows";
import { UserSlice } from "./user";

const rootReducer = combineReducers({
    app: AppSlice.reducer,
    user: UserSlice.reducer,
    shows: ShowsSlice.reducer,
});

export default rootReducer;
