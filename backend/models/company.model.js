import mongoose from "mongoose";

const companySchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  description:{
    type:String,
  },
  website:{
    type:String,
  },
  location:{
    type:String
  },
  logo:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:false,
  },
},{timestamps:true});
export const Company = mongoose.model("Company",companySchema);