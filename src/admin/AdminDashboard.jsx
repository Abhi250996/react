import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
  


export const AdminDashboard = () => {

    return (
        <div className='w-full items-center flex-row'>
            <Sidebar/>

            <div className="flex-bg-black text-white "><h1></h1>Dashboard</div>
        </div>
    );
}