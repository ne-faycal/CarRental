import React from "react";


import AddCar from "../components/AddCar.tsx";
const Home = () => {
  return (
    <div>
      
     
          <div className="">
            <h1 className="text-3xl font-bold ml-35 pt-6">Add New Car</h1>
            <p className="font-light text-color-gray-700 pt-6   ">
              Fill in details to list a new car for booking, including pricing,
              availability, and car specifications
            </p>
          </div>
       


       <AddCar/>
    </div>
  );
};

export default Home;
