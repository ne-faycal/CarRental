import mongoose from "mongoose";
const reviewsSchema = mongoose.Schema({
    rid:{
        type:Number,
        required:true,
        unique:true
    },
    uid:{
        type : Number,
        required:true
    },
    creationDate:{
        type:Date,
        default:Date.now
    },
    stars:{
        type:Number,
         required:true,
        Default:0,
       
    },
    comment:{
        type:String,
    }   
});
const ReviewsSchema = mongoose.model("Reviews",reviewsSchema);
export default ReviewsSchema;