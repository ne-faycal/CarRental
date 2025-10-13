import mongoose from "mongoose";
 const connectDB = async(DB_URL)=>{
    try {
        await mongoose.connect(DB_URL);
        console.log("connected to DB ");
        
    } catch (error) {
        console.log(error);
    }
   
} 
export default connectDB;
