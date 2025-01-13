import React,{useState} from "react";
 import { SignUp } from "./SignUp";

export function Login({ isOpen, onClose }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!isOpen) return null;

    return (
        <div id="my_modal_3" className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white md:w-1/4  p-6 rounded-md shadow-md">

                <div className="flex flex-row justify-between">
                    <h2 className="text-xl font-bold mb-4">Sign In</h2>
                    <button onClick={() => onClose()} typeclassName="btn btn-square">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                </div>
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
                            Password:
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div className="w-full flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 duration-300 w-50  r"
                        >
                            Submit  
                        </button>
                    </div>

                    <div className="w-full flex justify-center mt-5">

                        No account?<a href="/signup"   onClick={() => setIsModalOpen(true)} className="text-blue-500 no-underline hover:underline hover:text-pink-500 pl-2">Create one</a>
                   
 
                    </div>

                     

                </form>
            </div>
        </div>
    );
}
