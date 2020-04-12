var express = require("express");
 
var app = express();
 
app.use(express.static('.'));
 
//make way for some custom css, js and images
app.use('.', express.static(__dirname + '/public'));
 
var server = app.listen(80, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});