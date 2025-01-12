import React from "react"
import comicList from "../../public/novel_list.json"
import { Cards } from "../component/card"


export const Series = () => {

    return (
        <>
            <div className="max-w-screen-2x1 container mx-auto px-4 md:px-10 bg-white">
                <div className="max-w-screen-2x1 container mx-auto md:px-50 px-4 pt-20 flex flex-col justify-center">

                    <h1 className="text-2xl md:text-4xl font-bold md:text-center mt-20 w-1/2 mx-auto">
                        Unleash Your Imagination: Dive into Epic
                        <span className="text-pink-500"> Comic Adventures :)</span>
                    </h1>
                    <p className="mt-10 text-center w-[80%] mx-auto">
                        Embark on thrilling journeys through colorful worlds filled with heroic feats, mysterious villains, and heart-pounding action! Explore our curated collection of comic series that will transport you to realms where anything is possible. Whether you're a fan of superheroes, fantasy, or dark mysteries, our comics are here to captivate your imagination and leave you craving more. Start reading now and let the adventure begin!
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
                    {comicList.novels.map((comic) => (
                        <Cards key={comic.id} item={comic} />
                    ))}
                </div>
            </div>

        </>
    );
}