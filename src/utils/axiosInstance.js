import axios from "axios";
const BACKEND_URL = "http://localhost:3000";

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
    },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        console.log("req error ", error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        if (error?.response?.status / 400 === 1) {
            return Promise.reject(error.response.data);
        }
        console.log("response error", error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
