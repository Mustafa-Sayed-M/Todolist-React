import { toast } from "react-toastify";

// Messages:
export const successMessage = (msg) => toast.success(msg, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
});
export const errorMessage = (msg) => toast.error(msg, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
});

// Date and Time:
export const currentDate = () => new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
export const currentTime = () => new Date().toLocaleTimeString('en-US', { hours: '2-digit', minutes: '2-digit', seconds: '2-digit' });