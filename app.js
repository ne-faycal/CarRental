import express from "express";
import dotenv from "dotenv";
import Users from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/routes/auth.js";
dotenv.config();
const app = express();
import connectDB from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/config/db.js";
// connection to data base 
const DB_URL = process.env.DB_URL;
connectDB(DB_URL);
// middelwars 
app.use(express.json());
app.use("/api",Users);

//starting server 
const PORT = process.env.PORT || 3000 ;
app.listen(PORT,()=>{
    console.log(`the server is runining on port :${PORT}`);
});