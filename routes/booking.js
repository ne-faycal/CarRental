import express from "express";
import BookingMethods from "../controllers/bookingController.js";
const bookingRoute = express.Router();
import isAuthunticated from "../config/Auth.js";
// add new booking 
bookingRoute.post("/create-booking",isAuthunticated,BookingMethods.creat_booking);
bookingRoute.get("/admine-all-bookings-number",isAuthunticated,BookingMethods.Admine_all_bookings_number);
bookingRoute.get("/admin-monthly-revenue",isAuthunticated,BookingMethods.Admine_monthly_revenue);
bookingRoute.get("/Recent-Booking",isAuthunticated,BookingMethods.Recent_Booking);

export default bookingRoute;
