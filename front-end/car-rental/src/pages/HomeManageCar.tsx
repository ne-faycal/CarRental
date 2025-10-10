import React from 'react'

import ManageCar from '../components/ManageCar'
const Home = () => {
  return (
    <div>
    
          <div className="">
            <h1 className="text-3xl font-bold ml-35 pt-6">Manage Cars</h1>
            <p className="font-light text-color-gray-700 pt-6   ">
            View all listed cars, update their details, or remove them from the booking platform.
            </p>
          </div>
       
         <ManageCar/>

      
      
    </div>
  )
}

export default Home ;
           
