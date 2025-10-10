import mongoose from "mongoose";
import { type } from "os";
const bookinSchema = mongoose.Schema({
    Bid:{
    type :Number ,
    required: true ,
    unique:true
    },
    Admin:{
    type : Number ,
    required: true ,
    },
    client:{
    type : Number ,
    required: true ,
    },
    totalPrice:{
        type:Number,
        requied:true
    },
    status:{
        type:Boolean,
        required:true,
    },
    creationDate:{
        type: Date,
        default: Date.now()
    },
    cid:{
        type:Number,
        required : true
    },
    Pick_up_Date:{
        type:Date,
        required : true
    },
    Return_Date:{
        type:Date,
        required : true
    }

});
const bookingSchema = mongoose.model("booking",bookinSchema);
export default bookingSchema ;