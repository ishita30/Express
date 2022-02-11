//jshint esversion : 6
const express=require("express");
const bodyParser= require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res)
{
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res)//to handle post requests
{
  var num1=Number(req.body.num1);//it gets passed on as text so we convert to numbers
  var num2=Number(req.body.num2);
  var result=num1 + num2;

  res.send("The sum is " + result);
});
app.get("/bmicalculator", function(req,res)
{
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function(req,res)
{
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);
  var bmi=weight/(height*height);

  res.send("Your BMI is " + bmi);
})
function callBack()
{
  console.log("Server is running");
}
app.listen(3000,callBack);
