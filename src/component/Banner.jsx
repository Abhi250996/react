
import React from "react";
import banner from "../assets/sp.png"

export function Banner() {

    return <>
        <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
            <div className="w-full order-2 md:order-1 md:w-1/2 mt-20 md:mt-32  flex justify-center ">
                <div className="space-y-12 w-96 bg-white flex flex-col justify-center ">
                    <h1 className="text-4xl font-bold font-playfair">
                        Dive into the world of comics and explore fresh adventures  {" "}<span className="text-pink-500">every day!</span>

                    </h1>
                    <p className="text-2xl font-noto ">Discover the rhythm of movement,
                        where every step is a celebration of expression
                        that energizes your spirit and ignites your passion.</p>
                </div>

            </div>        <div className="w-full order-1 md:w-1/2 mt-20 flex justify-center md:mt-32">
                <img src={banner} alt="" className="w-39h-39" />
            </div>
        </div>
    </>;
}
 