import express from "express";
import dotenv from "dotenv";
import Users from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/routes/auth.js";
import cars from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/routes/car.js";
import booking from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/routes/booking.js";
import reviewsRoute from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/routes/review.js";
dotenv.config();
const app = express();
import connectDB from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/config/db.js";
// connection to data base 
const DB_URL = process.env.DB_URL;
connectDB(DB_URL);
// middelwars 
app.use(express.json());
app.use("/api",Users);
app.use("/api",cars);
app.use("/api",booking);
app.use("/api",reviewsRoute);

//starting server 
const PORT = process.env.PORT || 3000 ;
app.listen(PORT,()=>{
    console.log(`the server is runining on port :${PORT}`);
});