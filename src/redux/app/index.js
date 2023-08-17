import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    loading: false,
  },
  reducers: {
    toggleLoader: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export { appSlice as AppSlice };
