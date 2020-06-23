//Load express module with `require` directive
var express = require('express')
var Request = require("request")
var app = express()

var inventoryServiceRes;
var paymentServiceRes;
var dispatchServiceRes;


var urlInventory = process.env.Inventory || "http://localhost:8081" 
var urlPayment = process.env.Payment || "http://localhost:8082"
var urlDispatch = process.env.Dispatch || "http://localhost:8083"

 
//Define request response in root URL (/)
app.get('/*', function (req, res) {
   
  //Calling Inventory Service 
   Request.get(urlInventory, (error, response, body) => {
    if(error) {
      inventoryServiceRes='error';
    }
    else{
    inventoryServiceRes=body;}
})


//Calling Payment Service 
Request.get(urlPayment, (error, response, body) => {
  if(error) {
    paymentServiceRes='error';
  }
  else{
    paymentServiceRes=body;}
})

//Calling Dispatch Service 
Request.get(urlDispatch, (error, response, body) => {
  if(error) {
    dispatchServiceRes='error';
  }
  else{
  dispatchServiceRes=body;}
})

  res.send("Order Recieved. Processing started...\n" + inventoryServiceRes + "\n" + paymentServiceRes + "\n" + dispatchServiceRes)
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('Order service listening on port 8080!')
})
