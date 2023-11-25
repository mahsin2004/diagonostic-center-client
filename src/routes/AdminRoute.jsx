import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import useAuth from "../hook/useAuth";



const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

  if (loading && isAdminLoading) {
    return (
      <div className="max-w-[1440px] mx-auto px-10">
        <p className="loading loading-spinner loading-md"></p>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/"></Navigate>;
};

AdminRoute.propTypes = {
    children: PropTypes.object,
  };

export default AdminRoute;