import React, { useState } from 'react'
import '../sidebar/sidebar.css'
import { BsArrowLeftShort, BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
    const [open, setOpenSidebar] = useState(true);

    const menuItems = [
        { name: "Dashboard", path: "/dashboard", icon: "🏠" },
        { name: "Story", path: "story", icon: "📂" },

    ];
    return (
        <>
            <div className='flex'>
                <div className={`bg-black h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
                    <BsArrowLeftShort
                        className={`bg-black text-white text-3xl rounded-full absolute -right-3 top-9 border border-white cursor-pointer ${!open && "rotate-180"
                            }`}
                        onClick={() => setOpenSidebar(!open)}
                    />

                    <div className='inline-flex'>
                        <GiHamburgerMenu className={`bg-black text-4xl rounded cursor-pointer block float-left mr-2  ${open && "rotate-[360deg]"}`} />
                        <h1 className={`text-white origin-left font-medium text-2xl duration-300  ${!open && "scale-0"}`}>StoryWorld</h1>
                    </div>

                    <div className={`flex items-center rounded-md bg-white mt-10 ${!open ? "px-2.5" : "px-4"}  py-2`}>
                        <BsSearch className={`text-pink-500 text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
                        <input type='search' placeholder='Search' className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
                    </div>

                    <div className='mt-5' > {menuItems.map((item, index) => (
                        <li key={index} className='mb-2'>
                            <Link to={item.path}>
                                <div className='flex items-center bg-black mt-2'>
                                    <div className={`bg-black mr-4`}>{item.icon}</div>
                                    <div className={`bg-black text-white  ${!open && "hidden"}`}>{item.name}</div>
                                </div>
                            </Link>

                        </li>
                    ))} </div>
                </div>

                <div className="p-7 flex-1">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Sidebar;                                                                                                                              
