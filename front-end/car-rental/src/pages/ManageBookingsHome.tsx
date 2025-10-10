import React from "react";
import Manage from "../components/Manage";
const Home = () => {
  return (
    <div>
    
      
       
          
        
          <div>
          <h1 className="text-3xl font-bold ml-35 pt-6">Manage Bookings</h1>
          <p className="font-light text-color-gray-700 w-1/2 pt-6   ">
           Track all customer bookings, approve or cancel requests, and manage booking statuses.


          </p>

        </div>

        <Manage/>
       
      
    </div>
  );
};

export default Home;
