import React from "react";
import { Search } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <nav className="fw-full flex items-center justify-between md:px-28  sm:px-4 py-4  bg-gray-50 border-b">
      <div className="flex items-center space-x-2 ">
        <img src="../../../public/mylogo.png" alt="" className="h-10 w-8" />
        <span className="text-2xl font-bold text-[#3A3E47]">CarRental</span>
      </div>
      <div className="flex items-center space-x-8 md:space-x-4 sm:space-x-1">
        <div className="hidden md:flex md:items-center md:space-x-8">
          <div className="  !text-gray-500 space-x-8">
            <a href="" className="font-medium">
              Home
            </a>
            <a href="" className="font-medium">
              Cars
            </a>
            <a href="" className="font-medium">
              My Bookings
            </a>
          </div>
          <div className="hidden md:block relative ">
            <input
              type="text"
              placeholder="Search cars"
              className="w-60 border border-gray-300 rounded-full py-2 pl-4 pr-10 text-gray-500 focus:outline-none "
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>
        </div>
        <a href="" className=" font-medium !text-gray-500">
          List cars
        </a>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-[#3B82F6] font-medium text-white py-2 px-7 rounded-lg"
        >
          Login
        </button>
      </div>
      {showLogin && (
        <div className="fixed  inset-0 flex items-center justify-center bg-black   bg-opacity-50 z-50">
          <div className="relative bg-white w-96 h-96 p-8 border rounded-2xl  ">
            <div className="flex flex-col ">
              <h2 className="text-center text-2xl font-semibold  text-blue-600 mb-4">
                User Login{" "}
              </h2>
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="" className="pt-4 pb-2">
                Email
              </label>
              <input
                type="email"
                name=""
                placeholder="Email@gmail.com"
                id=""
                className=" w-full border border-gray-200"
              />
            </div>
            <div className="flex flex-col pt-4 ">
              <label htmlFor="" className="pt-4 pb-2">
                Password
              </label>
              <input
                type="password"
                name=""
                placeholder=".........."
                id=""
                className=" w-full border border-gray-200"
              />
            </div>
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
            >
              ✕
            </button>
            <div className="pt-4">
              <span>Create an account? </span>
              <button
                className="text-blue-600"
                onClick={() => {
                  setShowRegister(true);
                  setShowLogin(false);
                }}
              >
                {" "}
                click here
              </button>
            </div>

            <div className="pt-8">
              <button className="bg-blue-600 text-white w-full h-8 ">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
      {showRegister && (
        <div className="fixed  inset-0 flex items-center justify-center bg-black   bg-opacity-50 z-50">
          <div className="relative bg-white w-96 h-[500px] p-8 border rounded-2xl  ">
            <div className="flex flex-col ">
              <h2 className="text-center text-2xl font-semibold  text-blue-600 mb-4">
                User Sing up{" "}
              </h2>
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="" className="pt-4 pb-2">
                User Name
              </label>
              <input
                type="text"
                name=""
                placeholder="enter you user name"
                id=""
                className=" w-full border border-gray-200"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="" className="pt-4 pb-2">
                Email
              </label>
              <input
                type="email"
                name=""
                placeholder="Email@gmail.com"
                id=""
                className=" w-full border border-gray-200"
              />
            </div>
            <div className="flex flex-col pt-4 ">
              <label htmlFor="" className="pt-4 pb-2">
                Password
              </label>
              <input
                type="password"
                name=""
                placeholder=".........."
                id=""
                className=" w-full border border-gray-200"
              />
            </div>
            <button
              onClick={() => setShowRegister(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl z-10"
            >
              ✕
            </button>
            <div className="pt-4">
              <span>Create an account? </span>
              <button
                className="text-blue-600"
                onClick={() => {
                  setShowRegister(false);
                  setShowLogin(true);
                }}
              >
                {" "}
                click here
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  setShowLogin(false);
                  setShowRegister(false);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>
            <div className="pt-8">
              <button className="bg-blue-600 text-white w-full h-8 ">
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
