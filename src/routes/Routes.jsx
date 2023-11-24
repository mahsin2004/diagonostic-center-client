import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Error from "../pages/error/Error";
import LongIn from "../pages/authentication/LogIn";
import Home from "../pages/home/Home";
import Register from "../pages/authentication/Register";


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
    },
  ]);

export default Routers;