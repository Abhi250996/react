import React from 'react';
import "./index.css"
import { Home } from './Home/Home';
import { Route, Routes } from "react-router-dom";
import { SeriesPage } from './component/SeriesPage';
import { ContactUs } from './component/ContactUs';
import { AboutUs } from './component/AboutUs';
import { SignUp } from './component/SignUp';
import { AdminDashboard } from './admin/AdminDashboard';
import { AdminLogin } from './admin/AdminLogin';
import Adminhome from './admin/AdminHome';
import { Story } from "./admin/DashboardComponent/Story"
 import { Dashboard } from './admin/DashboardComponent/Dashboard';
 
function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/adminhome" element={<Adminhome />} />
      <Route path="/dashboard" element={<AdminDashboard />} >
        <Route path="" element={<Dashboard />} />
        <Route path="story" element={<Story />} />
      </Route>




    </Routes>


  );
}

export default App;
