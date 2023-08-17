import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchUserAdmin = createAsyncThunk("user/fetchUserAdmin", async (email) => {
    try {
        const params = {
            email: email,
        };
        const response = await axiosInstance.get("/check-admin", { params });
        return response;
    } catch (err) {
        console.log("error is", err);
    }
});
