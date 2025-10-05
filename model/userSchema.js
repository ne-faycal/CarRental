import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true ,
    },
    famillyName:{
        type:String,
        required:true ,
    },
    password:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false,
        required :true
    },
    otp:{
        type:String,
        default:"",
    },
    drivingLicensss:{
        type:String,

    }
});
const UserSchema = mongoose.model("userSchema",userSchema);
export default UserSchema ;