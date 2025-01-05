import React from "react";
import { NavBar } from "../component/navbar";
import { Banner } from "../component/Banner";
import { FreeComics } from "../component/FreeComics";
import { Footer } from "../component/Footer";

export const Home = () => {
        return (
            <>
            <div className='bg-white'>
            <NavBar/>
            <Banner/>
            <FreeComics/>
            <Footer/>
            </div>
            </>
        );
    
}