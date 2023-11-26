import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://b8a12-server-side.vercel.app",
  baseURL: "http://localhost:5000",
  withCredentials: true
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
