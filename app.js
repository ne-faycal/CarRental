import express from "express";
import dotenv from "dotenv";
import Users from "./routes/auth.js";
import cars from "./routes/car.js";
import booking from "./routes/booking.js";
import reviewsRoute from "./routes/review.js";
dotenv.config();
const app = express();
import connectDB from "./config/db.js";
import cors from "cors";
// connection to data base 
const DB_URL = process.env.DB_URL;
connectDB(DB_URL);
// middelwars 
app.use(cors({
  origin: "*" ,// allowed domains (all domains are allowed ntill we specefique the domailn of the front end )
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
})); 
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