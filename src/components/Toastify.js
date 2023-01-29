import { toast } from "react-toastify"

export const Error = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
}

export const Success = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
}

export const notifyError = (msg) => {
    toast.error(msg, Error);
}

export const notifySuccess = (msg) => {
    toast.success(msg, Success);
}