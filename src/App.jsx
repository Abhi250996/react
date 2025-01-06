import React from 'react';
import "./index.css"
import { Home } from './Home/Home';
import { Route, Routes } from "react-router-dom";
import { SeriesPage } from './component/SeriesPage';
import { ContactUs } from './component/ContactUs';
import { AboutUs } from './component/AboutUs';
import { SignUp } from './component/SignUp';

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>


  );
}

export default App;
