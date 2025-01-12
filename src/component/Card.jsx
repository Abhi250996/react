import React from "react";
import { donwloadPdf } from "./PDFComponent/donwloadPdf";
import { previewPdf } from "./PDFComponent/previewPdf";

export function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-2 mx-2 md:mx-3 p-2  shadow-lg rounded-2xl  ">
        <div className="card bg-base-100 shadow-x1 hover:scale-105 transition-transform duration-200">
          <figure>
            <img
              src={item.image} className="h-60 md:w-full"
              alt={item.title}
            />
          </figure>
          <div className="w-full mt-2 p-4 justify-between">
            <h2 className="card-title   ">
              {item.title}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.author}</p>
            <div className="card-actions justify-between mt-4">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline">Buy Now</div>

            </div>
            <div className="card-actions justify-between mt-4">

              <a className="text-blue  underline hover:text-pink-500" href="#" onClick={(e) => {
                e.preventDefault();
                previewPdf(item);}}>Preview</a>
              
              <a href="#" onClick={(e) => {
                e.preventDefault();
                donwloadPdf(item);
              }} className="text-blue underline hover:text-pink-500">Download</a>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

