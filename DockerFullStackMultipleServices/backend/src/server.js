import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();
const app = express();

const port = process.env.PORT || 6060;

mongoose.connect(process.env.MONGO_URI).then(()=>{
     console.log("Db connected")
}).catch((err)=>{
     console.log("Db Error : ",err.message)
});

app.use(cors())
app.get("/",(req,res)=>{
     res.status(200).json({
          success:true,
          message:process.env.MESSAGE
     })
})

app.listen(port,()=>{
     console.log(`server is running at port http://localhost:${port}`)
})