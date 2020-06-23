//Load express module with `require` directive
var express = require('express')
var Request = require("request")
var app = express()


//Define request response in root URL (/)
app.get('/*', function (req, res) {
  res.send("Payment update started...done")
})

//Launch listening server on port 8082
app.listen(8082, function () {
  console.log('Payment service listening on port 8080!')
})
