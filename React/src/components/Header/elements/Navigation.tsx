import {TRIGGER_TOAST_TYPE, triggerToast} from "common/Sonner";
import {AUTHENTICATE_STATUS, clearCredential} from "contexts/Authenticate";
import {loadCart} from "contexts/Cart/Mindleware";
import {loadOrder} from "contexts/Order/Mindleware";
import {AppDispatch, AppState} from "contexts/root";
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import AuthenticateService from "services/AuthenticateService";
import {twMerge} from "tailwind-merge";

const Navigation = () => {
    const {status} = useSelector((state: AppState) => state.authenticate);
    const dispatch = useDispatch<AppDispatch>()
    const {pathname} = useLocation()


    const handleLogout =  async () => {
        const {success} = await AuthenticateService.logout()

        if (success) {
            triggerToast(
                {
                    type:TRIGGER_TOAST_TYPE.SUCCESS,
                    header: "Success",
                    body: "Logout successfully"
                }
            )
            dispatch(clearCredential())
            dispatch(loadOrder())
            dispatch(loadCart())
            return
        }

        triggerToast(
            {
                type:TRIGGER_TOAST_TYPE.ERROR,
                header: "Error",
                body: "Logout failed"
            }
        )

    }


    return (
        <nav className="bg-secondary">
            <div
                className="max-w-1200 mx-auto flex items-center"
            >
                <button
                    className="px-8 py-3 flex space-x-1 text-white font-medium bg-primary"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                    <span>
                        All category
                    </span>
                </button>

                <div
                    className="pl-12 grow flex justify-between"
                >
                    <ul className="flex space-x-5">
                        <li className="text-white hover:opacity-100 cursor-pointer transition-all duration-300">
                            <Link
                                to="/"
                                className={
                                    twMerge(
                                        "text-white hover:opacity-100 cursor-pointer transition-all duration-300",
                                        pathname === "/" ? "text-primary" : "opacity-80"
                                    )
                                }

                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/search"
                                className={
                                    twMerge(
                                        "text-white hover:opacity-100 cursor-pointer transition-all duration-300",
                                        pathname === "/search" ? "text-primary" : "opacity-80"
                                    )
                                }
                            >
                                Shop
                            </Link>
                        </li>
                        <Link
                            to="/about-us"
                            className={
                                twMerge(
                                    "text-white hover:opacity-100 cursor-pointer transition-all duration-300",
                                    pathname === "/about-us" ? "text-primary" : "opacity-80"
                                )
                            }
                        >
                            About US
                        </Link>
                        <Link
                            to="/contact"
                            className={
                                twMerge(
                                    "text-white hover:opacity-100 cursor-pointer transition-all duration-300",
                                    pathname === "/contact" ? "text-primary" : "opacity-80"
                                )
                            }
                        >
                            Contact US
                        </Link>
                    </ul>
                    {
                        (status === AUTHENTICATE_STATUS.AUTHENTICATED) ? (
                            <button
                                className="text-white hover:opacity-100 cursor-pointer transition-all duration-300"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        ) : (
                            <div>
                                <Link
                                    to="/login"
                                    className="text-white hover:opacity-100 cursor-pointer transition-all duration-300"
                                >
                                    Login
                                </Link>
                                <span className="px-0.5 text-white">/</span>
                                <Link
                                    to="/register"
                                    className="text-white hover:opacity-100 cursor-pointer transition-all duration-300"
                                >
                                    Signup
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>

        </nav>
    );
};

export default Navigation;