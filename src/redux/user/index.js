import { createSlice } from "@reduxjs/toolkit";
import { fetchUserAdmin } from "./userThunk";

const initialState = {
    name: "",
    email: "",
    imageUrl: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUserDetails: (state, { payload }) => {
            state.name = payload.name;
            state.email = payload.email;
            state.imageUrl = payload.imageUrl;
        },
    },
    extraReducers: {
        [fetchUserAdmin.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                isAdmin: payload.admin,
            };
        },
    },
});

export { userSlice as UserSlice };
