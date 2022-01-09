//jshint esversion:6
const express = require("express");

const app = express();
app.get("/",function(request,response)
{
  response.send("<h1>Hello World</h1>"); // we can send h1
});

app.get("/contact", function(req,res)
{
  res.send("Contact me at : ishitasinghal30@gmail.com");
});
app.get("/about",function(req,res)
{
  res.send("I am passionate learner. Exploring the field of Web dev.");
});
app.get("/hobbies",function(req,res)
{
  res.send("<ul><li>Code</li><li>Sing</li></ul>");
});
function callback()
{
  console.log("server started");
}
app.listen(3000,callback);
