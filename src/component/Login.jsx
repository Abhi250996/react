import React from "react";

export function Login({ isOpen, onClose }) {
    if (!isOpen) return null; // Render nothing if modal is closed

    return (
        <div id="my_modal_3" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <p>Enter your credentials to login.</p>
                <button
                    className="bg-red-500 text-white p-2 mt-4 rounded-md hover:bg-red-700 duration-300"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
