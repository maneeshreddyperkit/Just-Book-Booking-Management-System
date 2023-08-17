import { toast } from "react-toastify";

export const showToast = (errorMessage, success = false) => {
    toast(errorMessage, {
        position: "bottom-right",
        type: success ? "success" : "error",
        theme: "colored",
    });
};
