import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    minlenght: 3,
    required: true,
    unique:true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique:true
  },
  password: {
    type: String,
    minlenght: 3,
    required: true,
    trim: true,
    unique:true
  },
  isVerified :{
    type:Boolean,
    default:false
  },
  isAdmin :{
    type:Boolean,
    default:false
  },
  forgotPasswordToken:String,
   forgotPasswordTokenExpiry:Date,
    verifyToken:String,
     verifyTokenExpiry:Date,
});


const User = mongoose.model.User || mongoose.model("User",userSchema)

export default User