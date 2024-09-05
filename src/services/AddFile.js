import { apiConnector } from "./apiConnector";
import toast from 'react-hot-toast';

const api = process.env.REACT_APP_URL; // Move API URL outside function for reuse

export const addFile = async ({ name, email, message }) => {
  // Initialize toast loading once
  const toastId = toast.loading("Sending message...");

  try {
    // API request to send message
    const res = await apiConnector("POST", api, { name, email, message });

    // Check for success response
    if (res?.data?.success) {
      toast.success("Message sent successfully");
    } else {
      throw new Error(res?.data?.message || "Failed to send message");
    }

  } catch (error) {
    // Error handling with toast and log
    console.error("SEND MESSAGE ERROR: ", error.message || error);
    toast.error("Error sending message: " + error.message);
  }
};
