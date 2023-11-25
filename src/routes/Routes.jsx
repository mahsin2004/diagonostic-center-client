import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Error from "../pages/error/Error";
import LongIn from "../pages/authentication/LogIn";
import Home from "../pages/home/Home";
import Register from "../pages/authentication/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivetRoute from "./PrivetRoute";
import AddBanner from "../pages/dashboard/adminpage/AddBanner";
import AdminRoute from "./AdminRoute";
import AllBanner from "../pages/dashboard/adminpage/AllBanner";



  const Routers = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error></Error>,
      element: <Root></Root>,
      children: [
        {
          path: "/login",
          element: <LongIn></LongIn>
        },
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },{
      path: "dashboard",
      element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "addBanner",
          element: <AdminRoute><AddBanner></AddBanner></AdminRoute>
        },
        {
          path: "allBanners",
          element: <AdminRoute><AllBanner></AllBanner></AdminRoute>
        }
      ]
    }
  ]);

export default Routers;