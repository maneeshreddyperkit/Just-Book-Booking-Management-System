import { createSlice } from "@reduxjs/toolkit";
import { fetchAllShows, fetchAllLocations, saveLocation, saveLocationAudi, addNewShow, fetchSelectedShow } from "./showsThunk";

const initialState = {
    allShows: [],
    allLocations: [],
    allLocationAudis: [],
    allLocationAudiShows: [],
};

const showsSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
        updatedSelectedShow: (state, { payload }) => {
            return {
                ...state,
                selectedShow: payload,
            };
        },
        updateLocationAudis: (state, { payload }) => {
            return {
                ...state,
                allLocationAudis: payload.audis,
            };
        },
        updateLocAudiShows: (state, { payload }) => {
            return {
                ...state,
                locationAudisShows: payload.shows,
            };
        },
    },
    extraReducers: {
        [fetchAllShows.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                allShows: payload,
            };
        },
        [fetchAllLocations.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                allLocations: payload,
            };
        },
        [addNewShow.fulfilled]: (state, { payload }) => {
            return state;
        },
        [fetchSelectedShow.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                selectedShow: payload,
            };
        },
    },
});

export { showsSlice as ShowsSlice };
