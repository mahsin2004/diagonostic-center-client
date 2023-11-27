import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useUsers = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: users = [], isLoading} = useQuery({
        queryKey: ["users32"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/users/${user.email}`);
          return res.data;
        },
      });
    return [users, isLoading];
};

export default useUsers;