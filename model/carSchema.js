import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    addBy:{
         type : Number ,
    required: true ,
    },
cid:{
    type : Number ,
    required: true ,
    unique:true
},
image:{
    type:String,
    // the default value is a link of random image (like shadow of a car becoose the image is not required )
    default:"https://i.pinimg.com/736x/f2/90/da/f290daca9bc649d9696517f6d3215252.jpg",
},
priceByDay:{
    type:Number,
    required:true
},
name:{
    type:String,
    required:true
},
mark:{
    type:String,
    required:true,
},
info:{
seats:{
    type:Number,
    required:true,
},
tankType:{
    type:String,
    required:true,
},
gearboxType:{
    type:String,
    required:true,
},
place:{
    type:String,
    required:true,
},

},
description:{
    type:String,
},
avaibility:{
    type:Boolean,
    required:true,
    default:true
},
featers:{
    type:[String],
},
year:{
    type:Number,
    required:true,
},
category:{
    type:String,
    required:true
},
stripId:{
    type:String,
    required:true,
    unique:true
}
});
const CarSchema = mongoose.model("carschema",carSchema);
export default CarSchema ;
