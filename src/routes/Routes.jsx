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
import Profile from "../pages/dashboard/userPage/Profile";
import ContactUs from "../pages/home/contact/ContactUs";
import AllUsers from "../pages/dashboard/adminpage/AllUsers";
import AllTests from "../pages/home/allTests/AllTests";
import Details from "../pages/home/allTests/Details";
import AddTest from "../pages/dashboard/adminpage/AddTest";
import AdminAllTests from "../pages/dashboard/adminpage/AdminAllTests";
import UpdateTest from "../pages/dashboard/adminpage/UpdateTest";
import Appointments from "../pages/dashboard/userPage/Appointments";
import Reservation from "../pages/dashboard/adminpage/Reservation";
import AdminDashboard from "../pages/dashboard/adminpage/AdminDashboard";
import UserDashboard from "../pages/dashboard/userPage/UserDashboard";




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
        },
        {
          path: "/contactUs",
          element: <PrivetRoute><ContactUs></ContactUs></PrivetRoute>
        },
        {
          path: "/allTests",
          element: <AllTests></AllTests>
        },
        {
          path: "/details/:id",
          element:<PrivetRoute><Details></Details></PrivetRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
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
        },
        {
          path: "userProfile",
          element: <PrivetRoute><Profile></Profile></PrivetRoute>
        },
        {
          path: "allUsers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },{
          path: "addTest",
          element: <AdminRoute><AddTest></AddTest></AdminRoute>
        },
        {
          path: "allTests",
          element: <AdminAllTests></AdminAllTests>
        },
        {
          path: "allTests/:id",
          element:<UpdateTest></UpdateTest>,
          loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
        },
        {
          path: "appointments",
          element: <PrivetRoute><Appointments></Appointments></PrivetRoute>
        },
        {
          path: "reservation",
          element: <AdminRoute><Reservation></Reservation></AdminRoute>
        },
        {
          path: "adminHome",
          element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
        },
        {
          path: "userHome",
          element: <UserDashboard></UserDashboard>
        }
       
      ]
    }
  ]);

export default Routers;