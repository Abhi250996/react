import React from "react";
import { NavBar } from "./navbar";

export function AboutUs() {
  return (<>
  
  <NavBar/>
  <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-500">ComicWorld</span>, your ultimate
          destination for exploring the vibrant world of comics. We are passionate about delivering
          a curated collection of comics from different genres, creators, and styles.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
          Our journey started with a vision to unite comic enthusiasts under one platform where
          stories come to life. Whether you're a fan of superheroes, manga, or indie comics, we have
          something special for everyone.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
          Join our community to discover new stories, connect with creators, and share your love for
          comics. Together, let's celebrate the art and imagination that define this incredible
          medium.
        </p>
        <div className="text-center mt-6">
          <a
            href="/contact"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 duration-300 inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div></>
  );
}

export default AboutUs;
