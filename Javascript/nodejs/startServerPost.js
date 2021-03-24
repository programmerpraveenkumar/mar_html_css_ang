var express =require("express");
var app = express();
app.get("/test2",function(req,res){
    console.log("sample response");
    res.end("sample response from express js for get request");
})
app.post("/test",function(req,res){
    console.log("sample response");
    res.end("sample response from express js for post request");
})
app.listen(8080,function(res){
    console.log("server started in 8080..")
});

// var http = require('http');//including the http module in JS.

// http.createServer(function(req,res){
//    // console.log(req.);
//     res.end("sample ");
// }).listen(8080);