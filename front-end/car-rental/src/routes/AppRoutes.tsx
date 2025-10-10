import React from 'react'
import Home from '../pages/Home'
import Dashboard from '../pages/DashBord'
import ManageBookings from '../pages/ManageBookings'
import CarManage from '../pages/CarManage'
import AddCar from '../pages/AddCar'
import { BrowserRouter,Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add-car" element={<AddCar />} />
      <Route path="/manage-bookings" element={<ManageBookings />} />
      <Route path="/manage-cars" element={<CarManage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
