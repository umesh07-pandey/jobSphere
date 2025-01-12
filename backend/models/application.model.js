import mongoose from "mongoose";
const applicationSchema=new mongoose.Schema({
  job:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Job',
    required:true,

  },
  applicant:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
  },
  status:{
    type:String,
    enum:['pending','accept','rejectd'],
    defult:'pending',
  }

},{timestamps:true})

export const Application=mongoose.Schema('Application',applicationSchema);