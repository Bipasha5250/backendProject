const express=require("express");
const app=express();
const mongoose =require("mongoose");
app.get("/",(req,res)=>{
res.send("hi am root");
});
app.listen(8080,()=>{
    console.log("server working");
})