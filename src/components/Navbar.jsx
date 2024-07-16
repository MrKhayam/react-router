import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-[60%] bg-white rounded-md flex justify-center items-center gap-3 h-auto p-3 mt-14 mx-auto text-black">
        <NavLink
        to='/'
          className={({isActive}) => `text-xl transition-all duration-300 px-3 py-2 rounded-md font-semibold ${isActive ? "bg-black text-white" : "bg-transparent text-black"}`}
        >
          Home
        </NavLink>
        <NavLink
        to='/about'
          className={({isActive}) => `text-xl transition-all duration-300 px-3 py-2 rounded-md font-semibold ${isActive ? "bg-black text-white" : "bg-transparent text-black"}`}
        >
          About
        </NavLink>
        <NavLink
        to='/portfolio'
          className={({isActive}) => `text-xl transition-all duration-300 px-3 py-2 rounded-md font-semibold ${isActive ? "bg-black text-white" : "bg-transparent text-black"}`}
        >
          Portfolio
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
