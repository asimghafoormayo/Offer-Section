import React from 'react'
import { RiDashboardFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io";
import { TbChecklist } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { RiPagesFill } from "react-icons/ri";


const Sidebar = () => {
  return (
    <div className="relative w-[300px] bg-white h-screen p-5 border-r border-gray-300">
    {/* Logo Goes Here */}
    <div className="flex items-center justify-center mb-6">
      <img src="/images/logo.png" alt="Logo" className="w-20 h-8 object-contain" />
    </div>
    
    <div className="absolute bottom-[calc(100%-80px)] left-0 w-full border-t border-gray-300" />

    {/* Menu Items Goes Here */}
    <nav className="mt-16 ml-6">
      <ul>
        {/* Dashboard Goes Here */}
        <li className="flex items-center mb-6">
          <RiDashboardFill />
          <span className="text-gray-700 font-semibold ml-2">Dashboard</span>
        </li>

        {/* Additional Menu Items */}
        <li className="flex items-center mb-6">
          <SlCalender />
          <span className="text-gray-700 font-semibold ml-2">Calender</span>
        </li>

        <li className="flex items-center mb-6">
          <IoIosPeople />
          <span className="text-gray-700 font-semibold ml-2">Customers</span>
        </li>

        <li className="flex items-center mb-6">
          <TbChecklist />
          <span className="text-gray-700 font-semibold ml-2">Reservation</span>
        </li>

        <li className="flex items-center mb-6">
          <FaCar />
          <span className="text-gray-700 font-semibold ml-2">Vehicles</span>
        </li>

        <li className="flex items-center mb-6">
          <GoGoal />
          <span className="text-gray-700 font-semibold ml-2">Tracking</span>
        </li>

        <li className="flex flex-col mb-6">
          <div className="flex items-center">
            <RiPagesFill />
            <span className="text-blue-900 font-bold ml-2">Offer Generator</span>
          </div>
          <ul className="ml-6 list-disc list-inside my-3">
            <li className="text-gray-600">Generate Offer</li>
            <li className="text-gray-600 mt-2">
                <button className='bg-blue-900 px-12 py-2 text-white rounded-md'>Click</button>
            </li>
          </ul>
        </li>

       
      </ul>
    </nav>
  </div>
  )
}

export default Sidebar