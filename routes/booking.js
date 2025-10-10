import express from "express";
import BookingMethods from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/controllers/bookingController.js";
const bookingRoute = express.Router();
// add new booking 
bookingRoute.post("/create_booking",BookingMethods.creat_booking);
bookingRoute.get("/admine-all-bookings-number",BookingMethods.Admine_all_bookings_number);
bookingRoute.get("/admin-monthly-revenue",BookingMethods.Admine_monthly_revenue);
bookingRoute.get("/Recent-Booking",BookingMethods.Recent_Booking);

export default bookingRoute;
