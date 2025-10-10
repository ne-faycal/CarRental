import express from "express";
const reviewsRoute = express.Router();
import ReviewsMethods from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/controllers/reviewsController.js";
reviewsRoute.post("/add-review",ReviewsMethods.add_review);
reviewsRoute.delete("/delete-review",ReviewsMethods.delete_review);
reviewsRoute.get("/all-reviews",ReviewsMethods.show_all_reviews);
export default reviewsRoute;