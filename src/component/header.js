import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <a className="navbar-brand" href="/">
            <img src={require('../assets/logo.jpg')} className="company-logo" />
          </a>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a className="navbar-link" href="/home">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link" href="/features">
                About Us
              </a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link" href="/pricing">
                Services
              </a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link" href="/pricing">
                Contact Us
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}


// import React from "react"
// import "../App.css"


// export function Header() {


//     return <>
//         <div className="header">

//             <div className="logo-container">
//                 <div ><img src={require('../assets/logo.jpg')} className="company-logo" />
//                 </div>
//             </div>
//             <div>

//                 <div>Home</div>
//                 <div>About Us</div>
//                 <div>Contact</div>
//             </div>

//         </div>


//     </>
// };