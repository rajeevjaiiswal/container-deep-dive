//Load express module with `require` directive
var express = require('express')
var Request = require("request")
var app = express()


//Define request response in root URL (/)
app.get('/*', function (req, res) {
  res.send("Dispatch process started...done")
})

//Launch listening server on port 8083
app.listen(8083, function () {
  console.log('Dispatch service listening on port 8080!')
})
