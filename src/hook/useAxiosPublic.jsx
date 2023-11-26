import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'https://b8a12-server-side.vercel.app'
    baseURL: "http://localhost:5000",
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;