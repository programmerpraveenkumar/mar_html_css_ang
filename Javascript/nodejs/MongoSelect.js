var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/fitasample";
//one data insert
function findOne(){
  MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
    var dbo =  db.db("fitasample");
  //  var query =  {"_id":"605495583f4100cda3a99ce4"}
    //var query = {name:"dfgdfgdf"};
    var query= {};
      dbo.collection("user").findOne({"city":"tambram"},function(err,res){
          if(err)throw err;
          console.log(res);
          db.close();//to close the db connection..
       })
   });
}
function findManyData(){
  MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
    var dbo =  db.db("fitasample");
    //dbo.collection("user").findOne()
    //to get the all records from collections.
    // dbo.collection("user").find().toArray(function(err,res){
    //   if(err)throw err;
    //   console.log(res);
       //db.close();
    // });
    dbo.collection("user").find().sort({name:-1}).toArray(function(err,res){
      if(err)throw err;
      console.log(res);
     db.close();
    });
    
   });
}
//findOne();
findManyData();