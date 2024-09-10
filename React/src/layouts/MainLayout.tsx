import Copyright from "components/Copyright";
import Footer from "components/Footer";
import Header from "components/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
            <Copyright/>
        </>
    );
};

export default MainLayout;
