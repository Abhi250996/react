 
import React from "react";

export function Cards({ item }) {
  return (
    <><div className="mt-4 my-3 p-3">
      <div className="card w-90 h-85 bg-base-100 shadow-x1 hover:scale-105 transition-transform duration-200">
        <figure>
          <img
            src={item.image} // Assuming you're passing the image from `item`
            alt={item.title}
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {item.title}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.author}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline">Buy Now</div>
          </div>
        </div>
      </div>
    </div></>

  );
}
 