import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import PropTypes from "prop-types";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="max-w-[1440px] mx-auto px-10">
        <p className="loading loading-spinner loading-md"></p>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.object,
};


export default PrivetRoute;
