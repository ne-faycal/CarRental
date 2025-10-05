import express from "express";
const Users = express.Router();
import authMethods from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/controllers/authController.js";
Users.post("/register",authMethods.register);
Users.post("/login",authMethods.login);
Users.post("/verify-account",authMethods.verify_account);
Users.post("/reset-otp",authMethods.reset_otp);
Users.post("/forget-password",authMethods.forget_password);


export default Users ;