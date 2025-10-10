import React from "react";
import SearchOptions from "../constants/SearchOptions";
import { Search } from "lucide-react";
import Navbar from "../components/NavbarHome";
const Home = () => {
  return (
    <div>
    
      <Navbar />
      <div className="bg-[#F4F7FB] pt-32 ">
        <h1 className="font-bold text-center text-5xl  ">
          Luxury cars on Rent
        </h1>
        <SearchOptions />
        <img src="../../public/car.png" alt=""
        className="mx-auto mt-14" />
      </div>
    </div>
  );
};

export default Home;
