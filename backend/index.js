import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv  from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/company.route.js";
import applicationRoute from "./routes/application.route.js"

dotenv.config({})
const app=express(); 
app.get("/home",(req,res)=>{
  return res.status(200).json({
    message:"i am comming from backend",
    success: true
  })
})

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions={
  origin: 'http//localhost:5173',
  Credential:true 
}
app.use(cors(corsOptions))
let port=process.env.port||8000



// api's

app.use("/api/v1/user",userRoute)
app.use("/api/v1/company",companyRoute)
app.use("/api/v1/job",jobRoute)
app.use("/api/v1/application",applicationRoute)




app.listen(port,()=>{
  connectDB(),
  console.log(`listening port ${port}`)
})
