import express from "express";
const reviewsRoute = express.Router();
import ReviewsMethods from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/controllers/reviewsController.js";
import isAuthunticated from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/config/Auth.js";
reviewsRoute.post("/add-review",isAuthunticated,ReviewsMethods.add_review);
reviewsRoute.delete("/delete-review",isAuthunticated,ReviewsMethods.delete_review);
reviewsRoute.get("/all-reviews",isAuthunticated,ReviewsMethods.show_all_reviews);
export default reviewsRoute;