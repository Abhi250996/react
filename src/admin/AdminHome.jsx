import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Footer } from '../component/Footer';
import  {Sidebar}  from 'react-pro-sidebar';
import { Outlet } from 'react-router-dom'; 

const Adminhome = () => {
  const [closeSideBar, setCloseSideBar] = useState(false)

  const handleSidebar = () =>{
    if(!closeSideBar){
      setCloseSideBar(true)
    }else{
      setCloseSideBar(false)
    }
  }
  return (
    <>
    
      <div className='relative'>
        
        <div>
           <div className='flex'> <div className={closeSideBar ? 'w-20 h-[83vh] sidecolor ' : ''}></div>
        <Sidebar />  
            <div className='w-full h-[83vh]'>
          
      
            </div>

          </div>
          <Footer />
        </div>
        <div className={closeSideBar ? 'flex items-center justify-center absolute top-20 z-20 left-56 bg-gray-700 text-white w-10 h-10 rounded-full transition-all' :'flex items-center justify-center absolute top-20 z-20 left-4  text-2xl bg-gray-700 text-white w-10 h-10 rounded-full transition-all'}
        onClick={handleSidebar}>
          {closeSideBar ? <MdClose className='font-extrabold text-3xl'/> : <HiMiniBars3CenterLeft className='font-bold'/>}</div>
      </div>

    </>
  )
}

export default Adminhome;
