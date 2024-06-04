import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");

      // Handle missing or expired tokens gracefully
      if (!token) {
        console.warn("Missing access token in request. Redirecting to login.");
        navigate("/login");
        // Optionally, return null or throw an error to prevent request execution
        return Promise.reject(new Error("Missing access token"));
      }

      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error?.response?.status;

      if (status === 401 || status === 403) {
        console.error("Unauthorized or Forbidden response:", error);
        await logOut();
        navigate("/login");
        // Optionally, return null or a specific response to handle the error
        return Promise.reject(new Error("Unauthorized or Forbidden"));
      }

      // Handle other potential errors here (e.g., network errors, 500 status codes)
      console.error("API request error:", error);
      // Implement appropriate error handling logic (e.g., display error messages, retry mechanisms)
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
