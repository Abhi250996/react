import React, { useState } from "react";
import { NavBar } from "./navbar";
import { Form } from "react-router-dom";
export function SignUp() {


    return (
        <>

            <NavBar />
            <div className="bg-gray-100  min-h-screen flex items-center justify-center  px-4">

                <div className="w-full max-w-lg bg-white mt-12 shadow-lg rounded-lg mt-12 p-6 md:p-8 ">
                    <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
                        Sign Up
                    </h1>

                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">
                             Email:
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">
                                Passwword:
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">
                                Confrim Password:
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Confirm Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                         
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 duration-300 w-full"
                        >
                            Submit
                        </button>
                    </form>

                </div>


            </div>
        </>

    );
}