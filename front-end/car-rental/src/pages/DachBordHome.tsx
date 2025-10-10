import Container from '../components/Container' 
import React from 'react'
   
const DachBordHome :React.FC=()=>{
  return (
    <div>

<div className="">
      <h1 className="text-3xl font-bold ml-35 pt-6">Admin Dashboard</h1>
      <p className="font-light text-color-gray-700 w-1/2 pt-6   ">
        Monitor overall platform performance including total cars, bookings,
        revenue, and recent activities
      </p>
    </div>

    <Container/>
        
    </div>
  )
}

export default DachBordHome
