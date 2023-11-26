import axios from "axios";

const axiosData = axios.create({
    // baseURL: "https://b8a12-server-side.vercel.app",
    baseURL: "http://localhost:5000",
    withCredentials: true
  });

const useData = () => {
    return axiosData;
};

export default useData;