import Navigation from "components/Navigation";
import Sidebar from "components/Sidebar";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex h-screen overflow-x-hidden overflow-y-scroll">
            <Sidebar/>
            <div className="grow overflow-hidden">
                <Navigation/>
                <div className="p-2">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
