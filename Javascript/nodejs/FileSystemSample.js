var fs = require("fs");
// fs.readFile("test.html","UTF8",function(err,data){
//     console.log(data);
// })
fs.readFile("test.html","UTF8",(err,data)=>{
    console.log(data);
})
// fs.open("test.html",function(res,ress){
//     console.log(ress);
// })