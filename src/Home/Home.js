import React from "react";
import "../Home/home.css";
 
export default function Home() {
  return (
    <div className="homepage" >
     
     <div  className="hometext">
     <h1>
        100% Obsessive Website and Mobile Development Services
      </h1>
      <p>
      Over 100+ companies around the world have hired us to increase digital intensity ||
      of their business. We can likely help you do the same.
      </p>

 
     </div>
      <img src={require('../assets/home_logo.jpg')} className="home_image" />
    </div>
  );
}
