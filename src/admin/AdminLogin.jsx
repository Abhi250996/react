import React from "react";
import booklogo from "../assets/book-logo1.jpg";

export const AdminLogin = () => {
    return (
        <>
            <div className=" min-h-screen  md:mt-4 md:mt-20  items-center px-4">

                <div className=" flex flex-col md:flex-row bg-lightgrey justify-between p-4 ">
                    <div className="md:mt-20 md:w-1/2 flex justify-center">
                        <img src={booklogo} className="md:w-[90%] md:h-[90%] w-[60%] h-[60%]" />
                    </div>
                    <div className="mt:10 md:mt-20 md:w-1/2 flex flex-center items-center justify-center">

                        <div className="w-full max-w-lg bg-white bg-green-200 shadow-grey shadow-lg rounded-lg md:mt-12 p-6 md:p-8">
                            <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
                                Admin Login
                            </h1>
                            <form >

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="email">
                                        Email :
                                    </label>

                                    <input type="text" id="email" placeholder="Enter you email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="password">
                                        Password :
                                    </label>
                                    <input type="password" id="password" placeholder="Enter you Password" name="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>

                                <div className="mb-4">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 duration-300 w-full"
                                    >
                                        SIGN IN
                                    </button>
                                </div>
                            </form>



                        </div>
                    </div>
                </div>


            </div>
        </>);

};