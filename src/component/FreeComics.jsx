import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import freeComicList from "../../public/novel_list.json";
import { Cards } from "./card";

export function FreeComics() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const comicList = freeComicList.novels.filter((e) => e.category === "Free")

    return (
        <div className="mt-20 my-2">
            <div className="max-w-screen-2x1 container mx-auto px-4 md:px-10 flex flex-col items-center justify-center">
                <div className="mt-10 w-1/2  flex flex-col justify-center">
                    <h1 className="font-bold text-3xl pb-2 text-center font-playfair ">Free Comic Books</h1>
                    <p className="text-center  font-playwrite text-xl">
                        Comics offer a captivating blend of visual storytelling and narrative,
                        combining colorful illustrations with engaging dialogue to create
                        immersive experiences. From superhero adventures to slice-of-life tales,
                        comics appeal to all ages and cultures.
                    </p>
                </div>
                <div className="w-full mt-12 md:mt-10 ">
                    <Slider {...settings} className="gap-4">
                        {comicList.map((comic) => (
                            <Cards key={comic.id} item={comic} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
