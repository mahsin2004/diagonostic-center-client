import { Outlet } from "react-router-dom";
import Navbar from "../component/shear/Navbar";
import Footer from "../component/shear/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;