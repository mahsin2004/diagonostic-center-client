import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBooked = () => {
    const axiosPublic = useAxiosPublic();
    const { data: booked = [], refetch} = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
          const res = await axiosPublic.get("/bookings");
          return res.data;
        },
      });
    return [booked, refetch];
};

export default useBooked;
