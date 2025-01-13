import React, { useEffect, useState } from "react";
import { Login } from "./Login";

export function NavBar() {


    const [sticky, setSticky] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {

        const scrollHandle = () => {
            if (window.scrollY > 0) { setSticky(true); } else {
                setSticky(false);
            }
        }

        window.addEventListener("scroll", scrollHandle);

        return () => {
            window.removeEventListener("scroll", scrollHandle);
        };
    }, []);
    const navBarItems = (
        <>
            <li><a className="text-black" href="/">Home</a></li>
            <li><a className="text-black" href="/series">Series</a></li>
            <li><a className="text-black"href="/contactus">Contact</a></li>
            <li><a className="text-black" href="/aboutus">About</a></li>
        </>
    );

    return (
        <>
            <div className={`max-w-screen-2xl container mx-auto fixed top-0 right-0 left-0 z-50 ${sticky ? "stikcy-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out" : ""} md:px-20 px-4`}>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content  bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navBarItems}
                            </ul>
                        </div>
                        <a href="/" className="text-2xl text-black  font-bold cursor-pointer">ComicWorld</a>
                    </div>
                    <div className="navbar-end space-x-3">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal text-black px-1">
                                {navBarItems}
                            </ul>
                        </div>
                        <div className="hidden md:block">
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </label>
                        </div>
                        <div>
                            <button
                                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 duration-300 cursor-pointer"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Login
                            </button>

                             <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
