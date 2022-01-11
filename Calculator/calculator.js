//jshint esversion : 6
const express=require("express");
const app=express();

app.get("/",function(req,res)
{
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res)//to handle post requests
{
  res.send("thanks for posting that");
})
function callBack()
{
  console.log("Server is running");
}
app.listen(3000,callBack);
