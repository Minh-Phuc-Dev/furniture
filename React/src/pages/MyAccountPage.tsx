import Breadcrumb from "components/Breadcrumb";
import {Outlet} from "react-router-dom";

const MyAccountPage = () => {
    return (
        <div
            className="max-w-1200 mx-auto"
        >
            <Breadcrumb
                items={
                    [
                        {
                            label: "My Account",
                            to: "/profile"
                        }
                    ]
                }
            />
            <div className="flex gap-5">
                <div className="w-72 flex-none space-y-5">
                    <div className="px-4 py-3 shadow flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <img
                                src="images/avatar.png"
                                className="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-gray-600">Hello,</p>
                            <h4 className="text-gray-800 capitalize font-medium">Russell Ahmed</h4>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">

                        <div className="space-y-1 pl-8">
                            <a
                                href="account.html"
                                className="relative text-base font-medium capitalize hover:text-primary transition block"
                            >
                                <span>
                                    Manage account
                                </span>
                                <span className="absolute -left-8 top-0 text-base">

                                </span>
                            </a>
                            <a
                                href="profile-info.html"
                                className="hover:text-primary transition capitalize block text-primary"
                            >
                                Profile information
                            </a>
                            <a
                                href="manage-address.html"
                                className="hover:text-primary transition capitalize block"
                            >
                                Manage address
                            </a>
                            <a
                                href="change-password.html"
                                className="hover:text-primary transition capitalize block"
                            >
                                change password
                            </a>
                        </div>

                        <div className="space-y-1 pl-8 pt-4">
                            <a
                                href="#"
                                className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block"
                            >
                                <span>My order history</span>

                                <span className="absolute -left-8 top-0 text-base">

                                </span>
                            </a>
                            <a href="#" className="hover:text-primary transition block capitalize">
                                my returns
                            </a>
                            <a href="#" className="hover:text-primary transition block capitalize">
                                my cancellations
                            </a>
                            <a href="#" className="hover:text-primary transition block capitalize">
                                my reviews
                            </a>
                        </div>

                        <div className="pl-8 pt-4">
                            <a
                                href="#"
                                className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block"
                            >
                                logout
                                <span className="absolute -left-8 top-0 text-base">
                                    <i className="fas fa-sign-out-alt"/>
                                </span>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="grow">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default MyAccountPage;