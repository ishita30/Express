//jshint esversion : 6
const express=require("express");
const app=express();

app.get("/",function(req,res)
{
  res.sendFile(__dirname + "/index.html");
});
function callBack()
{
  console.log("Server is running");
}
app.listen(3000,callBack);
