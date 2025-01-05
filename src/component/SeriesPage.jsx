import React from "react";
import { NavBar } from "./navbar";
import { Footer } from "./Footer";
import { Series } from "../series/series";


export const SeriesPage = () => {
    return (
        <><div>

            <NavBar />
            <div className="min-h-screen">
                <Series />

            </div>
            <Footer />

        </div>
        </>

    );

}

