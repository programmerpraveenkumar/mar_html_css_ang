var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/fitasample";
//one data insert
function oneInsert(){
  MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
    var dbo =  db.db("fitasample");
    //dbo.collection("user").findOne()
    var data = {
      "name":"mar-22-from node js ",
      "city":"chennai"
    }
    dbo.collection("user").insertOne(data);
      db.close();
   });
}
function insertMany(){
  MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
    var dbo =  db.db("fitasample");
    //dbo.collection("user").findOne()
    var data = [{
      "name":"mar-22-bashyam1 ",
      "city":"chennai"
    },{
      "name":"mar-22-kannan1",
      "city":"chennai",
      "address":"sample address with another"
    }]
    dbo.collection("user").insertMany(data);
      db.close();
   });
}
insertMany();
//oneInsert()