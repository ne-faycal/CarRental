import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/Store";

import {  Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/DashBord";
import ManageBookings from "../pages/ManageBookings";
import CarManage from "../pages/CarManage";
import AddCar from "../pages/AddCar";

function App() {
  return (
    // Wrap everything in Provider and BrowserRouter
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/manage-bookings" element={<ManageBookings />} />
        <Route path="/manage-cars" element={<CarManage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Provider>
  );
}

export default App;
