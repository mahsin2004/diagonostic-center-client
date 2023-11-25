import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import useAuth from "../hook/useAuth";



const AdminRoute = ({children}) => {
    const {user} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

  if (isAdminLoading) {
    return (
      <div className="max-w-[1440px] mx-auto px-10">
        <p className="loading loading-spinner loading-md"></p>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={location.pathname} to="/"></Navigate>;
};

AdminRoute.propTypes = {
    children: PropTypes.object,
  };

export default AdminRoute;