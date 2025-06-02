
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import logo from "./../../assets/images/Content.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[100%] sticky 
    top-0 z-50 
    bg-white 
    md:px-6 
    py-4 
    border-b 
    border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-6 w-auto" />
            <h2 className="font-bold text-lg">Untitled UI</h2>
          </div>

          
          <ul className="hidden md:flex items-center gap-6 text-gray-500 font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="flex items-center gap-1 cursor-pointer">
              Products <IoIosArrowDown />
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              Resources <IoIosArrowDown />
            </li>
            <li className="cursor-pointer">Pricing</li>
          </ul>
        </div>

       
        <div className="flex items-center gap-4">
         
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-500 font-semibold leading-[24px]">Login</button>
            <button className="bg-[rgba(127,86,217,1)] text-white px-4 py-2 rounded-md hover:bg-purple-700 transition w-[95px] h-[44px] font-semibold leading-[24px]">
              Sign up
            </button>
          </div>

          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-700">
              {isOpen ? <HiX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4">
          <ul className="flex flex-col gap-3 text-gray-500 font-medium">
            <li className="cursor-pointer self-center">Home</li>
            <li className="flex items-center gap-1 cursor-pointer self-center">
              Products <IoIosArrowDown />
            </li>
            <li className="flex items-center gap-1 cursor-pointer self-center">
              Resources <IoIosArrowDown />
            </li>
            <li className="cursor-pointer self-center">Pricing</li>
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            <button className="text-gray-500 font-semibold leading-[24px]">Login</button>
            <button className="bg-[rgba(127,86,217,1)] text-white px-4 py-2 rounded-md hover:bg-purple-700 transition font-semibold leading-[24px]">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
