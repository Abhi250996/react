<<<<<<< HEAD
import React from "react";
import { NavBar } from "./navbar";

export function ContactUs() {
  return (
    <>
    <NavBar/>
 
    <div className="bg-gray-100 min-h-screen pt-20 flex flex-col items-center px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg mt-12 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Enter your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div></>
  );
}

export default ContactUs;
=======
import React from "react";
import { NavBar } from "./navbar";

export function ContactUs() {
  return (
    <>
    <NavBar/>
 
    <div className="bg-gray-100 min-h-screen pt-20 flex flex-col items-center px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg mt-12 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Enter your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div></>
  );
}

export default ContactUs;
>>>>>>> cbe10083713a1b3bf48a5ecc0db67aec5a39680c
