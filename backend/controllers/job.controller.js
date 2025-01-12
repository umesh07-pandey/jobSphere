import {Job} from "../models/job.model.js"

// Job Post
export const postJob= async(req,res)=>{
  try{
    const {tittle,description,requirement,salary,location,jobType,experience,position,companyId}=req.body;
    if( !tittle || !description || !requirement || !salary || !location || !jobType || !experience || !position || !companyId){
      return res.status(400).json({
        message:"Something is missing",
        success:false
      })
    };
    const userId=req.id;

    const job=await Job.create({
      tittle,
      description,
      requirement:requirement.split(","),
      salary:Number(salary),
      location,
      jobType,
      experienceLevel:experience,
      position,
      company:companyId,
      created_by:userId,
    });

    return res.status(201).json({
      message:"new job created successfully",
      job,
      success:true,
    })

  }
  catch(error){
    console.log(error)
  }
}

// get all jobs 
export const getAllJob =async(req,res)=>{
  try{
    const keyword = req.query.keyword || ""
    const query ={
      $or:[
        {tittle:{$regex:keyword,$options:"i"}},
        {description:{$regex:keyword,$options:"i"}}
      ]
    };

    const jobs =await Job.find(query).populate({
      path:"company"
    }).sort({createdAt:-1})
    if(!jobs){
      return res.status(400).json({
        message:"job mot found",
        success:false,
      })

    }

    return res.status(200).json({
      jobs,
      success:true,
    })

  }
  catch(error){
    console.log(error)
  }
}

// get job by id 

export const getJobById = async(req,res)=>{
  try{
    const jobId =req.params.jobId;
    const job = await Job.findById(jobId)
    if(!job){
      return res.status(400).json({
        message:"job not found",
        success:false,
      })

    }
    return res.status(200).json({
      job,
      success:true,
    })


  }
  catch(error){
    console.log(error)
  }
}

// job create by admin
 
export const getAdminJobs = async(req,res)=>{
  try{
    const adminId=req.id;
    const jobs = await Job.find({});
    if(!jobs){
      return res.status(404).json({
        message:"job not found",
        success:false,
      })
    }
    return res.status(200).json({
      jobs,
      success:true,
    })
  }
  catch(error){
    console.log(error)
  }
}


