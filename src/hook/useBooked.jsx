import axios from "axios";

const axiosBooked = axios.create({
    baseURL: 'https://b8a12-server-side.vercel.app'
    // baseURL: "http://localhost:5000",
})

const useBooked = () => {
    return axiosBooked;
};

export default useBooked;