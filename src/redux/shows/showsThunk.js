import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchAllShows = createAsyncThunk("shows/fetchAllShows", async () => {
    try {
        const response = await axiosInstance.get("/shows");
        return response;
    } catch (err) {
        console.log("error is", err);
    }
});

export const fetchAllLocations = createAsyncThunk("shows/fetchAllLocations", async () => {
    try {
        const response = await axiosInstance.get("/locations");
        return response;
    } catch (err) {
        console.log("error is", err);
    }
});

export const addNewShow = createAsyncThunk("shows/saveLocation", async (formData) => {
    try {
        const response = await axiosInstance.post("/shows", formData);
        return response;
    } catch (err) {
        console.log("error is", err);
    }
});

export const fetchSelectedShow = createAsyncThunk("shows/fetchSelectedShow", async (id) => {
    try {
        console.log("payload params", id);
        const response = await axiosInstance.get(`/shows/${id}`);
        return response;
    } catch (err) {
        console.log("error is", err);
    }
});
