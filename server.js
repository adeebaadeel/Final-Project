require("dotenv").config;
const express=require("express");
const mongoose= require('mongoose');
const app=express();
app.use(express.json);
app.use(express.urlencoded());


app.get("/api",(req,res)=>{
    res.send("Full stack Online Shopping ");
})
app.use("/api/auth",authRoute);
const authRoute=require("../routes/auth");

app.get("/",(req,res)=>{
    res.send("Online Shopping ");
})


const DB='mongodb+srv://admin:admin@cluster0.7t7i1d0.mongodb.net/OnlineShopping?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>
{

  useNewUrlParse:true;
  console.log("Connection build");
}).catch((err)=>console.log("no connect"));
