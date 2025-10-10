import React from "react";

const Navbar = () => {
  return (
    <nav className="  flex border-b border-gray-300">
      <div className="flex items-center space-x-2 pt-2 pl-8 pb-2 ">
        <img src="../../../public/mylogo.png" alt="" className=" h-8 w-8" />
        <span className="text-2xl font-bold text-[#3A3E47]">CarRental</span>
      </div>
      <span className="ml-auto pl-2 pt-2  pb-2 text-lg font-semibold text-gray-700">
        welcome, Termouli faycal sni9sho
      </span>
    </nav>
  );
};

export default Navbar;
