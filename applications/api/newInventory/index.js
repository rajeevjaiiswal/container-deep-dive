//Load express module with `require` directive
var express = require('express')
var Request = require("request")
var app = express()


//Define request response in root URL (/)
app.get('/*', function (req, res) {
  res.send("New Inventory update started...done")
})

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('Inventory service listening on port 8081!')
})
